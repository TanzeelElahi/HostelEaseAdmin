import React from 'react';
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import './UnOccupiedHostelPage.scss'

// Sample hostel data
const hostels = [
    {
      id: 1,
      name: 'Hostel A',
      address: '123 Main St, City',
      rating: 4.5,
      image: 'data:image/jpeg;base64,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',
      occupied: true,
    },
    {
      id: 2,
      name: 'Hostel B',
      address: '456 Elm St, Town',
      rating: 3.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGE6szhVzftbAw1I7ERIuKJAF2qYzsRWYsg&usqp=CAU',
      occupied: false,
    },
    {
      id: 3,
      name: 'Hostel C',
      address: '789 Oak St, Village',
      rating: 4.2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGE6szhVzftbAw1I7ERIuKJAF2qYzsRWYsg&usqp=CAU',
      occupied: true,
    },
    {
      id: 3,
      name: 'Hostel D',
      address: '789 Oak St, Village',
      rating: 4.2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGE6szhVzftbAw1I7ERIuKJAF2qYzsRWYsg&usqp=CAU',
      occupied: true,
    },
    {
        id: 4,
        name: 'Hostel E',
        address: '249 Oak St, Village',
        rating: 2.2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ec2-GxAZV9drz-klfBstjKvaiD7tC9pMlUpiWV3g_57114cPzV1Uxfhxs1eoaeb4SLg&usqp=CAU',
        occupied: false,
      },

      {
        id: 5,
        name: 'Hostel F',
        address: '249 plaza, palm road',
        rating: 3.3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2Fp7K2wpwvbh6XcWKLrGZWcKUwnKo2yBFUXa4oneg46Oc_Hf6RPHY-B3CD9GoUilV5A&usqp=CAU',
        occupied: false,
      },

      {
        id: 6,
        name: 'Hostel G',
        address: '49 east, hill town',
        rating: 2.7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTes_fSDpjUecsQxhq-cCmfufobWyr-1u35iA&usqp=CAU',
        occupied: false,
      },

      {
        id: 7,
        name: 'Hostel H',
        address: '49 east, hill town',
        rating: 2.0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhvoYerMIlIvWk_aQmVoB6e43xoKr7qLNMg&usqp=CAU',
        occupied: true,
      },

      {
        id: 8,
        name: 'Hostel I',
        address: '49 east, swim town',
        rating: 3.1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60V7ghJSZzXkZjSM6tS9o6zDMzW1V1LHlTQ&usqp=CAU',
        occupied: true,
      },
   ];

const UnoccupiedHostelsPage = () => {
  // Filter the hostels to get only the unoccupied ones
  const unoccupiedHostels = hostels.filter((hostel) => !hostel.occupied);

  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div>
            <h1>Unoccupied Hostels</h1>
      <ul>
        {unoccupiedHostels.map((hostel) => (
          <li key={hostel.id}>
            <div className="hostel-card">
              <img src={hostel.image} alt={hostel.name} />
              <div className="hostel-details">
                <h2>{hostel.name}</h2>
                <p>{hostel.address}</p>
                <p>Rating: {hostel.rating}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
            </div>
        </div>
    
      
  );
};

export default UnoccupiedHostelsPage;
