'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _wavesAudio = require('waves-audio');

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _ClientCalibration = require('./ClientCalibration');

var _ClientCalibration2 = _interopRequireDefault(_ClientCalibration);

var _ClientCheckin = require('./ClientCheckin');

var _ClientCheckin2 = _interopRequireDefault(_ClientCheckin);

var _ClientControl = require('./ClientControl');

var _ClientControl2 = _interopRequireDefault(_ClientControl);

var _ClientFileList = require('./ClientFileList');

var _ClientFileList2 = _interopRequireDefault(_ClientFileList);

var _ClientLocator = require('./ClientLocator');

var _ClientLocator2 = _interopRequireDefault(_ClientLocator);

var _ClientPerformance = require('./ClientPerformance');

var _ClientPerformance2 = _interopRequireDefault(_ClientPerformance);

var _ClientPlacer = require('./ClientPlacer');

var _ClientPlacer2 = _interopRequireDefault(_ClientPlacer);

var _ClientSurvey = require('./ClientSurvey');

var _ClientSurvey2 = _interopRequireDefault(_ClientSurvey);

var _ClientSync = require('./ClientSync');

var _ClientSync2 = _interopRequireDefault(_ClientSync);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _ClientModule = require('./ClientModule');

var _ClientModule2 = _interopRequireDefault(_ClientModule);

var _Orientation = require('./Orientation');

var _Orientation2 = _interopRequireDefault(_Orientation);

// import Platform from './Platform';

var _Selector = require('./Selector');

var _Selector2 = _interopRequireDefault(_Selector);

// import Space from './Space';

var _Welcome = require('./Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _displayView = require('./display/View');

var _displayView2 = _interopRequireDefault(_displayView);

var _displaySegmentedView = require('./display/SegmentedView');

var _displaySegmentedView2 = _interopRequireDefault(_displaySegmentedView);

var _displaySpaceView = require('./display/SpaceView');

var _displaySpaceView2 = _interopRequireDefault(_displaySpaceView);

// import defaultTemplates from './views/defaultTemplates';
// import defaultTextContents from './views/defaultTextContents';

exports['default'] = {
  audioContext: _wavesAudio.audioContext,
  client: _client2['default'],
  input: _input2['default'],
  ClientCalibration: _ClientCalibration2['default'],
  ClientCheckin: _ClientCheckin2['default'],
  ClientControl: _ClientControl2['default'],
  ClientFileList: _ClientFileList2['default'],
  ClientLocator: _ClientLocator2['default'],
  ClientPerformance: _ClientPerformance2['default'],
  ClientPlacer: _ClientPlacer2['default'],
  ClientSurvey: _ClientSurvey2['default'],
  ClientSync: _ClientSync2['default'],
  // Dialog,
  Loader: _Loader2['default'],
  ClientModule: _ClientModule2['default'],
  Orientation: _Orientation2['default'],
  // Platform,
  Selector: _Selector2['default'],
  // Space,
  Welcome: _Welcome2['default'],

  display: {
    View: _displayView2['default'],
    SegmentedView: _displaySegmentedView2['default'],
    SpaceView: _displaySpaceView2['default']
  }
};
module.exports = exports['default'];
// defaultTemplates,
// defaultTextContents,
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7MEJBQTZCLGFBQWE7O3NCQUN2QixVQUFVOzs7O3FCQUNYLFNBQVM7Ozs7aUNBRUcscUJBQXFCOzs7OzZCQUN6QixpQkFBaUI7Ozs7NkJBQ2pCLGlCQUFpQjs7Ozs4QkFDaEIsa0JBQWtCOzs7OzZCQUNuQixpQkFBaUI7Ozs7aUNBQ2IscUJBQXFCOzs7OzRCQUMxQixnQkFBZ0I7Ozs7NEJBQ2hCLGdCQUFnQjs7OzswQkFDbEIsY0FBYzs7OztzQkFFbEIsVUFBVTs7Ozs0QkFDSixnQkFBZ0I7Ozs7MkJBQ2pCLGVBQWU7Ozs7Ozt3QkFFbEIsWUFBWTs7Ozs7O3VCQUViLFdBQVc7Ozs7MkJBRWQsZ0JBQWdCOzs7O29DQUNQLHlCQUF5Qjs7OztnQ0FDN0IscUJBQXFCOzs7Ozs7O3FCQUs1QjtBQUNiLGNBQVksMEJBQUE7QUFDWixRQUFNLHFCQUFBO0FBQ04sT0FBSyxvQkFBQTtBQUNMLG1CQUFpQixnQ0FBQTtBQUNqQixlQUFhLDRCQUFBO0FBQ2IsZUFBYSw0QkFBQTtBQUNiLGdCQUFjLDZCQUFBO0FBQ2QsZUFBYSw0QkFBQTtBQUNiLG1CQUFpQixnQ0FBQTtBQUNqQixjQUFZLDJCQUFBO0FBQ1osY0FBWSwyQkFBQTtBQUNaLFlBQVUseUJBQUE7O0FBRVYsUUFBTSxxQkFBQTtBQUNOLGNBQVksMkJBQUE7QUFDWixhQUFXLDBCQUFBOztBQUVYLFVBQVEsdUJBQUE7O0FBRVIsU0FBTyxzQkFBQTs7QUFFUCxTQUFPLEVBQUU7QUFDUCxRQUFJLDBCQUFBO0FBQ0osaUJBQWEsbUNBQUE7QUFDYixhQUFTLCtCQUFBO0dBR1Y7Q0FDRiIsImZpbGUiOiJzcmMvY2xpZW50L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXVkaW9Db250ZXh0IH0gZnJvbSAnd2F2ZXMtYXVkaW8nO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL2NsaWVudCc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5cbmltcG9ydCBDbGllbnRDYWxpYnJhdGlvbiBmcm9tICcuL0NsaWVudENhbGlicmF0aW9uJztcbmltcG9ydCBDbGllbnRDaGVja2luIGZyb20gJy4vQ2xpZW50Q2hlY2tpbic7XG5pbXBvcnQgQ2xpZW50Q29udHJvbCBmcm9tICcuL0NsaWVudENvbnRyb2wnO1xuaW1wb3J0IENsaWVudEZpbGVMaXN0IGZyb20gJy4vQ2xpZW50RmlsZUxpc3QnO1xuaW1wb3J0IENsaWVudExvY2F0b3IgZnJvbSAnLi9DbGllbnRMb2NhdG9yJztcbmltcG9ydCBDbGllbnRQZXJmb3JtYW5jZSBmcm9tICcuL0NsaWVudFBlcmZvcm1hbmNlJztcbmltcG9ydCBDbGllbnRQbGFjZXIgZnJvbSAnLi9DbGllbnRQbGFjZXInO1xuaW1wb3J0IENsaWVudFN1cnZleSBmcm9tICcuL0NsaWVudFN1cnZleSc7XG5pbXBvcnQgQ2xpZW50U3luYyBmcm9tICcuL0NsaWVudFN5bmMnO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcbmltcG9ydCBDbGllbnRNb2R1bGUgZnJvbSAnLi9DbGllbnRNb2R1bGUnO1xuaW1wb3J0IE9yaWVudGF0aW9uIGZyb20gJy4vT3JpZW50YXRpb24nO1xuLy8gaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vUGxhdGZvcm0nO1xuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4vU2VsZWN0b3InO1xuLy8gaW1wb3J0IFNwYWNlIGZyb20gJy4vU3BhY2UnO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi9XZWxjb21lJztcblxuaW1wb3J0IFZpZXcgZnJvbSAnLi9kaXNwbGF5L1ZpZXcnO1xuaW1wb3J0IFNlZ21lbnRlZFZpZXcgZnJvbSAnLi9kaXNwbGF5L1NlZ21lbnRlZFZpZXcnO1xuaW1wb3J0IFNwYWNlVmlldyBmcm9tICcuL2Rpc3BsYXkvU3BhY2VWaWV3Jztcbi8vIGltcG9ydCBkZWZhdWx0VGVtcGxhdGVzIGZyb20gJy4vdmlld3MvZGVmYXVsdFRlbXBsYXRlcyc7XG4vLyBpbXBvcnQgZGVmYXVsdFRleHRDb250ZW50cyBmcm9tICcuL3ZpZXdzL2RlZmF1bHRUZXh0Q29udGVudHMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXVkaW9Db250ZXh0LFxuICBjbGllbnQsXG4gIGlucHV0LFxuICBDbGllbnRDYWxpYnJhdGlvbixcbiAgQ2xpZW50Q2hlY2tpbixcbiAgQ2xpZW50Q29udHJvbCxcbiAgQ2xpZW50RmlsZUxpc3QsXG4gIENsaWVudExvY2F0b3IsXG4gIENsaWVudFBlcmZvcm1hbmNlLFxuICBDbGllbnRQbGFjZXIsXG4gIENsaWVudFN1cnZleSxcbiAgQ2xpZW50U3luYyxcbiAgLy8gRGlhbG9nLFxuICBMb2FkZXIsXG4gIENsaWVudE1vZHVsZSxcbiAgT3JpZW50YXRpb24sXG4gIC8vIFBsYXRmb3JtLFxuICBTZWxlY3RvcixcbiAgLy8gU3BhY2UsXG4gIFdlbGNvbWUsXG5cbiAgZGlzcGxheToge1xuICAgIFZpZXcsXG4gICAgU2VnbWVudGVkVmlldyxcbiAgICBTcGFjZVZpZXcsXG4gICAgLy8gZGVmYXVsdFRlbXBsYXRlcyxcbiAgICAvLyBkZWZhdWx0VGV4dENvbnRlbnRzLFxuICB9XG59O1xuIl19