import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Radiance Serum",
    category: "Skincare",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Matte Lipstick",
    category: "Makeup",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Eye Palette",
    category: "Makeup",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Face Cream",
    category: "Skincare",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  // Add more products...
];

const categories = ["All", "Skincare", "Makeup", "Fragrances", "Tools"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-serif mb-4 md:mb-0">Shop All Products</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <Filter className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${
                    selectedCategory === category
                      ? "bg-pink-100 text-pink-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Price Range</h3>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Rs 0</span>
              <span className="text-sm text-gray-600">Rs 10000</span>
            </div>
          </div>
        </div>

        {/* Filters - Mobile */}
        {isFilterOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Filters</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg ${
                        selectedCategory === category
                          ? "bg-pink-100 text-pink-800"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;