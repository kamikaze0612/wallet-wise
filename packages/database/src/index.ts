import * as accounts from "./schemas/accounts";
import * as budgets from "./schemas/budgets";
import * as categories from "./schemas/categories";
import * as savingGoals from "./schemas/saving-goals";
import * as transactions from "./schemas/transactions";
import * as users from "./schemas/users";
export * from "./schemas/accounts";
export * from "./schemas/budgets";
export * from "./schemas/categories";
export * from "./schemas/saving-goals";
export * from "./schemas/transactions";
export * from "./schemas/users";

export const schemas = {
  ...accounts,
  ...budgets,
  ...categories,
  ...savingGoals,
  ...transactions,
  ...users,
};
export type Schema = typeof schemas;
