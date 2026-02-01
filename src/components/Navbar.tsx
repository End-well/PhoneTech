import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SearchResult {
    id: number;
    name: string;
    brand: string;
    price: string;
    image: string;
    category: string;
}

// Mock phone database for search
const phoneDatabase: SearchResult[] = [
    { id: 1, name: "iPhone 15 Pro Max", brand: "Apple", price: "$1,199", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=50&h=50&fit=crop", category: "iPhone" },
    { id: 2, name: "iPhone 15 Pro", brand: "Apple", price: "$999", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=50&h=50&fit=crop", category: "iPhone" },
    { id: 3, name: "iPhone 15", brand: "Apple", price: "$799", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=50&h=50&fit=crop", category: "iPhone" },
    { id: 4, name: "iPhone 14", brand: "Apple", price: "$699", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=50&h=50&fit=crop", category: "iPhone" },
    { id: 5, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: "$1,299", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=50&h=50&fit=crop", category: "Samsung" },
    { id: 6, name: "Samsung Galaxy S24", brand: "Samsung", price: "$899", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=50&h=50&fit=crop", category: "Samsung" },
    { id: 7, name: "Google Pixel 8 Pro", brand: "Google", price: "$999", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=50&h=50&fit=crop", category: "Pixel" },
    { id: 8, name: "Google Pixel 8", brand: "Google", price: "$699", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=50&h=50&fit=crop", category: "Pixel" },
    { id: 9, name: "OnePlus 12", brand: "OnePlus", price: "$799", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=50&h=50&fit=crop", category: "OnePlus" },
    { id: 10, name: "OnePlus 11", brand: "OnePlus", price: "$699", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=50&h=50&fit=crop", category: "OnePlus" },
    { id: 11, name: "Xiaomi 14 Ultra", brand: "Xiaomi", price: "$1,499", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=50&h=50&fit=crop", category: "Xiaomi" },
    { id: 12, name: "Xiaomi 14", brand: "Xiaomi", price: "$899", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=50&h=50&fit=crop", category: "Xiaomi" },
    { id: 13, name: "Nothing Phone (2a)", brand: "Nothing", price: "$399", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=50&h=50&fit=crop", category: "Nothing" },
    { id: 14, name: "ASUS ROG Phone 8", brand: "ASUS", price: "$1,199", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=50&h=50&fit=crop", category: "Gaming" }
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close search when opening mobile menu
        if (!isMobileMenuOpen && isSearchOpen) {
            setIsSearchOpen(false);
            setSearchQuery('');
            setShowResults(false);
        }
    };

    const handleMouseEnter = (menu: string) => {
        // Only show dropdowns on desktop
        if (window.innerWidth >= 768) {
            setActiveDropdown(menu);
        }
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    // Simulate AJAX search with debouncing
    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            setIsSearching(true);
            setShowResults(true);

            // Simulate API delay
            const searchTimeout = setTimeout(() => {
                const filtered = phoneDatabase.filter(phone =>
                    phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    phone.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    phone.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setSearchResults(filtered);
                setIsSearching(false);
            }, 300);

            return () => clearTimeout(searchTimeout);
        } else {
            setSearchResults([]);
            setShowResults(false);
            setIsSearching(false);
        }
    }, [searchQuery]);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
            // Close mobile menu when opening search
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        } else {
            setSearchQuery('');
            setShowResults(false);
        }
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            setShowResults(false);
        }
    };

    const handleResultClick = (result: SearchResult) => {
        console.log('Selected phone:', result);
        setSearchQuery('');
        setShowResults(false);
        setIsSearchOpen(false);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowResults(false);
                if (isSearchOpen && !searchQuery) {
                    setIsSearchOpen(false);
                }
            }
        };

        const handleResize = () => {
            // Close mobile menu on desktop
            if (window.innerWidth >= 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isSearchOpen, searchQuery, isMobileMenuOpen]);

    return (
        <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                            PhoneTech
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Store Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('store')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                                Store
                            </button>
                            {activeDropdown === 'store' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2 mt-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Shop All</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">New Arrivals</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Best Sellers</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Accessories</a>
                                </div>
                            )}
                        </div>

                        {/* iPhone Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('iphone')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                                iPhone
                            </button>
                            {activeDropdown === 'iphone' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2 mt-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPhone 15 Pro</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPhone 15</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPhone 14</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPhone SE</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Compare Models</a>
                                </div>
                            )}
                        </div>

                        {/* iPad Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('ipad')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                                iPad
                            </button>
                            {activeDropdown === 'ipad' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2 mt-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPad Pro</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPad Air</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPad</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iPad mini</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Apple Pencil</a>
                                </div>
                            )}
                        </div>

                        {/* Mac Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('mac')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                                Mac
                            </button>
                            {activeDropdown === 'mac' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2 mt-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MacBook Pro</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MacBook Air</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">iMac</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mac Studio</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mac Pro</a>
                                </div>
                            )}
                        </div>

                        {/* Watch Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('watch')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                                Watch
                            </button>
                            {activeDropdown === 'watch' && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg border border-gray-200 py-2 mt-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Apple Watch Series 9</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Apple Watch Ultra 2</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Apple Watch SE</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bands</a>
                                </div>
                            )}
                        </div>

                        {/* Support */}
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            Support
                        </a>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/* Search functionality */}
                        <div className="relative" ref={searchContainerRef}>
                            {/* Search Input - appears when search is active */}
                            <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${isSearchOpen
                                ? 'opacity-100 translate-x-0 pointer-events-auto'
                                : 'opacity-0 translate-x-4 pointer-events-none'
                                }`}>
                                <form onSubmit={handleSearchSubmit} className="relative">
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search phones..."
                                        className="w-64 sm:w-80 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    />
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                        {isSearching ? (
                                            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        )}
                                    </div>
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSearchQuery('');
                                                setShowResults(false);
                                            }}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </form>

                                {/* Search Results Dropdown */}
                                {showResults && isSearchOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-96 overflow-y-auto z-50 w-64 sm:w-80">
                                        {isSearching ? (
                                            <div className="p-4 text-center">
                                                <div className="flex items-center justify-center gap-2 text-gray-500">
                                                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                                    Searching...
                                                </div>
                                            </div>
                                        ) : searchResults.length > 0 ? (
                                            <>
                                                <div className="p-3 border-b border-gray-100">
                                                    <p className="text-sm text-gray-500">
                                                        Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                                                    </p>
                                                </div>
                                                <div className="max-h-80 overflow-y-auto">
                                                    {searchResults.map((result) => (
                                                        <button
                                                            key={result.id}
                                                            onClick={() => handleResultClick(result)}
                                                            className="w-full p-3 hover:bg-gray-50 transition-colors text-left flex items-center gap-3"
                                                        >
                                                            <img
                                                                src={result.image}
                                                                alt={result.name}
                                                                className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                                                            />
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-medium text-gray-900 truncate">{result.name}</h4>
                                                                <p className="text-sm text-gray-500">{result.brand}</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="font-semibold text-gray-900">{result.price}</p>
                                                                <p className="text-xs text-blue-600">{result.category}</p>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="p-3 border-t border-gray-100 bg-gray-50">
                                                    <button
                                                        onClick={handleSearchSubmit}
                                                        className="w-full text-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                                                    >
                                                        View all results for "{searchQuery}"
                                                    </button>
                                                </div>
                                            </>
                                        ) : searchQuery.trim() ? (
                                            <div className="p-6 text-center">
                                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 mb-2">No phones found for "{searchQuery}"</p>
                                                <p className="text-sm text-gray-400">Try searching for iPhone, Samsung, Google Pixel, or OnePlus</p>
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>

                            {/* Search Button */}
                            <button
                                id="search-button"
                                onClick={toggleSearch}
                                className={`p-2 rounded-full transition-all duration-200 ${isSearchOpen
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                        <button className="hidden sm:flex text-gray-700 hover:text-gray-900 p-2 rounded-full hover:bg-gray-50 transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                        <Link
                            to="/signin"
                            className="hidden sm:flex bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                    {/* Mobile Navigation Links */}
                    <div className="space-y-1">
                        {/* Store */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'store' ? null : 'store')}
                                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <span className="font-medium">Store</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'store' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'store' && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Shop All</a>
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">New Arrivals</a>
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Best Sellers</a>
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Accessories</a>
                                </div>
                            )}
                        </div>

                        {/* iPhone */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'iphone' ? null : 'iphone')}
                                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <span className="font-medium">iPhone</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'iphone' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'iphone' && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPhone 15 Pro</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPhone 15</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPhone 14</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPhone SE</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Compare Models</a>
                                </div>
                            )}
                        </div>

                        {/* iPad */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'ipad' ? null : 'ipad')}
                                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <span className="font-medium">iPad</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ipad' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'ipad' && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPad Pro</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPad Air</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPad</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iPad mini</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Apple Pencil</a>
                                </div>
                            )}
                        </div>

                        {/* Mac */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'mac' ? null : 'mac')}
                                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <span className="font-medium">Mac</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mac' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'mac' && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">MacBook Pro</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">MacBook Air</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">iMac</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Mac Studio</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Mac Pro</a>
                                </div>
                            )}
                        </div>

                        {/* Watch */}
                        <div>
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === 'watch' ? null : 'watch')}
                                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                <span className="font-medium">Watch</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'watch' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'watch' && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Apple Watch Series 9</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Apple Watch Ultra 2</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Apple Watch SE</a>
                                    <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Bands</a>
                                </div>
                            )}
                        </div>

                        {/* Support */}
                        <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                            Support
                        </a>
                    </div>

                    {/* Mobile Actions */}
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Cart
                        </button>
                        <Link
                            to="/signin"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}