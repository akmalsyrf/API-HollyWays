const express = require("express");
const router = express.Router();

//auth
router.post("/login", (req, res) => {});
router.post("/register", (req, res) => {});

//user
router.get("/users", (req, res) => {});
router.delete("/user/:id", (req, res) => {});

// fund
router.get("/funds", (req, res) => {});
router.get("/fund/:id", (req, res) => {});
router.post("/fund", (req, res) => {});
router.patch("/fund/:fundId", (req, res) => {}); //edit fund
router.patch("/fund/:fundId/:userId", (req, res) => {}); //edit user donate by fund
router.delete("/fund/:id", (req, res) => {});

module.exports = router;
