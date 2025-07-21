// @fileoverview ArticleCard component for the Law Vriksh dashboard.
//
// This component displays a single article card with an image, title,
// and meta information such as time and estimated reading duration.
// Used within categorized article sections for visual presentation.

const ArticleCard = ({ image, title }) => {
  return (
    <div className=" max-w-[256px] h-[250px] bg-transparant overflow-hidden">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="py-3">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-2"><span>09:00 AM</span> <span className='px-2'>12min read</span> </p>
      </div>
    </div>
  );
};

export default ArticleCard;
