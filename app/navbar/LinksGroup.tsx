import { Group, Box, Collapse, ThemeIcon, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from '@remix-run/react';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './LinksGroup.module.css';
import clsx from 'clsx';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  to?: string;
  links?: { label: string; to: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  to: link = '/',
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, { toggle }] = useDisclosure(initiallyOpened || false);

  return (
    <>
      <NavLink to={link} onClick={toggle} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="dark" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </NavLink>
      {hasLinks ? (
        <Collapse in={opened}>
          {links.map((link) => (
            <NavLink
              to={link.to}
              key={link.label}
              className={({ isActive }) =>
                clsx(classes.link, { [classes.activeLink]: isActive })
              }>
              {link.label}
            </NavLink>
          ))}
        </Collapse>
      ) : null}
    </>
  );
}
