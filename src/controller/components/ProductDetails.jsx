import React, { useState } from 'react';
import { ChevronRight, Heart, Check, Minus, Plus } from 'lucide-react';

export function ProductDetails({ onBack }) {
  const [selectedRam, setSelectedRam] = useState('4 GB');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const ramOptions = ['4 GB', '8 GB', '16 GB'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-700 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2 flex-1 max-w-md">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search any things"
                  className="w-full px-4 py-2.5 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-lg font-medium transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-200">
              <Heart className="w-5 h-5" />
              <span>Sign in</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-orange-400 transition-colors duration-200">
              <span>Cart</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">0</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-600 mb-8">
          <button onClick={onBack} className="hover:text-orange-600">Home</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">Product details</span>
          <ChevronRight className="w-4 h-4" />
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <img
                src={images[selectedImage]}
                alt="HP AMD Ryzen 3"
                className="w-full h-96 object-contain"
              />
            </div>
            
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-20 bg-white rounded-lg p-2 shadow-sm border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-orange-500' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">HP AMD Ryzen 3</h1>
              <p className="text-3xl font-bold text-gray-900 mb-4">$529.99</p>
              
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-gray-600">Availability:</span>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-medium">In stock</span>
                </div>
              </div>
              
              <p className="text-gray-600">Hurry up! only 34 product left in stock!</p>
            </div>

            <hr className="border-gray-200" />

            {/* RAM Selection */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-700 font-medium">Ram:</span>
                <div className="flex space-x-2">
                  {ramOptions.map((ram) => (
                    <button
                      key={ram}
                      onClick={() => setSelectedRam(ram)}
                      className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${
                        selectedRam === ram
                          ? 'border-gray-800 bg-gray-800 text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {ram}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Quantity :</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-6">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-medium transition-colors duration-200">
                Edit product
              </button>
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-medium transition-colors duration-200">
                Buy it now
              </button>
              <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
