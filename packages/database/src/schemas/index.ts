import * as relations from "./relations";
import * as schemas from "./schema";
export * from "./schema";

export const schema = {
  ...schemas,
  ...relations,
};
export type Schema = typeof schema;
