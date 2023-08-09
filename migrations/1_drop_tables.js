import knex from 'knex';
import knexConfigs from '../knex.configs.js';

import { LoggerUtil } from '../src/utils';




function down(pg) {
  return pg.schema
  .dropTableIfExists('text1')
  .dropTableIfExists('text2')
  .dropTableIfExists('mps')
  .dropTableIfExists('faction')
  .dropTableIfExists('committee')
  .dropTableIfExists('acceptability')
  .dropTableIfExists('time-table')
  .dropTableIfExists('units')
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production' ? knexConfigs.production : knexConfigs.development;

    const pg = knex(options);

    await down(pg);
    console.log('Successfully created all tables');
  } catch (error) {
    LoggerUtil.error(error.message);
  }
}

init();