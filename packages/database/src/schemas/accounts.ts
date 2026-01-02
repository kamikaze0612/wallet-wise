import { relations } from "drizzle-orm";
import { numeric, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { savingGoals } from "./saving-goals";
import { timestamps } from "./timestamps";
import { transactions } from "./transactions";
import { users } from "./users";

export const currencyEnum = pgEnum("currency", ["usd", "jpy", "mnt"]);

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  currency: currencyEnum().notNull(),
  openingBalance: numeric("opening_balance", { precision: 14, scale: 2 })
    .notNull()
    .default("0"),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  ...timestamps,
});

export const accountsRelations = relations(accounts, ({ one, many }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
  transactions: many(transactions),
  savingGoals: many(savingGoals),
}));
