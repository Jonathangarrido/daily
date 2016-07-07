'use strict';

// miMenuCtrl.$inject = [];
function miMenuCtrl() {
  var vm = this;
  
  $('.backHome').click(function(){
    $('#menuCheck').prop('checked', false);
  })
}


angular.module('miMenu', [])

  .component('miMenu',{
    templateUrl: './js/components/mi-menu.html',
    controller: miMenuCtrl
  });
