import axios from "axios";

const KEY = "AIzaSyBuZaEi1Q_DZIgqjYz6PgOfMcJwuX8_ldo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
