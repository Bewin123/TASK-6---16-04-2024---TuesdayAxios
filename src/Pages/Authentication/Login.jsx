import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Import CSS file for component styling

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  // Fetch user data using Axios when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch user data
  const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  // Function to display users
  const displayUsers = () => {
    return (
      users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Username: {user.username}, Email: {user.email}, Phone: {user.phone}</p>
          <p>Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          <p>Company: {user.company.name}, {user.company.catchPhrase}</p>
        </div>
      ))
    );
  };

  // Function to add a new user
  const addUser = () => {
    const newUser = {
      name: 'New User',
      username: 'newuser',
      email: 'newuser@example.com',
      address: {
        suite: 'Suite 123',
        street: 'New Street',
        city: 'New City',
        zipcode: '12345'
      },
      phone: '123-456-7890',
      company: {
        name: 'New Company',
        catchPhrase: 'Catch phrase'
      }
    };

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        const updatedUsers = [...users, response.data];
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div className="user-display-container">
      <h1>USERS DATAS</h1>
      <div className="user-container">
        {/* Display users */}
        {displayUsers()}
      </div>
      {/* Button to add new user */}
      <button className="add-user-button" onClick={addUser}>Add New User</button>
    </div>
  );
};

export default UserDisplay;
















 


















































