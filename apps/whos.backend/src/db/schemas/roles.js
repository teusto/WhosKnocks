import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, serial, varchar, timestamp, integer, boolean, foreignKey } from 'drizzle-orm/pg-core';

const rolesTable = pgTable('roles', {
    id: serial('id').primaryKey(),
    tenantId: foreignKey('tenantId').references(() => tenants.id).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    description: varchar('description', { length: 255 }).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull()
  });