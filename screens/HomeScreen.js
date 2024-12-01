import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../navigation/StackNavigator';

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Lista de Cursos</Text>
      {user ? (
        <>
          <Text>Bienvenido, {user.name}</Text>
          <View style={styles.button}>
            <Button
              title="Ir al Curso 1"
              onPress={() => navigation.navigate('Course', { courseId: 1 })}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Ir al Curso 2"
              onPress={() => navigation.navigate('Course', { courseId: 2 })}
            />
          </View>
        </>
      ) : (
        <Text>Por favor, inicia sesión para ver tus cursos.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
  },
});

export default HomeScreen;