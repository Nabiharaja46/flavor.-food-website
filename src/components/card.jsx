import React from 'react';

const Card = ({ food, addToCart }) => {
  return (
    <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 group hover:border-orange-500/40 transition-all duration-500 shadow-2xl">
      <div className="h-56 md:h-64 overflow-hidden relative bg-zinc-900">
        <img 
          src={food.img} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" 
          alt={food.name} 
        />
        <div className="absolute top-4 right-4 md:top-5 md:right-5 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black text-orange-400 border border-white/10">
          RS. {food.price}
        </div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-lg md:text-xl font-bold mb-2 uppercase tracking-tight text-white group-hover:text-orange-500 transition-colors">
          {food.name}
        </h3>
        <p className="text-gray-500 text-[9px] md:text-[10px] mb-6 md:mb-8 leading-relaxed uppercase tracking-widest h-8 overflow-hidden">
          {food.desc}
        </p>
        <button 
          onClick={() => addToCart(food)}
          className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase hover:bg-orange-500 hover:text-white transition-all active:scale-95 shadow-xl"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;