const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { createUser } = require("../controllers/user.controller");

// Test route
// router.get("/", auth, role("SUPER_ADMIN", "COMPANY_ADMIN", "HR"), (req, res) => {
//   res.json({ message: "User routes working" });
// });

// Create user
// router.post("/", auth, role("SUPER_ADMIN", "COMPANY_ADMIN", "HR"), createUser);

router.post("/createuser", createUser);

module.exports = router;
