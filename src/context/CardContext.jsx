import { createContext, useState, useEffect } from 'react';
import { initialCards } from '../data/initialCards';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [extraCards, setExtraCards] = useState(() => {
    const stored = localStorage.getItem('extraCards');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('extraCards', JSON.stringify(extraCards));
  }, [extraCards]);

  const addCard = (newCard) => {
    setExtraCards((prev) => [...prev, newCard]);
  };

  const allCards = [...initialCards, ...extraCards];

  return (
    <CardContext.Provider value={{ cards: allCards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};
