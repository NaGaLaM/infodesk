import knex from 'knex';
import knexConfigs from '../knex.configs.js';

import { LoggerUtil } from '../src/utils';

function up(pg) {
  return pg.schema
    .createTable('text1', (table) => {
      table.increments('id').primary();
      table.text('title').notNullable();
      table.text('text').notNullable();
      table.text('subtitle1');
      table.text('subtitle2');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('text2', (table) => {
      table.increments('id').primary();
      table.text('title').notNullable();
      table.text('text').notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('acceptability', (table) => {
      table.increments('id').primary();
      table.string('title');
      table.string('name').notNullable();
      table.string('day').notNullable();
      table.string('time');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('time-table', (table) => {
      table.increments('id');
      table.date('date');
      table.dateTime('created_at');
    })
    .createTable('units' ,(table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('internalphone');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('faction' ,(table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('member1').notNullable();
      table.string('member2').notNullable();
      table.string('cityphone');
      table.string('internalphone');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('mps', (table) => {
      table.increments('id');
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table.string('surname').notNullable();
      table.string('phonenumber').notNullable();
      table.boolean('key');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('committee', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('member1').notNullable();
      table.string('member2').notNullable();
      table.string('cityphone');
      table.string('internalphone');
      table.string('internalphone2');
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
    .createTable('users' ,  (table) => {
      table.increments('id').primary();
      table.string('user').notNullable().unique();
      table.string('pwd').notNullable();
      table.string('role').notNullable();
      table.dateTime('created_at');
      table.dateTime('updated_at');
    })
}



async function init() {
  try {
    const options = process.env.NODE_ENV === 'production' 
    ? knexConfigs.production 
    : knexConfigs.development;

    const pg = knex(options);

    await up(pg);
    console.log('Successfully created all tables');
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();