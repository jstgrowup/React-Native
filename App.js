
import { Text, StyleSheet, View } from "react-native"
import FlexBox from "./src/COmponents/FlexBox"
import NetflixCard from "./src/COmponents/NetflixCard"
import Counter from "./src/Hooks/Counter"
import UseEffect from "./src/Hooks/UseEffect"
import CustomCompo from "./src/screens/CustomCompo"
import EcomFlatList from "./src/screens/EcomFlatList"
import First from "./src/screens/First"
import FlatListDemo from "./src/screens/FlatListDemo"
import ImageFlatList from "./src/screens/Images"
import RNButton from "./src/screens/RNButton"
const App = () => {
  return <View>

    {/* <CustomCompo />
    <First />
    <Text style={styles.textStyle}>hello world</Text>
    <FlatListDemo />
    <EcomFlatList /> */}
    {/* <ImageFlatList /> */}
    {/* <RNButton /> */}
    {/* <NetflixCard /> */}
    {/* <FlexBox /> */}
    {/* <Counter /> */}
    <UseEffect />
  </View>

}
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100
  },
})
export default App