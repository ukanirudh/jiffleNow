angular.module('myApp').factory('appFactory',function($http){
		var data;
		function getData() {
			data = $http.get('data/questions.json');
			return data;
		}


		return {
			getData: getData
		}
	});
