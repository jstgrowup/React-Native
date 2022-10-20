
import { Text, StyleSheet, View } from "react-native"
import CustomCompo from "./src/screens/CustomCompo"
const App = () => {
  return (
    <View>

      <CustomCompo />
      <Text style={styles.textStyle}>hello world</Text>

    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop:100
    // fontSize:"50px"
  },
})
export default App