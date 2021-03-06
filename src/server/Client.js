import uuid from 'uuidv4';

function* idGenerator() {
  for (let i = 0; true; i++) {
    yield i;
  }
}

const generateId = idGenerator();

/**
 * Server side representation of a client.
 *
 * @memberof server
 */
class Client {
	/**
	 * @param {String} clientType - Type of the client
	 * @param {server.Socket} socket - Socket connection with the client
	 */
	constructor(clientType, socket) {
		/**
		 * Client type, as specified when initializing the client side {@link client.Client}.
     *
     * @see {@link client.Client#init}
     * @type {String}
		 */
    this.type = clientType;

    /**
     * Session id (incremeted positive number).
     * The counter is reset when the server restarts.
     * @type {Number}
     */
    this.id = generateId.next().value;

		/**
		 * Unique session id (uuidv4).
     * @type {String}
		 */
    this.uuid = uuid();

		/**
		 * Socket connection with the remote {@link client.Client}.
		 * @type {server.Socket}
		 */
    this.socket = socket;
  }

  /**
   * Destroy the client.
   * @private
   */
  destroy() {
    this.uuid = null;
    this.id = null;
  }
}

export default Client;
