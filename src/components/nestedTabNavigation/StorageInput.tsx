import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const StorageInput = () => {

  async function storeText(text: string) {
    try {
      await AsyncStorage.setItem('save', text);
    } catch (error) {
      // Error saving text
    }
  }

  const [text, setText] = useState("Loading...")

  useEffect(() => {
    AsyncStorage.getItem('save').then(storedText => {
      if (storedText != null) {
        setText(storedText)
      }
    })
  }, [])

  return (
      <SafeAreaView>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              storeText(text)
          }}>
            <Text>Store</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    margin: 12,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
});

export default StorageInput;
