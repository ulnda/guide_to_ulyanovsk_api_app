"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var l=0;l<t.length;l++){var o=t[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,l,o){return l&&e(t.prototype,l),o&&e(t,o),t}}(),HotelsController=function(){function e(t,l){_classCallCheck(this,e),this.hotels=t.query(),this.deps={Hotel:t,$modal:l}}return _createClass(e,[{key:"removeHotel",value:function(e){this.deps.$modal.open({templateUrl:"templates/hotels/removing_modal.html",controller:"HotelRemovingModalController as c",size:"sm",resolve:{hotel:function(){return e}}})}}]),e}();HotelsController.$inject=["Hotel","$modal"];var HotelRemovingModalController=function(){function e(t,l,o){_classCallCheck(this,e),this.hotel=o,this.deps={$modalInstance:t,$state:l}}return _createClass(e,[{key:"removeHotel",value:function(){var e=this;this.hotel.$delete(function(){e.deps.$modalInstance.dismiss("ok"),e.deps.$state.go(e.deps.$state.current,{},{reload:!0})})}},{key:"cancel",value:function(){this.deps.$modalInstance.dismiss("cancel")}}]),e}();HotelRemovingModalController.$inject=["$modalInstance","$state","hotel"];var NewHotelController=function(){function e(t,l,o){var n=this;_classCallCheck(this,e),this.hotel=new t({latitude:54.312267,longitude:48.395505,croppedImage:null}),this.options={map:{center:{latitude:54.312267,longitude:48.395505},zoom:8},point:{id:0,icon:"images/marker.png",draggable:!0},events:{click:function(e,t,o){var a=o[0];n.hotel.latitude=a.latLng.lat(),n.hotel.longitude=a.latLng.lng(),l.$apply()}}},this.sourceImage=null,this.deps={Hotel:t,$state:o}}return _createClass(e,[{key:"saveHotel",value:function(){var e=this;this.hotel.$save(function(){e.deps.$state.go("hotels.all")})}}]),e}();NewHotelController.$inject=["Hotel","$scope","$state"];var EditHotelController=function(){function e(t,l,o,n){var a=this;_classCallCheck(this,e),this.hotel=t.get({id:n.id},function(){console.log(a.hotel.getImageUrl()),a.options={map:{center:{latitude:a.hotel.latitude,longitude:a.hotel.longitude},zoom:8},point:{id:0,icon:"images/marker.png",draggable:!0},events:{click:function(e,t,o){var n=o[0];a.place.latitude=n.latLng.lat(),a.place.longitude=n.latLng.lng(),l.$apply()}}}}),this.deps={Hotel:t,$state:o}}return _createClass(e,[{key:"saveHotel",value:function(){var e=this;this.hotel.$update(function(){e.deps.$state.go("hotels.all")})}}]),e}();EditHotelController.$inject=["Hotel","$scope","$state","$stateParams"];var controllers=angular.module("app.hotels.controllers",[]);controllers.controller("HotelsController",HotelsController),controllers.controller("NewHotelController",NewHotelController),controllers.controller("EditHotelController",EditHotelController),controllers.controller("HotelRemovingModalController",HotelRemovingModalController);