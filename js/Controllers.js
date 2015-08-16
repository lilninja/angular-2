app
	.controller('ScoreCtrl', ['$scope', '$http', function($scope, $http){
		 $http.get('scores/scores.json')
	    .success(function(data){
	      $scope.scores = data;
	    });
	}])

	.controller('ScoreDetailCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
		$scope.scoreId = $stateParams.scoreId;
	}]);