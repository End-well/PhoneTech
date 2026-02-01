export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                    The Future of <span className="text-blue-600">Smartphones</span>
                </h2>

                <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                    Experience lightning-fast performance, stunning design,
                    and all-day battery life.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-base">
                        Buy Now
                    </button>
                    <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium text-sm sm:text-base">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Phone Image */}
            <div className="flex justify-center order-1 lg:order-2">
                <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                    alt="Phone"
                    className="w-48 sm:w-64 lg:w-80 xl:w-96 rounded-2xl shadow-xl"
                />
            </div>

        </section>
    );
}
