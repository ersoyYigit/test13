import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';

import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from '@remix-run/react';

import { auth } from '~/services/auth.server';
import { Navbar } from '~/navbar';

export const meta: MetaFunction = () => {
  return [
    { title: 'Airports Services' },
    { name: 'description', content: 'Airport services application!' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  return await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });
}

export default function Index() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened] = useDisclosure(true);

  return (
    <AppShell
      layout="alt"
      header={{ height: 64 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
