app.config(function($routeProvider){
			$routeProvider.when("/",{
				templateUrl:"views/partials/table.html",
				controller:"HomeController",
			}).when("/contact",{
				templateUrl:"views/partials/contact.html",
				controller:"ContactController"
			});
	});