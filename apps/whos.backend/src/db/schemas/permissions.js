import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, serial, varchar, timestamp, integer, boolean, foreignKey } from 'drizzle-orm/pg-core';

const permissionsTable = pgTable('permissions', {
    id: serial('id').primaryKey(),
    tenantId: foreignKey('tenantId').references(() => tenants.id).notNull(),
    userId: foreignKey('userId').references(() => users.id).notNull(),
    roleId: foreignKey('roleId').references(() => roles.id).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull()
  });