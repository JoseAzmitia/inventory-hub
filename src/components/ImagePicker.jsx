// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ImagePickerButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.imagePickerButton}>
      <Ionicons name="ios-image-outline" size={64} color="#4F4F4F" />
    </TouchableOpacity>
  );
}

function ImagePickerComponent() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 200,
      }}
    >
      {image ? (
        <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 10 }} />
      ) : (
        <ImagePickerButton onPress={pickImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imagePickerButton: {
    width: 120,
    height: 120,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImagePickerComponent;
