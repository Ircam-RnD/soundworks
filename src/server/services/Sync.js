import Service from '../core/Service';
import serviceManager from '../core/serviceManager';
import { SyncServer } from '@ircam/sync';

const SERVICE_ID = 'service:sync';

/**
 * Interface for the server `'sync'` service.
 *
 * This service acts as the master clock provider for the client sync service,
 * in order to synchronize the clocks of the different clients to its own clock.
 *
 * __*The service must be used with its [client-side counterpart]{@link module:soundworks/client.Sync}*__
 *
 * **Note:** the service is based on [`github.com/collective-soundworks/sync`](https://github.com/collective-soundworks/sync).
 *
 * @memberof module:soundworks/server
 * @example
 * // inside the experience constructor
 * this.sync = this.require('sync');
 * // when the experience has started
 * const syncTime = this.sync.getSyncTime();
 */
class Sync extends Service {
  /** _<span class="warning">__WARNING__</span> This class should never be instanciated manually_ */
  constructor() {
    super(SERVICE_ID);

    // for default `getTimeFunction` only
    const startTime = process.hrtime();

    const defaults = {
      getTimeFunction: () => {
        const now = process.hrtime(startTime);
        return now[0] + now[1] * 1e-9;
      },
    };

    this.configure(defaults);

    this._sync = null;
  }

  /** @private */
  start() {
    super.start();

    const getTimeFunction = this.options.getTimeFunction;
    this._sync = new SyncServer(getTimeFunction);

    this.ready();
  }

  /** @private */
  connect(client) {
    super.connect(client);

    const sendCache = new Float32Array(4);

    const sendFunction = (id, clientPingTime, serverPingTime, serverPongTime) => {
      sendCache[0] = id;
      sendCache[1] = clientPingTime;
      sendCache[2] = serverPingTime;
      sendCache[3] = serverPongTime;

      client.socket.sendBinary('sync:pong', sendCache);
    };

    const receiveFunction = callback => {
      client.socket.addBinaryListener('sync:ping', data => {
        const id = data[0];
        const clientPingTime = data[1];

        callback(id, clientPingTime);
      });
    };

    this._sync.start(sendFunction, receiveFunction);
  }

  /**
   * Returns the current time in the sync clock, derived from `process.hrtime()`.
   * @return {Number} - Current sync time (in _seconds_).
   */
  getSyncTime() {
    return this._sync.getSyncTime();
  }

  /**
   * Returns the current time in the sync clock, derived from `process.hrtime()`.
   * @return {Number} - Current sync time (in _seconds_).
   */
  getCurrentTime() {
    return this._sync.getSyncTime();
  }
}

serviceManager.register(SERVICE_ID, Sync);

export default Sync;
