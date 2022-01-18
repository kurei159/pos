PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS `category` (
  `id` integer PRIMARY KEY,
  `parent_category_id` integer,
  `name` text DEFAULT "UNDEFINED" NOT NULL,
  ON DELETE CASCADE,
  FOREIGN KEY(parent_category_id) REFERENCES category(id)
);

CREATE TABLE IF NOT EXISTS `subcategory` (
  `id` integer PRIMARY KEY,
  `parent_category_id`, integer NOT NULL,
  `name` text DEFAULT "UNDEFINED" NOT NULL,
  ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `modifier` {
  `id` integer PRIMARY KEY,
  `items_id` integer,
  `name` text DEFAULT "UNDEFINED" NOT NULL,
  `price` real DEFAULT 0.00 NOT NULL,
}

CREATE TABLE IF NOT EXISTS `item` (
  `id` integer PRIMARY KEY,
  `category_id` integer NOT NULL,
  `subcategory_id` integer,
  `modifier_id` integer,
  `name` text DEFAULT "UNDEFINED" NOT NULL,
  `price` real DEFAULT 0.00 NOT NULL,
  FOREIGN KEY(category_id) REFERENCES category(id)
  FOREIGN KEY(subcategory_id) REFERENCES subcategory(id)
  FOREIGN KEY(modifier_id) REFERENCES modifier(id)
);

