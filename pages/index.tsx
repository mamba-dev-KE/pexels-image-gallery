import type { NextPage } from 'next';
import Head from 'next/head';
import { useMantineColorScheme } from '@mantine/core';

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div>
      <Head>
        <title>Pexels Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Home;
