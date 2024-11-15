import { Router } from 'express';
const router = Router();
import {
    getAllUsers,
    getAUserById,
    createAUser,
    updateAUserById,
    deleteAUserById
} from '../../controllers/userController';

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createAUser);

// /api/users/:userId
router.route('/:userId')
    .get(getAUserById)
    .put(updateAUserById)
    .delete(deleteAUserById);

export default router;
