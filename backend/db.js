import Pool from 'pg-pool';

const pool = new Pool({
    user: 'postgres',
    password: 'database',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

export default pool;