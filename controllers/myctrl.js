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
})

// Filter name
app.filter('charlimit', function() {
	return function(input,length) {
		// Limit to 10 chars
		if (!length) {
			length = 10
		}
		// Calls string
		if(!input) {
			return ''
		}
		// Returns it
		if(input.length <= length) {
			return input
		}
		else {
			// String
			return input.substring(0, length) + 'max charlimit'
		}
	}	
})
