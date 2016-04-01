'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Activity2 = require('../core/Activity');

var _Activity3 = _interopRequireDefault(_Activity2);

var _serviceManager = require('../core/serviceManager');

var _serviceManager2 = _interopRequireDefault(_serviceManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVICE_ID = 'service:network';

/**
 * Interface of the server `'network'` service.
 *
 * This service provides a generic way to create client to client communications
 * through websockets without server side custom code.
 *
 * __*The service must be used with its [client-side counterpart]{@link module:soundworks/client.Network}*__
 *
 * @memberof module:soundworks/server
 * @example
 * // inside the experience constructor
 * this.network = this.require('network');
 */

var Network = function (_Activity) {
  (0, _inherits3.default)(Network, _Activity);

  /** _<span class="warning">__WARNING__</span> This class should never be instanciated manually_ */

  function Network() {
    (0, _classCallCheck3.default)(this, Network);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Network).call(this, SERVICE_ID));
  }

  /** @private */


  (0, _createClass3.default)(Network, [{
    key: 'connect',
    value: function connect(client) {
      (0, _get3.default)((0, _getPrototypeOf2.default)(Network.prototype), 'connect', this).call(this, client);

      this.receive(client, 'send', this._onSend(client));
      this.receive(client, 'broadcast', this._onBroadcast(client));
    }

    /** @private */

  }, {
    key: '_onSend',
    value: function _onSend(client) {
      var _this2 = this;

      return function (values) {
        var clientTypes = values.shift();
        _this2.broadcast.apply(_this2, [clientTypes, client, 'receive'].concat((0, _toConsumableArray3.default)(values)));
      };
    }

    /** @private */

  }, {
    key: '_onBroadcast',
    value: function _onBroadcast(client) {
      var _this3 = this;

      return function (values) {
        return _this3.broadcast.apply(_this3, [null, client, 'receive'].concat((0, _toConsumableArray3.default)(values)));
      };
    }
  }]);
  return Network;
}(_Activity3.default);

_serviceManager2.default.register(SERVICE_ID, Network);

exports.default = Network;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5ldHdvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSxpQkFBYjs7Ozs7Ozs7Ozs7Ozs7OztJQWVBOzs7OztBQUVKLFdBRkksT0FFSixHQUFjO3dDQUZWLFNBRVU7d0ZBRlYsb0JBR0ksYUFETTtHQUFkOzs7Ozs2QkFGSTs7NEJBT0ksUUFBUTtBQUNkLHVEQVJFLGdEQVFZLE9BQWQsQ0FEYzs7QUFHZCxXQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBN0IsRUFIYztBQUlkLFdBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsV0FBckIsRUFBa0MsS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQWxDLEVBSmM7Ozs7Ozs7NEJBUVIsUUFBUTs7O0FBQ2QsYUFBTyxVQUFDLE1BQUQsRUFBWTtBQUNqQixZQUFNLGNBQWMsT0FBTyxLQUFQLEVBQWQsQ0FEVztBQUVqQixlQUFLLFNBQUwsZ0JBQWUsYUFBYSxRQUFRLG1EQUFjLFFBQWxELEVBRmlCO09BQVosQ0FETzs7Ozs7OztpQ0FRSCxRQUFROzs7QUFDbkIsYUFBTyxVQUFDLE1BQUQ7ZUFBWSxPQUFLLFNBQUwsZ0JBQWUsTUFBTSxRQUFRLG1EQUFjLFFBQTNDO09BQVosQ0FEWTs7O1NBdkJqQjs7O0FBNEJOLHlCQUFlLFFBQWYsQ0FBd0IsVUFBeEIsRUFBb0MsT0FBcEM7O2tCQUVlIiwiZmlsZSI6Ik5ldHdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aXZpdHkgZnJvbSAnLi4vY29yZS9BY3Rpdml0eSc7XG5pbXBvcnQgc2VydmljZU1hbmFnZXIgZnJvbSAnLi4vY29yZS9zZXJ2aWNlTWFuYWdlcic7XG5cbmNvbnN0IFNFUlZJQ0VfSUQgPSAnc2VydmljZTpuZXR3b3JrJztcblxuLyoqXG4gKiBJbnRlcmZhY2Ugb2YgdGhlIHNlcnZlciBgJ25ldHdvcmsnYCBzZXJ2aWNlLlxuICpcbiAqIFRoaXMgc2VydmljZSBwcm92aWRlcyBhIGdlbmVyaWMgd2F5IHRvIGNyZWF0ZSBjbGllbnQgdG8gY2xpZW50IGNvbW11bmljYXRpb25zXG4gKiB0aHJvdWdoIHdlYnNvY2tldHMgd2l0aG91dCBzZXJ2ZXIgc2lkZSBjdXN0b20gY29kZS5cbiAqXG4gKiBfXypUaGUgc2VydmljZSBtdXN0IGJlIHVzZWQgd2l0aCBpdHMgW2NsaWVudC1zaWRlIGNvdW50ZXJwYXJ0XXtAbGluayBtb2R1bGU6c291bmR3b3Jrcy9jbGllbnQuTmV0d29ya30qX19cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOnNvdW5kd29ya3Mvc2VydmVyXG4gKiBAZXhhbXBsZVxuICogLy8gaW5zaWRlIHRoZSBleHBlcmllbmNlIGNvbnN0cnVjdG9yXG4gKiB0aGlzLm5ldHdvcmsgPSB0aGlzLnJlcXVpcmUoJ25ldHdvcmsnKTtcbiAqL1xuY2xhc3MgTmV0d29yayBleHRlbmRzIEFjdGl2aXR5IHtcbiAgLyoqIF88c3BhbiBjbGFzcz1cIndhcm5pbmdcIj5fX1dBUk5JTkdfXzwvc3Bhbj4gVGhpcyBjbGFzcyBzaG91bGQgbmV2ZXIgYmUgaW5zdGFuY2lhdGVkIG1hbnVhbGx5XyAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihTRVJWSUNFX0lEKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBjb25uZWN0KGNsaWVudCkge1xuICAgIHN1cGVyLmNvbm5lY3QoY2xpZW50KTtcblxuICAgIHRoaXMucmVjZWl2ZShjbGllbnQsICdzZW5kJywgdGhpcy5fb25TZW5kKGNsaWVudCkpO1xuICAgIHRoaXMucmVjZWl2ZShjbGllbnQsICdicm9hZGNhc3QnLCB0aGlzLl9vbkJyb2FkY2FzdChjbGllbnQpKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25TZW5kKGNsaWVudCkge1xuICAgIHJldHVybiAodmFsdWVzKSA9PiB7XG4gICAgICBjb25zdCBjbGllbnRUeXBlcyA9IHZhbHVlcy5zaGlmdCgpO1xuICAgICAgdGhpcy5icm9hZGNhc3QoY2xpZW50VHlwZXMsIGNsaWVudCwgJ3JlY2VpdmUnLCAuLi52YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfb25Ccm9hZGNhc3QoY2xpZW50KSB7XG4gICAgcmV0dXJuICh2YWx1ZXMpID0+IHRoaXMuYnJvYWRjYXN0KG51bGwsIGNsaWVudCwgJ3JlY2VpdmUnLCAuLi52YWx1ZXMpO1xuICB9XG59XG5cbnNlcnZpY2VNYW5hZ2VyLnJlZ2lzdGVyKFNFUlZJQ0VfSUQsIE5ldHdvcmspO1xuXG5leHBvcnQgZGVmYXVsdCBOZXR3b3JrO1xuIl19