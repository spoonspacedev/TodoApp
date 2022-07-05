import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from "react-native";

export default function NewScreen(){
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
<View style={{
  backgroundColor:"#FFFFFF",
  height:"100%",
}}>
        <View style={styles.container}>
        <View style={{
          height:50
        }}>
        <TextInput
        placeholder="Title "
        style={styles.title_txt}
      />
        </View>
      <TextInput placeholder="Description"
      multiline={true}>
      </TextInput>
        </View></View>
  );
}

const styles = StyleSheet.create({

  container:{
    left:15,
    right:15,
    top:15,
  },
  title_txt:{
    color: "#000000",
    fontSize:20,
    fontWeight:"700",
  },
  description_txt:{
    color:"#000000",
    backgroundColor:"#FFFFFF",
    fontSize:16,
    paddingEnd:55,
    fontWeight:"400",
  }
});