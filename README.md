ng-map
======

A simple Google Maps implementation for Angular. Nobody should use this....

What is this?
-----

I couldn't find a Google Maps implementation for Angular that worked the way I wanted it to. This is what I am working towards

How do I use it?
-----

You shouldn't. It's made for a very specific purpose right now.

But what if I *REALLY* want to?
-----

Set up is pretty simple. You'll need Angular's scripts included, and also the Google Maps V3 JS API. After that, include this as a dependency:

    angular.module('myapp', ['ngmap']);

In your template, just use this:

```
<div ng-map="mapOptions" ng-map-markers="myMarkers">
```

mapOptions is a Javascript object that defines options in the same way as the official API. myMarkers is a JS object in the following format:

```
1 : { 'lat': 23, 'long': 28 }
```
The first number should be a unique number. It is used to remove old markers. Doesn't work in your use case? Find something else


