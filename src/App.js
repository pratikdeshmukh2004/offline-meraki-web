import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState(null);
  const username = 'pratikdeshmukh2004'; // GitHub username

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="App">
      <h1>GitHub User App</h1>
      {userData ? (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          <p>{userData.bio}</p>
          {/* Other user details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
