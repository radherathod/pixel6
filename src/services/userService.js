// src/services/userService.js
import axios from "axios";

const API_URL = "https://dummyjson.com/users";

export const fetchUsers = async (limit, skip, filters = {}) => {
  const response = await axios.get(API_URL, {
    params: {
      limit,
      skip,
      ...filters,
    },
  });
  return response.data;
};
