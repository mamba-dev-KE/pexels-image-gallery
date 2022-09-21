import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Container } from '@mantine/core';
import { useCuratedPhotos } from 'hooks/';
import { NavBar, CuratedList } from 'components';

const Home: NextPage = () => {
  const { isLoading, error } = useCuratedPhotos();

  if (isLoading) return <Box>Loading</Box>;
  if (error instanceof Error)
    return <Box sx={{ color: 'red' }}>{error.message}</Box>;

  return (
    <Container size="lg">
      <Head>
        <title>Pexels Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <CuratedList />
    </Container>
  );
};

// export const getServerSideProps = async () => {
//   const data = await getCuratedPhotos();
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default Home;
