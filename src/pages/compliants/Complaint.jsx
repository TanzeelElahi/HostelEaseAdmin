import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import './complaint.scss';

const complaints = [
  {
    id: 1,
    hostelName: 'Hostel A',
    userName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    complaint: 'The room was not clean when I checked in.',
  },
  {
    id: 2,
    hostelName: 'Hostel B',
    userName: 'Alice Smith',
    email: 'alicesmith@example.com',
    phone: '987-654-3210',
    complaint: 'The air conditioning was not working properly in my room.',
  },
  {
    id: 3,
    hostelName: 'Hostel C',
    userName: 'Sam Parker',
    email: 'sam762@example.com',
    phone: '987-633-3285',
    complaint: 'The matress was not comfortable',
  },
  {
    id: 2,
    hostelName: 'Hostel D',
    userName: 'Kim Jane',
    email: 'kim.jane@example.com',
    phone: '987-654-3210',
    complaint: 'The room doors lock is not working ',
  },
  
];

const ComplaintCard = ({ complaint }) => {
  return (
    <div className="complaint-card">
      <h2>{complaint.hostelName}</h2>
      <p>User: {complaint.userName}</p>
      <p>Email: {complaint.email}</p>
      <p>Phone: {complaint.phone}</p>
      <p>Complaint: {complaint.complaint}</p>
    </div>
  );
};

const ComplaintsPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="complaints-page">
          <h1>Complaints</h1>
          <div className="complaint-list">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="complaint-row">
                <ComplaintCard complaint={complaint} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
