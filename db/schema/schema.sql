-- Master schema: run in order to satisfy FK constraints
-- 1) companies
SOURCE companies.sql;

-- 2) users (depends on companies)
SOURCE users.sql;

-- 3) business_units (depends on companies)
SOURCE business_units.sql;

-- 4) leaves (depends on users)
SOURCE leaves.sql;
