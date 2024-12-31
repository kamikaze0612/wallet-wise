import { relations } from "drizzle-orm";

import {
  categories,
  categoryPlans,
  plans,
  savings,
  transactions,
  userKeys,
  users,
} from "./schema";

export const categoriesRelations = relations(categories, ({ many, one }) => ({
  transactions: many(transactions),
  categoryPlan: one(categoryPlans, {
    fields: [categories.id],
    references: [categoryPlans.categoryId],
  }),
  savings: many(savings),
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  category: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
}));

export const categoryPlansRelations = relations(categoryPlans, ({ one }) => ({
  category: one(categories, {
    fields: [categoryPlans.categoryId],
    references: [categories.id],
  }),
}));

export const plansRelations = relations(plans, ({ one }) => ({
  user: one(users, {
    fields: [plans.userId],
    references: [users.id],
  }),
}));

export const savingsRelations = relations(savings, ({ one }) => ({
  category: one(categories, {
    fields: [savings.categoryId],
    references: [categories.id],
  }),
  user: one(users, {
    fields: [savings.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ one, many }) => ({
  userKey: one(userKeys, {
    fields: [users.id],
    references: [userKeys.userId],
  }),
  transactions: many(transactions),
  savings: many(savings),
  plans: many(plans),
  categories: many(categories),
}));

export const userKeysRelations = relations(userKeys, ({ one }) => ({
  user: one(users, {
    fields: [userKeys.userId],
    references: [users.id],
  }),
}));
