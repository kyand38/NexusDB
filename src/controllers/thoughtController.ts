import { Request, Response } from 'express';
import Thought from '../models/Thought';

export const getAllThoughts = async (_req: Request, res: Response) => {
    try {

        const thoughts = await Thought.find();

        return res.json(thoughts)
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving thoughts', error: err });
    }
}

export const getAThoughtById = async (req: Request, res: Response) => {
    try {

        const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')

        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        return res.json(thought)
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving thought', error: err });
    }
}

export const createAthought = async (req: Request, res: Response) => {
    try {

        if (!req.body.username || !req.body.thoughtText) {
            return res.status(400).json({ message: 'Username and thoughtText are required' });
        }

        const newThought = await Thought.create(req.body)

        return res.json(newThought)
    } catch (err) {
        return res.status(500).json({ message: 'Error creating thought', error: err });

    }
}

export const updateAThoughtById = async (req: Request, res: Response) => {
    try {

        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $set: req.body },
            { new: true }// This option returns the updated document
        );

        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        return res.json(updatedThought)
    } catch (err) {
        return res.status(500).json({ message: 'Error updating thought', error: err });
    }
}

export const deleteAThoughtById = async (req: Request, res: Response) => {
    try {

        const deleteThought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId })

        if (!deleteThought) {
            return res.status(404).json({ message: 'Thought ID not found' });
        }
        return res.json({ message: 'Thought deleted successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'Error deleting Thought', error: err });
    }
}

