import { useQuery } from '@tanstack/react-query';

interface Photo {
  id: string;
  width: number;
  height: number;
  src: {
    original: string;
    portrait: string;
  };
  photographer: string;
}
const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(`https://api.pexels.com/v1/curated`, {
    headers: {
      Authorization: API_KEY as string,
    },
  });

  const data = await res.json();
  
  return data.photos;
};

export const useCuratedPhotos = () =>
  useQuery<Photo[], Error>(['curated-photos'], getCuratedPhotos);
