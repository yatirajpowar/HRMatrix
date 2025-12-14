#!/usr/bin/env node
require("dotenv").config();

const db = require("../src/config/db");
const { hashPassword } = require("../src/utils/password");

function parseArgs() {
  const out = {};
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [k, v] = arg.slice(2).split("=");
      out[k] = v === undefined ? true : v;
    }
  });
  return out;
}

async function main() {
  const args = parseArgs();
  const email = args.email || args.e;
  const password = args.password || args.p;
  const name = args.name || args.n || "Test User";
  const role = args.role || "EMPLOYEE";
  const company_id = args.company_id || args.company || null;

  if (!email || !password) {
    console.error("Usage: node scripts/add_test_user.js --email=you@example.com --password=secret [--role=EMPLOYEE] [--company_id=1]");
    process.exit(1);
  }

  try {
    const hashed = await hashPassword(password);
    const sql = "INSERT INTO users (name, email, password, role, company_id) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, email, hashed, role, company_id], (err, result) => {
      if (err) {
        console.error("Insert failed:", err.message || err);
        process.exit(1);
      }
      console.log(`User inserted with id=${result.insertId}`);
      process.exit(0);
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    process.exit(1);
  }
}

main();
