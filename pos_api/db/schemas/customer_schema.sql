PRAGMA foreign_keys = ON;


CREATE TABLE IF NOT EXISTS `zip_code` (
  `id` integer PRIMARY KEY,
  `code` integer DEFAULT 0 NOT NULL
);

CREATE TABLE IF NOT EXISTS `customer` (
  `id` integer PRIMARY KEY,
  `fname` text,
  `lname` text,
  `address` text,
  `zip_code` integer,
  `phone` integer NOT NULL,
  `note` text,
  `times_ordered` integer DEFAULT 0 NOT NULL,
  `total_spent` real DEFAULT 0 NOT NULL,
  `last_ordered` datetime,
  `created_at` datetime DEFAULT (now()),
  FOREIGN KEY(zip_code) REFERENCES zip_code(code)
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_phone_id
ON customer (phone);