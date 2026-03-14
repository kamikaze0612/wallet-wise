import { relations } from 'drizzle-orm';
import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  serial,
  varchar,
} from 'drizzle-orm/pg-core';

import { budgets } from './budgets';
import { timestamps } from './timestamps';
import { transactionSplits } from './transaction-splits';
import { users } from './users';

export const categories = pgTable(
  'categories',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    // Mark as AnyPgColumn to avoid type error
    parentId: integer('parent_id'),
    userId: varchar('user_id', { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    isActive: boolean('is_active').notNull().default(true),
    ...timestamps,
  },
  (table) => [
    foreignKey({
      name: 'categories_parent_id_fk',
      columns: [table.parentId],
      foreignColumns: [table.id],
    }),
  ],
);

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentId],
    references: [categories.id],
    relationName: 'categories_parent_id_fk',
  }),
  children: many(categories, {
    relationName: 'categories_parent_id_fk',
  }),
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
  budgets: many(budgets),
  transactionSplits: many(transactionSplits),
}));
