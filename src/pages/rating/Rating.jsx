import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./rating.scss"

// Sample room data with ratings and reviews
const rooms = [
  {
    id: 1,
    name: 'Room A',
    rating: 4.5,
    reviews: [
      { id: 1, text: 'Great room!', rating: "5 and below" },
      // Add more reviews
    ],
  },
  {
    id: 2,
    name: 'Room B',
    rating: 3.8,
    reviews: [
      { id: 2, text: 'Good room.', rating: "4 and below" },
      // Add more reviews
    ],
  },
  {
    id: 3,
    name: 'Room C',
    rating: 2.8,
    reviews: [
      { id: 3, text: 'Average room.', rating: "3 and below" },
      // Add more reviews
    ],
  },

  {
    id: 4,
    name: 'Room D',
    rating: 1.8,
    reviews: [
      { id: 4, text: 'Below Average room.', rating: "2 and below" },
      // Add more reviews
    ],
  },
  {
    id: 5,
    name: 'Room E',
    rating: 2.1,
    reviews: [
      { id: 5, text: 'Below Average room.', rating: "3 and below" },
      // Add more reviews
    ],
  },
];

const RatingAndReviewPage = () => {
    const [minRating, setMinRating] = useState(0); // Minimum rating for filtering
    const [maxRating, setMaxRating] = useState(5); // Maximum rating for filtering
    const [filteredRooms, setFilteredRooms] = useState(rooms); // State to store filtered rooms
  
    // Function to filter rooms based on the rating range
    const filterRooms = () => {
      const filtered = rooms.filter((room) => room.rating >= minRating && room.rating <= maxRating);
      setFilteredRooms(filtered);
    };
  
    return (
        <div className='home'>
            <Sidebar/>
            <div className='homeContainer'>
                <Navbar/>
                <div className="rating-and-review-page">
    
        <h1>Ratings and Reviews</h1>
        
        <div className="filter-section">
          <label>Filter by Rating Range:</label>
          <select value={minRating} onChange={(e) => setMinRating(parseFloat(e.target.value))}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>to</span>
          <select value={maxRating} onChange={(e) => setMaxRating(parseFloat(e.target.value))}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={filterRooms}>Filter</button>
        </div>
        <ul className="room-list">
          {filteredRooms.map((room) => (
            <li key={room.id} className="room-card">
              <h2>{room.name}</h2>
              <p>Rating: {room.rating}</p>
              <h3>Reviews:</h3>
              <ul className="review-list">
                {room.reviews.map((review) => (
                  <li key={review.id}>
                    <p>Rating: {review.rating}</p>
                    <p>{review.text}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
            </div>
        </div>

    );
  };
  
  export default RatingAndReviewPage;