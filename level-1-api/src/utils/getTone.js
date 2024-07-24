import { config } from 'dotenv';
config(); // Load environment variables from .env file

const DEFAULT_TONE = 'humorous';

// Check if the required environment variable is set
if (!process.env.TONE_API) {
  console.error('TONE_API environment variable is not set');
  process.exit(1);
}

export default async function getTone() {
    // function to get tone of user by requetsing api
    try {
        const res = await fetch(`${process.env.TONE_API}/tone`, {
            method: 'GET'
        });

        if (res.ok) {
            const { tone } = await res.json();
            return tone;
        } else {
            console.error('Failed to fetch tone, using default');
            return DEFAULT_TONE;
        }
    } catch (err) {
        console.error('Error fetching tone:', err);
        return DEFAULT_TONE;
    }
}
