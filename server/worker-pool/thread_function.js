
const WorkerPool = require('workerpool')
const Utilities = require('../ping.js')

// MIDDLEWARE FUNCTIONS
const pingFun = (uid,ws) => {
    console.log('is ping Fun');
  return Utilities.pingFun(uid,ws)
}

// CREATE WORKERS
WorkerPool.worker({
    pingFun
})