import React, { useState } from "react";
import Card from "./components/card";

const foodData = [
  { id: 1, name: "Gourmet Burger", price: 850, img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Angus beef with truffle mayo" },
  { id: 2, name: "Pepperoni Pizza", price: 1800, img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Slow-risen sourdough crust" },
  { id: 3, name: "Sindhi Biryani", price: 550, img: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Aromatic basmati with spices" },
  { id: 4, name: "Alfredo Pasta", price: 1100, img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Creamy parmesan white sauce" },
  { id: 5, name: "Ribeye Steak", price: 3500, img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Prime cut with garlic butter" },
  { id: 6, name: "Club Sandwich", price: 650, img: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Triple layered classic delight" },
  { id: 7, name: "Masala Fries", price: 350, img: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Crispy skin-on potato wedges" },
  { id: 8, name: "Gelato Scoop", price: 400, img: "https://images.pexels.com/photos/1352243/pexels-photo-1352243.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Authentic Italian vanilla bean" },
];

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [lastAdded, setLastAdded] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    setLastAdded(product.name);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const filteredFood = foodData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 overflow-x-hidden scroll-smooth">
      
      {/* 1. NOTIFICATION POPUP */}
      <div className={`fixed top-24 right-4 md:top-28 md:right-8 z-[100] transition-all duration-500 transform ${showPopup ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#111] border border-orange-500/30 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <p className="text-[10px] font-black uppercase tracking-widest">{lastAdded} Added!</p>
        </div>
      </div>

      {/* 2. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/5 h-24 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto h-full flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter">FLAVOR<span className="text-orange-500">.</span></h1>
          
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-full outline-none w-28 md:w-44 text-[10px] uppercase font-bold"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-white text-black px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase hover:bg-orange-500 hover:text-white transition-all"
            >
              BAG ({cart.length})
            </button>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260" className="w-full h-full object-cover opacity-20" alt="hero"/>
        </div>
        <h1 className="relative z-10 text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-[0.8]">
          PURE <br/> <span className="text-white/20 italic font-light">DELIGHT.</span>
        </h1>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-24 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em]">The Story</h4>
            <h2 className="text-5xl font-black uppercase leading-none">Crafting Culinary Masterpieces.</h2>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Organic ingredients meet international expertise.</p>
          </div>
          <div className="h-[400px] rounded-[3rem] overflow-hidden border border-white/5">
            <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale" alt="chef"/>
          </div>
        </div>
      </section>

      {/* 5. MENU SECTION */}
      <section id="menu" className="py-24 px-10 max-w-[1440px] mx-auto">
        <h3 className="text-center text-3xl font-black mb-20 tracking-widest uppercase underline decoration-orange-500 decoration-4 underline-offset-8">Menu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredFood.map(item => (
            <Card key={item.id} food={item} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contact" className="py-32 border-t border-white/5 bg-[#080808] text-center px-6">
        <h2 className="text-5xl font-black tracking-tighter uppercase mb-10">Work with us.</h2>
        <div className="flex justify-center gap-10 text-[10px] font-black uppercase text-gray-600 tracking-[0.3em]">
           <span>Instagram</span><span>WhatsApp</span><span>Email</span>
        </div>
      </footer>

      {/* 7. CART SIDEBAR */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full md:max-w-md bg-[#0a0a0a] h-full p-12 border-l border-white/5 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-black uppercase italic">Bag</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 text-2xl">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                  <span className="text-orange-500 font-black">Rs. {item.price}</span>
                </div>
              ))}
            </div>
            <div className="pt-10 border-t border-white/5 mt-auto">
              <p className="flex justify-between font-black uppercase mb-6 text-sm">Total: <span>Rs. {cart.reduce((a, b) => a + b.price, 0)}</span></p>
              <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">Checkout Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;