import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@mantine/core';
import { NavBar } from 'components/NavBar';

const Home: NextPage = () => {
  return (
    <Container size="lg">
      <Head>
        <title>Pexels Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </Container>
  );
};

export default Home;
