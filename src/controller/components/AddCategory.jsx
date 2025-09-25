import React, { useState } from 'react';
import { Modal } from './modal';

export function AddCategoryModal({ isOpen, onClose, onAdd }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAdd(categoryName.trim());
      setCategoryName('');
      onClose();
    }
  };

  const handleDiscard = () => {
    setCategoryName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Add Category</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
            autoFocus
          />
          
          <div className="flex space-x-3">
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
