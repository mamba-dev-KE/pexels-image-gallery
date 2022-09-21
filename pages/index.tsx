import { useMantineColorScheme } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <button onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
};

export default Home;
