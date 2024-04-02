import { StyleSheet, View } from "react-native";
import Routes from "./src/routes/Routes";

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default App;
