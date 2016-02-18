import uuid from 'uuid';


/**
 * Client that connects to the server.
 *
 * Each time a client of type `'clientType'` connects to the server, *Soundworks* creates a new instance of `Client`.
 * An instance of the class is passed to the `connect` and `disconnect` methods of all the server side modules that are mapped to the `'clientType'` clients (see {@link server#map}), as well as to the `enter` and `exit` methods of any {@link src/server/Performance.js~Performance} class mapped to that same client type.
 *
 * The class is also used to communicate with the client via WebSockets.
 *
 * @example class MyPerformance extends Performance {
 *   // ...
 *
 *   enter(client) {
 *     const msg = "Welcome to the performance!";
 *     client.send('init', msg);
 *   }
 *
 *   // ...
 * }
 */
export default class Client {
	/**
	 * @param {String} clientType Client type of the connected client.
	 * @param {Socket} socket Socket object used to comminuate with the client.
	 * @private
	 */
	constructor(clientType, socket) {
		/**
		 * Client type (specified when initializing the {@link client} object on the client side with {@link client.init}).
		 * @type {String}
		 */
    this.type = clientType;

		/**
		 * Index of the client.
		 * @type {Number}
		 */
    this.uuid = uuid.v4();

		/**
		 * Coordinates of the client, stored as an `[x:Number, y:Number]` array.
		 * @type {Array<Number>}
		 */
    this.coordinates = null;

    /**
     * Ticket index of the client.
     * @type {Number}
     */
    this.index = null;

    /**
     * Ticket label of the client.
     * @type {Number}
     */
    this.label = null;

		/**
		 * Used by any {@link src/server/ServerModule.js~ServerModule} to associate data to a particular client.
		 *
		 * All the data associated with a module whose `name` is `'moduleName'` is accessible through the key `moduleName`.
		 * For instance, the {@link src/server/Checkin.js~Checkin} module keeps track of client's checkin index and label in `this.modules.checkin.index` and `this.modules.checkin.label`.
		 * Similarly, a {@link src/server/Performance.js~Performance} module whose name is `'myPerformance'` could report the client's status in `this.modules.myPerformance.status`.
		 * @type {Object}
		 */
    this.modules = {};

		/**
		 * Socket used to communicate with the client.
		 * @type {Socket}
		 * @private
		 */
    this.socket = socket;
  }

  /**
   * Returns a lightweight version of the data defining the client.
   * @returns {Object}
   */
  serialize() {
    return {
      type: this.type,
      uuid: this.uuid,
      coordinates: this.coordinates,
      index: this.index,
      label: this.label,
      modules: this.modules,
    };
  }

  /**
   * Destroy the client.
   */
  destroy() {
    this.socket.removeAllListeners();
    this.uuid = null;
  }
}
