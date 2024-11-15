import { drizzle } from "drizzle-orm/postgres-js";
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  boolean,
  foreignKey,
} from "drizzle-orm/pg-core";

export const tenantsTable = pgTable("tenants", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  admin_email: varchar("admin_email", { length: 255 }).notNull(),
  organizationId: varchar("organizationId", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
