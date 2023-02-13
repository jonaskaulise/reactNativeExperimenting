import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';

const First = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.buttonView}>
        <Button
          title={'Go to second'}
          onPress={() => navigation.push('Second')}
        />
      </View>
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

export default First;
