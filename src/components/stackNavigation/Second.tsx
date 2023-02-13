import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

const Second = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.buttonView}>
        <Button
          title={"Go back to first"}
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  safeArea: {
    flex: 1
  }
});

export default Second;
