import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageExample = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tree}
        source={require('../../assets/tree.jpg')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tree: {
    width: '100%',
    height: '50%',
  },
});

export default ImageExample;
