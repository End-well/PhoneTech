import { useState } from 'react';

interface Phone {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  colors: {
    name: string;
    value: string;
    image: string;
  }[];
  specs: {
    display: string;
    camera: string;
    processor: string;
    storage: string[];
  };
  badge?: string;
  availability: 'In Stock' | 'Pre-Order' | 'Coming Soon';
}

const phones: Phone[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "$1,199",
    originalPrice: "$1,299",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: [
      { name: "Natural Titanium", value: "#8E8E93", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop" },
      { name: "Blue Titanium", value: "#1E3A8A", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
      { name: "White Titanium", value: "#F8FAFC", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop" },
      { name: "Black Titanium", value: "#1F2937", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200&h=200&fit=crop" }
    ],
    specs: {
      display: "6.7-inch Super Retina XDR",
      camera: "48MP Triple Camera System",
      processor: "A17 Pro Chip",
      storage: ["256GB", "512GB", "1TB"]
    },
    badge: "Best Seller",
    availability: "In Stock"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
    colors: [
      { name: "Titanium Gray", value: "#6B7280", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=200&fit=crop" },
      { name: "Titanium Black", value: "#111827", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=200&h=200&fit=crop" },
      { name: "Titanium Violet", value: "#7C3AED", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop" }
    ],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      camera: "200MP Quad Camera System",
      processor: "Snapdragon 8 Gen 3",
      storage: ["256GB", "512GB", "1TB"]
    },
    badge: "S Pen Included",
    availability: "In Stock"
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: "$999",
    originalPrice: "$1,099",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    colors: [
      { name: "Obsidian", value: "#1F2937", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=200&fit=crop" },
      { name: "Porcelain", value: "#F8FAFC", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop" },
      { name: "Bay", value: "#3B82F6", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" }
    ],
    specs: {
      display: "6.7-inch LTPO OLED",
      camera: "50MP Triple Camera System",
      processor: "Google Tensor G3",
      storage: ["128GB", "256GB", "512GB"]
    },
    badge: "AI Powered",
    availability: "In Stock"
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: "$799",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    colors: [
      { name: "Silky Black", value: "#1F2937", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=200&h=200&fit=crop" },
      { name: "Flowy Emerald", value: "#059669", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
      { name: "Glacial White", value: "#F8FAFC", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop" }
    ],
    specs: {
      display: "6.82-inch LTPO AMOLED",
      camera: "50MP Hasselblad Triple Camera",
      processor: "Snapdragon 8 Gen 3",
      storage: ["256GB", "512GB"]
    },
    badge: "Fast Charging",
    availability: "In Stock"
  },
  {
    id: 5,
    name: "iPhone 15",
    brand: "Apple",
    price: "$799",
    originalPrice: "$899",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
    colors: [
      { name: "Pink", value: "#EC4899", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=200&h=200&fit=crop" },
      { name: "Yellow", value: "#F59E0B", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop" },
      { name: "Green", value: "#10B981", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" },
      { name: "Blue", value: "#3B82F6", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" }
    ],
    specs: {
      display: "6.1-inch Super Retina XDR",
      camera: "48MP Dual Camera System",
      processor: "A16 Bionic Chip",
      storage: ["128GB", "256GB", "512GB"]
    },
    badge: "Popular",
    availability: "In Stock"
  },
  {
    id: 6,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=300&h=300&fit=crop",
    colors: [
      { name: "Black", value: "#1F2937", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=200&h=200&fit=crop" },
      { name: "White", value: "#F8FAFC", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=200&h=200&fit=crop" }
    ],
    specs: {
      display: "6.73-inch LTPO AMOLED",
      camera: "50MP Leica Quad Camera",
      processor: "Snapdragon 8 Gen 3",
      storage: ["512GB", "1TB"]
    },
    badge: "Leica Camera",
    availability: "Pre-Order"
  }
];

export default function PhoneList() {
  const [hoveredPhone, setHoveredPhone] = useState<Phone | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);

  const handleMouseEnter = (phone: Phone) => {
    setHoveredPhone(phone);
    setSelectedColor(0);
  };

  const handleMouseLeave = () => {
    setHoveredPhone(null);
    setSelectedColor(0);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-red-100 text-red-800';
      case 'S Pen Included': return 'bg-purple-100 text-purple-800';
      case 'AI Powered': return 'bg-green-100 text-green-800';
      case 'Fast Charging': return 'bg-orange-100 text-orange-800';
      case 'Popular': return 'bg-blue-100 text-blue-800';
      case 'Leica Camera': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock': return 'text-green-600';
      case 'Pre-Order': return 'text-orange-600';
      case 'Coming Soon': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            List of Phones at our Disposal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of the latest smartphones from top brands.
            Hover over any phone to see detailed images and available colors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Phone List */}
          <div className="space-y-4">
            {phones.map((phone) => (
              <div
                key={phone.id}
                onMouseEnter={() => handleMouseEnter(phone)}
                onMouseLeave={handleMouseLeave}
                className={`bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${hoveredPhone?.id === phone.id
                    ? 'border-blue-500 shadow-lg transform -translate-y-1'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{phone.name}</h3>
                      {phone.badge && (
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(phone.badge)}`}>
                          {phone.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 font-medium">{phone.brand}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">{phone.price}</span>
                      {phone.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{phone.originalPrice}</span>
                      )}
                    </div>
                    <p className={`text-sm font-medium ${getAvailabilityColor(phone.availability)}`}>
                      {phone.availability}
                    </p>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Display:</span>
                    <p className="font-medium text-gray-900 text-sm">{phone.specs.display}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Camera:</span>
                    <p className="font-medium text-gray-900 text-sm">{phone.specs.camera}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Processor:</span>
                    <p className="font-medium text-gray-900 text-sm">{phone.specs.processor}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Storage:</span>
                    <p className="font-medium text-gray-900 text-sm">{phone.specs.storage.join(', ')}</p>
                  </div>
                </div>

                {/* Color Dots */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Colors:</span>
                  <div className="flex gap-2">
                    {phone.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hover Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 min-h-[600px] flex items-center justify-center">
              {hoveredPhone ? (
                <div className="text-center space-y-6 w-full">
                  {/* Phone Image */}
                  <div className="relative mx-auto w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <img
                      src={hoveredPhone.colors[selectedColor].image}
                      alt={hoveredPhone.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Phone Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{hoveredPhone.name}</h3>
                    <p className="text-gray-600 mb-4">{hoveredPhone.brand}</p>
                    <div className="text-3xl font-bold text-blue-600 mb-6">{hoveredPhone.price}</div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Colors</h4>
                    <div className="flex justify-center gap-3 mb-4">
                      {hoveredPhone.colors.map((color, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedColor(index)}
                          className={`w-12 h-12 rounded-full border-4 transition-all duration-200 ${index === selectedColor
                              ? 'border-blue-600 scale-110'
                              : 'border-gray-300 hover:border-gray-400'
                            }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        ></button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {hoveredPhone.colors[selectedColor].name}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Details
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Hover over a phone to see details</p>
                  <p className="text-sm">View images, colors, and specifications</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{phones.length}+</div>
              <div className="text-gray-600 font-medium">Phone Models</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Top Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Color Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}