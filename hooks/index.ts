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
const options = {
  headers: {
    Authorization: API_KEY as string,
  },
};

const getCuratedPhotos = async () => {
  const res = await fetch(`https://api.pexels.com/v1/curated`, options);

  const data = await res.json();

  return data.photos;
};

const getSearchedPhotos = async (search: string) => {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${search}`,
    options
  );

  const data = await res.json();

  return data.photos;
};

export const useCuratedPhotos = () =>
  useQuery<Photo[], Error>(['curated-photos'], getCuratedPhotos, {
    refetchOnWindowFocus: false,
    staleTime: 200000,
  });

// export const useSearchedPhotos = () =>
//   useQuery<Photo[], Error>(['searched-photos'], getSearchedPhotos(), {
//     refetchOnWindowFocus: false,
//     staleTime: 200000,
//   });
