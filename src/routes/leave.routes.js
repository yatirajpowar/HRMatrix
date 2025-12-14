const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Test route
router.get("/", auth, role("COMPANY_ADMIN", "HR", "EMPLOYEE"), (req, res) => {
  res.json({ message: "Leave routes working" });
});

module.exports = router;
