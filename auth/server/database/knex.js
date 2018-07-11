import knexBuilder from '../../../../../.cache/typescript/2.9/node_modules/@types/knex';

export const knex= new knexBuilder(
{
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        database: 'postgres',
        user: 'postgres',
        port: 5432,
        password: 'postgres',
        application_name: 'cad',
        charset: 'utf8',
    }
});