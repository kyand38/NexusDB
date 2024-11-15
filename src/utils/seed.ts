import mongoose from 'mongoose';
import db from '../config/connection';
import User from '../models/User';
import Thought from '../models/Thought';

const seedData = async () => {
    try {
        // Connect to the database if needed
        await db.once('open', () => console.log("Database connected for seeding"));

        // Optional: Clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});

        // Define sample users
        const users = [
            { username: 'astro_adventurer', email: 'astro@galaxy.com' },
            { username: 'code_wizard', email: 'wizard@magicmail.com' },
            { username: 'nova_knight', email: 'nova@starlight.com' },
            { username: 'quantum_queen', email: 'queen@quantumrealm.com' },
            { username: 'zen_master', email: 'zen@peace.com' },
        ];

        // Define sample thoughts (quotes)
        const thoughts = [
            { thoughtText: '“The only way to achieve the impossible is to believe it is possible.”', username: 'astro_adventurer' },
            { thoughtText: '“Any sufficiently advanced technology is indistinguishable from magic.”', username: 'code_wizard' },
            { thoughtText: '“The stars don’t look bigger, but they do look brighter.”', username: 'nova_knight' },
            { thoughtText: '“Reality is merely an illusion, albeit a very persistent one.”', username: 'quantum_queen' },
            { thoughtText: '“Be the change you wish to see in the world.”', username: 'zen_master' },
            { thoughtText: '“The journey of a thousand miles begins with a single step.”', username: 'zen_master' },
            { thoughtText: '“Logic will get you from A to B. Imagination will take you everywhere.”', username: 'code_wizard' },
            { thoughtText: '“Somewhere, something incredible is waiting to be known.”', username: 'astro_adventurer' },
            { thoughtText: '“Look up at the stars and not down at your feet.”', username: 'nova_knight' },
        ];

        // Insert users and thoughts
        const createdUsers = await User.insertMany(users);
        console.log('Users seeded:', createdUsers);

        const createdThoughts = await Thought.insertMany(thoughts);
        console.log('Thoughts seeded:', createdThoughts);

    } catch (err) {
        console.error('Error seeding data:', err);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
};

// Run the seeding function
seedData();