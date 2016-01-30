angular.module('MyApp.controllers', []).controller('BookmarkCtrl', function($scope, BookmarkStore, $rootScope, $element){
  $scope.save = function(){

    var arrBookmarks = BookmarkStore.get();

    arrBookmarks.push({
      url: $scope.bookmark.url,
      title: $scope.bookmark.title,
      tags: $scope.bookmark.tags.split(','),
      created: new Date().getTime()
    });

    BookmarkStore.put(arrBookmarks);

    $rootScope.$bookcast('MainCtrl:loadBookmarks', {});
    $element.modal('hide');
  };
});

angular.module('MyApp.controllers', []).controller('MainCtrl', function($scope, BookmarkStore, $location){
  loadBookmarks();

  $scope.$on('MainCtrl:loadBookmarks', loadBookmarks);

  function loadBookmarks(){
    $scope.bookmarks = BookmarkStore.get(true);
    $scope.perPage = 10;
    $scope.totalPages = Math.ceil($scope.bookmarks.lenght / $scope.perPage);
    $scope.currentPage = 1;
  };
});