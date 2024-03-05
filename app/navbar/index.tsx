import {
  Group,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import {
  IconSwitchHorizontal,
  IconLogout,
  IconPlane,
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
  IconPlayerTrackNextFilled,
} from '@tabler/icons-react';
import { Form, NavLink } from '@remix-run/react';
import { LinksGroup } from './LinksGroup';

import classes from './Navbar.module.css';

const data = [
  {
    label: 'Fast Track',
    initiallyOpened: true,
    icon: IconPlayerTrackNextFilled,
    to: 'fast-track',
    links: [
      { to: 'fast-track/gate-1', label: 'Gate 1' },
      { to: 'fast-track/gate-2', label: 'Gate 2' },
      { to: 'fast-track/gate-3', label: 'Gate 3' },
      { to: 'fast-track/gate-4', label: 'Gate 4' },
    ],
  },
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    links: [
      { label: 'Overview', to: '/' },
      { label: 'Forecasts', to: '/' },
      { label: 'Outlook', to: '/' },
      { label: 'Real time', to: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', to: '/' },
      { label: 'Previous releases', to: '/' },
      { label: 'Releases schedule', to: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', to: '/' },
      { label: 'Change password', to: '/' },
      { label: 'Recovery codes', to: '/' },
    ],
  },
];

export function Navbar() {
  return (
    <div className={classes.navbar}>
      <NavLink to="/modules">
        <Group className={classes.header}>
          <ThemeIcon color="red.9" size={30}>
            <IconPlane size={28} />
          </ThemeIcon>
          <Text className={classes.headerTitle}>Airport Services</Text>
        </Group>
      </NavLink>

      <ScrollArea className={classes.main}>
        {data.map((item) => (
          <LinksGroup {...item} key={item.label} />
        ))}
      </ScrollArea>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.footerLink}
          onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal
            className={classes.footerLinkIcon}
            stroke={1.5}
          />
          <span>Change account</span>
        </a>

        <Form method="POST" id="logout-form" action="/logout">
          <UnstyledButton type="submit" className={classes.footerLink}>
            <IconLogout className={classes.footerLinkIcon} stroke={1.5} />
            <span>Logout</span>
          </UnstyledButton>
        </Form>
      </div>
    </div>
  );
}
