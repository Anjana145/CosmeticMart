import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: parseInt(id || "1"),
    name: "Radiance Serum",
    price: 49.99,
    description: "A powerful serum that helps brighten and even out skin tone while providing deep hydration.",
    category: "Skincare",
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    details: [
      "Suitable for all skin types",
      "Dermatologically tested",
      "Cruelty-free",
      "Paraben-free"
    ],
    ingredients: "Water, Glycerin, Niacinamide, Hyaluronic Acid, Vitamin C"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 w-full">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="h-24 w-full object-cover rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-900">${product.price}</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Key Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Ingredients</h3>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <button className="flex items-center justify-center space-x-2 p-2 border rounded-lg hover:bg-gray-100">
                <Heart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            <button className="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-serif mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`h-4 w-4 ${
                          starIndex < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="font-medium mt-2">Great Product!</h3>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-600">
                This serum has made a noticeable difference in my skin's texture and brightness.
                Would definitely recommend!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;