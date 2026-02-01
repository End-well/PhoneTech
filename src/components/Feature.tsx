const features = [
    {
        title: "Fast Performance",
        desc: "Powered by the latest processor for smooth multitasking."
    },
    {
        title: "Pro Camera",
        desc: "Capture stunning photos with advanced AI features."
    },
    {
        title: "All-Day Battery",
        desc: "Stay connected without worrying about charging."
    }
];

export default function Features() {
    return (
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">
                    Why Choose PhoneTech?
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
