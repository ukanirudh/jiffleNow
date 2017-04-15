'use strict';

myApp.controller('View1Ctrl',function($scope, appFactory){
  $scope.data = '';
  $scope.currentQuestion = 0;
  $scope.selectedAnswer = 0;
  $scope.question = '' ;
  $scope.results = [];
  $scope.displayResults = false;
  $scope.buttonText = 'Answer and move to next question';

  appFactory.getData().success(function(data){
    $scope.data = data;
    $scope.totalQuestions = data.length;
    $scope.question = data[$scope.currentQuestion].text;
    $scope.currentOptions = data[$scope.currentQuestion].options;
    console.log(data);
  }).error(function(error){
    console.log(error);
  });

  $scope.nextQuestion = function() {
      var data = $scope.data[$scope.currentQuestion];
      //console.log($scope.selectedAnswer);
      //console.log(data && data.answer);
      if ( $scope.selectedAnswer == ( data && data.answer ) ){
        $scope.results.push({'selectedAnswer': $scope.selectedAnswer,'answersMatched':true });
      } else {
        $scope.results.push({'selectedAnswer': $scope.selectedAnswer,'answersMatched': false });
      }

        $scope.currentQuestion++;
        if( $scope.currentQuestion <= $scope.totalQuestions-1  ){
          $scope.question = $scope.data[$scope.currentQuestion].text;
          $scope.currentOptions = $scope.data[$scope.currentQuestion].options;
          //console.log($scope.question);
        } else {
        //console.log("display results");
        //console.log($scope.results);
        $scope.displayResults = true;
      }
      if( $scope.currentQuestion == $scope.totalQuestions-1 ) {
          $scope.buttonText = 'Finish the quiz and display the results';
      }
  };

});
