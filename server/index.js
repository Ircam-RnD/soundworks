/* core */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _coreClient = require('./core/Client');

var _coreClient2 = _interopRequireDefault(_coreClient);

var _coreServer = require('./core/server');

var _coreServer2 = _interopRequireDefault(_coreServer);

var _coreServerActivity = require('./core/ServerActivity');

var _coreServerActivity2 = _interopRequireDefault(_coreServerActivity);

var _coreServerServiceManager = require('./core/serverServiceManager');

var _coreServerServiceManager2 = _interopRequireDefault(_coreServerServiceManager);

var _coreSockets = require('./core/sockets');

var _coreSockets2 = _interopRequireDefault(_coreSockets);

/* scenes */

var _scenesServerExperience = require('./scenes/ServerExperience');

var _scenesServerExperience2 = _interopRequireDefault(_scenesServerExperience);

// import ServerSurvey from './ServerSurvey';

/* services */
// import ServerCalibration from './ServerCalibration';

var _servicesServerCheckin = require('./services/ServerCheckin');

var _servicesServerCheckin2 = _interopRequireDefault(_servicesServerCheckin);

var _servicesServerErrorReporter = require('./services/ServerErrorReporter');

var _servicesServerErrorReporter2 = _interopRequireDefault(_servicesServerErrorReporter);

// import ServerFileList from './ServerFileList';

var _servicesServerLocator = require('./services/ServerLocator');

var _servicesServerLocator2 = _interopRequireDefault(_servicesServerLocator);

var _servicesServerNetwork = require('./services/ServerNetwork');

var _servicesServerNetwork2 = _interopRequireDefault(_servicesServerNetwork);

// import ServerPerformance from './ServerPerformance';

var _servicesServerPlacer = require('./services/ServerPlacer');

var _servicesServerPlacer2 = _interopRequireDefault(_servicesServerPlacer);

var _servicesServerSharedConfig = require('./services/ServerSharedConfig');

var _servicesServerSharedConfig2 = _interopRequireDefault(_servicesServerSharedConfig);

var _servicesServerSharedParams = require('./services/ServerSharedParams');

var _servicesServerSharedParams2 = _interopRequireDefault(_servicesServerSharedParams);

var _servicesServerSync = require('./services/ServerSync');

var _servicesServerSync2 = _interopRequireDefault(_servicesServerSync);

// utils

var _utilsHelpers = require('../utils/helpers');

var helpers = _interopRequireWildcard(_utilsHelpers);

var _utilsMath = require('../utils/math');

var math = _interopRequireWildcard(_utilsMath);

var _utilsSetup = require('../utils/setup');

var setup = _interopRequireWildcard(_utilsSetup);

exports['default'] = {
  /* core */
  Client: _coreClient2['default'],
  server: _coreServer2['default'],
  serverServiceManager: _coreServerServiceManager2['default'], // @tbd - expose ?
  ServerActivity: _coreServerActivity2['default'],
  sockets: _coreSockets2['default'],

  /* scenes */
  ServerExperience: _scenesServerExperience2['default'],
  // ServerSurvey,

  /* services */
  // @todo - move into a namespace ?
  // ServerCalibration,
  ServerCheckin: _servicesServerCheckin2['default'],
  ServerErrorReporter: _servicesServerErrorReporter2['default'],
  // ServerFileList,
  ServerLocator: _servicesServerLocator2['default'],
  ServerNetwork: _servicesServerNetwork2['default'],
  // ServerPerformance,
  ServerPlacer: _servicesServerPlacer2['default'],
  ServerSharedConfig: _servicesServerSharedConfig2['default'],
  ServerSharedParams: _servicesServerSharedParams2['default'],
  ServerSync: _servicesServerSync2['default'],

  utils: {
    helpers: helpers,
    math: math,
    setup: setup
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MEJBQ21CLGVBQWU7Ozs7MEJBQ2YsZUFBZTs7OztrQ0FDUCx1QkFBdUI7Ozs7d0NBQ2pCLDZCQUE2Qjs7OzsyQkFDMUMsZ0JBQWdCOzs7Ozs7c0NBR1AsMkJBQTJCOzs7Ozs7Ozs7cUNBSzlCLDBCQUEwQjs7OzsyQ0FDcEIsZ0NBQWdDOzs7Ozs7cUNBRXRDLDBCQUEwQjs7OztxQ0FDMUIsMEJBQTBCOzs7Ozs7b0NBRTNCLHlCQUF5Qjs7OzswQ0FDbkIsK0JBQStCOzs7OzBDQUMvQiwrQkFBK0I7Ozs7a0NBQ3ZDLHVCQUF1Qjs7Ozs7OzRCQUdyQixrQkFBa0I7O0lBQS9CLE9BQU87O3lCQUNHLGVBQWU7O0lBQXpCLElBQUk7OzBCQUNPLGdCQUFnQjs7SUFBM0IsS0FBSzs7cUJBRUY7O0FBRWIsUUFBTSx5QkFBQTtBQUNOLFFBQU0seUJBQUE7QUFDTixzQkFBb0IsdUNBQUE7QUFDcEIsZ0JBQWMsaUNBQUE7QUFDZCxTQUFPLDBCQUFBOzs7QUFHUCxrQkFBZ0IscUNBQUE7Ozs7OztBQU1oQixlQUFhLG9DQUFBO0FBQ2IscUJBQW1CLDBDQUFBOztBQUVuQixlQUFhLG9DQUFBO0FBQ2IsZUFBYSxvQ0FBQTs7QUFFYixjQUFZLG1DQUFBO0FBQ1osb0JBQWtCLHlDQUFBO0FBQ2xCLG9CQUFrQix5Q0FBQTtBQUNsQixZQUFVLGlDQUFBOztBQUVWLE9BQUssRUFBRTtBQUNMLFdBQU8sRUFBUCxPQUFPO0FBQ1AsUUFBSSxFQUFKLElBQUk7QUFDSixTQUFLLEVBQUwsS0FBSztHQUNOO0NBQ0YiLCJmaWxlIjoic3JjL3NlcnZlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvcmUgKi9cbmltcG9ydCBDbGllbnQgZnJvbSAnLi9jb3JlL0NsaWVudCc7XG5pbXBvcnQgc2VydmVyIGZyb20gJy4vY29yZS9zZXJ2ZXInO1xuaW1wb3J0IFNlcnZlckFjdGl2aXR5IGZyb20gJy4vY29yZS9TZXJ2ZXJBY3Rpdml0eSc7XG5pbXBvcnQgc2VydmVyU2VydmljZU1hbmFnZXIgZnJvbSAnLi9jb3JlL3NlcnZlclNlcnZpY2VNYW5hZ2VyJztcbmltcG9ydCBzb2NrZXRzIGZyb20gJy4vY29yZS9zb2NrZXRzJztcblxuLyogc2NlbmVzICovXG5pbXBvcnQgU2VydmVyRXhwZXJpZW5jZSBmcm9tICcuL3NjZW5lcy9TZXJ2ZXJFeHBlcmllbmNlJztcbi8vIGltcG9ydCBTZXJ2ZXJTdXJ2ZXkgZnJvbSAnLi9TZXJ2ZXJTdXJ2ZXknO1xuXG4vKiBzZXJ2aWNlcyAqL1xuLy8gaW1wb3J0IFNlcnZlckNhbGlicmF0aW9uIGZyb20gJy4vU2VydmVyQ2FsaWJyYXRpb24nO1xuaW1wb3J0IFNlcnZlckNoZWNraW4gZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2ZXJDaGVja2luJztcbmltcG9ydCBTZXJ2ZXJFcnJvclJlcG9ydGVyIGZyb20gJy4vc2VydmljZXMvU2VydmVyRXJyb3JSZXBvcnRlcic7XG4vLyBpbXBvcnQgU2VydmVyRmlsZUxpc3QgZnJvbSAnLi9TZXJ2ZXJGaWxlTGlzdCc7XG5pbXBvcnQgU2VydmVyTG9jYXRvciBmcm9tICcuL3NlcnZpY2VzL1NlcnZlckxvY2F0b3InO1xuaW1wb3J0IFNlcnZlck5ldHdvcmsgZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2ZXJOZXR3b3JrJztcbi8vIGltcG9ydCBTZXJ2ZXJQZXJmb3JtYW5jZSBmcm9tICcuL1NlcnZlclBlcmZvcm1hbmNlJztcbmltcG9ydCBTZXJ2ZXJQbGFjZXIgZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2ZXJQbGFjZXInO1xuaW1wb3J0IFNlcnZlclNoYXJlZENvbmZpZyBmcm9tICcuL3NlcnZpY2VzL1NlcnZlclNoYXJlZENvbmZpZyc7XG5pbXBvcnQgU2VydmVyU2hhcmVkUGFyYW1zIGZyb20gJy4vc2VydmljZXMvU2VydmVyU2hhcmVkUGFyYW1zJztcbmltcG9ydCBTZXJ2ZXJTeW5jIGZyb20gJy4vc2VydmljZXMvU2VydmVyU3luYyc7XG5cbi8vIHV0aWxzXG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0ICogYXMgbWF0aCBmcm9tICcuLi91dGlscy9tYXRoJztcbmltcG9ydCAqIGFzIHNldHVwIGZyb20gJy4uL3V0aWxzL3NldHVwJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKiBjb3JlICovXG4gIENsaWVudCxcbiAgc2VydmVyLFxuICBzZXJ2ZXJTZXJ2aWNlTWFuYWdlciwgLy8gQHRiZCAtIGV4cG9zZSA/XG4gIFNlcnZlckFjdGl2aXR5LFxuICBzb2NrZXRzLFxuXG4gIC8qIHNjZW5lcyAqL1xuICBTZXJ2ZXJFeHBlcmllbmNlLFxuICAvLyBTZXJ2ZXJTdXJ2ZXksXG5cbiAgLyogc2VydmljZXMgKi9cbiAgLy8gQHRvZG8gLSBtb3ZlIGludG8gYSBuYW1lc3BhY2UgP1xuICAvLyBTZXJ2ZXJDYWxpYnJhdGlvbixcbiAgU2VydmVyQ2hlY2tpbixcbiAgU2VydmVyRXJyb3JSZXBvcnRlcixcbiAgLy8gU2VydmVyRmlsZUxpc3QsXG4gIFNlcnZlckxvY2F0b3IsXG4gIFNlcnZlck5ldHdvcmssXG4gIC8vIFNlcnZlclBlcmZvcm1hbmNlLFxuICBTZXJ2ZXJQbGFjZXIsXG4gIFNlcnZlclNoYXJlZENvbmZpZyxcbiAgU2VydmVyU2hhcmVkUGFyYW1zLFxuICBTZXJ2ZXJTeW5jLFxuXG4gIHV0aWxzOiB7XG4gICAgaGVscGVycyxcbiAgICBtYXRoLFxuICAgIHNldHVwLFxuICB9LFxufTtcbiJdfQ==