import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  integer,
  numeric,
  pgEnum,
  varchar,
  date,
} from "drizzle-orm/pg-core";

import { categories } from "./categories";
import { timestamps } from "./timestamps";
import { users } from "./users";

export const budgetPeriodEnum = pgEnum("budget_period", [
  "weekly",
  "monthly",
  "yearly",
]);

export const budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  amount: numeric("amount", { precision: 14, scale: 2 }).notNull(),
  period: budgetPeriodEnum().notNull(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  startDate: date("start_date", { mode: "date" }).notNull(),
  endDate: date("end_date", { mode: "date" }).notNull(),
  ...timestamps,
});

export const budgetsRelations = relations(budgets, ({ one }) => ({
  user: one(users, {
    fields: [budgets.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [budgets.categoryId],
    references: [categories.id],
  }),
}));
