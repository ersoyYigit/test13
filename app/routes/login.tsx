import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';

import {
  TextInput,
  Button,
  Title,
  Center,
  Paper,
  Container,
  Anchor,
  Flex,
  PasswordInput,
  Stack,
} from '@mantine/core';
import { useForm, isEmail, hasLength } from '@mantine/form';
import { Form, json, useLoaderData, useSubmit } from '@remix-run/react';
import { auth } from '~/services/auth.server';
import { sessionStorage } from '~/utils/storage';

const i18n = {
  password: 'Password',
  email: 'Email',
  submitButton: 'Login',
  title: 'Airport Services',
  forgotPassword: 'Forgot password?',
};

export async function action({ request }: ActionFunctionArgs) {
  return auth.authenticate('user-pass-form', request, {
    successRedirect: '/modules',
    failureRedirect: '/login',
  });
}

type LoaderError = { message: string } | null;
export async function loader({ request }: LoaderFunctionArgs) {
  await auth.isAuthenticated(request, {
    successRedirect: '/modules',
  });

  const session = await sessionStorage.getSession(
    request.headers.get('Cookie'),
  );
  const error = session.get(auth.sessionErrorKey) as LoaderError;
  return json({ error });
}

export default function LoginPage() {
  const { error } = useLoaderData<typeof loader>();

  const form = useForm({
    initialValues: {
      email: 'john.doe@foo.com',
      password: 'P@$$w0rd',
    },
    validate: {
      email: isEmail('Invalid email'),
      password: hasLength(
        { min: 4 },
        'Password must be at least 4 characters long',
      ),
    },
  });
  const submit = useSubmit();

  return (
    <Stack justify="center" h="100vh" bg="dark.7">
      <Container w={480}>
        <Center c="white">
          <Title order={2}>{i18n.title}</Title>
        </Center>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {error ? <div>{error.message}</div> : null}

          <Form
            onSubmit={form.onSubmit((_values, event) =>
              submit(event!.currentTarget, { replace: true, method: 'POST' }),
            )}>
            <TextInput
              mt="sm"
              required
              name="email"
              label={i18n.email}
              placeholder="Email"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              mt="lg"
              required
              name="password"
              label={i18n.password}
              placeholder="Password"
              {...form.getInputProps('password')}
            />

            <Flex justify="end" mt="md">
              <Anchor
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm">
                {i18n.forgotPassword}
              </Anchor>
            </Flex>

            <Button type="submit" mt="xl" fullWidth>
              {i18n.submitButton}
            </Button>
          </Form>
        </Paper>
      </Container>
    </Stack>
  );
}
