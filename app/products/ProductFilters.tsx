'use client';

import { useState } from 'react';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  priceRange,
  onPriceChange
}: ProductFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    onPriceChange(newRange);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="text-blue-600 hover:text-blue-700"
        >
          <i className={`ri-${isFiltersOpen ? 'close' : 'filter'}-line w-5 h-5 flex items-center justify-center`}></i>
        </button>
      </div>

      <div className={`space-y-6 ${isFiltersOpen ? 'block' : 'hidden lg:block'}`}>
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Sort By</h4>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
          >
            <option value="name">Name A-Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Price Range</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Min:</span>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Max:</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="500"
              />
            </div>
            <div className="text-sm text-gray-600">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Features</h4>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-700">Free Shipping</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-700">On Sale</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-700">In Stock</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}