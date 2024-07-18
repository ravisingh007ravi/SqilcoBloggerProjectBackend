import React, { useState } from 'react';
import HomeBnner from '../images/kooikerhondje-dogs-portrait.jpg'

function Home() {
  const [selectedPet, setSelectedPet] = useState('');

  const handleSearch = () => {
    alert(`You selected: ${selectedPet}`);
  };
  return (

    <div className="relative py-[64px]">
      <img src={HomeBnner} alt="Banner" className="w-full h-[500px] object-cover opacity-75" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">WE KNOW VALUE OF EMOTIONS</h1>
          <p className="text-lg text-gray-300">We offer the best services for your pets, contact us today and book a service</p>
        </div>
        {/* Fillter */}
        <div className="flex items-center space-x-2 p-2">
          <select
            className=" form-select block w-[500px] p-[8px] mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
            <option value="" disabled>Please select the pet...</option>
            <option value="Dogs">Dogs</option>
            <option value="Cats">Cats</option>
            <option value="Small Pets">Small Pets</option>
          </select>
          <button
            className="px-6 py-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
