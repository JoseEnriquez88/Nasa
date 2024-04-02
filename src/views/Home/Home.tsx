import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import Header from "../../components/Header/Header";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";
import getApiData from "../../utils/api";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await getApiData();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const lastFiveDaysImagesResponse = await getApiData(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  console.log(lastFiveDaysImages);

  //! ACA ESTA LO QUE SE RENDERIZA EN PANTALLA, NO TE PIERDAS COMO EL GONZO, LOBO ⬇️
  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "rgba(7,16,93,255)",
  },
});

export default Home;
