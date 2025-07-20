import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Tabs from './components/Tabs';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import { CardContext } from './context/CardContext';
import { useContext } from 'react';

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
        className="w-full max-w-[1469px] min-h-[1144px] px-6"
        style={{ boxSizing: 'border-box' }}
      >
        <Header />

        <main className="flex flex-col lg:flex-row">
          {/* Main content on the LEFT */}
          <div className="flex-1 px-3">
            <ProfileSection />
            <Tabs />
            <Section title="Corporate Law" cards={filterByCategory(cards, "Corporate Law")} />
            <Section title="Constitutional Law" cards={filterByCategory(cards, "Constitutional Law")} />
          </div>

          {/* Sidebar on the RIGHT and sticky */}
          <div className="w-full lg:w-1/3 p-6">
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
