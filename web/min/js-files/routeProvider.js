var app = angular.module("iptv", ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {templateUrl: "./main.html"})
        .when("/users", {templateUrl: "./users.html", controller: "userController"})
        .when("/vendors", {templateUrl: "./vendors.html", controller: "vendorController"})
        .when("/reports", {templateUrl: "./reports.html", controller: "reportsController"})
        .when("/query", {templateUrl: "./query.html", controller: "queryController"})
        .when("/error", {templateUrl: "./main.html"})
        .otherwise({redirectTo: "/error"});

});
