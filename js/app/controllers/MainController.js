function MainController($scope) {
  $scope.contact = {
    name: 'Peter',
    phone: '999-222-3302',
    email: 'peter.jacobson@gmail.com'
  }
  
}

angular
  .module('app')
  .controller('MainController', MainController);