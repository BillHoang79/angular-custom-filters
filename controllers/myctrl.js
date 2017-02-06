app.controller('myCtrl', function($scope,$filter) {
	$scope.mydata = { 
		arr: [
		{
			name: "jane",
			age:34
		},
		{
			name:"jake",
			age:56
		},
		{
			name:"jack",
			age:23
		},
		{
			name:"john",
			age:45
		},
		{
			name:"john",
			age:32
		}
	]}
	// Filters in controllers
	console.log($filter('uppercase')('make this string uppercase!'))
})