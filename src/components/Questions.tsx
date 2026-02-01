import { useState } from 'react';

interface Question {
    id: number;
    question: string;
    answer: string;
    phoneImage: string;
    phoneName: string;
    highlights: string[];
}

const questions: Question[] = [
    {
        id: 1,
        question: "What makes smartphone cameras so advanced today?",
        answer: "Modern smartphone cameras have revolutionized photography with computational photography, multiple lens systems, and AI-powered features. The combination of hardware improvements like larger sensors, better lenses, and advanced image processing chips allows phones to capture professional-quality photos and videos that rival dedicated cameras.",
        phoneImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
        phoneName: "iPhone 15 Pro Max",
        highlights: [
            "48MP main sensor with advanced image processing",
            "Multiple focal lengths in one device",
            "Night mode and computational photography",
            "Professional video recording capabilities"
        ]
    },
    {
        id: 2,
        question: "How do modern processors impact daily smartphone usage?",
        answer: "Today's smartphone processors are incredibly powerful, featuring multiple cores, dedicated AI chips, and advanced graphics processing units. These processors enable seamless multitasking, console-quality gaming, real-time photo and video editing, and AI-powered features that make your phone smarter and more responsive to your needs.",
        phoneImage: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
        phoneName: "Samsung Galaxy S24 Ultra",
        highlights: [
            "Multi-core processors for smooth performance",
            "Dedicated AI processing units",
            "Advanced GPU for gaming and graphics",
            "Efficient power management for longer battery life"
        ]
    },
    {
        id: 3,
        question: "Why is software optimization crucial for smartphone performance?",
        answer: "Software optimization is the bridge between powerful hardware and user experience. Well-optimized software ensures that all the advanced hardware features work together seamlessly, providing smooth animations, fast app launches, efficient battery usage, and regular security updates that keep your device running like new for years.",
        phoneImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
        phoneName: "Google Pixel 8 Pro",
        highlights: [
            "Pure Android experience with timely updates",
            "AI-powered features and optimizations",
            "Seamless integration with Google services",
            "7 years of guaranteed software support"
        ]
    },
    {
        id: 4,
        question: "What role does design play in smartphone functionality?",
        answer: "Smartphone design goes far beyond aesthetics. Premium materials like titanium and ceramic provide durability while maintaining elegance. Ergonomic design ensures comfortable daily use, while features like water resistance, wireless charging, and optimized antenna placement enhance functionality without compromising the sleek appearance.",
        phoneImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        phoneName: "OnePlus 12",
        highlights: [
            "Premium materials for durability and style",
            "Ergonomic design for comfortable handling",
            "Water and dust resistance ratings",
            "Wireless charging and fast wired charging"
        ]
    },
    {
        id: 5,
        question: "How do smartphones enhance productivity and creativity?",
        answer: "Modern smartphones are powerful creative and productivity tools. With features like S Pen support, professional video editing apps, multi-window functionality, and desktop-class performance, smartphones enable users to create content, manage work, and express creativity anywhere, making them essential tools for modern life.",
        phoneImage: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop",
        phoneName: "Xiaomi 14 Ultra",
        highlights: [
            "Professional-grade camera systems",
            "Advanced editing and creative apps",
            "Multi-tasking and productivity features",
            "High-resolution displays for detailed work"
        ]
    },
    {
        id: 6,
        question: "What makes smartphone security and privacy so important?",
        answer: "Smartphones store our most personal information, making security paramount. Modern devices feature biometric authentication, encrypted storage, secure boot processes, and regular security updates. Privacy features like app permissions, data encryption, and secure communication protocols ensure your personal information stays protected.",
        phoneImage: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop",
        phoneName: "iPhone 15",
        highlights: [
            "Biometric authentication (Face ID, fingerprint)",
            "End-to-end encryption for messages and data",
            "Regular security updates and patches",
            "Privacy-focused features and controls"
        ]
    }
];

export default function Questions() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const toggleQuestion = (questionId: number) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Significance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Understanding the technology and innovation behind modern smartphones.
                        Discover what makes these devices so essential in our daily lives.
                    </p>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                    {questions.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => toggleQuestion(item.id)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </h3>
                                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 transition-transform duration-300 ${openQuestion === item.id ? 'rotate-180' : ''
                                    }`}>
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer Content */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openQuestion === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-8 pb-8">
                                    <div className="border-t border-gray-100 pt-6">
                                        <div className="grid md:grid-cols-2 gap-8 items-start">
                                            {/* Answer Text */}
                                            <div className="space-y-6">
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {item.answer}
                                                </p>

                                                {/* Highlights */}
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                                                    <ul className="space-y-3">
                                                        {item.highlights.map((highlight, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                </div>
                                                                <span className="text-gray-700">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                                    Learn More About This Technology
                                                </button>
                                            </div>

                                            {/* Phone Image */}
                                            <div className="relative">
                                                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg group">
                                                    <img
                                                        src={item.phoneImage}
                                                        alt={item.phoneName}
                                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                                    {/* Phone Name Overlay */}
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                                            <h5 className="font-bold text-gray-900">{item.phoneName}</h5>
                                                            <p className="text-sm text-gray-600">Featured Example</p>
                                                        </div>
                                                    </div>

                                                    {/* Decorative Elements */}
                                                    <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Floating Stats */}
                                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-blue-600">4.9★</div>
                                                        <div className="text-xs text-gray-500">User Rating</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our expert team is here to help you understand the technology and find the perfect phone for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                Contact Support
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                Browse All Phones
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}