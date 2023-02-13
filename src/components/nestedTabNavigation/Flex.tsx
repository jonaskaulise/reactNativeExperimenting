import {SafeAreaView, StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.flexContainer}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    padding: 20,
    //flexDirection: 'column',
  },
  safeArea: {
    flex: 1,
  },
});

export default Flex;
