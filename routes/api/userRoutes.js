const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

// may need these for something else
router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId ').delete(removeFriend);

module.exports = router;
