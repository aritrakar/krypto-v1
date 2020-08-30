import axios from "axios";

//NOTE: ALWAYS INCLUDE key=${NOMICS_API_KEY} in the url while fetching data

/*const NOMICS_API_KEY = "db9d2081f5047ea7ae1ca8056e08c7f3";
const BASE_URL = "https://api.nomics.com/v1/"; */

/*
const urlBuilder = (path, args) => {
  if (args) {
    const url = `${BASE_URL}${path}?key=${NOMICS_API_KEY}&${args}`;
    console.log("url: ", url);
    return url;
  } else {
    const url = `${BASE_URL}${path}?key=${NOMICS_API_KEY}`;
    console.log("url: ", url);
    return url;
  }
}; */

//No API key required for CoinGecko
const BASE_URL = "https://api.coingecko.com/api/v3";

const urlBuilder = (path) => {
  const url = `${BASE_URL}${path}`;
  return url;
};

export const fetchData = async (path) => {
  try {
    const url = urlBuilder(path);
    const data = await axios.get(url).then((response) => response);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {};
