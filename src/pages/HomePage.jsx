import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
const indianDestinations = [
   { 
    name: 'New Delhi', 
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=',
    properties: '4,078 properties'
  },
  { 
    name: 'Noida', 
    image: 'https://r-xx.bstatic.com/xdata/images/city/170x136/691495.jpg?k=1c9ca7d6f4c56ca1c8b5b26d842a2345d1e074a2a34df42f5e3179ff0fe060f3&o=',
    properties: '968 properties'
  },
  { 
    name: 'Gurgaon', 
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684622.jpg?k=f9eacb40b8f7c8560afc74cdcfe2e7028e5117a36a0d8d3356f735ea3ac20f4f&o=',
    properties: '1,556 properties'
  },
  { 
    name: 'Greater Noida', 
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/918496.jpg?k=fbc46d88083d726a9c3b7e7985bd42a9de0b4086035e135e1776053a0490c756&o=',
    properties: '367 properties'
  },
  { 
    name: 'Rishikesh', 
    image: 'https://r-xx.bstatic.com/xdata/images/city/170x136/684880.jpg?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o=',
    properties: '973 properties'
  },
  { 
    name: 'Mussoorie', 
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684732.jpg?k=54bd15fa6a54076487fcca512f688f679d25b711afc6e4321904c1528dc5f731&o=',
    properties: '622 properties'
  },
  { 
    name: 'Jaipur', 
    image: 'https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=',
    properties: '1,784 properties'
  },
  
  { 
    name: 'Bengaluru', 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    properties: '2,934 properties'
  },
   { 
    name: 'Goa', 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    properties: '3,620 properties'
  },
  { 
    name: 'Kerala', 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    properties: '2,765 properties'
  },
  { 
    name: 'Agra', 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    properties: '788 properties'
  },
  { 
    name: 'Dehradun', 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    properties: '1247 properties'
  },
  { 
    name: 'Nainital', 
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    properties: '972 properties'
  },
];

const featured = [
  { title: 'Cozy Apartment in Paris', price: '$120/night', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80' },
  { title: 'Modern Loft in NYC', price: '$200/night', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { title: 'Traditional House in Tokyo', price: '$90/night', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80' },
];

const propertyTypes = [
  {
    name: 'Hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    dateRange: '6 Aug-7 Aug, 2 adults',
    available: '1732 available'
  },
  {
    name: 'Apartments',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
    dateRange: '6 Aug-7 Aug, 2 adults',
    available: '228 available'
  },
  {
    name: 'Resorts',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
    dateRange: '6 Aug-7 Aug, 2 adults',
    available: '6 available'
  },
  {
    name: 'Villas',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    dateRange: '6 Aug-7 Aug, 2 adults',
    available: '5 available'
  },
  {
    name: 'Guesthouses',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80',
    dateRange: '6 Aug-7 Aug, 2 adults',
    available: '89 available'
  },
  {
    name: 'Holiday homes',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400&q=80',
    dateRange: '6 Aug-7 Aug, 2 adults',
    available: '156 available'
  }
];

const uniqueProperties = [
  {
    name: "Taj Fisherman's Cove Resort & Spa, Chennai",
    type: "Hotel",
    location: "Mahabalipuram, India",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    reviewScore: 8.3,
    reviewText: "Very good",
    reviewCount: 702,
    price: "₹ 16,500",
    isGenius: false
  },
  {
    name: "Heritage Madurai",
    type: "Resort",
    location: "Madurai, India",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    reviewScore: 8.8,
    reviewText: "Fabulous",
    reviewCount: 1242,
    price: "₹ 6,999",
    isGenius: false
  },
  {
    name: "Neemrana's - Tijara Fort Palace",
    type: "Hotel",
    location: "Alwar, India",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    reviewScore: 8.6,
    reviewText: "Fabulous",
    reviewCount: 339,
    price: "₹ 9,900",
    isGenius: true
  },
  {
    name: "Radisson Blu Resort Temple Bay Mamallapuram",
    type: "Resort",
    location: "Mahabalipuram, India",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    reviewScore: 8.5,
    reviewText: "Very good",
    reviewCount: 1016,
    price: "₹ 16,000",
    isGenius: false
  },
  {
    name: "The Oberoi Udaivilas",
    type: "Hotel",
    location: "Udaipur, India",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    reviewScore: 9.2,
    reviewText: "Exceptional",
    reviewCount: 456,
    price: "₹ 25,000",
    isGenius: false
  },
  {
    name: "Wildflower Hall, Shimla",
    type: "Resort",
    location: "Shimla, India",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    reviewScore: 8.9,
    reviewText: "Fabulous",
    reviewCount: 289,
    price: "₹ 18,500",
    isGenius: true
  }
];

export default function HomePage() {
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
    pets: false
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollContainerRef = React.useRef(null);
  const propertyTypeRef = React.useRef(null);
  const uniquePropertiesRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollPropertyTypeLeft = () => {
    if (propertyTypeRef.current) {
      propertyTypeRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollPropertyTypeRight = () => {
    if (propertyTypeRef.current) {
      propertyTypeRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollUniquePropertiesLeft = () => {
    if (uniquePropertiesRef.current) {
      uniquePropertiesRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollUniquePropertiesRight = () => {
    if (uniquePropertiesRef.current) {
      uniquePropertiesRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestDropdownOpen && !event.target.closest('.guest-dropdown')) {
        setGuestDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [guestDropdownOpen]);

  const updateGuestCount = (type, increment) => {
    setGuests(prev => {
      const newValue = prev[type] + increment;
      if (type === 'adults' && newValue >= 1 && newValue <= 30) {
        return { ...prev, [type]: newValue };
      } else if (type === 'children' && newValue >= 0 && newValue <= 10) {
        return { ...prev, [type]: newValue };
      } else if (type === 'rooms' && newValue >= 1 && newValue <= 30) {
        return { ...prev, [type]: newValue };
      }
      return prev;
    });
  };

  const togglePets = () => {
    setGuests(prev => ({ ...prev, pets: !prev.pets }));
  };

  const getGuestDisplayText = () => {
    const { adults, children, rooms } = guests;
    return `${adults} adult${adults !== 1 ? 's' : ''} · ${children} child${children !== 1 ? 'ren' : ''} · ${rooms} room${rooms !== 1 ? 's' : ''}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-950 text-white py-20 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Find Your Next Stay</h1>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">Book unique homes and experiences all over the world with StayFinder.</p>
        
        <div className="w-full max-w-4xl">
          <form className="flex bg-white rounded-lg shadow-lg">
            <input type="text" placeholder="Where are you going?" className="flex-1 px-4 py-3 text-gray-700 focus:outline-none" />
            <input type="date" className="px-2 py-3 text-gray-400 border-l focus:outline-none" />
            <input type="date" className="px-2 py-3 text-gray-400 border-l focus:outline-none" />
            
            {/* Guest Selection Dropdown */}
            <div className="relative border-l guest-dropdown">
              <button
                type="button"
                onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none min-w-[200px]"
              >
                <FaUser className='w-5 h-5 mr-2'/>
                <span className="text-sm">{getGuestDisplayText()}</span>
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {guestDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1 p-4 w-80">
                  {/* Adults */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">Adults</span>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        type="button"
                        onClick={() => updateGuestCount('adults', -1)}
                        disabled={guests.adults <= 1}
                        className="px-3 py-1 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-700 font-medium">{guests.adults}</span>
                      <button
                        type="button"
                        onClick={() => updateGuestCount('adults', 1)}
                        disabled={guests.adults >= 30}
                        className="px-3 py-1 text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">Children</span>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        type="button"
                        onClick={() => updateGuestCount('children', -1)}
                        disabled={guests.children <= 0}
                        className="px-3 py-1 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-700 font-medium">{guests.children}</span>
                      <button
                        type="button"
                        onClick={() => updateGuestCount('children', 1)}
                        disabled={guests.children >= 10}
                        className="px-3 py-1 text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">Rooms</span>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        type="button"
                        onClick={() => updateGuestCount('rooms', -1)}
                        disabled={guests.rooms <= 1}
                        className="px-3 py-1 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-700 font-medium">{guests.rooms}</span>
                      <button
                        type="button"
                        onClick={() => updateGuestCount('rooms', 1)}
                        disabled={guests.rooms >= 30}
                        className="px-3 py-1 text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Pets */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">Travelling with pets?</span>
                    <button
                      type="button"
                      onClick={togglePets}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        guests.pets ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          guests.pets ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Pet Info */}
                  <div className="text-xs text-gray-500 mb-4">
                    <p>Assistance animals aren't considered pets.</p>
                    <a href="#" className="text-blue-600 hover:underline">Read more about travelling with assistance animals</a>
                  </div>

                  {/* Done Button */}
                  <button
                    type="button"
                    onClick={() => setGuestDropdownOpen(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold rounded-r-md cursor-pointer">Search</button>
          </form>
        </div>
      </section>

      {/* Explore Destinations in India */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Explore destinations in India</h2>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {indianDestinations.map((dest) => (
              <div key={dest.name} className="flex-shrink-0 w-64 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-40 object-cover" />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{dest.name}</h3>
                  <p className="text-sm text-gray-500">{dest.properties}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by property type in New Delhi */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Browse by property type in New Delhi</h2>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPropertyTypeLeft}
            className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollPropertyTypeRight}
            className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={propertyTypeRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {propertyTypes.map((property) => (
              <div key={property.name} className="flex-shrink-0 w-64 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer bg-white">
                <img src={property.image} alt={property.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{property.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{property.dateRange}</p>
                  <p className="text-sm text-gray-600 font-medium">{property.available}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-gray-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">How StayFinder Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4 mx-auto text-2xl font-bold">1</div>
              <h3 className="font-semibold text-gray-700 mb-2">Search & Discover</h3>
              <p className="text-gray-600 text-sm">Find the perfect accommodation from our vast collection of hotels, apartments, resorts, and unique stays worldwide.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4 mx-auto text-2xl font-bold">2</div>
              <h3 className="font-semibold text-gray-700 mb-2">Compare & Choose</h3>
              <p className="text-gray-600 text-sm">Compare prices, read reviews, and view photos to make an informed decision about your stay.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4 mx-auto text-2xl font-bold">3</div>
              <h3 className="font-semibold text-gray-700 mb-2">Book & Enjoy</h3>
              <p className="text-gray-600 text-sm">Secure your booking with instant confirmation and enjoy your stay with 24/7 customer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay at our top unique properties */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay at our top unique properties</h2>
          <p className="text-gray-600">From castles and villas to boats and igloos, we've got it all</p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollUniquePropertiesLeft}
            className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollUniquePropertiesRight}
            className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={uniquePropertiesRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
                         {uniqueProperties.map((property) => (
               <div key={property.name} className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer bg-white flex flex-col">
                 <div className="relative">
                   <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                   <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                     <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                   </button>
                 </div>
                 <div className="p-4 flex flex-col flex-1">
                   <div className="flex items-center gap-2 mb-2">
                     <span className="text-sm text-gray-600">{property.type}</span>
                     <div className="flex items-center">
                       {[...Array(property.rating)].map((_, i) => (
                         <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                         </svg>
                       ))}
                       <svg className="w-4 h-4 text-gray-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                       </svg>
                       {property.isGenius && (
                         <div className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                             <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                           </svg>
                           Genius
                         </div>
                       )}
                     </div>
                   </div>
                   <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">{property.name}</h3>
                   <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                   <div className="flex items-center gap-2 mb-3">
                     <div className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded">
                       {property.reviewScore}
                     </div>
                     <span className="text-sm text-gray-700 font-medium">{property.reviewText}</span>
                     <span className="text-sm text-gray-500">{property.reviewCount} reviews</span>
                   </div>
                   <div className="flex items-center justify-between mt-auto">
                     <div>
                       <span className="text-xs text-gray-500">Starting from</span>
                       <p className="text-lg font-bold text-gray-800">{property.price}</p>
                     </div>
                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                       View Details
                     </button>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-500 to-blue-950 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
        <p className="mb-6">Sign up now to book your next unforgettable stay or list your property with StayFinder!</p>
        <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Get Started</button>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-white border-t text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
      </footer>
    </div>
  );
} 