const WorkerPool = require('workerpool')
const Path = require('path')

let poolProxy = null

// FUNCTIONS
const init = async (options) => {
    // console.log('its init')
  const pool = WorkerPool.pool(Path.join(__dirname, './thread_function.js'), options)
  poolProxy = await pool.proxy()
  // console.log(`Worker Threads Enabled - Min Workers: ${pool.minWorkers} - Max Workers: ${pool.maxWorkers} - Worker Type: ${pool.workerType}`)
}

const get = () => {
    // console.log('its get')
  return poolProxy
}

// EXPORTS
exports.init = init
exports.get = get