
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
                Discover Your Natural Beauty
              </h1>
              <p className="text-lg text-white mb-8">
                Premium cosmetics for the modern woman. Enhance your natural beauty with our curated collection.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Skincare",
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Makeup",
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Fragrances",
                image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group relative h-96 overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-serif text-white mb-2">{category.title}</h3>
                  <span className="text-white flex items-center">
                    Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Radiance Serum",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Matte Lipstick",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Eye Palette",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Face Cream",
                price: 34.99,
                image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((product, index) => (
              <Link
                key={index}
                to={`/products/${index + 1}`}
                className="group"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to get special offers, free giveaways, and beauty tips.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-6 py-2 bg-pink-600 text-white rounded-r hover:bg-pink-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;