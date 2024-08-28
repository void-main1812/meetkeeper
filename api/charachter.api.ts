import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const getAllCharachters = async (page: number) => {
  const response = await axios.get(`${baseURL}/character/?page=${page}`);
  return response.data;
};

export const getFilteredCharachters = async (status: string, page: number) => {
  const response = await axios.get(`${baseURL}/character?status=${status}&page=${page}`);
  return response.data;
};

export const getCharachterById = async (id: number) => {
  const response = await axios.get(`${baseURL}/character/${id}`);
  return response.data;
};

export const getEpisodeList = async (episodeList: string[]) => {
  const response = await axios.get(`${baseURL}/episode/${episodeList}`);
  return response.data;
};
