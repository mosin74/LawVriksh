import { motion } from 'framer-motion';

const Card = ({ card }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 w-80 bg-white border rounded-lg shadow-sm snap-center
                 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
    >
      <img src={card.image} alt={card.title} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
        {/* The design doesn't show a description, but you can add it here if needed */}
        {/* <p className="text-gray-600 text-sm">{card.description}</p> */}
      </div>
    </motion.div>
  );
};

export default Card;