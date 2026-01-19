import React from 'react';
import { Hammer, Tractor, BookOpen, Settings, Phone, MapPin } from 'lucide-react';

const PentalesWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">PENTALES LTD</h1>
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#services" className="hover:text-blue-600">Repairs</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Your Trusted Importer & Distributor</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From Agricultural products to Stationery and Power Tools, Pentales Ltd provides quality merchandise across Mauritius.
          </p>
          <div className="mt-10">
            <a href="#products" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold transition">
              Explore Our Catalog
            </a>
          </div>
        </div>
      </header>

      {/* Product Categories */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Business Divisions</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <CategoryCard 
            icon={<Tractor className="w-10 h-10 text-blue-600" />}
            title="Agriculture"
            desc="Importers of high-quality agricultural equipment and products for local farmers."
          />
          <CategoryCard 
            icon={<BookOpen className="w-10 h-10 text-blue-600" />}
            title="Stationery"
            desc="Supplying schools and offices with premium stationery and general merchandise."
          />
          <CategoryCard 
            icon={<Hammer className="w-10 h-10 text-blue-600" />}
            title="Power Tools & Tech"
            desc="Drilling machines, grinders, and men's lifestyle gadgets imported directly."
          />
        </div>
      </section>

      {/* Repair Services Section */}
      <section id="services" className="bg-gray-100 py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Professional Repair Services</h3>
            <p className="text-gray-600 mb-6">
              We don't just sell equipment; we maintain it. Our dedicated team in Sebastopol provides 
              repairs for wood cutters, hedge trimmers, and all types of power tools.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-semibold"><Settings className="w-5 h-5 text-blue-600"/> Genuine Spare Parts</li>
              <li className="flex items-center gap-2 font-semibold"><Settings className="w-5 h-5 text-blue-600"/> Expert Technicians</li>
              <li className="flex items-center gap-2 font-semibold"><Settings className="w-5 h-5 text-blue-600"/> Fast Turnaround</li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-blue-900 h-64 rounded-2xl flex items-center justify-center">
            <Hammer className="text-white w-32 h-32 opacity-20" />
            <span className="text-white text-2xl font-bold absolute">Service Center</span>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-bold mb-6">Pentales Ltd</h4>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5"/> Sebastopol Royal Road, Sebastopol, Mauritius</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5"/> Contact us for wholesale and retail inquiries</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="font-bold mb-4">Find us on Google Business</p>
            <p className="text-sm text-gray-500 italic">Visit our office for a live demonstration of our latest tools and agricultural products.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const CategoryCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border-b-4 border-blue-600">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default PentalesWebsite;
