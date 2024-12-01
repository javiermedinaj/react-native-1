import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseScreen = ({ route }) => {
  const { courseId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Contenido del Curso {courseId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CourseScreen;