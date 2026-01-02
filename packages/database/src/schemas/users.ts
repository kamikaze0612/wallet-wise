import { relations } from "drizzle-orm";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { accounts } from "./accounts";
import { budgets } from "./budgets";
import { categories } from "./categories";
import { savingGoals } from "./saving-goals";
import { timestamps } from "./timestamps";
import { transactions } from "./transactions";

export const users = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  fullname: varchar("fullname").notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  ...timestamps,
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  savingGoals: many(savingGoals),
  budgets: many(budgets),
  categories: many(categories),
  transactions: many(transactions),
}));
