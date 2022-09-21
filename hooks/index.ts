import { useQuery } from '@tanstack/react-query';

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(`https://api.pexels.com/v7/curated`, {
    headers: {
      Authorization: API_KEY as string,
    },
  });

  const data = await res.json();

  return data.photos;
};

export const useCuratedPhotos = () => {
  return useQuery(['curated-photos'], getCuratedPhotos);
};
