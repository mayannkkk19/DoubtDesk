export function getDatabaseUrl() {
    const databaseUrl = (process.env.DATABASE_URL || process.env.NEXT_PUBLIC_NEON_DB_CONNECTION_STRING)?.trim();

    if (!databaseUrl) {
        throw new Error('DATABASE_URL is required. Please check your .env file.');
    }

    return databaseUrl;
}
