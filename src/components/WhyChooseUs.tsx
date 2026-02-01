import { useState, useEffect } from 'react';

interface Reason {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
    benefits: string[];
}

const reasons: Reason[] = [
    {
        id: 1,
        title: "Unbeatable Prices",
        description: "Get the best deals on flagship smartphones with our price match guarantee and exclusive discounts.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        icon: "💰",
        benefits: ["Price match guarantee", "Exclusive member discounts", "0% financing available", "Trade-in programs"]
    },
    {
        id: 2,
        title: "Expert Support",
        description: "Our certified technicians provide 24/7 support, setup assistance, and troubleshooting for all devices.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        icon: "🛠️",
        benefits: ["24/7 customer support", "Free device setup", "Technical troubleshooting", "Warranty coverage"]
    },
    {
        id: 3,
        title: "Fast & Free Shipping",
        description: "Enjoy lightning-fast delivery with free shipping on all orders, plus same-day delivery in select cities.",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
        icon: "🚚",
        benefits: ["Free shipping nationwide", "Same-day delivery available", "Express shipping options", "Secure packaging"]
    },
    {
        id: 4,
        title: "Quality Guarantee",
        description: "Every device undergoes rigorous testing. We offer extended warranties and hassle-free returns.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
        icon: "✅",
        benefits: ["Quality tested devices", "Extended warranty options", "30-day return policy", "Certified refurbished"]
    },
    {
        id: 5,
        title: "Latest Technology",
        description: "Stay ahead with the newest smartphones, accessories, and cutting-edge technology as soon as they launch.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
        icon: "📱",
        benefits: ["Latest flagship models", "Pre-order availability", "Exclusive launches", "Tech accessories"]
    },
    {
        id: 6,
        title: "Trusted by Millions",
        description: "Join over 2 million satisfied customers who trust PhoneTech for their smartphone needs.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        icon: "⭐",
        benefits: ["2M+ happy customers", "4.9/5 star rating", "Industry recognition", "Customer testimonials"]
    }
];

export default function WhyChooseUs() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % reasons.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % reasons.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + reasons.length) % reasons.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why PhoneTech is the best place to buy phones
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover what makes us the preferred choice for millions of smartphone buyers worldwide.
                        From unbeatable prices to exceptional service, we've got you covered.
                    </p>
                </div>

                {/* Main Slider */}
                <div className="relative mb-16">
                    <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {reasons.map((reason) => (
                                <div key={reason.id} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                                        {/* Image Side */}
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={reason.image}
                                                alt={reason.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                                            <div className="absolute top-6 left-6 text-4xl bg-white/90 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center">
                                                {reason.icon}
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                                {reason.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                                {reason.description}
                                            </p>

                                            {/* Benefits List */}
                                            <div className="space-y-4 mb-8">
                                                {reason.benefits.map((benefit, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg w-fit">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-gray-900 transition-all duration-200 z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Progress Indicators */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {reasons.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`relative overflow-hidden rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'w-12 h-3 bg-blue-600'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            >
                                {index === currentSlide && isAutoPlaying && (
                                    <div className="absolute inset-0 bg-blue-400 animate-pulse"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2M+</div>
                        <div className="text-gray-600 font-medium">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9★</div>
                        <div className="text-gray-600 font-medium">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-gray-600 font-medium">Support Available</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600 font-medium">Phone Models</div>
                    </div>
                </div>
            </div>
        </section>
    );
}