import axios from "axios";

const KEY = "AIzaSyArlEmuYJLrpdMhgT53BIxKGdE9T3VJKuI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 12,
    key: KEY,
  },
});