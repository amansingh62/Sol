import React from 'react';

interface Button2Props {
  onClick?: () => void;
  className?: string;
}

const Button2: React.FC<Button2Props> = ({ onClick, className }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-[#000] backdrop-blur-md lg:font-semibold isolation-auto relative z-10 px-4 py-2 overflow-hidden border-2 border-gray-50 rounded-full group ${className || ''}`}
    >
      <span className="relative z-10 font-extralight text-white group-hover:text-black transition-colors duration-300">
        Start Echoing
      </span>

      {/* Background animation element */}
      <span className="absolute inset-0 -z-10 w-full scale-x-0 bg-gradient-to-r from-[#B671FF] via-[#C577EE] to-[#E282CA] origin-left transform transition-transform duration-700 group-hover:scale-x-100 group-hover:origin-right rounded-full"></span>

      <svg
        className="w-8 h-8 justify-end group-hover:rotate-90 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-black group-hover:text-black p-2 rotate-45 relative z-10"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-current"
        />
      </svg>
    </button>
  );
};

export default Button2;