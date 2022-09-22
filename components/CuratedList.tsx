import { Box, Paper, Text } from '@mantine/core';
import { useCuratedPhotos } from 'hooks';
import Image from 'next/image';

export const CuratedList = () => {
  const { data: curated } = useCuratedPhotos();
  return (
    <Box>
      {curated?.map(({ id, width, height, src, photographer }) => (
        <Paper key={id}>
          <Image
            src={src.original}
            width={width}
            height={height}
            alt=""
            objectFit="cover"
            loading="lazy"
            style={{ width: '10rem' }}
          />
          <Text>By {photographer}</Text>
        </Paper>
      ))}
    </Box>
  );
};
