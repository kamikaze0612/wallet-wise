import { relations } from "drizzle-orm";
import {
  pgTable,
  varchar,
  serial,
  pgEnum,
  numeric,
  integer,
} from "drizzle-orm/pg-core";

import { accounts } from "./accounts";
import { timestamps } from "./timestamps";
import { transactionSplits } from "./transaction-splits";
import { users } from "./users";

export const transactionTypeEnum = pgEnum("transaction_type", [
  "income",
  "expense",
  "transfer",
]);

export const transactionStatusEnum = pgEnum("transaction_status", [
  "pending",
  "posted",
]);

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  type: transactionTypeEnum().notNull().default("expense"),
  // Required for income and expense transactions
  amount: numeric("amount", { precision: 14, scale: 2 }),
  // Required for transfer transactions
  amountForSource: numeric("amount_for_source", {
    precision: 14,
    scale: 2,
  }),
  // Required for transfer transactions
  amountForTarget: numeric("amount_for_target", {
    precision: 14,
    scale: 2,
  }),
  // Required for transfer transactions
  sourceToTargetFxRate: numeric("source_to_target_fx_rate", {
    precision: 14,
    scale: 2,
  }),
  status: transactionStatusEnum().notNull().default("pending"),
  notes: varchar("notes", { length: 255 }),
  // Points to the account that the transaction is debited from
  sourceAccountId: integer("source_account_id").references(() => accounts.id, {
    onDelete: "cascade",
  }),
  // Points to the account that the transaction is credited to
  targetAccountId: integer("target_account_id").references(() => accounts.id, {
    onDelete: "cascade",
  }),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  ...timestamps,
});

export const transactionsRelations = relations(
  transactions,
  ({ one, many }) => ({
    user: one(users, {
      fields: [transactions.userId],
      references: [users.id],
    }),
    sourceAccount: one(accounts, {
      fields: [transactions.sourceAccountId],
      references: [accounts.id],
    }),
    targetAccount: one(accounts, {
      fields: [transactions.targetAccountId],
      references: [accounts.id],
    }),
    transactionSplits: many(transactionSplits),
  })
);
