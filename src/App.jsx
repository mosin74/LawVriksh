import ProfileSection from './components/home/ProfileSection';
import Section from './components/home/ArticleSection';
import { useContext } from 'react';
import Header from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import { CardContext } from './context/CardContext';
import Tabs from './components/common/Tabs';

const App = () => {
  const { cards } = useContext(CardContext);

  const filterByCategory = (cards, category) =>
    cards.filter(card =>
      Array.isArray(card.category)
        ? card.category.includes(category)
        : card.category === category
    );

  return (
    <div className="bg-[#fff8ee] min-h-screen flex justify-center items-start">
      <div
        className="max-w-[1469px] min-h-[1144px]"
        style={{ boxSizing: 'border-box' }}
      >
        <Header />
        <main className="flex flex-col lg:flex-row">
          <div className="flex-1 px-3">
            <ProfileSection />
            <Tabs />
            <Section title="Corporate Law" cards={filterByCategory(cards, "Corporate Law")} />
            <Section title="Constitutional Law" cards={filterByCategory(cards, "Constitutional Law")} />
          </div>
          <div className="w-full lg:w-1/3 p-6 custom-sidebar">
            <div className="lg:sticky top-6">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
