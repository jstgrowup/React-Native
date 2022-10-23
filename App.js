
import { Image, Text, StyleSheet, View, style } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlexBox from "./src/COmponents/FlexBox"
import NetflixCard from "./src/COmponents/NetflixCard"
import Counter from "./src/Hooks/Counter"
import LoginForm from "./src/Hooks/LoginForm"
import ReactNavigation from "./src/Hooks/ReactNavigation"
import UseEffect from "./src/Hooks/UseEffect"
import CustomCompo from "./src/screens/CustomCompo"
import EcomFlatList from "./src/screens/EcomFlatList"
import First from "./src/screens/First"
import FlatListDemo from "./src/screens/FlatListDemo"
import ImageFlatList from "./src/screens/Images"
import RNButton from "./src/screens/RNButton"
import Home from "./src/Project/Home";

const App = () => {

  const stack = createNativeStackNavigator()
  return  <Home />
   
      
     
   
  
  // <NavigationContainer>
  //   <stack.Navigator initialRouteName="LoginForm">
  //     <stack.Screen name="Login" component={LoginForm} />
  //     <stack.Screen name="Use" component={UseEffect} />
  //   </stack.Navigator>
  // </NavigationContainer>
  {/* <CustomCompo />
    <First />
    <Text style={styles.textStyle}>hello world</Text>
    <FlatListDemo />
    <EcomFlatList /> */}
  {/* <ImageFlatList /> */ }
  {/* <RNButton /> */ }
  {/* <NetflixCard /> */ }
  {/* <FlexBox /> */ }
  {/* <Counter /> */ }
  {/* <UseEffect /> */ }
  {/* <LoginForm /> */ }

}
const styles = StyleSheet.create({})
export default App