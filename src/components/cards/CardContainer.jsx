// @fileoverview Container component for displaying and managing article cards in the Law Vriksh dashboard.
//
// This component handles:
// - Tab-based filtering (Recent, Trending, About)
// - Persistent card state using localStorage
// - Dynamic card creation via a modal (AddCardModal)
// - Animated rendering using Framer Motion (AnimatePresence)
// - Responsive, horizontally scrollable card layout

import { useState, useEffect } from 'react';
import Card from './Card';
import AddCardModal from './AddCardModal';
import { initialCards } from '../../data/initialCards';
import { AnimatePresence } from 'framer-motion';

const CardContainer = () => {
  const [activeTab, setActiveTab] = useState('Recent');
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const storedCards = JSON.parse(localStorage.getItem('cards'));
      if (storedCards && Array.isArray(storedCards) && storedCards.length > 0) {
        setCards(storedCards);
      } else {
        setCards(initialCards);
      }
    } catch (error) {
        console.error("Failed to parse cards from localStorage", error);
        setCards(initialCards);
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
        localStorage.setItem('cards', JSON.stringify(cards));
    }
  }, [cards]);

  const handleAddCard = (newCardData) => {
    const newCard = {
      id: Date.now(),
      ...newCardData,
      category: activeTab,
      image: `https://placehold.co/600x400/EEE/31343C?text=${newCardData.title.replace(/\s/g, '+')}`
    };
    setCards(prevCards => [newCard, ...prevCards]);
  };

  const filteredCards = cards.filter(card => card.category === activeTab);
  const tabs = ['Recent', 'Trending', 'About'];

  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-200 mb-6 pb-2">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-base md:text-lg font-medium transition-colors duration-300 ${
                activeTab === tab
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm"
        >
          + Add New
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth">
        {filteredCards.length > 0 ? (
          <AnimatePresence>
            {filteredCards.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </AnimatePresence>
        ) : (
          <div className="w-full text-center py-10">
            <p className="text-gray-500">No articles found in the "{activeTab}" category.</p>
          </div>
        )}
      </div>

      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
};

export default CardContainer;