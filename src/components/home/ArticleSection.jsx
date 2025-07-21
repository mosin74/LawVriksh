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
    addCard({
      id: Date.now(),
      title: newTitle,
      description: newDesc,
      image: imageBase64,
      category: title
    });
    setNewTitle('');
    setNewDesc('');
    setShowModal(false);
    setImageBase64('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <section className="mt-8 pl-8 max-w-[813px] w-full">
      <div className="flex justify-start items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="bg-color-img mx-8 p-[2px] rounded-full">
          <div className="w-[139px] h-[25px] rounded-full bg-[#fff8ee]">
            <button
              onClick={() => setShowModal(true)}
              className="text-image-fill w-full h-full px-2 rounded-full font-poppins text-[16px] leading-none hover:brightness-70"
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[300px]">
            <h3 className="text-lg font-semibold mb-4">Add New Card</h3>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button
              onClick={handleSubmit}
              className="bg-yellow-600 text-white py-1 px-4 rounded mr-2"
            >
              Add
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gray-300 text-black py-1 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
