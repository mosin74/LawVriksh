import { useContext, useState } from 'react';
import profilePhoto from '../assets/profile.png';
import AddActivityModal from './AddActivityModal';
import { ActivityContext } from '../context/ActivityContext';

const Sidebar = () => {
  const { activities, addActivity } = useContext(ActivityContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside className="w-full max-w-xs bg-[#fff8ee] p-6">
      {/* Profile Info */}
      <div className="relative w-fit">
        <img
          src={profilePhoto}
          alt="Robert Fox"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-button-bg text-white text-xs font-bold rounded-full px-1.5 py-0.5 transform translate-x-1 translate-y-1">
          ✔
        </div>
      </div>

      <h2 className="text-[25px] font-sans text-black mt-4">Robert Fox</h2>
      <p className="text-sm mt-1" style={{ color: '#544629' }}>
        621 Followers
      </p>
      <p className="text-xs mt-3" style={{ color: '#544629' }}>
        His Bio | Author | Writer | Poet | Entrepreneur | Developer
      </p>

      <button className="mt-4 px-6 py-2 text-black text-sm font-semibold rounded-full shadow transition duration-200 bg-button-bg hover:bg-button-bg-hover">
        Follow
      </button>

      {/* Activities */}
      <div className="mt-8">
        <div className="h-[35px] flex items-center justify-between mb-2 border-b-2 border-gray-300">
          <h3 className="text-md font-semibold text-black">Recent Activities</h3>
          <div className="bg-color-img w-[57px] p-[2px] rounded-full">
            <div className="rounded-full bg-[#fff8ee] h-[22px]">
              <button
                className="text-image-fill w-full h-full rounded-full font-poppins text-[16px] leading-none brightness-70 hover:brightness-50"
                onClick={() => setIsModalOpen(true)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <ul className="mt-4 ml-2 space-y-6">
          {...activities.sort((a, b) => new Date(b.date) - new Date(a.date)).map((activity, idx) => (
            <li key={idx} className="relative pl-4">

              <p className="text-xs text-gray-600 mb-1 ">{activity.date}</p>
              <div className="relative pl-6">
                {/* Line from dot downward */}
                <div className="absolute top-0 left-[7px] h-full w-[2px] bg-color-img rounded-full z-0"></div>

                {/* Activity info (icon + label + link) */}
                <div className="relative z-10 ml-2">
                  <div className="flex items-center gap-1 text-sm text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 text-image-fill"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9" />
                    </svg>
                    Wrote an article
                  </div>

                  {activity.link ? (
                    <a
                      href={activity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-image-fill hover:underline text-sm block w-[240px] truncate"
                    >
                      {activity.title}
                    </a>
                  ) : (
                    <p className="text-image-fill text-sm block w-[240px] truncate">
                      {activity.title}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      <AddActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddActivity={addActivity}
      />
    </aside>
  );
};

export default Sidebar;
