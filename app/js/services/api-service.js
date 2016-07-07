(function () {
  'use strict';

  Consultas.$inject = ['$location', '$resource', 'BaseUrl','$http'];
  function Consultas($location,$resource,BaseUrl,$http){

    var service = {
      get_api: get_api,
      get_id: get_id,
      get_categorias: get_categorias,
      get_productos: get_productos
    };

    return service;

    /////////////////////////////////////////


    // TODAS LAS RECETAS
    function get_api(){
      var todos = $resource(BaseUrl);
      return todos.query();
    }

    // RECETA ESPECIFICA
    function get_id(id){
      var unico = $resource(BaseUrl+'/receta/:id',id);
      return unico.query();
    }

    // CATEGORIAS
    function get_categorias(id){
      var categorias = $resource(BaseUrl+'/categorias');
      return categorias.query();
    }

    // PRODUCTOS
    function get_productos(id){
      var productos = $resource(BaseUrl+'/productos');
      return productos.query();
    }

  }



  angular
    .module('apiService', [])
    .factory('Consultas', Consultas)
    // .constant('BaseUrl', 'http://www.dailyfoods.cl/parachuparselosdedos/api');
    .constant('BaseUrl', 'http://localhost:8888/daily/app/api');


})();