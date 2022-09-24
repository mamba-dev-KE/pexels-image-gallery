import { Grid, Paper, Text } from '@mantine/core';
import Image from 'next/image';
import { useCuratedPhotos } from 'hooks';

export const CuratedList = () => {
  const { data: curated } = useCuratedPhotos();
  return (
    <Grid gutter="xl">
      {curated?.map(({ id, src, photographer }) => (
        <Grid.Col key={id} xs={12} md={6} lg={4}>
          <Paper>
            <Image
              src={src.portrait}
              width={400}
              height={600}
              alt=""
              objectFit="cover"
              loading="lazy"
            />
            <Text>By {photographer}</Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};
