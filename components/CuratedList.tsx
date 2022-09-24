import Image from 'next/image';
import { Grid, Paper, Text } from '@mantine/core';
import { useCuratedPhotos } from 'hooks';

export const CuratedList = () => {
  const { data: curated } = useCuratedPhotos();
  return (
    <Grid gutter="xl">
      {curated?.map(({ id, src, photographer }) => (
        <Grid.Col key={id} xs={12} md={6} lg={4}>
          <Paper
            shadow="lg"
            pb="lg"
            sx={{
              backgroundColor: 'hsl(0 0% 100% / 0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={src.portrait}
              width={400}
              height={650}
              alt=""
              objectFit="cover"
              loading="lazy"
            />
            <Text
              align="center"
              mt="sm"
              size="md"
              weight={600}
              sx={{
                fontFamily: 'Euphoria Script',
                fontSize: '1.5rem',
                letterSpacing: '5px',
              }}
            >
              By {photographer}
            </Text>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};
