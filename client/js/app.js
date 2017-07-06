var app = angular.module('BlogPosts', []);

app.controller('websiteController', function($scope, $http){
	$scope.titleTemplateUrl = "template/title.html";
	$scope.blogPostTemplateUrl = "template/blogPost.html";
	$scope.sidebarTemplateUrl = "template/sidebar.html";
	$scope.footerTemplateUrl = "template/footer.html";
})

app.controller('titleController', function($scope, $http){
	
	$http.get("api/title").then(function(response) {
        $scope.websiteTitle = response.data.websiteTitle;
		$scope.websiteTagline = response.data.websiteTagline;
    });

})

app.controller('mainContentController', function($scope, $http) {
	
	$http.get("api/posts").then(function(response) {
        $scope.posts = response.data;
    });

});

app.controller('footerController', function($scope, $http){

	$http.get("api/footer").then(function(response) {
        $scope.footerCopyrightNotice = response.data;
    });
	
});
