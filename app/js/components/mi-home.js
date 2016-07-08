'use strict';

miHomeCtrl.$inject = ['Consultas','Analytics'];
function miHomeCtrl(Consultas,Analytics) {
  var vm = this;
  vm.search = '';
  vm.recetas = [];
  vm.productos = [];
  vm.categorias = [];
  vm.abajo;


  activate();


  //////////////////////////////////////


  function activate(){
    getRecetas();
    getProductos();
    getCategorias();
    top();
  }
  //
  function top(){
    console.log('top')
    window.scrollTo(0,0); 
  }

  // obtengo recetas
  function getRecetas() {
    return Consultas.get_api().$promise
      .then(function(data){
        vm.recetas = data;
        return vm.recetas;
      });
  }
  // obtengo productos
  function getProductos() {
    return Consultas.get_productos().$promise
      .then(function(data){
        vm.productos = data;
        return vm.productos;
      });
  }
  // obtengo categorias
  function getCategorias() {
    return Consultas.get_categorias().$promise
      .then(function(data){
        vm.categorias = data;
        return vm.categorias;
      });
  }
  
  // ir abajo
  vm.abajo = function(){
    $("body,html").animate({scrollTop:$(".daily-galeria-recetas").offset().top},500);
  }

  // vm.tag = function(receta){
  //   console.log('asdasd')
  //   Analytics.trackEvent('Recetas','Producto: '+receta.producto,'Receta: '+receta.titulo,'Categoria: '+receta.categoria);
  // }
  

}




angular.module('miHome', [])

  .component('miHome',{
    templateUrl: './js/components/mi-home.html',
    controller: miHomeCtrl
  });
