import { relations } from "drizzle-orm";
import { pgTable, serial, numeric, integer } from "drizzle-orm/pg-core";

import { categories } from "./categories";
import { transactions } from "./transactions";

export const transactionSplits = pgTable("transaction_splits", {
  id: serial("id").primaryKey(),
  transactionId: integer("transaction_id")
    .references(() => transactions.id, { onDelete: "cascade" })
    .notNull(),
  categoryId: integer("category_id")
    .references(() => categories.id, { onDelete: "cascade" })
    .notNull(),
  amount: numeric("amount", { precision: 14, scale: 2 }),
});

export const transactionSplitsRelations = relations(
  transactionSplits,
  ({ one }) => ({
    transaction: one(transactions, {
      fields: [transactionSplits.transactionId],
      references: [transactions.id],
    }),
    category: one(categories, {
      fields: [transactionSplits.categoryId],
      references: [categories.id],
    }),
  })
);
