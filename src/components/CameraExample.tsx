import { SafeAreaView, StyleSheet } from "react-native";
import React from 'react';
import Camera from "./Camera";

const CameraExample = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Camera/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
});

export default CameraExample;
