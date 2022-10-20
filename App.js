
import { Text, StyleSheet, View } from "react-native"
import CustomCompo from "./src/screens/CustomCompo"
import First from "./src/screens/First"
import FlatListDemo from "./src/screens/FlatListDemo"
const App = () => {
  return <View>

    <CustomCompo />
    <First />
    <Text style={styles.textStyle}>hello world</Text>
    <FlatListDemo />
  </View>

}
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop: 100 
  },
})
export default App