'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventEmitter2 = require('../../utils/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _Service2 = require('../core/Service');

var _Service3 = _interopRequireDefault(_Service2);

var _serviceManager = require('../core/serviceManager');

var _serviceManager2 = _interopRequireDefault(_serviceManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --------------------------------------------------------- */
/* CONTROL UNITS
/* --------------------------------------------------------- */

/** @private */
var _Param = function (_EventEmitter) {
  (0, _inherits3.default)(_Param, _EventEmitter);

  function _Param(parent, type, name, label) {
    (0, _classCallCheck3.default)(this, _Param);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_Param.__proto__ || (0, _getPrototypeOf2.default)(_Param)).call(this));

    _this.parent = parent;
    _this.type = type;
    _this.name = name;
    _this.label = label;
    _this.value = undefined;
    return _this;
  }

  (0, _createClass3.default)(_Param, [{
    key: 'set',
    value: function set(val) {
      this.value = value;
    }
  }, {
    key: '_propagate',
    value: function _propagate() {
      var sendToServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.emit('update', this.value); // call event listeners

      if (sendToServer) this.parent.send('update', this.name, this.value); // send to server

      this.parent.emit('update', this.name, this.value); // call parent listeners
    }
  }, {
    key: 'update',
    value: function update(val) {
      var sendToServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.set(val);
      this._propagate(sendToServer);
    }
  }]);
  return _Param;
}(_EventEmitter3.default);

/** @private */


var _BooleanParam = function (_Param2) {
  (0, _inherits3.default)(_BooleanParam, _Param2);

  function _BooleanParam(parent, name, label, init) {
    (0, _classCallCheck3.default)(this, _BooleanParam);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (_BooleanParam.__proto__ || (0, _getPrototypeOf2.default)(_BooleanParam)).call(this, parent, 'boolean', name, label));

    _this2.set(init);
    return _this2;
  }

  (0, _createClass3.default)(_BooleanParam, [{
    key: 'set',
    value: function set(val) {
      this.value = val;
    }
  }]);
  return _BooleanParam;
}(_Param);

/** @private */


var _EnumParam = function (_Param3) {
  (0, _inherits3.default)(_EnumParam, _Param3);

  function _EnumParam(parent, name, label, options, init) {
    (0, _classCallCheck3.default)(this, _EnumParam);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (_EnumParam.__proto__ || (0, _getPrototypeOf2.default)(_EnumParam)).call(this, parent, 'enum', name, label));

    _this3.options = options;
    _this3.set(init);
    return _this3;
  }

  (0, _createClass3.default)(_EnumParam, [{
    key: 'set',
    value: function set(val) {
      var index = this.options.indexOf(val);

      if (index >= 0) {
        this.index = index;
        this.value = val;
      }
    }
  }]);
  return _EnumParam;
}(_Param);

/** @private */


var _NumberParam = function (_Param4) {
  (0, _inherits3.default)(_NumberParam, _Param4);

  function _NumberParam(parent, name, label, min, max, step, init) {
    (0, _classCallCheck3.default)(this, _NumberParam);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (_NumberParam.__proto__ || (0, _getPrototypeOf2.default)(_NumberParam)).call(this, parent, 'number', name, label));

    _this4.min = min;
    _this4.max = max;
    _this4.step = step;
    _this4.set(init);
    return _this4;
  }

  (0, _createClass3.default)(_NumberParam, [{
    key: 'set',
    value: function set(val) {
      this.value = Math.min(this.max, Math.max(this.min, val));
    }
  }]);
  return _NumberParam;
}(_Param);

/** @private */


var _TextParam = function (_Param5) {
  (0, _inherits3.default)(_TextParam, _Param5);

  function _TextParam(parent, name, label, init) {
    (0, _classCallCheck3.default)(this, _TextParam);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (_TextParam.__proto__ || (0, _getPrototypeOf2.default)(_TextParam)).call(this, parent, 'text', name, label));

    _this5.set(init);
    return _this5;
  }

  (0, _createClass3.default)(_TextParam, [{
    key: 'set',
    value: function set(val) {
      this.value = val;
    }
  }]);
  return _TextParam;
}(_Param);

/** @private */


var _TriggerParam = function (_Param6) {
  (0, _inherits3.default)(_TriggerParam, _Param6);

  function _TriggerParam(parent, name, label) {
    (0, _classCallCheck3.default)(this, _TriggerParam);
    return (0, _possibleConstructorReturn3.default)(this, (_TriggerParam.__proto__ || (0, _getPrototypeOf2.default)(_TriggerParam)).call(this, parent, 'trigger', name, label));
  }

  (0, _createClass3.default)(_TriggerParam, [{
    key: 'set',
    value: function set(val) {/* nothing to set here */}
  }]);
  return _TriggerParam;
}(_Param);

var SERVICE_ID = 'service:shared-params';

/**
 * Interface for the client `'shared-params'` service.
 *
 * The `shared-params` service is used to maintain and update global parameters
 * used among all connected clients. Each defined parameter can be of the
 * following data types:
 * - boolean
 * - enum
 * - number
 * - text
 * - trigger
 *
 * The parameters are configured in the server side counterpart of the service.
 *
 * To create a control surface from the parameters definitions, a dedicated scene
 * [`BasicSharedController`]{@link module:soundworks/client.BasicSharedController}
 * is available.
 *
 * __*The service must be used along with its
 * [server-side counterpart]{@link module:soundworks/server.SharedParams}*__
 *
 * _<span class="warning">__WARNING__</span> This class should never be
 * instanciated manually_
 *
 * @memberof module:soundworks/client
 *
 * @example
 * // inside the experience constructor
 * this.sharedParams = this.require('shared-params');
 * // when the experience starts, listen for parameter updates
 * this.sharedParams.addParamListener('synth:gain', (value) => {
 *   this.synth.setGain(value);
 * });
 *
 * @see [`BasicSharedController` scene]{@link module:soundworks/client.BasicSharedController}
 */

var SharedParams = function (_Service) {
  (0, _inherits3.default)(SharedParams, _Service);

  function SharedParams() {
    (0, _classCallCheck3.default)(this, SharedParams);

    var _this7 = (0, _possibleConstructorReturn3.default)(this, (SharedParams.__proto__ || (0, _getPrototypeOf2.default)(SharedParams)).call(this, SERVICE_ID, true));

    var defaults = {};
    _this7.configure(defaults);

    /**
     * Dictionary of all the parameters and commands.
     * @type {Object}
     * @name params
     * @instance
     * @memberof module:soundworks/client.SharedParams
     *
     * @private
     */
    _this7.params = {};

    _this7._onInitResponse = _this7._onInitResponse.bind(_this7);
    _this7._onUpdateResponse = _this7._onUpdateResponse.bind(_this7);
    return _this7;
  }

  /** @private */


  (0, _createClass3.default)(SharedParams, [{
    key: 'start',
    value: function start() {
      (0, _get3.default)(SharedParams.prototype.__proto__ || (0, _getPrototypeOf2.default)(SharedParams.prototype), 'start', this).call(this);

      this.send('request');

      this.receive('init', this._onInitResponse);
      this.receive('update', this._onUpdateResponse);
    }

    /** @private */

  }, {
    key: 'stop',
    value: function stop() {
      (0, _get3.default)(SharedParams.prototype.__proto__ || (0, _getPrototypeOf2.default)(SharedParams.prototype), 'stop', this).call(this);
      // don't remove 'update' listener, as the control is runnig as a background process
      this.removeListener('init', this._onInitResponse);
    }

    /** @private */

  }, {
    key: '_onInitResponse',
    value: function _onInitResponse(config) {
      var _this8 = this;

      config.forEach(function (entry) {
        var param = _this8._createParam(entry);
        _this8.params[param.name] = param;
      });

      this.ready();
    }

    /** @private */

  }, {
    key: '_onUpdateResponse',
    value: function _onUpdateResponse(name, val) {
      // update, but don't send back to server
      this.update(name, val, false);
    }

    /** @private */

  }, {
    key: '_createParam',
    value: function _createParam(init) {
      var param = null;

      switch (init.type) {
        case 'boolean':
          param = new _BooleanParam(this, init.name, init.label, init.value);
          break;

        case 'enum':
          param = new _EnumParam(this, init.name, init.label, init.options, init.value);
          break;

        case 'number':
          param = new _NumberParam(this, init.name, init.label, init.min, init.max, init.step, init.value);
          break;

        case 'text':
          param = new _TextParam(this, init.name, init.label, init.value);
          break;

        case 'trigger':
          param = new _TriggerParam(this, init.name, init.label);
          break;
      }

      return param;
    }

    /**
     * @callback module:soundworks/client.SharedParams~paramCallback
     * @param {Mixed} value - Updated value of the shared parameter.
     */

    /**
     * Add a listener to listen a specific parameter changes. The listener is
     * executed immediately when added with the parameter current value.
     *
     * @param {String} name - Name of the parameter.
     * @param {module:soundworks/client.SharedParams~paramCallback} listener -
     *  Listener to add.
     */

  }, {
    key: 'addParamListener',
    value: function addParamListener(name, listener) {
      var param = this.params[name];

      if (param) {
        param.addListener('update', listener);

        if (param.type !== 'trigger') listener(param.value);
      } else {
        console.log('unknown param "' + name + '"');
      }
    }

    /**
     * Remove a listener from listening a specific parameter changes.
     *
     * @param {String} name - Name of the parameter.
     * @param {module:soundworks/client.SharedParams~paramCallback} listener -
     *  Listener to remove.
     */

  }, {
    key: 'removeParamListener',
    value: function removeParamListener(name, listener) {
      var param = this.params[name];

      if (param) param.removeListener('update', listener);else console.log('unknown param "' + name + '"');
    }

    /**
     * Get the value of a given parameter.
     *
     * @param {String} name - Name of the parameter.
     * @returns {Mixed} - Current value of the parameter.
     */

  }, {
    key: 'getValue',
    value: function getValue(name) {
      return this.params[name].value;
    }

    /**
     * Update the value of a parameter (used when `options.hasGUI=true`)
     *
     * @param {String} name - Name of the parameter.
     * @param {Mixed} val - New value of the parameter.
     * @param {Boolean} [sendToServer=true] - Flag whether the value should be
     *  propagated to the server.
     */

  }, {
    key: 'update',
    value: function update(name, val) {
      var sendToServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var param = this.params[name];

      if (param) param.update(val, sendToServer);else console.log('unknown shared parameter "' + name + '"');
    }
  }]);
  return SharedParams;
}(_Service3.default);

_serviceManager2.default.register(SERVICE_ID, SharedParams);

exports.default = SharedParams;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNoYXJlZFBhcmFtcy5qcyJdLCJuYW1lcyI6WyJfUGFyYW0iLCJwYXJlbnQiLCJ0eXBlIiwibmFtZSIsImxhYmVsIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJ2YWwiLCJzZW5kVG9TZXJ2ZXIiLCJlbWl0Iiwic2VuZCIsInNldCIsIl9wcm9wYWdhdGUiLCJfQm9vbGVhblBhcmFtIiwiaW5pdCIsIl9FbnVtUGFyYW0iLCJvcHRpb25zIiwiaW5kZXgiLCJpbmRleE9mIiwiX051bWJlclBhcmFtIiwibWluIiwibWF4Iiwic3RlcCIsIk1hdGgiLCJfVGV4dFBhcmFtIiwiX1RyaWdnZXJQYXJhbSIsIlNFUlZJQ0VfSUQiLCJTaGFyZWRQYXJhbXMiLCJkZWZhdWx0cyIsImNvbmZpZ3VyZSIsInBhcmFtcyIsIl9vbkluaXRSZXNwb25zZSIsImJpbmQiLCJfb25VcGRhdGVSZXNwb25zZSIsInJlY2VpdmUiLCJyZW1vdmVMaXN0ZW5lciIsImNvbmZpZyIsImZvckVhY2giLCJlbnRyeSIsInBhcmFtIiwiX2NyZWF0ZVBhcmFtIiwicmVhZHkiLCJ1cGRhdGUiLCJsaXN0ZW5lciIsImFkZExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBO0FBQ0E7OztBQUdBO0lBQ01BLE07OztBQUNKLGtCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQUE7O0FBQUE7O0FBRXJDLFVBQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYUMsU0FBYjtBQU5xQztBQU90Qzs7Ozt3QkFFR0MsRyxFQUFLO0FBQ1AsV0FBS0YsS0FB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S1QsTUFBTCxDQUFZM0IsSUFBWixDQUFkOztBQUVBLFVBQUlvQyxLQUFKLEVBQVc7QUFDVEEsY0FBTUssV0FBTixDQUFrQixRQUFsQixFQUE0QkQsUUFBNUI7O0FBRUEsWUFBSUosTUFBTXJDLElBQU4sS0FBZSxTQUFuQixFQUNFeUMsU0FBU0osTUFBTWxDLEtBQWY7QUFDSCxPQUxELE1BS087QUFDTHdDLGdCQUFRQyxHQUFSLENBQVksb0JBQW9CM0MsSUFBcEIsR0FBMkIsR0FBdkM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozs7O3dDQU9vQkEsSSxFQUFNd0MsUSxFQUFVO0FBQ2xDLFVBQU1KLFFBQVEsS0FBS1QsTUFBTCxDQUFZM0IsSUFBWixDQUFkOztBQUVBLFVBQUlvQyxLQUFKLEVBQ0VBLE1BQU1KLGNBQU4sQ0FBcUIsUUFBckIsRUFBK0JRLFFBQS9CLEVBREYsS0FHRUUsUUFBUUMsR0FBUixDQUFZLG9CQUFvQjNDLElBQXBCLEdBQTJCLEdBQXZDO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs2QkFNU0EsSSxFQUFNO0FBQ2IsYUFBTyxLQUFLMkIsTUFBTCxDQUFZM0IsSUFBWixFQUFrQkUsS0FBekI7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7MkJBUU9GLEksRUFBTUksRyxFQUEwQjtBQUFBLFVBQXJCQyxZQUFxQix1RUFBTixJQUFNOztBQUNyQyxVQUFNK0IsUUFBUSxLQUFLVCxNQUFMLENBQVkzQixJQUFaLENBQWQ7O0FBRUEsVUFBSW9DLEtBQUosRUFDRUEsTUFBTUcsTUFBTixDQUFhbkMsR0FBYixFQUFrQkMsWUFBbEIsRUFERixLQUdFcUMsUUFBUUMsR0FBUixDQUFZLCtCQUErQjNDLElBQS9CLEdBQXNDLEdBQWxEO0FBQ0g7Ozs7O0FBR0gseUJBQWU0QyxRQUFmLENBQXdCckIsVUFBeEIsRUFBb0NDLFlBQXBDOztrQkFFZUEsWSIsImZpbGUiOiJTaGFyZWRQYXJhbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uLy4uL3V0aWxzL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuLi9jb3JlL1NlcnZpY2UnO1xuaW1wb3J0IHNlcnZpY2VNYW5hZ2VyIGZyb20gJy4uL2NvcmUvc2VydmljZU1hbmFnZXInO1xuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ09OVFJPTCBVTklUU1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKiBAcHJpdmF0ZSAqL1xuY2xhc3MgX1BhcmFtIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IocGFyZW50LCB0eXBlLCBuYW1lLCBsYWJlbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc2V0KHZhbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIF9wcm9wYWdhdGUoc2VuZFRvU2VydmVyID0gdHJ1ZSkge1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy52YWx1ZSk7IC8vIGNhbGwgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBpZiAoc2VuZFRvU2VydmVyKVxuICAgICAgdGhpcy5wYXJlbnQuc2VuZCgndXBkYXRlJywgdGhpcy5uYW1lLCB0aGlzLnZhbHVlKTsgLy8gc2VuZCB0byBzZXJ2ZXJcblxuICAgIHRoaXMucGFyZW50LmVtaXQoJ3VwZGF0ZScsIHRoaXMubmFtZSwgdGhpcy52YWx1ZSk7IC8vIGNhbGwgcGFyZW50IGxpc3RlbmVyc1xuICB9XG5cbiAgdXBkYXRlKHZhbCwgc2VuZFRvU2VydmVyID0gdHJ1ZSkge1xuICAgIHRoaXMuc2V0KHZhbCk7XG4gICAgdGhpcy5fcHJvcGFnYXRlKHNlbmRUb1NlcnZlcik7XG4gIH1cbn1cblxuXG4vKiogQHByaXZhdGUgKi9cbmNsYXNzIF9Cb29sZWFuUGFyYW0gZXh0ZW5kcyBfUGFyYW0ge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUsIGxhYmVsLCBpbml0KSB7XG4gICAgc3VwZXIocGFyZW50LCAnYm9vbGVhbicsIG5hbWUsIGxhYmVsKTtcbiAgICB0aGlzLnNldChpbml0KTtcbiAgfVxuXG4gIHNldCh2YWwpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsO1xuICB9XG59XG5cbi8qKiBAcHJpdmF0ZSAqL1xuY2xhc3MgX0VudW1QYXJhbSBleHRlbmRzIF9QYXJhbSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgbmFtZSwgbGFiZWwsIG9wdGlvbnMsIGluaXQpIHtcbiAgICBzdXBlcihwYXJlbnQsICdlbnVtJywgbmFtZSwgbGFiZWwpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zZXQoaW5pdCk7XG4gIH1cblxuICBzZXQodmFsKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5vcHRpb25zLmluZGV4T2YodmFsKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQHByaXZhdGUgKi9cbmNsYXNzIF9OdW1iZXJQYXJhbSBleHRlbmRzIF9QYXJhbSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgbmFtZSwgbGFiZWwsIG1pbiwgbWF4LCBzdGVwLCBpbml0KSB7XG4gICAgc3VwZXIocGFyZW50LCAnbnVtYmVyJywgbmFtZSwgbGFiZWwpO1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgdGhpcy5zZXQoaW5pdCk7XG4gIH1cblxuICBzZXQodmFsKSB7XG4gICAgdGhpcy52YWx1ZSA9IE1hdGgubWluKHRoaXMubWF4LCBNYXRoLm1heCh0aGlzLm1pbiwgdmFsKSk7XG4gIH1cbn1cblxuLyoqIEBwcml2YXRlICovXG5jbGFzcyBfVGV4dFBhcmFtIGV4dGVuZHMgX1BhcmFtIHtcbiAgY29uc3RydWN0b3IocGFyZW50LCBuYW1lLCBsYWJlbCwgaW5pdCkge1xuICAgIHN1cGVyKHBhcmVudCwgJ3RleHQnLCBuYW1lLCBsYWJlbCk7XG4gICAgdGhpcy5zZXQoaW5pdCk7XG4gIH1cblxuICBzZXQodmFsKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgfVxufVxuXG4vKiogQHByaXZhdGUgKi9cbmNsYXNzIF9UcmlnZ2VyUGFyYW0gZXh0ZW5kcyBfUGFyYW0ge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUsIGxhYmVsKSB7XG4gICAgc3VwZXIocGFyZW50LCAndHJpZ2dlcicsIG5hbWUsIGxhYmVsKTtcbiAgfVxuXG4gIHNldCh2YWwpIHsgLyogbm90aGluZyB0byBzZXQgaGVyZSAqLyB9XG59XG5cbmNvbnN0IFNFUlZJQ0VfSUQgPSAnc2VydmljZTpzaGFyZWQtcGFyYW1zJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBjbGllbnQgYCdzaGFyZWQtcGFyYW1zJ2Agc2VydmljZS5cbiAqXG4gKiBUaGUgYHNoYXJlZC1wYXJhbXNgIHNlcnZpY2UgaXMgdXNlZCB0byBtYWludGFpbiBhbmQgdXBkYXRlIGdsb2JhbCBwYXJhbWV0ZXJzXG4gKiB1c2VkIGFtb25nIGFsbCBjb25uZWN0ZWQgY2xpZW50cy4gRWFjaCBkZWZpbmVkIHBhcmFtZXRlciBjYW4gYmUgb2YgdGhlXG4gKiBmb2xsb3dpbmcgZGF0YSB0eXBlczpcbiAqIC0gYm9vbGVhblxuICogLSBlbnVtXG4gKiAtIG51bWJlclxuICogLSB0ZXh0XG4gKiAtIHRyaWdnZXJcbiAqXG4gKiBUaGUgcGFyYW1ldGVycyBhcmUgY29uZmlndXJlZCBpbiB0aGUgc2VydmVyIHNpZGUgY291bnRlcnBhcnQgb2YgdGhlIHNlcnZpY2UuXG4gKlxuICogVG8gY3JlYXRlIGEgY29udHJvbCBzdXJmYWNlIGZyb20gdGhlIHBhcmFtZXRlcnMgZGVmaW5pdGlvbnMsIGEgZGVkaWNhdGVkIHNjZW5lXG4gKiBbYEJhc2ljU2hhcmVkQ29udHJvbGxlcmBde0BsaW5rIG1vZHVsZTpzb3VuZHdvcmtzL2NsaWVudC5CYXNpY1NoYXJlZENvbnRyb2xsZXJ9XG4gKiBpcyBhdmFpbGFibGUuXG4gKlxuICogX18qVGhlIHNlcnZpY2UgbXVzdCBiZSB1c2VkIGFsb25nIHdpdGggaXRzXG4gKiBbc2VydmVyLXNpZGUgY291bnRlcnBhcnRde0BsaW5rIG1vZHVsZTpzb3VuZHdvcmtzL3NlcnZlci5TaGFyZWRQYXJhbXN9Kl9fXG4gKlxuICogXzxzcGFuIGNsYXNzPVwid2FybmluZ1wiPl9fV0FSTklOR19fPC9zcGFuPiBUaGlzIGNsYXNzIHNob3VsZCBuZXZlciBiZVxuICogaW5zdGFuY2lhdGVkIG1hbnVhbGx5X1xuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6c291bmR3b3Jrcy9jbGllbnRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gaW5zaWRlIHRoZSBleHBlcmllbmNlIGNvbnN0cnVjdG9yXG4gKiB0aGlzLnNoYXJlZFBhcmFtcyA9IHRoaXMucmVxdWlyZSgnc2hhcmVkLXBhcmFtcycpO1xuICogLy8gd2hlbiB0aGUgZXhwZXJpZW5jZSBzdGFydHMsIGxpc3RlbiBmb3IgcGFyYW1ldGVyIHVwZGF0ZXNcbiAqIHRoaXMuc2hhcmVkUGFyYW1zLmFkZFBhcmFtTGlzdGVuZXIoJ3N5bnRoOmdhaW4nLCAodmFsdWUpID0+IHtcbiAqICAgdGhpcy5zeW50aC5zZXRHYWluKHZhbHVlKTtcbiAqIH0pO1xuICpcbiAqIEBzZWUgW2BCYXNpY1NoYXJlZENvbnRyb2xsZXJgIHNjZW5lXXtAbGluayBtb2R1bGU6c291bmR3b3Jrcy9jbGllbnQuQmFzaWNTaGFyZWRDb250cm9sbGVyfVxuICovXG5jbGFzcyBTaGFyZWRQYXJhbXMgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoU0VSVklDRV9JRCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBkZWZhdWx0cyA9IHt9O1xuICAgIHRoaXMuY29uZmlndXJlKGRlZmF1bHRzKTtcblxuICAgIC8qKlxuICAgICAqIERpY3Rpb25hcnkgb2YgYWxsIHRoZSBwYXJhbWV0ZXJzIGFuZCBjb21tYW5kcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBuYW1lIHBhcmFtc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6c291bmR3b3Jrcy9jbGllbnQuU2hhcmVkUGFyYW1zXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGFyYW1zID0ge307XG5cbiAgICB0aGlzLl9vbkluaXRSZXNwb25zZSA9IHRoaXMuX29uSW5pdFJlc3BvbnNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25VcGRhdGVSZXNwb25zZSA9IHRoaXMuX29uVXBkYXRlUmVzcG9uc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgdGhpcy5zZW5kKCdyZXF1ZXN0Jyk7XG5cbiAgICB0aGlzLnJlY2VpdmUoJ2luaXQnLCB0aGlzLl9vbkluaXRSZXNwb25zZSk7XG4gICAgdGhpcy5yZWNlaXZlKCd1cGRhdGUnLCB0aGlzLl9vblVwZGF0ZVJlc3BvbnNlKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBzdG9wKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcbiAgICAvLyBkb24ndCByZW1vdmUgJ3VwZGF0ZScgbGlzdGVuZXIsIGFzIHRoZSBjb250cm9sIGlzIHJ1bm5pZyBhcyBhIGJhY2tncm91bmQgcHJvY2Vzc1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2luaXQnLCB0aGlzLl9vbkluaXRSZXNwb25zZSk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgX29uSW5pdFJlc3BvbnNlKGNvbmZpZykge1xuICAgIGNvbmZpZy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgcGFyYW0gPSB0aGlzLl9jcmVhdGVQYXJhbShlbnRyeSk7XG4gICAgICB0aGlzLnBhcmFtc1twYXJhbS5uYW1lXSA9IHBhcmFtO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWFkeSgpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9vblVwZGF0ZVJlc3BvbnNlKG5hbWUsIHZhbCkge1xuICAgIC8vIHVwZGF0ZSwgYnV0IGRvbid0IHNlbmQgYmFjayB0byBzZXJ2ZXJcbiAgICB0aGlzLnVwZGF0ZShuYW1lLCB2YWwsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfY3JlYXRlUGFyYW0oaW5pdCkge1xuICAgIGxldCBwYXJhbSA9IG51bGw7XG5cbiAgICBzd2l0Y2ggKGluaXQudHlwZSkge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHBhcmFtID0gbmV3IF9Cb29sZWFuUGFyYW0odGhpcywgaW5pdC5uYW1lLCBpbml0LmxhYmVsLCBpbml0LnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VudW0nOlxuICAgICAgICBwYXJhbSA9IG5ldyBfRW51bVBhcmFtKHRoaXMsIGluaXQubmFtZSwgaW5pdC5sYWJlbCwgaW5pdC5vcHRpb25zLCBpbml0LnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHBhcmFtID0gbmV3IF9OdW1iZXJQYXJhbSh0aGlzLCBpbml0Lm5hbWUsIGluaXQubGFiZWwsIGluaXQubWluLCBpbml0Lm1heCwgaW5pdC5zdGVwLCBpbml0LnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBwYXJhbSA9IG5ldyBfVGV4dFBhcmFtKHRoaXMsIGluaXQubmFtZSwgaW5pdC5sYWJlbCwgaW5pdC52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0cmlnZ2VyJzpcbiAgICAgICAgcGFyYW0gPSBuZXcgX1RyaWdnZXJQYXJhbSh0aGlzLCBpbml0Lm5hbWUsIGluaXQubGFiZWwpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cblxuICAvKipcbiAgICogQGNhbGxiYWNrIG1vZHVsZTpzb3VuZHdvcmtzL2NsaWVudC5TaGFyZWRQYXJhbXN+cGFyYW1DYWxsYmFja1xuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSAtIFVwZGF0ZWQgdmFsdWUgb2YgdGhlIHNoYXJlZCBwYXJhbWV0ZXIuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciB0byBsaXN0ZW4gYSBzcGVjaWZpYyBwYXJhbWV0ZXIgY2hhbmdlcy4gVGhlIGxpc3RlbmVyIGlzXG4gICAqIGV4ZWN1dGVkIGltbWVkaWF0ZWx5IHdoZW4gYWRkZWQgd2l0aCB0aGUgcGFyYW1ldGVyIGN1cnJlbnQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0ge21vZHVsZTpzb3VuZHdvcmtzL2NsaWVudC5TaGFyZWRQYXJhbXN+cGFyYW1DYWxsYmFja30gbGlzdGVuZXIgLVxuICAgKiAgTGlzdGVuZXIgdG8gYWRkLlxuICAgKi9cbiAgYWRkUGFyYW1MaXN0ZW5lcihuYW1lLCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5wYXJhbXNbbmFtZV07XG5cbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIHBhcmFtLmFkZExpc3RlbmVyKCd1cGRhdGUnLCBsaXN0ZW5lcik7XG5cbiAgICAgIGlmIChwYXJhbS50eXBlICE9PSAndHJpZ2dlcicpXG4gICAgICAgIGxpc3RlbmVyKHBhcmFtLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3Vua25vd24gcGFyYW0gXCInICsgbmFtZSArICdcIicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBsaXN0ZW5lciBmcm9tIGxpc3RlbmluZyBhIHNwZWNpZmljIHBhcmFtZXRlciBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHttb2R1bGU6c291bmR3b3Jrcy9jbGllbnQuU2hhcmVkUGFyYW1zfnBhcmFtQ2FsbGJhY2t9IGxpc3RlbmVyIC1cbiAgICogIExpc3RlbmVyIHRvIHJlbW92ZS5cbiAgICovXG4gIHJlbW92ZVBhcmFtTGlzdGVuZXIobmFtZSwgbGlzdGVuZXIpIHtcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMucGFyYW1zW25hbWVdO1xuXG4gICAgaWYgKHBhcmFtKVxuICAgICAgcGFyYW0ucmVtb3ZlTGlzdGVuZXIoJ3VwZGF0ZScsIGxpc3RlbmVyKTtcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZygndW5rbm93biBwYXJhbSBcIicgKyBuYW1lICsgJ1wiJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHBhcmFtZXRlci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtNaXhlZH0gLSBDdXJyZW50IHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIuXG4gICAqL1xuICBnZXRWYWx1ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zW25hbWVdLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdmFsdWUgb2YgYSBwYXJhbWV0ZXIgKHVzZWQgd2hlbiBgb3B0aW9ucy5oYXNHVUk9dHJ1ZWApXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0ge01peGVkfSB2YWwgLSBOZXcgdmFsdWUgb2YgdGhlIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbc2VuZFRvU2VydmVyPXRydWVdIC0gRmxhZyB3aGV0aGVyIHRoZSB2YWx1ZSBzaG91bGQgYmVcbiAgICogIHByb3BhZ2F0ZWQgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIHVwZGF0ZShuYW1lLCB2YWwsIHNlbmRUb1NlcnZlciA9IHRydWUpIHtcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMucGFyYW1zW25hbWVdO1xuXG4gICAgaWYgKHBhcmFtKVxuICAgICAgcGFyYW0udXBkYXRlKHZhbCwgc2VuZFRvU2VydmVyKTtcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZygndW5rbm93biBzaGFyZWQgcGFyYW1ldGVyIFwiJyArIG5hbWUgKyAnXCInKTtcbiAgfVxufVxuXG5zZXJ2aWNlTWFuYWdlci5yZWdpc3RlcihTRVJWSUNFX0lELCBTaGFyZWRQYXJhbXMpO1xuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRQYXJhbXM7XG4iXX0=