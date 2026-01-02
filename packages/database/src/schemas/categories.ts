import { relations } from "drizzle-orm";
import {
  pgTable,
  varchar,
  serial,
  boolean,
  integer,
  AnyPgColumn,
} from "drizzle-orm/pg-core";

import { budgets } from "./budgets";
import { timestamps } from "./timestamps";
import { transactionSplits } from "./transaction-splits";
import { users } from "./users";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  // Mark as AnyPgColumn to avoid type error
  parentId: integer("parent_id").references((): AnyPgColumn => categories.id, {
    onDelete: "set null",
  }),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  isActive: boolean("is_active").notNull().default(true),
  ...timestamps,
});

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentId],
    references: [categories.id],
  }),
  children: many(categories),
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
  budgets: many(budgets),
  transactionSplits: many(transactionSplits),
}));
