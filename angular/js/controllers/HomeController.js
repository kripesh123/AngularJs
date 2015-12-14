app.controller("HomeController",function($scope){

			$scope.students=[
				{'id':1,'firstName':"Kripesh",'lastName':"Bista",'email':"kripesh@gmail.com",'status':true},
				{'id':2,'firstName':"Sujan",'lastName':"Maharjan",'email':"sujan@gmail.com",'status':true},
				{'id':3,'firstName':"Subash",'lastName':"Shrestha",'email':"subash@gmail.com",'status':false},
			];
		});

		$(document).on("ready",function(){
			$('#check-all').on("click",function(){
				$(".select-all").prop("checked",$(this).is(":checked"));
			});
		});
