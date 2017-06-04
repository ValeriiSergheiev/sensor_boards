(function() {
  'use strict';

  angular
  .module('gulpAngularTest1')
  .controller('MainController', MainController);
    /*.controller('MainController', function($scope) {

      $scope.showEditModalDialog = function(sb){
        console.log(sb)
        $scope.title = 'Editsensor board'
        $scope.editSB = sb
        var template = $compile('<div><input type="text" ng-model="editSD.title"/></div>')
        var bodyRes = template($scope)
        $('#myUniversalModak .modal-body').append(bodyRes)
        $('#myUniversalModak').modal()
      }

      $scope.showDeleteModalDialog = function(item){
        $scope.title = 'Delete sensor board'
        $('#myUniversalModak').modal()
      }

      $scope.tempObjectSensorBoard = [];
      $scope.tempObjectProtocols = [];
      $scope.tempObjectSensors = [];
      $scope.tempObjectDevices = [];

      $scope.newObjectSensorBoard = [];
      $scope.newObjectProtocols = [];
      $scope.newObjectSensors = [];
      $scope.newObjectDevices = [];

      $scope.addNewObject = function() {

        $scope.newObjectSensorBoard.push($scope.tempObjectSensorBoard);
        $scope.newObjectProtocols.push($scope.tempObjectProtocols);
        $scope.newObjectSensors.push($scope.tempObjectSensors);
        $scope.newObjectDevices.push($scope.tempObjectDevices);
        
        $scope.tempObjectSensorBoard = [];
        $scope.tempObjectProtocols = [];
        $scope.tempObjectSensors = [];
        $scope.tempObjectDevices = [];

        $('.modal').modal('hide');
      };

      // $scope.deleteObject = function(object) {
      //   var index = $scope.newObjectSensorBoard.indexOf(object);
      //   console.log(index);
      // };

    });*/


    /** @ngInject */
    function MainController() {
      var vm = this;
      
      vm.tempObjectSensorBoard = {
        id: '',
        title: '',
        desc: ''
      };

      vm.newObjectSensorBoard = [];

      vm.addNewObject = function() {

        if (vm.tempObjectSensorBoard.id != '' || vm.tempObjectSensorBoard.title != '' || vm.tempObjectSensorBoard.desc != '') {
          vm.newObjectSensorBoard.push(vm.tempObjectSensorBoard);
          vm.tempObjectSensorBoard = {
            id: '',
            title: '',
            desc: ''
          };
          $('.modal').modal('hide');
        } else {
          alert('Fill in the fields!');
        }

      };

      vm.showDeleteModalDialog = function (fields) {

        var currentFieldIndex = vm.newObjectSensorBoard.indexOf(fields);
        vm.newObjectSensorBoard.splice(currentFieldIndex, 1);
      };

      vm.showEditModalDialog = function(fields){
        console.log(fields);
        vm.header = 'Edit Sensor board';
        console.log(vm.header);
        vm.footer = 'Footer headerEditsensor board';
        vm.editSB = fields;
        //var template = $compile('<div><input type="text" ng-model="editSD.title"/></div>');
        //var bodyRes = template(vm);
        //$('#myUniversalModal .modal-body').append(bodyRes);
        $('#myUniversalModal').modal();
      };

    }
  })();
