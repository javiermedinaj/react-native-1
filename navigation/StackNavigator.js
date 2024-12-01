import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

const AuthContext = createContext();

const StackNavigator = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default StackNavigator;