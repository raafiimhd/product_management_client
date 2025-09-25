import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Modal } from './modal';

export function AddSubCategoryModal({ isOpen, onClose, onAdd, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategoryName, setSubCategoryName] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory && subCategoryName.trim()) {
      onAdd(selectedCategory, subCategoryName.trim());
      setSelectedCategory('');
      setSubCategoryName('');
      onClose();
    }
  };

  const handleDiscard = () => {
    setSelectedCategory('');
    setSubCategoryName('');
    onClose();
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Add Sub Category
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-left flex items-center justify-between"
            >
              <span
                className={selectedCategory ? 'text-gray-900' : 'text-gray-500'}
              >
                {selectedCategory || 'Select category'}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategorySelect(category)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Subcategory input */}
          <input
            type="text"
            placeholder="Enter sub category name"
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Buttons */}
          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
            >
              ADD
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              DISCARD
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
