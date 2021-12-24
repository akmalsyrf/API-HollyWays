const express = require("express");
const router = express.Router();

//middlewares
const auth = require("../middlewares/auth");
const uploadFile = require("../middlewares/uploadFile");

//auth
const { login, register } = require("../controllers/auth");
router.post("/login", login);
router.post("/register", register);

//user
const { getAllUsers, deleteUser } = require("../controllers/user");
router.get("/users", getAllUsers);
router.delete("/user/:id", deleteUser);

// fund
const { getAllFunds, getFund, addFund, editFund, deleteFund, addUserDonate, editUserDonateByFund } = require("../controllers/fund");
router.get("/funds", getAllFunds);
router.get("/fund/:id", getFund);
router.post("/fund", uploadFile("thumbnail"), addFund);
router.patch("/fund/:id", editFund);
router.delete("/fund/:id", deleteFund);

//userDonate
router.post("/fund/:fundId", uploadFile("proofAttachment"), addUserDonate);
router.patch("/fund/:fundId/:userId", editUserDonateByFund);

module.exports = router;
