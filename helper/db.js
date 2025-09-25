const { PrismaBetterSQLite3 } = require('@prisma/adapter-better-sqlite3');
const { PrismaClient } = require('@prisma/client');
const config = require('../config');


const log = ['warn'];
if(config.isDebug()){
  log.push('query');
  log.push('info');
  log.push('error');
}

const adapter = new PrismaBetterSQLite3({
  url: "file:./prisma/dev.db"
});
const prisma = new PrismaClient({ log, adapter });

module.exports = prisma;