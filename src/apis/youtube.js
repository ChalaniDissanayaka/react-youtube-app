import axios from "axios";

const KEY = "AIzaSyCo7AV6_9s2ZmIP-W6BXqJFVTvvYBlnfR0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 8,
    key: KEY,
  },
});