const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

// Test route
router.get("/", auth, role("SUPER_ADMIN", "COMPANY_ADMIN"), (req, res) => {
  res.json({ message: "Company routes working" });
});

module.exports = router;
