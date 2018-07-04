import knexBuilder from 'knex';

let knex;

export default { 
    get knex() {
        if (!knex) {
            knex= new knexBuilder(
                {
                    client: 'postgresql',
                    connection: {
                        host: localhost,
                        database: 'call_taker',
                        user: 'postgres',
                        port: 5432,
                        password: 'postgres',
                        application_name: 'cad',
                        charset: 'utf8',
                    }
                });
        }
        return knex;
    }

}