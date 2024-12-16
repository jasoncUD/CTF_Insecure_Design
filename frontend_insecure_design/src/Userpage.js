import React from 'react';
import './Userpage.css'; // Import the CSS file

const UserPage = () => {

    const user = {
        username: 'John',
        email: 'john86coolguy',
        role: 'admin',
        address: '1234 Elm St, Vancouver, BC',
        age: 25,
    };

  return (
    <div className="user-page">
        <h1>You have successfully been verified and logged in as John! Your flag is: jchan_is_the_man</h1>
      <div className="user-info-card">
        <h1>Welcome, {user.username}!</h1>
        <div className="user-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;