import { FC } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PostImage as PostImageTypes, RootStackParams } from "../../types";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 15,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#ececec",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: "#ececec",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default PostImage;
