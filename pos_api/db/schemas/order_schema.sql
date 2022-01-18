PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS `placed_order` (
  `id` integer PRIMARY KEY,
  `customer_id` integer,
  `type` text,
  `is_ongoing` BOOLEAN DEFAULT 0 NOT NULL,
  `total_amount` real DEFAULT 0.00 NOT NULL,
  `created_at` datetime DEFAULT (now()) NOT NULL
);
 
CREATE TABLE IF NOT EXISTS `item` (
  `id` integer PRIMARY KEY,
  `order_id` integer NOT NULL,
  `item_category_id` integer,
  `item_id` integer,
  `item_subcategory_id` integer,
  `quantity` integer DEFAULT 1,
  `total` real DEFAULT 0.00 NOT NULL,
  FOREIGN KEY(order_id) REFERENCES placed_order(id) ON DELETE CASCADE
);