'use strict';

miRecetaCtrl.$inject = ['Consultas','$location','Analytics'];
function miRecetaCtrl(Consultas,$location,Analytics) {
  var vm = this;
  vm.receta = [];
  vm.ingredientes = [];
  vm.preparacion = [];
  vm.agregadoIngrediente = [];
  vm.agregadoPreparacion = [];


  activate();


  //////////////////////////////////////


  function activate(){
    getReceta();
    
  }

  // obtengo receta
  function getReceta(){
    var url2 = $location.path().split('/');
    var url = url2[2];

    return Consultas.get_id({id:url}).$promise
      .then(function(data){
        vm.receta = data[0];

        if(vm.receta.ingredientes){
          ingredientes();
        }
        if(vm.receta.preparacion){
          vm.preparacion = vm.receta.preparacion;
        }
        if(vm.receta.agregadoIngrediente){
          agregadoIngrediente();
        }
        if(vm.receta.agregadoPreparacion){
          vm.agregadoPreparacion = vm.receta.agregadoPreparacion;
        }
        if(vm.receta.video){

          // Crecacion del video
          var v = document.getElementsByClassName("youtube-player");
           for (var n = 0; n < v.length; n++) {
             var p = document.createElement("div");
             p.innerHTML = labnolThumb(vm.receta.imagen);
             p.onclick = labnolIframe;
             v[n].appendChild(p);
           }
        }

        // Llamo al Analytics
        analytics(vm.receta);

        return vm.receta;
      });
  }

  //separo ingredientes
  function ingredientes(){
    vm.ingredientes = dividir(vm.receta.ingredientes)
    return vm.ingredientes;
  }

  //separo agregado ingredientes
  function agregadoIngrediente(){
    vm.agregadoIngrediente = dividir(vm.receta.agregadoIngrediente)
    return vm.agregadoIngrediente;
  }

  // dividir
  function dividir(e){
    var cortado = e.split('-');
    return cortado;
  };


  // VIDEO IMAGEN PREVIEW
  function labnolThumb(id) {
      return '<img class="youtube-thumb" src="//i.ytimg.com/vi/'+ id +'/hqdefault.jpg"><div class="play-button"></div>';
      // return '<img class="youtube-thumb" src="http://www.dailyfoods.cl/parachuparselosdedos/images/recetas/'+ id +'-fondo.jpg"><div class="play-button"></div>';
  }
   
  // VIDEO 
  function labnolIframe() {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id +"?autoplay=1&rel=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&showinfo=0");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "allowfullscreen");
      iframe.setAttribute("id", "youtube-iframe");
      this.parentNode.replaceChild(iframe, this);
  }
  // Analytics
  function analytics(receta){
    Analytics.trackEvent('Producto: '+receta.producto,'Receta','Receta: '+receta.titulo);
  }

}




angular.module('miReceta', [])

  .component('miReceta',{
    templateUrl: './js/components/mi-receta.html',
    controller: miRecetaCtrl
  });
