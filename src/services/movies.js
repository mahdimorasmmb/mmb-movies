import { api } from "./api";

function popular() {
  return api("movie/popular");
}

const movies = {
  popular,
};

export default movies;
