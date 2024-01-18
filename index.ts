import { createClient } from 'redis';

async function set(key: string, value: unknown) {
    const client = await createClient().connect();
    client.set(key, value);
}
