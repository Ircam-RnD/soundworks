'use strict';

const Calibration = require('calibration/server');
const ServerModule = require('./ServerModule');
// import ServerModule from './ServerModule.es6.js';

class ServerCalibration extends ServerModule {
// export default class ServerCalibration extends ServerModule {
  /**
   * Constructor of the calibration server module.
   *
   * Note that the receive functions are registered by {@linkcode
   * ServerCalibration~connect}.
   *
   * @constructs ServerCalibration
   * @param {Object} [params]
   * @param {Object} [params.persistent]
   * @param {Object} [params.persistent.path='../../data'] where to
   * store the persistent file
   * @param {Object} [params.persistent.file='calibration.json'] name
   * of the persistent file
   */
  constructor(params = {
    persistent: {
      path: '../../data',
      file: 'calibration.json'
    } } ) {
      super(params.name || 'calibration');
      this.calibration = new Calibration( { persistent: params.persistent });
  }

  /**
   * Register the receive functions.
   *
   * @function ServerCalibration~connect
   * @param {ServerClient} client
   */
  connect(client) {
    super.connect(client);

    this.calibration.start( (cmd, ...args) => { client.send(cmd, ...args); },
                            (cmd, callback) => { client.receive(cmd, callback); } );
  }

} // class ServerCalibration

module.exports = ServerCalibration;