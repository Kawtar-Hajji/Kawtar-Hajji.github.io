/**
 * Created by Team ADEC Casa on 10/09/2017.
 */
var app=angular.module("myApp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('acceuil',{
        url:'/acceuil',
        templateUrl:'partial/acceuil.html',
        controller:'AcceuilController'
    });
    $stateProvider.state('entreprise',{
        url:'/entreprise',
        templateUrl:'partial/entreprise.html',
        controller:'EntrepriseController'
    });
    $stateProvider.state('actualite',{
        url:'/actualite',
        templateUrl:'partial/actualite.html',
        controller:'ActualiteController'
    });
    $stateProvider.state('presse',{
        url:'/presse',
        templateUrl:'partial/presse.html',
        controller:'PresseController'
    });
    $stateProvider.state('articleDetail',{
        url:'/articleDetail',
        templateUrl:'partial/articleDetail.html',
        controller:'DetailArtController'
    });
    $stateProvider.state('publication_insee',{
        url:'/publication_insee',
        templateUrl:'partial/publication_insee.html',
        controller:'PubInseeController'
    });
    $stateProvider.state('blog',{
        url:'/blog',
        templateUrl:'partial/blog.html',
        controller:'BlogController'
    });
    $stateProvider.state('sujet_blog',{
        url:'/sujet_blog',
        templateUrl:'partial/sujet_blog.html',
        controller:'SujetBlogController'
    });
    $stateProvider.state('account',{
        url:'/account',
        templateUrl:'partial/account.html',
        controller:'AccountController'
    });
    $urlRouterProvider.otherwise("acceuil")
});
app.controller('AcceuilController', function() {

});
app.controller('EntrepriseController', function() {

});
app.controller('ActualiteController', function() {

});
app.controller('DetailArtController', function() {

});
app.controller('PubInseeController', function() {

});
app.controller('BlogController', function() {

});
app.controller('SujetBlogController', function() {

});
app.controller('AccountController', function() {

});