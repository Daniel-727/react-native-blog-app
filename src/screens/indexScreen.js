import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  // React has a hook called useContext which lets us get a Context's value prop
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
