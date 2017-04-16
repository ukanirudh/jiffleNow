angular.module('myApp').factory('appFactory',function($http){
		var data;
		function getData() {
			data = $http.get('https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json');
			//'data/questions.json'(local json file..)
			return data;
		}


		return {
			getData: getData
		}
	});
