import axios from "axios";

export const useRequest = () => {
  const req = axios.create({
    baseURL: "https://api.pokemontcg.io/v2/",
    headers: {
      Accept: "application/json",
      "X-Api-Key": "aaf5419d-4705-4798-a73c-acd2efcd7989",
    },
  });

  return req;
};
