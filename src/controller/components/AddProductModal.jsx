import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, Upload } from 'lucide-react';
import { Modal } from './modal';

export function AddProductModal({ isOpen, onClose, onAdd, categories }) {
  const [title, setTitle] = useState('HP AMD Ryzen 3');
  const [selectedCategory, setSelectedCategory] = useState('HP');
  const [description, setDescription] = useState(
    'The Ryzen 7 is a more high-end processor that compares to the Int...'
  );
  const [variants, setVariants] = useState([
    { ram: '4 GB', price: '529.99', quantity: 1 },
    { ram: '8 GB', price: '929.99', quantity: 3 },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([
    'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      title,
      category: selectedCategory,
      description,
      variants,
      images: uploadedImages,
    };
    onAdd(productData);
    onClose();
  };

  const handleDiscard = () => {
    setTitle('HP AMD Ryzen 3');
    setSelectedCategory('HP');
    setDescription('The Ryzen 7 is a more high-end processor that compares to the Int...');
    setVariants([
      { ram: '4 GB', price: '529.99', quantity: 1 },
      { ram: '8 GB', price: '929.99', quantity: 3 },
    ]);
    onClose();
  };

  const updateVariant = (index, field, value) => {
    setVariants((prev) =>
      prev.map((variant, i) =>
        i === index ? { ...variant, [field]: value } : variant
      )
    );
  };

  const addVariant = () => {
    setVariants((prev) => [...prev, { ram: '', price: '', quantity: 1 }]);
  };

  const adjustQuantity = (index, delta) => {
    setVariants((prev) =>
      prev.map((variant, i) =>
        i === index
          ? { ...variant, quantity: Math.max(1, variant.quantity + delta) }
          : variant
      )
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-600 w-20">Title :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Variants */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-gray-600 w-20">Variants :</label>
              <div className="flex-1"></div>
            </div>

            {variants.map((variant, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 mb-3 ml-24"
              >
                <span className="text-gray-600 w-12">Ram:</span>
                <input
                  type="text"
                  value={variant.ram}
                  onChange={(e) => updateVariant(index, 'ram', e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <span className="text-gray-600">Price:</span>
                <input
                  type="text"
                  value={variant.price}
                  onChange={(e) => updateVariant(index, 'price', e.target.value)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <span className="text-gray-600">QTY:</span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => adjustQuantity(index, -1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{variant.quantity}</span>
                  <button
                    type="button"
                    onClick={() => adjustQuantity(index, 1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="ml-24">
              <button
                type="button"
                onClick={addVariant}
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Add variants
              </button>
            </div>
          </div>

          {/* Sub category */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-600 w-20">Sub category :</label>
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-left flex items-center justify-between"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start space-x-4">
            <label className="text-gray-600 w-20 pt-3">Description :</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />
          </div>

          {/* Upload images */}
          <div className="flex items-start space-x-4">
            <label className="text-gray-600 w-20 pt-3">Upload image:</label>
            <div className="flex-1">
              <div className="flex space-x-3">
                {uploadedImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-20 h-16 border-2 border-blue-500 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-20 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              ADD
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              DISCARD
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
