import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async () =>
  await axios
    .get(`https://api.pexels.com/v1/curated`, {
      headers: {
        Authorization: API_KEY as string,
      },
    })
    .then((res) => res.data);

export const useCuratedPhotos = () => {
  return useQuery(['curated-photos'], getCuratedPhotos);
};
