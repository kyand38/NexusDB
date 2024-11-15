import User from '../models/User.js';
import { Request, Response } from 'express';

export const getAllUsers = async (_req: Request, res: Response) => {
    try {

        const users = await User.find();

        return res.json(users)
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving users', error: err });
    }
}

export const getAUserById = async (req: Request, res: Response) => {
    try {
        console.log('Received ID:', req.params.userId); // Log the received ID

        const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(user)
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving user', error: err });
    }
}

export const createAUser = async (req: Request, res: Response) => {
    try {

        if (!req.body.username || !req.body.email) {
            return res.status(400).json({ message: 'Username and email are required' });
        }

        const newUser = await User.create(req.body)

        return res.json(newUser)
    } catch (err) {
        return res.status(500).json({ message: 'Error creating user', error: err });

    }
}

export const updateAUserById = async (req: Request, res: Response) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { $set: req.body },
            { new: true }// This {option} returns the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(updatedUser)
    } catch (err) {
        return res.status(500).json({ message: 'Error updating user', error: err });
    }
}

export const deleteAUserById = async (req: Request, res: Response) => {
    try {

        const deleteUser = await User.findByIdAndDelete({ _id: req.params.userId })

        if (!deleteUser) {
            return res.status(404).json({ message: 'User ID not found' });
        }
        return res.json({ message: 'User deleted successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'Error deleting user', error: err });
    }
}

export const addAFriendById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: { friends: req.params.friendId }},
            {new: true},
        );

        if(!user) {
            return res.status(404).json({message: 'User ID not found'})
        }

        return res.json({message: 'Friend added successfully'})

    } catch (err) {
        return res.status(500).json({ message: 'Error adding friend', error: err });
    }
}

export const removeAFriend = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.thoughtId,
            { 
                $pull: { friends: req.params.friendId } 
            },
            { new: true },
        )
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            return res.json({ message: 'Friend removed successfully' })
        } catch (err) {
            return res.status(500).json({ message: 'Error removing friend', err })
        }
}