"use strict";var _module=angular.module("app",["ui.bootstrap","ui.router","ngResource","angular-img-cropper","uiGmapgoogle-maps","app.places","app.hotels","app.services"]);_module.config(["$locationProvider","$urlRouterProvider","uiGmapGoogleMapApiProvider",function(e,o,r){r.configure({key:"AIzaSyDH15pOJfy_ghTLOPjeBFfjXXxl2gBqzlk",libraries:"places, geocoder",v:"3.17"}),o.otherwise("/places"),e.html5Mode(!1)}]);