export default function DeepLook() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Take a deeper look.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Explore the cutting-edge technology and innovative features that make our smartphones extraordinary.
                    </p>
                </div>

                {/* Main Feature Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-100 via-purple-50 to-orange-100 mb-12">
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                A Guided Tour of<br />
                                <span className="text-blue-600">iPhone 15 Pro</span>,<br />
                                <span className="text-purple-600">Galaxy S24</span>,<br />
                                and <span className="text-orange-600">Pixel 8</span>
                            </h3>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Discover the revolutionary features, advanced cameras, and powerful performance
                                that define the next generation of smartphones.
                            </p>

                            <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Watch the film
                            </button>
                        </div>

                        {/* Right Content - Person with phones */}
                        <div className="relative flex justify-center items-center">
                            <div className="relative">
                                {/* Person placeholder */}
                                <div className="w-80 h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                                    <div className="text-center text-white z-10">
                                        <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg font-medium">Tech Expert</p>
                                    </div>
                                </div>

                                {/* Floating phones */}
                                <div className="absolute -top-4 -left-8 w-16 h-28 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                                    <div className="w-full h-6 bg-gray-700 rounded-t-xl"></div>
                                    <div className="p-2">
                                        <div className="w-full h-16 bg-blue-500 rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="absolute -top-2 -right-8 w-16 h-28 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                    <div className="w-full h-6 bg-orange-600 rounded-t-xl"></div>
                                    <div className="p-2">
                                        <div className="w-full h-16 bg-white rounded-lg"></div>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 -right-12 w-16 h-28 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                                    <div className="w-full h-6 bg-purple-700 rounded-t-xl"></div>
                                    <div className="p-2">
                                        <div className="w-full h-16 bg-gray-900 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Camera Technology */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Camera Systems</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Explore computational photography, Night mode, and professional-grade video recording capabilities.
                        </p>
                    </div>

                    {/* Performance */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Blazing Performance</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Discover the latest processors, AI capabilities, and how they enhance your daily smartphone experience.
                        </p>
                    </div>

                    {/* Design Innovation */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Design Innovation</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Learn about premium materials, ergonomic design, and the engineering behind modern smartphone aesthetics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}