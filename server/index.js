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

var _scenesServerSurvey = require('./scenes/ServerSurvey');

var _scenesServerSurvey2 = _interopRequireDefault(_scenesServerSurvey);

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
  server: _coreServer2['default'],
  // @todo - move into namespace ?
  Client: _coreClient2['default'],
  serverServiceManager: _coreServerServiceManager2['default'], // @tbd - expose ?
  ServerActivity: _coreServerActivity2['default'],
  sockets: _coreSockets2['default'],

  /* scenes */
  ServerExperience: _scenesServerExperience2['default'],
  ServerSurvey: _scenesServerSurvey2['default'],

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MEJBQ21CLGVBQWU7Ozs7MEJBQ2YsZUFBZTs7OztrQ0FDUCx1QkFBdUI7Ozs7d0NBQ2pCLDZCQUE2Qjs7OzsyQkFDMUMsZ0JBQWdCOzs7Ozs7c0NBR1AsMkJBQTJCOzs7O2tDQUMvQix1QkFBdUI7Ozs7Ozs7cUNBSXRCLDBCQUEwQjs7OzsyQ0FDcEIsZ0NBQWdDOzs7Ozs7cUNBRXRDLDBCQUEwQjs7OztxQ0FDMUIsMEJBQTBCOzs7Ozs7b0NBRTNCLHlCQUF5Qjs7OzswQ0FDbkIsK0JBQStCOzs7OzBDQUMvQiwrQkFBK0I7Ozs7a0NBQ3ZDLHVCQUF1Qjs7Ozs7OzRCQUdyQixrQkFBa0I7O0lBQS9CLE9BQU87O3lCQUNHLGVBQWU7O0lBQXpCLElBQUk7OzBCQUNPLGdCQUFnQjs7SUFBM0IsS0FBSzs7cUJBRUY7O0FBRWIsUUFBTSx5QkFBQTs7QUFFTixRQUFNLHlCQUFBO0FBQ04sc0JBQW9CLHVDQUFBO0FBQ3BCLGdCQUFjLGlDQUFBO0FBQ2QsU0FBTywwQkFBQTs7O0FBR1Asa0JBQWdCLHFDQUFBO0FBQ2hCLGNBQVksaUNBQUE7Ozs7O0FBS1osZUFBYSxvQ0FBQTtBQUNiLHFCQUFtQiwwQ0FBQTs7QUFFbkIsZUFBYSxvQ0FBQTtBQUNiLGVBQWEsb0NBQUE7O0FBRWIsY0FBWSxtQ0FBQTtBQUNaLG9CQUFrQix5Q0FBQTtBQUNsQixvQkFBa0IseUNBQUE7QUFDbEIsWUFBVSxpQ0FBQTs7QUFFVixPQUFLLEVBQUU7QUFDTCxXQUFPLEVBQVAsT0FBTztBQUNQLFFBQUksRUFBSixJQUFJO0FBQ0osU0FBSyxFQUFMLEtBQUs7R0FDTjtDQUNGIiwiZmlsZSI6InNyYy9zZXJ2ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb3JlICovXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vY29yZS9DbGllbnQnO1xuaW1wb3J0IHNlcnZlciBmcm9tICcuL2NvcmUvc2VydmVyJztcbmltcG9ydCBTZXJ2ZXJBY3Rpdml0eSBmcm9tICcuL2NvcmUvU2VydmVyQWN0aXZpdHknO1xuaW1wb3J0IHNlcnZlclNlcnZpY2VNYW5hZ2VyIGZyb20gJy4vY29yZS9zZXJ2ZXJTZXJ2aWNlTWFuYWdlcic7XG5pbXBvcnQgc29ja2V0cyBmcm9tICcuL2NvcmUvc29ja2V0cyc7XG5cbi8qIHNjZW5lcyAqL1xuaW1wb3J0IFNlcnZlckV4cGVyaWVuY2UgZnJvbSAnLi9zY2VuZXMvU2VydmVyRXhwZXJpZW5jZSc7XG5pbXBvcnQgU2VydmVyU3VydmV5IGZyb20gJy4vc2NlbmVzL1NlcnZlclN1cnZleSc7XG5cbi8qIHNlcnZpY2VzICovXG4vLyBpbXBvcnQgU2VydmVyQ2FsaWJyYXRpb24gZnJvbSAnLi9TZXJ2ZXJDYWxpYnJhdGlvbic7XG5pbXBvcnQgU2VydmVyQ2hlY2tpbiBmcm9tICcuL3NlcnZpY2VzL1NlcnZlckNoZWNraW4nO1xuaW1wb3J0IFNlcnZlckVycm9yUmVwb3J0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2ZXJFcnJvclJlcG9ydGVyJztcbi8vIGltcG9ydCBTZXJ2ZXJGaWxlTGlzdCBmcm9tICcuL1NlcnZlckZpbGVMaXN0JztcbmltcG9ydCBTZXJ2ZXJMb2NhdG9yIGZyb20gJy4vc2VydmljZXMvU2VydmVyTG9jYXRvcic7XG5pbXBvcnQgU2VydmVyTmV0d29yayBmcm9tICcuL3NlcnZpY2VzL1NlcnZlck5ldHdvcmsnO1xuLy8gaW1wb3J0IFNlcnZlclBlcmZvcm1hbmNlIGZyb20gJy4vU2VydmVyUGVyZm9ybWFuY2UnO1xuaW1wb3J0IFNlcnZlclBsYWNlciBmcm9tICcuL3NlcnZpY2VzL1NlcnZlclBsYWNlcic7XG5pbXBvcnQgU2VydmVyU2hhcmVkQ29uZmlnIGZyb20gJy4vc2VydmljZXMvU2VydmVyU2hhcmVkQ29uZmlnJztcbmltcG9ydCBTZXJ2ZXJTaGFyZWRQYXJhbXMgZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2ZXJTaGFyZWRQYXJhbXMnO1xuaW1wb3J0IFNlcnZlclN5bmMgZnJvbSAnLi9zZXJ2aWNlcy9TZXJ2ZXJTeW5jJztcblxuLy8gdXRpbHNcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJy4uL3V0aWxzL21hdGgnO1xuaW1wb3J0ICogYXMgc2V0dXAgZnJvbSAnLi4vdXRpbHMvc2V0dXAnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qIGNvcmUgKi9cbiAgc2VydmVyLFxuICAvLyBAdG9kbyAtIG1vdmUgaW50byBuYW1lc3BhY2UgP1xuICBDbGllbnQsXG4gIHNlcnZlclNlcnZpY2VNYW5hZ2VyLCAvLyBAdGJkIC0gZXhwb3NlID9cbiAgU2VydmVyQWN0aXZpdHksXG4gIHNvY2tldHMsXG5cbiAgLyogc2NlbmVzICovXG4gIFNlcnZlckV4cGVyaWVuY2UsXG4gIFNlcnZlclN1cnZleSxcblxuICAvKiBzZXJ2aWNlcyAqL1xuICAvLyBAdG9kbyAtIG1vdmUgaW50byBhIG5hbWVzcGFjZSA/XG4gIC8vIFNlcnZlckNhbGlicmF0aW9uLFxuICBTZXJ2ZXJDaGVja2luLFxuICBTZXJ2ZXJFcnJvclJlcG9ydGVyLFxuICAvLyBTZXJ2ZXJGaWxlTGlzdCxcbiAgU2VydmVyTG9jYXRvcixcbiAgU2VydmVyTmV0d29yayxcbiAgLy8gU2VydmVyUGVyZm9ybWFuY2UsXG4gIFNlcnZlclBsYWNlcixcbiAgU2VydmVyU2hhcmVkQ29uZmlnLFxuICBTZXJ2ZXJTaGFyZWRQYXJhbXMsXG4gIFNlcnZlclN5bmMsXG5cbiAgdXRpbHM6IHtcbiAgICBoZWxwZXJzLFxuICAgIG1hdGgsXG4gICAgc2V0dXAsXG4gIH0sXG59O1xuIl19