// context/ActivityContext.js
import { createContext, useState, useEffect } from 'react';
import { initialActivities } from '../data/initialActivities';



export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  // Only store the *extra* activities in localStorage
  const [extraActivities, setExtraActivities] = useState(() => {
    const stored = localStorage.getItem('extraActivities');
    return stored ? JSON.parse(stored) : [];
  });

  // Save extra activities to localStorage
  useEffect(() => {
    localStorage.setItem('extraActivities', JSON.stringify(extraActivities));
  }, [extraActivities]);

  // Add new activity
  const addActivity = (activity) => {
    setExtraActivities((prev) => [...prev, activity]);
  };

  // Combine initial and extra activities, sort by date (newest first)
  const allActivities = [...initialActivities, ...extraActivities].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ActivityContext.Provider value={{ activities: allActivities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
