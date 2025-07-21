// @fileoverview Article section component for the Law Vriksh dashboard.
//
// This component renders a titled section containing a grid of ArticleCards.
// It allows users to add new cards dynamically via a modal form,
// supporting title, description, and image uploads.
// Cards are filtered by category using props and managed through React Context.

import { useState, useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import ArticleCard from '../cards/ArticleCard';

const Section = ({ title, cards }) => {
  const { addCard } = useContext(CardContext);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  const handleSubmit = () => {
    if (!newTitle || !imageBase64) return alert("Title and image are required");
    addCard({
      id: Date.now(),
      title: newTitle,
      description: newDesc,
      image: imageBase64,
      category: title
    });
    setNewTitle('');
    setNewDesc('');
    setImageBase64('');
    setShowModal(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  return (
    <section className="mt-8 pl-8 max-w-[813px] w-full">
      <div className="flex justify-start items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="bg-color-img mx-8 p-[2px] rounded-full">
          <div className="w-[139px] h-[25px] rounded-full bg-[#fff8ee]">
            <button
              onClick={() => setShowModal(true)}
              className="text-image-fill w-full h-full px-2 rounded-full font-poppins text-[16px] leading-none hover:brightness-90"
            >
              Add new card
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[13.5px] justify-items-center">
        {cards.map(card => (
          <ArticleCard key={card.id} image={card.image} title={card.title} />
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white/10 backdrop-blur-sm pointer-events-none">
          <div className="bg-white p-6 rounded-xl w-[320px] shadow-xl pointer-events-auto">
            <h3 className="text-lg font-semibold mb-4">Add New Card</h3>

            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-2 mb-3 border rounded"
            />

            <textarea
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Description"
              className="w-full p-2 mb-3 border rounded"
            />

            <div className="mb-4">
              <label
                htmlFor="imageUpload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-yellow-600 hover:bg-yellow-50 transition"
              >
                {imageBase64 ? (
                  <img src={imageBase64} alt="Preview" className="h-full object-contain" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4-4m0 0l4 4m-4-4v12M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
                    </svg>
                    <p className="text-sm">Click to upload image</p>
                  </div>
                )}
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleSubmit}
                className="bg-yellow-600 text-white px-4 py-1 rounded"
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
