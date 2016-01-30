angular.module('MyApp.controllers', []).controller('BookmarkCtrl', function($scope){
    $scope.save = function(){
        var arrBookmarks = BookmarkStore.get();

        arrBookmarks.push({
            url: $scope.bookmark.url,
            title: $scope.bookmark.title,
            tags: $scope.bookmark.tags.split(','),
            created: new Date().getTime()
        });
    };
});