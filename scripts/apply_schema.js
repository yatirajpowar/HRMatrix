#!/usr/bin/env node
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const db = require("../src/config/db");

const SCHEMA_DIR = path.join(__dirname, "..", "db", "schema");
const filesInOrder = ["companies.sql", "users.sql", "business_units.sql", "leaves.sql"];

function usage() {
  console.log("Usage: node scripts/apply_schema.js [--apply] [--drop-first]");
  console.log("  --apply       Actually run the SQL against the DB (default: print only)");
  console.log("  --drop-first  Drop tables in reverse order before creating them");
}

async function runSql(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const apply = args.includes("--apply");
  const dropFirst = args.includes("--drop-first");

  if (!apply) console.log("--apply not passed; printing SQL only (use --apply to execute)");

  try {
    if (dropFirst) {
      const drops = ["leaves", "business_units", "users", "companies"];
      const dropSql = drops.map((t) => `DROP TABLE IF EXISTS ${t};`).join("\n");
      if (apply) {
        console.log("Dropping tables...");
        await runSql(dropSql);
        console.log("Dropped tables");
      } else {
        console.log(dropSql);
      }
    }

    for (const file of filesInOrder) {
      const fp = path.join(SCHEMA_DIR, file);
      const sql = fs.readFileSync(fp, "utf8");
      if (apply) {
        console.log(`Executing ${file}...`);
        // split on semicolons to avoid issues with multiple statements
        const statements = sql.split(/;\s*\n/).map(s => s.trim()).filter(Boolean);
        for (const stmt of statements) {
          await runSql(stmt);
        }
        console.log(`Executed ${file}`);
      } else {
        console.log(`-- ${file} --`);
        console.log(sql);
      }
    }

    if (!apply) console.log('\nRun with `--apply` to execute the above SQL against your DB');
    process.exit(0);
  } catch (err) {
    console.error('Error applying schema:', err.message || err);
    process.exit(1);
  }
}

main();
