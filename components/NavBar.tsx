import {
  ActionIcon,
  Grid,
  Paper,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons';

export const NavBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === 'dark';

  return (
    <Paper py="lg">
      <Grid justify="space-between" align="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-capture"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="3.5"
          stroke={dark ? '#ffffff' : '#000000'}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <Text size={28} sx={{ fontFamily: 'Aleo', fontWeight: 700 }}>
          Pixie
        </Text>

        <ActionIcon
          title="Toggle color scheme"
          size="lg"
          variant="outline"
          radius="md"
          color={dark ? 'green' : 'blue'}
          onClick={() => toggleColorScheme()}
        >
          {dark ? <IconMoon /> : <IconSun />}
        </ActionIcon>
      </Grid>
    </Paper>
  );
};
