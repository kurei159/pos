CREATE TABLE IF NOT EXISTS `order` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `customer_id` integer,
  `type` text,
  `is_ongoing` BOOLEAN DEFAULT 0 NOT NULL,
  `total_amount` real DEFAULT 0.00 NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE IF NOT EXISTS `item` (
  `id` integer PRIMARY KEY AUTOINCREMENT,
  `item_cat_id` integer,
  `item_id` integer,
  `quantity` integer DEFAULT 1,
  `total` real DEFAULT 0.00 NOT NULL,
  FOREIGN KEY(id) REFERENCES category(id)
);