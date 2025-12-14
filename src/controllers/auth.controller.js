const db = require("../config/db");
const { generateToken } = require("../utils/jwt");
const { comparePassword } = require("../utils/password");

exports.login = (req, res) => {
  const { email, password } = req.body;

  // SUPER ADMIN
  if (
    email === process.env.SUPER_ADMIN_EMAIL &&
    password === process.env.SUPER_ADMIN_PASSWORD
  ) {
    const token = generateToken({
      user_id: 0,
      role: "SUPER_ADMIN",
    });
    return res.json({ token });
  }

  // NORMAL USERS
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, result) => {
    if (err || result.length === 0)
      return res.status(401).json({ message: "Invalid credentials" });

    const user = result[0];
    const match = await comparePassword(password, user.password);

    if (!match)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken({
      user_id: user.user_id,
      role: user.role,
      company_id: user.company_id,
    });

    res.json({ token });
  });
};
