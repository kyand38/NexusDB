import { Router } from 'express';
const router = Router();
import {
    getAllThoughts,
    getAThoughtById,
    createAthought,
    updateAThoughtById,
    deleteAThoughtById,
    addAReaction,
    deleteAReaction
} from '../../controllers/thoughtController.js';

// Define routes for thoughts
router.route('/')
    .get(getAllThoughts)    // GET all thoughts
    .post(createAthought);   // POST a new thought

router.route('/:thoughtId')
    .get(getAThoughtById)     // GET a thought by ID
    .put(updateAThoughtById)  // PUT to update a thought by ID
    .delete(deleteAThoughtById); // DELETE a thought by ID

router.route('/thoughtId/reactions')
    .post(addAReaction)

router.route('/thoughtId/reactions/reactionId')
 .delete(deleteAReaction)
// Export the router
export default router;