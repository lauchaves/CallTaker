import knexBuilder from 'knex';

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



knex.raw( ` create schema IF NOT exists 'call_taker; 
 CREATE table IF NOT exists call_taker.user
 (
        user_id         	uuid,
        user_name           VARCHAR(100),
        email               VARCHAR(100),
        password    		VARCHAR(40),
        CONSTRAINT PK_user_user_id   primary Key (user_id)
    )"
    
    
    CREATE table IF NOT exists call_taker.emergency
    (
        emergency_id   			uuid,
        emergency_type          VARCHAR(100),
        description            	VARCHAR(300),
        emergency_state			VARCHAR(100),
        fullname                VARCHAR(300),
        phone                   VARCHAR(30),
        details                 VARCHAR(300),
        address                 VARCHAR(300),
        person_id               VARCHAR
        CONSTRAINT PK_emergency_emergency_id   primary Key (emergency_id)
    );
    
    
    CREATE table IF NOT exists call_taker.resource
    (
        resource_id   			uuid,
        resource_name           VARCHAR(100),
        CONSTRAINT PK_resource_resource_id     primary Key (resource_id)
    );
    
    
    CREATE table IF NOT exists call_taker.dispatch_emergency
    (
        dispatch_id  			uuid,
        dispatch_info 			JSONB,
        emergency_id			uuid,
        resource_id				uuid,
        CONSTRAINT PK_dispatch_id_emergency_id          primary Key (dispatch_id, emergency_id),
        CONSTRAINT FK_dispatch_emergency_id         foreign key (emergency_id) references call_taker.emergency,
        CONSTRAINT FK_dispatch_resource_id          foreign key (resource_id) references call_taker.resource,
        CONSTRAINT unique_emergency_id  unique (emergency_id)
    );


    `
);