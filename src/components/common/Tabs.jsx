const Tabs = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300">
      <div className="flex space-x-6  px-10 mt-4 text-sm">
        {['Recent', 'Trending', 'About'].map((tab, idx) => (
          <button
            key={idx}
            className="relative pb-2 text-gray-700 font-medium group"
          >
            {tab}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-button-bg scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </button>
        ))}
      </div>
      <div className="bg-color-img w-[81px] h-[28px] p-[2px] rounded-full ">
        <div className="rounded-full bg-[#fff8ee]">
          <button className="text-image-fill w-full h-full rounded-full font-poppins text-[16px] leading-none brightness-70 hover:brightness-50">Top <span className=" pl-2 text-[8px] ">▼</span> </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
