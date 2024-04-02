import axios from "axios";
const API_KEY = "f88eceQUbOOUdL3sDQaiWPgUyaLCR2WD97kmNmfU";
const API_URL = "https://api.nasa.gov/planetary/apod";

const getApiData = async (urlParams?: string) => {
  try {
    const response = await axios(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParams !== "undefined" && urlParams?.length > 0
          ? urlParams
          : ""
      }`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getApiData;
