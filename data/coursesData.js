export const courses = [
    {
      id: 1,
      title: 'React Native Basics',
      description: 'Learn the basics of React Native and how to build mobile apps with it. This course is perfect for beginners. You will learn how to build a simple mobile app with React Native. The course covers the basics of React Native, including components, props, state, and more. You will also learn how to use Expo to build and test your app on your phone or emulator. By the end of the course, you will have built a simple mobile app that you can share with your friends and family. This course is perfect for beginners who want to learn how to build mobile apps with React Native.',
    },
    {
      id: 2,
      title: 'Advanced React Native',
      description: 'Take your React Native skills to the next level with this advanced course. You will learn how to build more complex mobile apps with React Native. The course covers advanced topics such as navigation, animations, gestures, and more. You will also learn how to use third-party libraries to add features to your app. By the end of the course, you will have built a more complex mobile app that you can publish to the app store. This course is perfect for developers who want to take their React Native skills to the next level.',
    },
  ];

export const getCourseById = (id) => {
    return courses.find((course) => course.id === parseInt(id));
};