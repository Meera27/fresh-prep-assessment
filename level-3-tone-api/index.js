import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 9090;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// GET /tone endpoint
app.get('/tone', (req, res) => {
    // Array of possible tones
    const tones = ['humorous', 'ironic', 'cynical'];

    // Generate a random index to select a tone
    const randomToneIndex = Math.floor(Math.random() * tones.length);

    // Send the randomly selected tone as a JSON response
    res.status(200).json({ tone: tones[randomToneIndex] });
});

// Start the server
try {
    app.listen(PORT, () => {
        console.log(`Tone server listening on PORT: ${PORT}`);
    });
} catch (err) {
    console.error('Error starting the server:', err);
}

export default app;
