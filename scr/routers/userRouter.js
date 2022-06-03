var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const { checkCoordinates } = require("../middlewares/validateJoi");
//POST User
router.post("/user/add", checkCoordinates, userController.addUser);
//GET User
router.get("/user/read", userController.getUser);
//GET searchUser
router.get("/user/search", userController.searchUser);
//PUT editUser
router.put("/user/edit/:id", userController.editUser);
//DELETE User
router.delete("/user/edit/:id", userController.deleteUser);
//GET locate
router.get("/locate", userController.locateUser);

module.exports = router;
