import {
  pgTable,
  uuid,
  integer,
  text,
  timestamp,
  pgEnum,
  date,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

const commonColumns = {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

export const categoryTypes = pgEnum("category_types", [
  "income",
  "expense",
  "saving",
] as const);

export const transactions = pgTable("transactions", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  amount: integer("amount").notNull(),
  notes: text("notes"),
  categoryId: uuid("category_id")
    .references(() => categories.id)
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  ...commonColumns,
});

export const categories = pgTable("categories", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  name: text("name").notNull(),
  type: categoryTypes("type").notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  ...commonColumns,
});

export const categoryPlans = pgTable("category_plans", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  categoryId: uuid("category_id")
    .references(() => categories.id)
    .notNull(),
  threshold: integer("threshold").notNull(),
  ...commonColumns,
});

export const savings = pgTable("savings", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  amount: integer("amount").notNull(),
  categoryId: uuid("category_id")
    .references(() => categories.id)
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  ...commonColumns,
});

export const plans = pgTable("plans", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  threshold: integer("threshold").notNull(),
  type: categoryTypes("type").notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  ...commonColumns,
});

export const users = pgTable(
  "users",
  {
    id: uuid("id")
      .primaryKey()
      .$defaultFn(() => uuidv4()),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email").notNull(),
    age: integer("age").notNull(),
    dateOfBirth: date("date_of_birth").notNull(),
    ...commonColumns,
  },
  (table) => [uniqueIndex("email_idx").on(table.email)]
);

export const userKeys = pgTable("user_keys", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidv4()),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  hashedPassword: text("hashed_password").notNull(),
  ...commonColumns,
});
