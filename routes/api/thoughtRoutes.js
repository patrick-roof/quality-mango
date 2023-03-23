const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  //^this is to get a thought by its ID
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts)

router.route('/:userId').post(createThought)

router
  .route('/:Id')
  //^ this goes to the correct route for some reason?
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;