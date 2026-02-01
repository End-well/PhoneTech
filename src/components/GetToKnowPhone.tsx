import { useState, useEffect } from 'react';

interface Phone {
    id: number;
    name: string;
    image: string;
    colors: {
        name: string;
        value: string;
        image: string;
    }[];
    features: {
        category: string;
        items: {
            name: string;
            description: string;
            icon: string;
        }[];
    }[];
    specs: {
        display: string;
        processor: string;
        camera: string;
        battery: string;
        storage: string;
        os: string;
    };
    price: string;
    description: string;
}

const phones: Phone[] = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
        colors: [
            { name: "Natural Titanium", value: "#8E8E93", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop" },
            { name: "Blue Titanium", value: "#1E3A8A", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" },
            { name: "White Titanium", value: "#F8FAFC", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop" },
            { name: "Black Titanium", value: "#1F2937", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop" }
        ],
        features: [
            {
                category: "Camera System",
                items: [
                    { name: "48MP Main Camera", description: "Capture stunning photos with incredible detail and vibrant colors", icon: "📸" },
                    { name: "5x Telephoto Zoom", description: "Get closer to your subject with optical zoom capabilities", icon: "🔍" },
                    { name: "Action Button", description: "Customizable button for quick camera access and controls", icon: "⚡" },
                    { name: "Night Mode", description: "Take amazing photos even in low-light conditions", icon: "🌙" }
                ]
            },
            {
                category: "Performance",
                items: [
                    { name: "A17 Pro Chip", description: "The most powerful chip ever in a smartphone", icon: "⚡" },
                    { name: "6-Core GPU", description: "Console-quality gaming and graphics performance", icon: "🎮" },
                    { name: "16-Core Neural Engine", description: "Advanced machine learning capabilities", icon: "🧠" },
                    { name: "8GB RAM", description: "Smooth multitasking and app performance", icon: "💾" }
                ]
            },
            {
                category: "Design & Build",
                items: [
                    { name: "Titanium Design", description: "Lightweight yet incredibly strong aerospace-grade titanium", icon: "🛡️" },
                    { name: "Ceramic Shield", description: "Tougher than any smartphone glass", icon: "💎" },
                    { name: "IP68 Water Resistance", description: "Protected against water and dust", icon: "💧" },
                    { name: "USB-C Connector", description: "Universal charging and data transfer", icon: "🔌" }
                ]
            }
        ],
        specs: {
            display: "6.7-inch Super Retina XDR OLED",
            processor: "A17 Pro chip with 6-core CPU",
            camera: "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
            battery: "Up to 29 hours video playback",
            storage: "256GB, 512GB, 1TB",
            os: "iOS 17"
        },
        price: "$1,199",
        description: "The ultimate iPhone experience with titanium design, advanced camera system, and the powerful A17 Pro chip."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
        colors: [
            { name: "Titanium Gray", value: "#6B7280", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop" },
            { name: "Titanium Black", value: "#111827", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop" },
            { name: "Titanium Violet", value: "#7C3AED", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop" },
            { name: "Titanium Yellow", value: "#F59E0B", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop" }
        ],
        features: [
            {
                category: "S Pen & Productivity",
                items: [
                    { name: "Built-in S Pen", description: "Write, draw, and navigate with precision", icon: "✏️" },
                    { name: "Air Actions", description: "Control your phone with S Pen gestures", icon: "🪄" },
                    { name: "Samsung Notes", description: "Advanced note-taking with handwriting recognition", icon: "📝" },
                    { name: "Screen Write", description: "Annotate screenshots and images", icon: "🖊️" }
                ]
            },
            {
                category: "AI Features",
                items: [
                    { name: "Galaxy AI", description: "Intelligent features powered by advanced AI", icon: "🤖" },
                    { name: "Live Translate", description: "Real-time translation in calls and messages", icon: "🌐" },
                    { name: "Circle to Search", description: "Search anything on your screen with a simple circle", icon: "🔍" },
                    { name: "Photo Assist", description: "AI-powered photo editing and enhancement", icon: "🎨" }
                ]
            },
            {
                category: "Camera Excellence",
                items: [
                    { name: "200MP Main Camera", description: "Incredible detail and zoom capabilities", icon: "📷" },
                    { name: "100x Space Zoom", description: "Get closer than ever before", icon: "🔭" },
                    { name: "Nightography", description: "Bright, clear photos in any lighting", icon: "🌃" },
                    { name: "8K Video Recording", description: "Professional-quality video capture", icon: "🎥" }
                ]
            }
        ],
        specs: {
            display: "6.8-inch Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 3 for Galaxy",
            camera: "200MP Main, 50MP Periscope, 10MP Telephoto, 12MP Ultra Wide",
            battery: "5000mAh with 45W fast charging",
            storage: "256GB, 512GB, 1TB",
            os: "Android 14 with One UI 6.1"
        },
        price: "$1,299",
        description: "The most powerful Galaxy smartphone with built-in S Pen, advanced AI features, and professional-grade cameras."
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
        colors: [
            { name: "Obsidian", value: "#1F2937", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop" },
            { name: "Porcelain", value: "#F8FAFC", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop" },
            { name: "Bay", value: "#3B82F6", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" }
        ],
        features: [
            {
                category: "AI Photography",
                items: [
                    { name: "Magic Eraser", description: "Remove unwanted objects from photos", icon: "🪄" },
                    { name: "Best Take", description: "Combine the best parts of similar photos", icon: "✨" },
                    { name: "Night Sight", description: "Incredible low-light photography", icon: "🌙" },
                    { name: "Astrophotography", description: "Capture stunning photos of the night sky", icon: "⭐" }
                ]
            },
            {
                category: "Google AI",
                items: [
                    { name: "Call Screen", description: "Let Google Assistant handle spam calls", icon: "📞" },
                    { name: "Live Translate", description: "Real-time translation in 55+ languages", icon: "🌍" },
                    { name: "Recorder", description: "AI-powered transcription and search", icon: "🎙️" },
                    { name: "Assistant Voice Typing", description: "Accurate voice-to-text with punctuation", icon: "🗣️" }
                ]
            },
            {
                category: "Pure Android",
                items: [
                    { name: "Clean Android Experience", description: "No bloatware, just pure Android", icon: "🤖" },
                    { name: "7 Years of Updates", description: "Long-term security and feature updates", icon: "🔄" },
                    { name: "Pixel Exclusive Features", description: "Features you won't find anywhere else", icon: "🎯" },
                    { name: "Fast Security Updates", description: "Monthly security patches delivered first", icon: "🛡️" }
                ]
            }
        ],
        specs: {
            display: "6.7-inch LTPO OLED",
            processor: "Google Tensor G3",
            camera: "50MP Main, 48MP Ultra Wide, 48MP Telephoto",
            battery: "5050mAh with 30W fast charging",
            storage: "128GB, 256GB, 512GB, 1TB",
            os: "Android 14"
        },
        price: "$999",
        description: "The smartest Pixel yet with advanced AI features, computational photography, and pure Android experience."
    }
];

export default function GetToKnowPhone() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
    const [selectedColor, setSelectedColor] = useState(0);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % phones.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + phones.length) % phones.length);
    };

    const openModal = (phone: Phone) => {
        setSelectedPhone(phone);
        setSelectedColor(0);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPhone(null);
    };

    return (
        <>
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Get to know your Phone
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Explore the incredible features and capabilities of today's most advanced smartphones.
                            Discover what makes each device unique and find your perfect match.
                        </p>
                    </div>

                    {/* Phone Slider */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {phones.map((phone) => (
                                    <div key={phone.id} className="w-full flex-shrink-0">
                                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-16 items-center min-h-[500px] sm:min-h-[600px]">
                                            {/* Phone Image */}
                                            <div className="relative order-1 lg:order-none">
                                                <div className="relative mx-auto w-64 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                                                    <img
                                                        src={phone.image}
                                                        alt={phone.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                                </div>

                                                {/* Floating elements - Hidden on mobile */}
                                                <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-lg sm:text-2xl">📱</span>
                                                </div>
                                                <div className="hidden sm:block absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-sm sm:text-lg">✨</span>
                                                </div>
                                            </div>

                                            {/* Phone Info */}
                                            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-none">
                                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                                    {phone.name}
                                                </h3>
                                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                                    {phone.description}
                                                </p>

                                                {/* Quick specs */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                                        <div className="text-xs sm:text-sm text-gray-500 mb-1">Display</div>
                                                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{phone.specs.display.split(' ').slice(0, 2).join(' ')}</div>
                                                    </div>
                                                    <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                                        <div className="text-xs sm:text-sm text-gray-500 mb-1">Camera</div>
                                                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{phone.specs.camera.split(',')[0]}</div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{phone.price}</div>
                                                    <button
                                                        onClick={() => openModal(phone)}
                                                        className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base"
                                                    >
                                                        Learn More
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 text-gray-600 hover:text-gray-900 transition-colors z-10"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 text-gray-600 hover:text-gray-900 transition-colors z-10"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                            {phones.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-blue-600 w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fully Responsive Modal - Optimized for All Screen Sizes */}
            {isModalOpen && selectedPhone && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>

                    <div className="relative min-h-screen bg-white">
                        {/* Close button - Responsive positioning */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 sm:p-2.5 lg:p-3 transition-colors shadow-lg"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
                            {/* Header - Responsive typography */}
                            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 px-2">
                                    {selectedPhone.name}
                                </h2>
                                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
                                    {selectedPhone.description}
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
                                {/* Phone Image & Colors - Mobile optimized */}
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    <div className="relative mx-auto w-60 sm:w-72 md:w-80 lg:w-96 h-72 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden">
                                        <img
                                            src={selectedPhone.colors[selectedColor].image}
                                            alt={selectedPhone.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Color Selection - Mobile friendly */}
                                    <div className="text-center px-2">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Available Colors</h3>
                                        <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-6">
                                            {selectedPhone.colors.map((color, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedColor(index)}
                                                    className={`relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-2 sm:border-3 lg:border-4 transition-all duration-200 ${index === selectedColor
                                                            ? 'border-blue-600 scale-110'
                                                            : 'border-gray-300 hover:border-gray-400'
                                                        }`}
                                                    style={{ backgroundColor: color.value }}
                                                >
                                                    <span className="absolute -bottom-5 sm:-bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {color.name}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Specifications - Mobile optimized */}
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    <div>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 px-2">Technical Specifications</h3>
                                        <div className="space-y-2 sm:space-y-3 lg:space-y-4 px-2">
                                            {Object.entries(selectedPhone.specs).map(([key, value]) => (
                                                <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-2 sm:py-2.5 lg:py-3 border-b border-gray-200 gap-1 sm:gap-0">
                                                    <span className="font-medium text-gray-700 capitalize text-sm sm:text-base">
                                                        {key.replace(/([A-Z])/g, ' $1')}
                                                    </span>
                                                    <span className="text-gray-900 text-sm sm:text-base sm:text-right sm:max-w-xs break-words">
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 mx-2 sm:mx-0">
                                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{selectedPhone.price}</div>
                                        <div className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Starting price</div>
                                        <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Features - Mobile optimized grid */}
                            <div className="space-y-6 sm:space-y-8 lg:space-y-12 px-2 sm:px-0">
                                {selectedPhone.features.map((category, categoryIndex) => (
                                    <div key={categoryIndex}>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-center">
                                            {category.category}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                                            {category.items.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="bg-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-all duration-200">
                                                    <div className="text-2xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 lg:mb-4">{feature.icon}</div>
                                                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-2.5 lg:mb-3">{feature.name}</h4>
                                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}