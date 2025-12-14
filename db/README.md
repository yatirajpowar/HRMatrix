# Database schema files

This folder contains schema SQL files for the application's MySQL database.

Files:
- `companies.sql` — companies table
- `users.sql` — users table (inferred from application requirements)
- `business_units.sql` — business units belonging to companies
- `leaves.sql` — leave requests referencing users
- `schema.sql` — master file referencing the above

Quick usage:

Print SQL (safe):

```bash
npm run db:schema:print
```

Apply SQL to DB:

```bash
npm run db:schema:apply
```

Notes:
- The apply script uses the same DB connection as the app (`src/config/db.js`) and requires your `.env` to be set correctly.
- Use `--drop-first` with caution to drop existing tables before creating them:

```bash
node scripts/apply_schema.js --apply --drop-first
```
