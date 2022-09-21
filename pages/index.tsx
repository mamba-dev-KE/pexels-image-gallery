import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@mantine/core';
import { NavBar } from 'components/NavBar';
import { useCuratedPhotos } from 'hooks/';

const Home: NextPage = () => {
  const { data: curated, isLoading, error, isError } = useCuratedPhotos();

  if (isLoading) <div>Loading</div>;
  if (isError) <div>{JSON.stringify(error)}</div>;

  return (
    <Container size="lg">
      <Head>
        <title>Pexels Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>{JSON.stringify(curated)}</div>
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
