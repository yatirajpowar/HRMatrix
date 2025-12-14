const db = require("../config/db");
const { hashPassword } = require("../utils/password");

exports.createUser = async (req, res) => {
	const { name, email, password, role = "EMPLOYEE", company_id = null } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ message: "name, email and password are required" });
	}

	try {
		// check existing user
		const checkSql = "SELECT user_id FROM users WHERE email = ?";
		db.query(checkSql, [email], async (err, rows) => {
			if (err) return res.status(500).json({ message: "DB error", error: err.message });
			if (rows.length > 0) return res.status(409).json({ message: "Email already exists" });

			const hashed = await hashPassword(password);
			const insertSql = "INSERT INTO users (name, email, password, role, company_id) VALUES (?, ?, ?, ?, ?)";
			db.query(insertSql, [name, email, hashed, role, company_id], (err2, result) => {
				if (err2) return res.status(500).json({ message: "Insert failed", error: err2.message });
				return res.status(201).json({ message: "User created", user_id: result.insertId });
			});
		});
	} catch (err) {
		return res.status(500).json({ message: "Unexpected error", error: err.message });
	}
};

