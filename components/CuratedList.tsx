import { Box } from '@mantine/core';
import { useCuratedPhotos } from 'hooks';

export const CuratedList = () => {
  const { data: curated } = useCuratedPhotos();
  return <Box>{JSON.stringify(curated)}</Box>;
};
