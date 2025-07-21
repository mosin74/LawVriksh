// @fileoverview Modal component for adding a new article card in the Law Vriksh dashboard.
//
// This component renders a modal with a form for entering the card title and description.
// It validates input, submits the data to a handler, and resets the form on close.
// Designed to integrate with card sections managed via React Context.

import { useState } from 'react';

const AddCardModal = ({ isOpen, onClose, onAddCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Title is required!');
      return;
    }
    onAddCard({ title, description });
    onClose(); 
    setTitle(''); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-2">Card Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded-lg">Add Card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;