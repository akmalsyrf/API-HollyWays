const express = require("express");
const router = express.Router();

//auth
const { login, register } = require("../controllers/auth");
router.post("/login", login);
router.post("/register", register);

//user
const { getAllUsers, deleteUser } = require("../controllers/user");
router.get("/users", getAllUsers);
router.delete("/user/:id", deleteUser);

// fund
const { getAllFunds, getFund, addFund, editFund, deleteFund, editUserDonateByFund } = require("../controllers/fund");
router.get("/funds", getAllFunds);
router.get("/fund/:id", getFund);
router.post("/fund", addFund);
router.patch("/fund/:id", editFund);
router.delete("/fund/:id", deleteFund);
router.patch("/fund/:fundId/:userId", editUserDonateByFund);

module.exports = router;
