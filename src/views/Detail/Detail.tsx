import Header from "../../components/Header/Header";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";

const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    flex: 1,
    backgroundColor: "#2c449d",
    borderRadius: 15,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    borderColor: "#ececec",
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: "#ececec",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "#ececec",
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "#ececec",
    fontSize: 16,
  },
});

export default Detail;
