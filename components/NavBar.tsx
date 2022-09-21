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
        <Text size={22}>PhotoMoto</Text>
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
