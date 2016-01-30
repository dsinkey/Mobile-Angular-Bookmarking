angular.module('MyApp.controllers', []).controller('BookmarkCtrl', function($scope){
    $scope.save = function(){
        var arrBookmarks = BookmarkStore.get();

        arrBookmarks.push({
            
        });
    };
});