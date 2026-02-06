import { useState, useEffect } from 'react';

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    originalPrice?: string;
    features: string[];
    badge?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
        price: "$1,199",
        originalPrice: "$1,299",
        features: ["A17 Pro Chip", "48MP Camera", "Titanium Design", "Action Button"],
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
        price: "$1,299",
        features: ["S Pen Included", "200MP Camera", "AI Features", "5000mAh Battery"],
        badge: "New"
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        price: "$999",
        originalPrice: "$1,099",
        features: ["Magic Eraser", "Night Sight", "Pure Android", "7 Years Updates"],
        badge: "AI Powered"
    },
    {
        id: 4,
        name: "OnePlus 12",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        price: "$799",
        features: ["Snapdragon 8 Gen 3", "100W Charging", "Hasselblad Camera", "120Hz Display"]
    },
    {
        id: 5,
        name: "iPhone 15",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
        price: "$799",
        originalPrice: "$899",
        features: ["A16 Bionic", "USB-C", "Dynamic Island", "48MP Main Camera"],
        badge: "Popular"
    },
    {
        id: 6,
        name: "Xiaomi 14 Ultra",
        image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop",
        price: "$1,499",
        features: ["Leica Cameras", "Snapdragon 8 Gen 3", "Wireless Charging", "IP68 Rating"]
    }
];

export default function PopularProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Responsive items per view
    const getItemsPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1; // Mobile
            if (window.innerWidth < 1024) return 2; // Tablet
            return 3; // Desktop
        }
        return 3;
    };

    const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
    const maxIndex = Math.max(0, products.length - itemsPerView);

    // Update items per view on resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(getItemsPerView());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 300);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
        setTimeout(() => setIsAnimating(false), 300);
    };

    const goToSlide = (index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Popular on PhoneTech
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the most loved smartphones by our customers. Premium quality, cutting-edge technology.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons - Show on all screen sizes but smaller on mobile */}
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 disabled:opacity-50 -ml-2 sm:-ml-6"
                    >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-200 disabled:opacity-50 -mr-2 sm:-mr-6"
                    >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Products Grid */}
                    <div className="overflow-hidden mx-4 sm:mx-0">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={`flex-shrink-0 px-2 sm:px-3 ${itemsPerView === 1 ? 'w-full' :
                                        itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                                        }`}
                                >
                                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                        {/* Product Image */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            {product.badge && (
                                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    {product.badge}
                                                </div>
                                            )}
                                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

                                            {/* Price */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                                                )}
                                            </div>

                                            {/* Features */}
                                            <div className="mb-6">
                                                <ul className="space-y-1">
                                                    {product.features.slice(0, 3).map((feature, index) => (
                                                        <li key={index} className="text-sm text-gray-600 flex items-center">
                                                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                                    Buy Now
                                                </button>
                                                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                    ? 'bg-blue-600 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}