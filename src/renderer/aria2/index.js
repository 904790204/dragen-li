import Aria2 from 'aria2'
import { baseConf } from './core/baseConf'

class Api {
  constructor (options = {}) {
    this.options = options
    this.client = null
    this.config = baseConf
    this.init()
  }

  init () {
    this.initClient()
  }
  initClient () {
    let {
      'rpc-listen-port': port,
      'rpc-secret': secret
    } = this.config
    
    let host = '127.0.0.1'
    this.client = new Aria2({
      host,
      port,
      secret
    })
    this.client.open()
  }
  addUri (params) {
    let data = params
    return this.client.multicall(data)
  }
}

export default new Api()