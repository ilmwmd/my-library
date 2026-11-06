import axios from "axios";
const API_URL = "http://localhost:3000/books";
export const getAllBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createBook = async (newBook) => {
  const response = await axios.post(API_URL, newBook);
  return response.data;
};
export const deleteBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
export const updateBook = async (id, updatedBook) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedBook);
  return response.data;
};