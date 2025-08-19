import api from "./axiosInstance";

export const getCourse = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.log("Error fetching courses:", error);
    throw error;
  }
};
