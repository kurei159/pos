PRAGMA foreign_keys = ON;


CREATE TABLE IF NOT EXISTS `zip_code` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `code` integer DEFAULT 0 NOT NULL
);

CREATE TABLE IF NOT EXISTS `customer` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `name` text,
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

CREATE TABLE IF NOT EXISTS `category` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `name` text DEFAULT "UNDEFINED" NOT NULL
);

CREATE TABLE IF NOT EXISTS `item` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `name` text DEFAULT "UNDEFINED" NOT NULL,
  `quantity` integer DEFAULT 1,
  `price` real DEFAULT 0.00 NOT NULL,
  FOREIGN KEY(id) REFERENCES category(id)
);

CREATE TABLE IF NOT EXISTS `order` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `customer_id` integer,
  `type` text,
  `is_ongoing`, BOOLEAN DEFAULT 0 NOT NULL,
  `total_amount` real DEFAULT 0.00 NOT NULL,
  `created_at` datetime DEFAULT (now()),
  FOREIGN KEY(customer_id) REFERENCES customer(id),
  FOREIGN KEY(id) REFERENCES item(id)
);



CREATE UNIQUE INDEX IF NOT EXISTS idx_phone_id
ON customer (phone);