(function() {
  'use strict';

  angular
    .module('gulpAngularTest1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
