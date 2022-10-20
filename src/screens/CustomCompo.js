// import { StatusBar } from 'expo-status-bar';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import Home from './src/screens/Home';

// export default function CustomCompo() {
//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.homeTop}>
//         I<Image style={styles.HeaderImage} source={require("./favicon.png")}/>


//         <Text style={styles.HeaderImage}>Welcome to  </Text>
//       </View>
//       {/* <Home /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "white",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { Text, StyleSheet } from "react-native"
const CustomCompo = () => {
  return <Text style={styles.textStyle}>hello world compo</Text>
}
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    // fontSize:"50px"
  },
})
export default CustomCompo