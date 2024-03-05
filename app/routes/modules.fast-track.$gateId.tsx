import { FC, useState } from 'react';
import {
  Group,
  TextInput,
  Stack,
  Stepper,
  Tabs,
  Title,
  rem,
  Accordion,
  Grid,
  Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { useParams } from '@remix-run/react';
import {
  IconDialpad,
  IconCash,
  IconPhoneCheck,
  IconEdit,
} from '@tabler/icons-react';

import classes from '~/styles/fast-track.module.css';

const CodeVerification: FC = () => {
  const form = useForm();

  return (
    <form onSubmit={form.onSubmit(console.log)} autoComplete="off">
      <Grid p="md" gutter="md" align="flex-start">
        <Grid.Col span={4}>
          <TextInput
            name="code"
            label="Kod"
            placeholder="Kod"
            required
            {...form.getInputProps('code')}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Accordion variant="separated" flex={1}>
            <Accordion.Item value="manual-entry">
              <Accordion.Control icon={<IconEdit />}>
                Manual Giriş
              </Accordion.Control>
              <Accordion.Panel>
                <TextInput
                  name="customer-name"
                  label="Ad Soyad"
                  placeholder="Ad Soyad"
                  {...form.getInputProps('customer-name')}
                />
                <DateInput
                  name="date"
                  label="Tarih"
                  placeholder="Tarih"
                  {...form.getInputProps('date')}
                />
                <TextInput
                  name="iata-code"
                  label="Havayolu IATA Kodu"
                  placeholder="Havayolu IATA Kodu"
                  {...form.getInputProps('iata-code')}
                />
                <TextInput
                  name="flight-number"
                  label="Uçuş Numarası"
                  placeholder="Uçuş Numarası"
                  {...form.getInputProps('flight-number')}
                />
                <TextInput
                  name="seat-number"
                  label="Koltuk No"
                  placeholder="Koltuk No"
                  {...form.getInputProps('seat-number')}
                />
                <TextInput
                  disabled
                  name="to-airport-iata"
                  label="To Airport IATA"
                  placeholder="To Airport IATA"
                />
                <TextInput
                  disabled
                  name="from-airport-iata"
                  label="From Airport IATA"
                  placeholder="From Airport IATA"
                />
                <TextInput
                  name="class-code"
                  label="Clas Code"
                  placeholder="Clas Code"
                  {...form.getInputProps('class-code')}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Grid.Col>
      </Grid>
    </form>
  );
};

const PhoneVerification: FC = () => {
  const form = useForm();

  return (
    <form onSubmit={form.onSubmit(console.log)} autoComplete="off">
      <Grid p="md" gutter="md" align="flex-start">
        <Grid.Col span={4}>
          <TextInput
            name="code"
            label="Kod"
            placeholder="Kod"
            required
            {...form.getInputProps('code')}
          />
        </Grid.Col>
        <Grid.Col span={8}>

        </Grid.Col>
      </Grid>
    </form>
  );
}

const CustomerVerification: FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('code');

  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="code" leftSection={<IconDialpad style={iconStyle} />}>
          Kod ile
        </Tabs.Tab>
        <Tabs.Tab
          value="phone"
          leftSection={<IconPhoneCheck style={iconStyle} />}>
          Telefon ile
        </Tabs.Tab>
        <Tabs.Tab value="cash" leftSection={<IconCash style={iconStyle} />}>
          Nakit ödeme ile
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="code">
        <CodeVerification />
      </Tabs.Panel>

      <Tabs.Panel value="phone">
        <PhoneVerification />
      </Tabs.Panel>

      <Tabs.Panel value="cash">With Cash</Tabs.Panel>
    </Tabs>
  );
};

export default function FastTrackPage() {
  const { gateId } = useParams();

  const [active, setActive] = useState(0);

  return (
    <Stack>
      <Group justify="center" className={classes.title}>
        <Title order={3}>{`Hızlı Geçiş > Gidiş Kapısı - ${gateId}`}</Title>
      </Group>

      <Stack className={classes.main}>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}>
          <Stepper.Step label="Müşteri Bilgilerini Doğrula">
            <CustomerVerification />
          </Stepper.Step>
          <Stepper.Step label="Müşteri Bilgileri">
            Step 2 content: Verify email
          </Stepper.Step>
          <Stepper.Step label="Biniş Kartı ve misafir bilgileri">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group>
          <Button>Devam Et</Button>
        </Group>
      </Stack>
    </Stack>
  );
}
