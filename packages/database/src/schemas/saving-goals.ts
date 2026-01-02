import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  numeric,
  integer,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

import { accounts } from "./accounts";
import { timestamps } from "./timestamps";
import { users } from "./users";

export const savingGoalPeriodEnum = pgEnum("saving_goal_period", [
  "weekly",
  "monthly",
  "yearly",
]);

export const savingGoals = pgTable("saving_goals", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accountId: integer("account_id")
    .notNull()
    .references(() => accounts.id, { onDelete: "cascade" }),
  period: savingGoalPeriodEnum().notNull().default("monthly"),
  targetAmount: numeric("target_amount", { precision: 14, scale: 2 }).notNull(),
  ...timestamps,
});

export const savingGoalsRelations = relations(savingGoals, ({ one }) => ({
  user: one(users, {
    fields: [savingGoals.userId],
    references: [users.id],
  }),
  account: one(accounts, {
    fields: [savingGoals.accountId],
    references: [accounts.id],
  }),
}));
