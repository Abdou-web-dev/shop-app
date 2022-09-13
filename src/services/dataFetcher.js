import axios from "axios";

//this is how we get all clothes using axios from the local server database port 8000
const url = "http://localhost:8002/womensBasicClothes";

const getAllClothes = async () => {
  const { data } = await axios.get(`${url}`); //here, I use axios with "get" method to retrieve the data , and I am storing the result in a variable which I call "data"
  return data;
};
const url2 = "http://localhost:8006/urls";

const getAllClothesUrls = async () => {
  const { data } = await axios.get(`${url2}`);
  return data;
};

export { getAllClothes, getAllClothesUrls };
