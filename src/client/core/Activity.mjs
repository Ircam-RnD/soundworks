import Signal from '../../utils/Signal';
import SignalAll from '../../utils/SignalAll';

/**
 * Internal base class for services and scenes. Basically a process with view
 * and network abilities.
 *
 * @memberof module:soundworks/client
 * @extends module:soundworks/client.Process
 */
class Activity {
  /**
   * @param {String} id - Id of the activity.
   */
  constructor(id) {
    if (id === undefined) {
      throw new Error(`Undefined id for activty ${this.constructor.name}`);
    }

    /**
     * Name of the process.
     * @name id
     * @type {String}
     * @instanceof Process
     */
    this.id = id;

    /**
     * Options of the activity.
     * @type {Object}
     * @name options
     * @instance
     * @memberof module:soundworks/client.Activity
     */
    this.options = {};

    /**
     * Signals defining the process state.
     * @name signal
     * @type {Object}
     * @instanceof Process
     */
    this.signals = {};
    this.signals.start = new Signal();

    /**
     * List of signals that must be set to `true` before the Activity can start.
     * @private
     */
    this.requiredSignals = new SignalAll();
  }

  /**
   * Configure the activity with the given options.
   * @param {Object} options
   */
  configure(options) {
    Object.assign(this.options, options);
  }

  start() {
    this.signals.start.set(true);
  }

}

export default Activity;
