import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID aty5rlnXwRGF86q1vlzadkZMT8JQqJ1SqjMwZvGxrEw`,
  },
});
