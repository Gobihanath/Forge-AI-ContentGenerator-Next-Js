/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Dl1C6OtzBMVh@ep-billowing-star-a5uf2q2i.us-east-2.aws.neon.tech/AI-Content?sslmode=require',
    }
  };