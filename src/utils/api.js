import axios from "axios";

const MAIN_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const getDataFromApi = async (url) => {
  const { data } = await axios.get(`${MAIN_URL}/${url}`, options);
  return data;
};
