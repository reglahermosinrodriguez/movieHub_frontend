import React, { createContext, useState, useEffect } from "react";

  export const UserNameContext = createContext(null);

  export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      fetchUserData();
    }, []);

    async function fetchUserData() {
      try {
        const response = await fetch('/src/assets/Data/users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data); // Establecer los datos de usuario en el estado
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    }

    return (
      <UserNameContext.Provider value={userData ? userData.name : null}>
        {children}
      </UserNameContext.Provider>
    );
  };
