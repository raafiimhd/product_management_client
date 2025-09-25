import React, { useState } from 'react';
import { ChevronRight, Heart, X, Star } from 'lucide-react';

export function Wishlist({ onBack }) {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'HP AMD Ryzen 3',
      price: '$529.99',
      image:
        'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 0,
    },
    {
      id: 2,
      name: 'HP AMD Ryzen 3',
      price: '$529.99',
      image:
        'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 0,
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

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

      {/* Wishlist Sidebar */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-40 transform transition-transform duration-300">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                <Heart className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-lg font-semibold text-gray-800">Items</span>
            </div>
            <button onClick={onBack}>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto h-full pb-32">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200 relative">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              <div className="flex space-x-3">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 truncate mb-1">{item.name}</h3>
                  <p className="text-lg font-bold text-gray-900 mb-2">{item.price}</p>
                  {renderStars(item.rating)}
                </div>
              </div>
            </div>
          ))}

          {wishlistItems.length === 0 && (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your wishlist is empty</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content with Overlay */}
      <div className="max-w-7xl mx-auto px-6 py-8 opacity-50">
        <nav className="flex items-center space-x-2 text-gray-600 mb-8">
          <button onClick={onBack} className="hover:text-orange-600">Home</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800">Product details</span>
          <ChevronRight className="w-4 h-4" />
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <img
                src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="HP AMD Ryzen 3"
                className="w-full h-96 object-contain"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-24 h-20 bg-white rounded-lg p-2 shadow-sm border-2 border-transparent">
                <img
                  src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Product 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-24 h-20 bg-white rounded-lg p-2 shadow-sm border-2 border-transparent">
                <img
                  src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Product 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">HP AMD Ryzen 3</h1>
              <p className="text-3xl font-bold text-gray-900 mb-4">$529.99</p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Ram:</span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-800 bg-gray-800 text-white rounded-lg">
                  4 GB
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg">
                  8 GB
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Quantity :</span>
              <div className="flex items-center space-x-3">
                <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                  -
                </button>
                <span className="w-12 text-center font-medium">1</span>
                <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                  +
                </button>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-medium">
                Edit product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
