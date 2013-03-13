var ngmap = angular.module('ngmap', []);

ngmap.directive('ngMap', function () {

    return function (scope, element, attrs) {
        scope.map = new google.maps.Map(element[0], scope.$eval(attrs.ngMap));
    }

});

ngmap.directive('ngMapMarkers', function () {

  
    return function (scope, element, attrs) {
        scope.bounds = new google.maps.LatLngBounds();
        scope.mapMarkersOld = {};
        scope.$watch(attrs.ngMapMarkers, function (value) {
            scope.mapMarkersNew = value;
            angular.forEach(scope.mapMarkersOld, function (value, key) {
                if (typeof scope.mapMarkersNew[key]=='undefined') {
                    scope.mapMarkersOld[key].setMap(null);    
                    delete scope.mapMarkersOld[key];
                }
            });
            angular.forEach(scope.mapMarkersNew, function (value, key) {
                
                if (typeof scope.mapMarkersOld[key]=='undefined') {
                    var latlng = new google.maps.LatLng(value.lat, value.long);
                    scope.bounds.extend(latlng);
                    scope.mapMarkersOld[key] = new google.maps.Marker({
                        map: scope.map,
                        position: latlng
                    });
                }
        
            });
            
            scope.map.fitBounds(scope.bounds);
            var blistener = google.maps.event.addListener(scope.map, 'bounds_changed', function(event) {
                if (this.getZoom() > 11){
                    this.setZoom(11);
                }
                scope.map.panToBounds(scope.bounds);
                google.maps.event.removeListener(blistener);
            });
        });
    }

});