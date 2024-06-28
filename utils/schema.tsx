import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";


//Creating Table in postgresql
export const AIOutput=pgTable('aiOutput',{
  id:serial('id').primaryKey(),
  formData:varchar('formData').notNull(),
  aiResponse:text('aiResponse'),
  templateSlug:varchar('templateSlug').notNull(),
  createdBy:varchar('createdBy'),
  createdAt:varchar('createdAt')
})