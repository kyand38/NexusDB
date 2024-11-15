import { Router } from 'express';
const router = Router();
import {
    getAllUsers,
    getAUserById,
    createAUser,
    updateAUserById,
    deleteAUserById,
    addAFriendById,
    removeAFriend
} from '../../controllers/userController.js';

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createAUser);

// /api/users/:userId
router.route('/:userId')
    .get(getAUserById)
    .put(updateAUserById)
    .delete(deleteAUserById);

router.route('/:userId/friends/:friendId')
    .post(addAFriendById) // Add a friend
    .delete(removeAFriend); // Remove a friend

export default router;
