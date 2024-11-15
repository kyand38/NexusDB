import mongoose from 'mongoose';
import db from '../config/connection.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

const seedData = async () => {
    try {
        await db.once('open', () => console.log("Database connected for seeding"));

        // Clear existing data
        await User.deleteMany({});
        await Thought.deleteMany({});

        // Insert users
        const [user1, user2, user3, user4] = await User.insertMany([
            { username: 'astro_adventurer', email: 'astro@galaxy.com' },
            { username: 'nova_knight', email: 'nova@starlight.com' },
            { username: 'zen_master', email: 'zen@peace.com' },
            { username: 'quantum_queen', email: 'queen@quantumrealm.com' }
        ]);

        // Insert thoughts associated with these users
        const thought1 = await Thought.create({
            thoughtText: '“The only way to achieve the impossible is to believe it is possible.”',
            username: user1.username
        });
        const thought2 = await Thought.create({
            thoughtText: '“Look up at the stars and not down at your feet.”',
            username: user2.username
        });
        const thought3 = await Thought.create({
            thoughtText: '“Be the change you wish to see in the world.”',
            username: user3.username
        });
        const thought4 = await Thought.create({
            thoughtText: '“Reality is merely an illusion, albeit a very persistent one.”',
            username: user4.username
        });

        // Update users with friends and thoughts
        await User.findByIdAndUpdate(user1._id, {
            $push: { friends: [user2._id, user3._id], thoughts: thought1._id }
        });
        await User.findByIdAndUpdate(user2._id, {
            $push: { friends: [user1._id, user4._id], thoughts: thought2._id }
        });
        await User.findByIdAndUpdate(user3._id, {
            $push: { friends: [user1._id, user4._id], thoughts: thought3._id }
        });
        await User.findByIdAndUpdate(user4._id, {
            $push: { friends: [user2._id, user3._id], thoughts: thought4._id }
        });

        console.log('Users and thoughts seeded successfully');
    } catch (err) {
        console.error('Error seeding data:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedData();