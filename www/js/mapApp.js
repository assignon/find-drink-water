
      var locationAlowed = false;
      function callFunctions()
      {

        //this.displayMarker();
        initmap();
        closeTour();
        getUserPosition();
        getUserUpdatedPosition();
        markersContent();
        domManipulation.locationAllowShow(".startTour");
        domManipulation.searchAnimation();
        domManipulation.aboutFDW();
        domManipulation.aboutWater();
        domManipulation.tutorial();
        domManipulation.responsive();

        window.addEventListener('resize', domManipulation.responsive);


        $(function(){

            $("#searchMap").hide();

             $(".locationAllow").show();
          //  $(".locationAllow").hide();

              $("#closeAppInfo").hide();
              $("#closeWaterInfo").hide();
              $(".appInfo").hide();
              $(".waterInfo").hide();

            $('.presentation').animate({

              opacity: 1,

            },{

               duration: 1000,
               easing: "easeInOutBack",

            })


            $("#waterIcon").animate({

               bottom: 5

               ,

            },{

               duration: 3000,
               easing: "easeOutBounce",

            })


            $(".filters").hide();
            $(".searchForm").hide();
            $("#closeFilterImg").hide();


            $("#search").click(function(){

               $("#search").hide('slow');
               $(".filters").hide('slow');
               $("#filterImg").show('slow');
               $(".searchForm").show('slow');
               $(".searchFilter").css('width', '70%');

            })


            $("#filterImg").click(function(){

               $("#search").show('slow');
               $(".filters").show('slow');
               $("#filterImg").hide('slow');
               $(".searchForm").hide('slow');
               $(".searchFilter").css('width', '70%');

            })


            $("#filterImg").click(function(){

            //  $(".filters").css('opacity','1');
               $(".searchForm").css('borderRadius','3px 3px 0px 0px');
            //   $(".filters").show('slow');
               $("#closeFilterImg").css('opacity','1');
               $("#closeFilterImg").show('slow');
               $("#filterImg").hide('slow');
               $(".head").css('marginTop','-105px');
               $(".head").css('top','150px');

            })


            $("#closeFilterImg").click(function(){

              // $(".filters").css('opacity','0');
            //   $(".filters").hide('slow');
               $("#closeFilterImg").css('opacity','0');
               $("#closeFilterImg").hide('slow');
               $("#filterImg").show('slow');
               $(".head").css('marginTop','-42px');
               $(".head").css('top','80px');
               $(".searchForm").css('borderRadius','3px');

            })


            $("#bMenu").click(function(){

              $(".mapContainer").css('width', '0%');
               $(".mapContainer").css('height', '0%');
               $('.menu').animate({

                 marginLeft: 0,

               },{

                 duration: 700,

               })

            })


            $("#closeAppMenu").click(function(){

              $(".mapContainer").css('width', '100%');
              $(".mapContainer").css('height', '100%');

                $('.menu').animate({

                  marginLeft: 100+'%',

                },{

                  duration: 700,

                })


            })

        })

      }



      function hideMenus()
      {

         $('.sideBars').hide();
        /* $('.sideBars').css('opacity','0');*/
         $('.sideMenu').hide();
         $('.sideMapOps').hide();
         $("#closeMenu").hide();

      }


      function closeTour()
      {

         $("#closeTour").click(function(){

           $(".presentation").hide('slow');
           $(".mapContainer").css('opacity','1');
           $(".mapContainer").show('slow');

         })

      }


      function showsideMenu()
      {

          $("#bMenu").click(function(){

            $("#bMenu").hide('slow');
            $("#closeMenu").css('opacity','1');
            $("#closeMenu").show('slow');
            $('.sideBars').css('opacity','1');
            $('.sideBars').show();
            //$('.sideBars').css('marginLeft','-200px')
          //  $('.sideBars').css('zIndex','2')
            $('.sideMenu').show('slow');

          })

      }


      function showMapOps()
      {

          $("#mapOps").click(function(){

            $('.sideBars').css('opacity','1')
            $('.sideBars').show('slow');
            $('.sideMenu').hide('slow');
            $('.sideMapOps').show('slow');

          })

      }



      function initXHR()
      {

         var xhr;
         if (window.XMLHttpRequest) {
             // code for IE7+, Firefox, Chrome, Opera, Safari
              xhr = new XMLHttpRequest();
            } else {
             // code for IE6, IE5
               xhr = new ActiveXObject("Microsoft.XMLHTTP");
           }

           return xhr;

      }



      var Latitude = undefined;
      var Longitude = undefined;
      var markersArr = [];
      var markerscontentArr = [];
      var cityMakersArr = [];
      var searchMarkerArr = [];
      var filterArr = [];
      var nearSearchArr = [];
      var myPosArr = [];
      var machedMarkersArr = [];

      function mapStyle()
      {

          var styledMapOps = new google.maps.StyledMapType([

             {
               featureType: 'water',
               stylers: [{color: '#A3D1FF'}]
             },

             {

               featureType: 'landscape',
               elementType: 'geometry.fill',
               stylers: [{color: '#CAE5FF'}]

             },

             {
               featureType: 'transit',
               featureType: 'road.highway',
               stylers: [{color: '#A3D1FF'}]
             },

             {
               elementType: 'labels.text.fill',
               stylers: [{color: '#030303'}]
             },

             {
               elementType: 'labels.text.stroke',
               stylers: [{color: '#FFFFFF'}]
             }

          ],

        {name: 'Styled Map'});

          return styledMapOps;

      }


      function initmap()
      {

            //  var uiCtrller = uiCtroller();
              var amsterdam = {lat: 52.3702157, lng: 4.895167899999933};
              var options = {

                 center: amsterdam,
                 zoom: 7,
                 mapTypeId: google.maps.MapTypeId.TERRAIN,
                 zoomControl: true,
                 zoomControlOptions:{

                   position: google.maps.ControlPosition.LEFT_BOTTOM

                 },
                 scaleControl: true,
                 streetViewControlOptions:{

                    position: google.maps.ControlPosition.LEFT_BOTTOM

                 },
                 disableDefaultUI: false,
                 gestureHandling: 'auto',
                 mapTypeControl: false,
                 mapTypeControlOptions:{

                   mapTypeId: ['terrain', 'roadmap', 'satellite', 'hybrid', 'styled_map']

                 }

              };

              var map = new google.maps.Map(document.getElementById('appCore'), options);
              map.mapTypes.set('styled_map', mapStyle());
              map.setMapTypeId('styled_map');

              return map;

            //  xhr.setRequestHeader("content-type","application/json");

      }


      var map;


      function getUserPosition()
      {

          navigator.geolocation.getCurrentPosition(onSucces, geolocationError, {enableHeighAccureacy: true});

      }



      function getUserUpdatedPosition()
      {

         navigator.geolocation.watchPosition(onUpdateSucces, geolocationError, {enableHeighAccureacy: true});

      }




      function onSucces(pos)
      {

          var allow = document.getElementById("allow");
          var notAllow= document.getElementById("dontAllow");

          allow.addEventListener('click', function(){

              domManipulation.locationAllowHide();
              Latitude = pos.coords.latitude;
              Longitude = pos.coords.longitude;console.log(Latitude);console.log(Longitude);

              map = initmap();
              var userPos = {lat: Latitude, lng: Longitude};
              map.setCenter(userPos);

              myPosition(Latitude, Longitude);
              userNearbyMarkers(Latitude, Longitude, map);

              $(function(){

                 $(".locationAllow").hide('slow');

              })

          })


          notAllow.addEventListener('click', function(){

            //  mapUtils.showErrMessage('Location checking', "Your location is unknow");

              map = initmap();

              var amsterdam = {lat: 52.3702157, lng: 4.895167899999933};
              map.setCenter(amsterdam);

               domManipulation.locationAllowHide();

               cityMarker();
               getMarkersData(map);
               updateZoom();
               giveYourPosition();

               var myPosition = document.getElementById('myPosition');
               myPosition.addEventListener('click', function(e){

                 //var positionStatus = false;

                domManipulation.locationAllowShow(e.target);


               })

          })

      }



      function onUpdateSucces(pos)
      {

          var updatedLat = pos.coords.latitude;
          var updatedLng = pos.coords.longitude;

          if(updatedLat != Latitude && updatedLng != Longitude)
          {

              Latitude = updatedLat;
              Longitude = updatedLng;

          //    mapUtils.geocodeMyPosition(52.34585, 4.827655399999999, myPosArr);

          }

      }




      function geolocationError()
      {

           mapUtils.showErrMessage('Location checking', "Your location is unknow");

           map = initmap();

           var amsterdam = {lat: 52.3702157, lng: 4.895167899999933};
           map.setCenter(amsterdam);

            domManipulation.locationAllowHide();

            cityMarker();
            getMarkersData(map);
            updateZoom();
            giveYourPosition();

      }




      var destination = [];
      var markersdataArr = [];
      function userNearbyMarkers(lat, lng, map)
      {

            var myPosition = document.getElementById('myPosition');
            myPosition.addEventListener('click', function(){



              var googlePlaceServices = new google.maps.places.PlacesService(map);

              var nearSearchOpts = {

                location: new google.maps.LatLng(lat, lng),
                radius: '1000'

              };
              var nearbySearch = googlePlaceServices.nearbySearch(nearSearchOpts, function(results, status){

                   if(status == google.maps.places.PlacesServiceStatus.OK)
                   {

                       results.filter(function(nearByMarkers){

                        for (var i = 0; i < mapMarkers.length; i++) {
                            var markersdata =  mapMarkers[i];

                                if(nearByMarkers.vicinity ==  markersdata.info)
                                {

                                    destination.push(nearByMarkers.vicinity);
                                    markersdataArr.push(markersdata);

                                }else{

                                   console.log('No water point nearby your location');

                                 }


                             }

                        })

                        var origin = {lat: lat, lng: lng};
                        getNearestbyMarker(origin, markersdataArr);


                   }else{

                      console.log('Places service not successful');

                   }

            })

      })


  }


  var markersDistanceCont = [];
  var foundedNearByMarkerArr = [];
  function getNearestbyMarker(origin, markersdata)
  {

        domManipulation.showLoaderAnimation();
       var distance = new google.maps.DistanceMatrixService();
       distance.getDistanceMatrix(
       {
         origins: [origin],
         destinations: destination,
         travelMode: 'WALKING',
       }, function(res, status){

             if(status == 'OK')
             {


                 var destinations = res.destinationAddresses;
                 if(destinations.length > 1)
                 {

                    domManipulation.hideLoaderAnimation();

                     map.setZoom(10);
                     mapUtils.desableMarkers(cityMakersArr);

                     var markersDistance = res.rows[0].elements;
                     var soortDistance;
                     var markersDistanceLen = markersDistance.length;
;
                     for (var i = 0; i < markersDistance.length; i++) {

                          var markersDistanceArr = markersDistance[i];

                          markersDistanceCont.push(markersDistanceArr.distance.value);


                              var nearestMarkers = new google.maps.Marker({

                                  position: new google.maps.LatLng(markersdata[i].latitude, markersdata[i].longitude),
                                  icon: 'img/nearestmarkers.svg',
                                  addressDescription: markersdata[i].addressDescription,
                                  city: markersdata[i].city,
                                  type: markersdata[i].type,
                                  //distanceText: markersDistance.distance.text,
                                  distanceVal:markersDistanceArr.distance.value,
                                  map: null

                               });

                               foundedNearByMarkerArr.push(nearestMarker);


                           if(markersDistanceCont.length == markersDistanceLen)
                           {
                                markersDistanceCont.sort(function(a,b){return a-b});
                               if(markersDistanceCont.length == markersDistanceLen && nearestMarkers.distanceVal == markersDistanceCont[0])
                               {

                                 nearestMarkers.setMap(map);
                                var content = mapUtils.markersStyle(nearestMarkers.addressDescription, nearestMarkers.city, nearestMarkers.type);
                                 mapUtils.markersInfoWidow(map, nearestMarkers, content);
                                 console.log(nearestMarkers);

                               }

                           }

                     }


                 }else if(destinations.length == 1)
                 {

                     domManipulation.hideLoaderAnimation();

                     map.setZoom(10);
                     mapUtils.desableMarkers(cityMakersArr);
                     var nearestMarker = new google.maps.Marker({

                        position: new google.maps.LatLng(markersdata[0].latitude, markersdata[0].longitude),
                        icon: 'img/nearestmarkers.svg',
                        map: map

                     });

                     foundedNearByMarkerArr.push(nearestMarker);

                     var content = mapUtils.markersStyle(markersdata[0].addressDescription, markersdata[0].city, markersdata[0].type);
                     mapUtils.markersInfoWidow(map, nearestMarker, content);

                 }else{

                    domManipulation.showLoaderAnimation();
                    $(function(){

                        $(".searchLoader").html("<h3>No water point founded nearby you</h3>");

                    })
                    domManipulation.closeSearchLoader();

                 }

             }else{

               console.log(status);

             }

       });

  }



  function giveYourPosition()
  {



  }




      var searchMap;
      function myPosition(latitude, longitude)
      {

          map = initmap();

         var userMarker = new google.maps.Marker({

            position: new google.maps.LatLng(latitude, longitude),
            map:map,
            icon: 'img/userPosition.svg',
            size: new google.maps.Size(20,30),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0,30)

          });
        /*  map.addListener('zoom_changed', function(){

            var currentZoom = map.getZoom();
            userMarker.setRadius(9000 / currentZoom);

          })*/


      /*    var userMarker = new google.maps.Circle({

              strokeColor: '#4386F5',
              strokeOpacity: 1,
              strokeWeight: 2,
              fillColor: '#4386F5',
              fillOpacity: 1,
              map:map,
              center: new google.maps.LatLng(latitude, longitude),
              radius: 9000

            });*/

          userMarker.addListener('click', function(){

              mapUtils.desableMarkers(cityMakersArr);
              map.setZoom(10);
              var self = this;
              mapUtils.nearBySearch(self.position.lat(), self.position.lng());

          });

          cityMarker();
          getMarkersData(map);
          updateZoom();


      }




     function getNearSearchData(results)
     {

         results.filter(function(nearByMarkers){

          for (var i = 0; i < mapMarkers.length; i++) {
              var markersdata =  mapMarkers[i];

                  if(nearByMarkers.vicinity ==  markersdata.info)
                  {

                      displayNearSeachMarkers(markersdata, nearByMarkers);

                  }else{

                     console.log('No water point nearby your location');

                   }


               }

          })

   }



     var nearSearchInfo;
     function displayNearSeachMarkers(markersdata, nearByMarkers)
     {

         var nearSeachCoords = nearByMarkers.geometry.location;
         var nearByMarkers = new google.maps.Marker({

            position: new google.maps.LatLng(nearSeachCoords.lat(), nearSeachCoords.lng()),
            address: markersdata.addressDescription,
            city: markersdata.city,
            waterType: markersdata.type,
            icon: 'img/nearbymarkers.svg',
            map: map

         });

         nearSearchArr.push(nearByMarkers);

         mapUtils.markersSearchStyle(
           map,
           nearByMarkers,
           nearByMarkers.address,
           nearByMarkers.city,
           nearByMarkers.waterType
         );


     }



      function markersInfo()
      {

         var infoWindow = new google.maps.InfoWindow({



         });
         return infoWindow;

      }




      function showHideMarkers(targetMarker, status)
      {

         targetMarker.setMap(status);

      }



      function markersByCity(city_name)
      {

        var markersCount = 0;
        mapMarkers.filter(function(markersData){

             if(markersData.city == city_name){

                markersCount += 1;

             }

        })
        return markersCount.toString();

      }





    function cityMarker()
    {

          countryCity[0].citys.forEach(function(cities){

               var cityMarkersCount = markersByCity(cities.city_name);

               var cityMarkers = new google.maps.Marker({

                  position: new google.maps.LatLng(cities.latitude, cities.longitude),
                  city_name: cities.city_name,
                  icon: 'img/markers.svg',
                  map: map

               })

               var cityInfoContent = "<h3 class='cityMarkers'>"+cities.city_name+"("+cityMarkersCount+")</h3>";

               cityMakersArr.push(cityMarkers);

               var cityMarkersInfo = new google.maps.InfoWindow({});

               cityMarkersInfo.setContent(cityInfoContent);
               cityMarkersInfo.open(map, cityMarkers);

               animateMarkers(cityMakersArr);


               cityMarkers.addListener('click', function(){

                   currentCityMarkers(cityMarkers);

               })

          })

    }




    function currentCityMarkers(currentCity)
    {

       markersArr.filter(function(cityMarkersData){

           if(cityMarkersData.city == currentCity.city_name)
           {

               cityMarkersData.setMap(map);
               map.setZoom(10);
               for (var i = 0; i < cityMakersArr.length; i++) {

                   cityMakersArr[i].setMap(null);

                }

           }

       })

    }




      function markersContent()
      {

        for (var i = 0; i < mapMarkers.length; i++) {

           markerscontentArr.push(mapMarkers[i].addressDescription);

         }

      }




      function getMarkersData(map)// call from myPosition()
      {

            mapMarkers.forEach(function(data){
          //for (var i = 0; i < mapMarkers.length; i++) {

              //var data =  mapMarkers[i];
              // codeAddress(data, map);
               displayMarkers(data, map);

          //  }

           })

      }




      function displayMarkers(data, map)
      {

        var markers = new google.maps.Marker({

           position: new google.maps.LatLng(data.latitude, data.longitude),
           type: data.type,
           district: data.district,
           addressDescription: data.addressDescription,
           info: data.info,
           city: data.city,
           icon: '',
           visibility: false,
           //animation: google.maps.Animation.DROP,
           map:map

        })


        if(markers.type == "happertje")
        {

            markers.setIcon("img/happertje.svg");

        }else if(markers.type == "van eeghenfontein")
        {

            markers.setIcon("img/markers.svg");

        }else if(markers.type == "delta tappunt")
        {

            markers.setIcon("img/deltatappunt.svg");

        }

        markersArr.push(markers);

          var searchedResults = document.querySelector(".searchedResults");
          var machedMarkers = document.createElement('p');
          //var markersClass = markers.addressDescription.replace(/ /g,'');
          machedMarkers.className = 'machedMarkers';
          machedMarkers.innerHTML = markers.addressDescription;
          searchedResults.appendChild(machedMarkers);
          machedMarkers.style.display = "none";


      //  var searchedResults = document.querySelector('.searchedResults');

        for (var i = 0; i < markersArr.length; i++) {

            markersArr[i].setMap(null);

         }


        var closeTour = document.getElementById("closeTour");


        markers.addListener("click", function(e){

             var currentMarkerInfo = e.latLng;
             var infoContent = mapUtils.markersStyle(data.addressDescription, data.city, data.type);
             var displayMarkersInfo = markersInfo();
             displayMarkersInfo.setContent(infoContent);
             //displayMarkersInfo.setPosition(markers.position);
             displayMarkersInfo.open(map, markers);
            markers.setAnimation(google.maps.Animation.BOUNCE);

            map.addListener('click', function(){

                 markers.setAnimation(null);
                 displayMarkersInfo.close();

            })


          })

      }




      var searchField = document.getElementById("searchField");
      var waterImgSrc;

      function codeAddress(data, map)// call from getMarkersData()
      {

         var geoCoder = new google.maps.Geocoder();
         geoCoder.geocode( { 'address' : data.addressDescription }, function(results, status){

              if(status == google.maps.GeocoderStatus.OK)
              {

                  var markers = new google.maps.Marker({

                     position: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
                     type: data.type,
                     district: data.district,
                     addressDescription: data.addressDescription,
                     city: data.city,
                     icon: 'img/markers.svg',
                     //animation: google.maps.Animation.DROP,
                     map:map

                  })

                  markersArr.push(markers);

                  for (var i = 0; i < markersArr.length; i++) {

                      markersArr[i].setMap(null);

                   }


                  var closeTour = document.getElementById("closeTour");


                  markers.addListener("click", function(e){

                       var currentMarkerInfo = e.latLng;
                       var infoContent = mapUtils.markersStyle(data.addressDescription, data.city, data.type);
                       var displayMarkersInfo = markersInfo();
                       displayMarkersInfo.setContent(infoContent);
                       //displayMarkersInfo.setPosition(markers.position);
                       displayMarkersInfo.open(map, markers);
                      markers.setAnimation(google.maps.Animation.BOUNCE);

                      map.addListener('click', function(){

                           markers.setAnimation(null);

                      })

                       mapUtils.displayRouteOpts(markers.position);

                    })



                  /*  var xhr = initXHR();
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var addressDesc = data.addressDescription;
                    var watertype = data.type;
                    var country = data.country;
                    var district = data.district;
                    var city = data.city;
                    var info = data.info;console.log(watertype);
                    xhr.onreadystatechange = function() {

                       if (this.readyState == 4 && this.status == 200) {

                         console.log(xhr.responseText);

                       }

                   };
                   xhr.open("GET","https://finddrinkwater.000webhostapp.com/findDrinkWater/add.php?lat="+lat+"&lng="+lng+"&addressDesc="+addressDesc+"&waterType="+watertype+"&country="+country+"&district="+district+"&city="+city+"&info="+info,true);
                   xhr.send();*/



              }else{

                 console.log('Geocode was not successful: '+ status+' '+ data.addressDescription);

              }

         })

      }





      function updateZoom()
      {

            map.addListener('zoom_changed', function(){

                  if(map.getZoom() < 5)
                  {

                     mapUtils.desableMarkers(markersArr);

                      mapUtils.desableMarkers(nearSearchArr);

                      mapUtils.enableMarkers(cityMakersArr, map);

                  }

            })

      }




      function animateMarkers(currentMarker)
      {

          var next = document.querySelector(".next");

          next.addEventListener('click', function(){

              if ($("#tutorial-4").is(":visible")) {

                  currentMarker.forEach(function(markerAnim) {

                       setTimeout(function(){

                          markerAnim.setAnimation(google.maps.Animation.DROP);

                       }, i * 100);

                 })


              }

          })

      }



        var searchFieldValArr = [];

        searchField.addEventListener('keydown', function(e){

          if(e.keyCode == 13)
          {

            e.preventDefault();

          }

        })

        searchField.addEventListener('keyup', function(e){

             if(e.keyCode == 13)
             {

               e.preventDefault();

             }
             var searchFieldVal = searchField.value;
             var self = e;

             mapUtils.desableMarkers(foundedNearByMarkerArr);

             if(searchFieldVal != "")
             {

                 mapUtils.desableMarkers(markersArr);
                 mapUtils.desableMarkers(cityMakersArr);

                autoComplete(searchFieldVal, self);

                searchMarkers(searchFieldVal, self);


             }else{

               mapUtils.enableMarkers(cityMakersArr, map);
               mapUtils.desableMarkers(markersArr);
               domManipulation.hidemessages();

               map.setZoom(7);

             }


        })



   var autoCompleteMarkers = [];
   var notFoundedArr = [];

    function autoComplete(searchFieldVal, self)
    {

         var searchedResults = document.querySelector('.searchedResults');
           //var rmWhitespace = markers.addressDescription.replace(/ /g,'');console.log(rmWhitespace);
         var machedMarkers = document.querySelectorAll('.machedMarkers');


         machedMarkers.forEach(function(foundedMarkers){

               if(foundedMarkers.textContent.toLowerCase().indexOf(searchFieldVal.toLowerCase()) == 0)
               {

                    foundedMarkers.style.display = 'block';

                    foundedMarkers.addEventListener('click', function(e){

                        var searchFieldUpdate = document.getElementById('searchField');

                        var clickedMarker = e.target.textContent;
                        searchFieldUpdate.value = clickedMarker;
                        searchFieldUpdate.style.borderRadius = '7px';
                        autoCompleteMarkers.push(clickedMarker);
                        var firstMarker = autoCompleteMarkers[0];
                        searchedResults.style.display = 'none';

                        displayFoundedMarker(firstMarker);

                    })

                  //  searchedResults.className = "searchedResults";


                 }else{

                      foundedMarkers.style.display = 'none';
                      // searchedResults.className = "searchedResultsHide";
                      //searchedResults.innerHTML = "lauch radar search";

                  }

         })


     }





     var foundedMarkersArr = [];

     function displayFoundedMarker(clickedMarker)
     {

         var foundedMarkerInfo = new google.maps.InfoWindow();
         markersArr.filter(function(marker){

             if(marker.addressDescription == clickedMarker)
             {

                foundedMarkersArr.push(marker);console.log(foundedMarkersArr[0]);
                var currentMarker = {lat: marker.position.lat(), lng: marker.position.lng()};
                map.setZoom(13);
                marker.setMap(map);
                map.setCenter(currentMarker);

                var infoContent = mapUtils.markersStyle(marker.addressDescription, marker.city, marker.type);
                foundedMarkerInfo.setContent(infoContent);
                foundedMarkerInfo.open(map, marker);
                //mapUtils.markersInfoWidow(map, marker, infoContent);console.log(infoContent);

             }

         })

     }




      var notfoundedMarkersArr = [];
      var markersVisibilityArr = [];
      var markersVisibilityShowArr = [];
      var action  = document.getElementById("action");

      function searchMarkers(searchFieldVal, self)
      {


             var machedMarkers = document.querySelectorAll('.machedMarkers');
             var searchedResults = document.querySelector('.searchedResults');
             var tototalMarkers = markersArr.length;

             $(".title").html('No point has been founded at the address sought');
             $("#action").show();

             for (var i = 0; i < machedMarkers.length; i++) {

                   var machedMarkersArr = machedMarkers[i];

                   if(machedMarkersArr.style.display == 'none')
                   {

                          if(searchFieldVal.length == 3)
                          {

                            markersVisibilityArr.push(machedMarkersArr);


                          }else if(searchFieldVal == "" || self.keyCode == 8)
                          {

                             markersVisibilityArr.length = 0;

                          }


                           if(searchFieldVal.length == 3 && markersVisibilityArr.length >= 145)
                          {

                            console.log(searchFieldVal);
                            domManipulation.showMessage();

                            action.addEventListener('click',function(){

                                domManipulation.hidemessages();

                            })


                            $("#closer").click(function(){

                                domManipulation.hidemessages();

                            })


                        }

                   }

             }


      }




      action.addEventListener('click',function(){
        var searchedAddress = searchField.value;
        convertAddress(searchedAddress);
        domManipulation.hidemessages();

      })


      $("#closer").click(function(){

          domManipulation.hidemessages();


      })



      function convertAddress(searchFieldVal)
      {

          var geoCoder = new google.maps.Geocoder();
          geoCoder.geocode( { 'address' : searchFieldVal + ', Amsterdam' }, function(results, status){

                 if(status == google.maps.GeocoderStatus.OK)
                 {
                   console.log(results[0].geometry.location.lat());

                       var coords = results[0].geometry.location;

                       radarSearch(coords, searchFieldVal)


                    }else{

                      console.log('Geocode was not successful: '+ status);

                    }

              })


         }




      var radarSearchArr = [];
      function radarSearch(coords, searchFieldVal)
      {

          var googlePlaceServices = new google.maps.places.PlacesService(map);

          var nearSearchOpts = {

            location: new google.maps.LatLng(coords.lat(), coords.lng()),
            radius: '2000'

          };

          var nearbySearch = googlePlaceServices.nearbySearch(nearSearchOpts, function(result, status){

               if(status == google.maps.places.PlacesServiceStatus.OK)
               {

                    markersArr.forEach(function(markers){

                       result.filter(function(radarResult){

                           if(markers.info == radarResult.vicinity)
                           {

                               markers.setMap(map);
                               map.setZoom(10);
                               radarSearchArr.push(markers);
                               console.log(radarSearchArr);

                           }

                       })

                    })

                    searchField.addEventListener('keydown', function(e){

                      if(e.keyCode == 13)
                      {

                        e.preventDefault();

                      }

                    })

                    searchField.addEventListener('keyup', function(e){

                      if(e.keyCode == 13)
                      {

                        e.preventDefault();

                      }

                        if(searchField.value == "")
                        {

                           radarSearchArr.length = 0;

                        }

                    })


                    if(radarSearchArr.length == 0)
                    {

                       domManipulation.showMessage();
                       $(".title").html('No water point was found in the area');
                       $("#action").hide();


                       $("#closer").click(function(){

                           domManipulation.hidemessages();

                       })

                    }

               }else{

                  console.log('Places service not successful');

               }

          });

      }





      var filterBox = document.querySelectorAll(".filterBox");

      for (var i = 0; i < filterBox.length; i++) {

          var filterBoxArr = filterBox[i];
          filterBoxArr.addEventListener('click', function(e){

            var checkedElem = e.target.value;
            if(e.target.checked)
            {

              for (var i = 0; i < markersArr.length; i++) {

                  showHideMarkers(markersArr[i], null);

               }

               filterArr.push(checkedElem);
               filterWaterPoint(filterArr);

            }else{

              filterArr.splice(filterArr.indexOf(checkedElem), 1);
              notFoundedFilterWaterPoint(checkedElem);

            }


            if(filterArr.length == 0 && searchField == "")
            {

              for (var i = 0; i < markersArr.length; i++) {

                  showHideMarkers(markersArr[i], map);

               }

            }else if(filterArr.length == 0 && searchField != ""){

                markersArr.filter(searchMarkers);

            }


          })

      }





      function filterWaterPoint(filterElems)
      {

            var serachFieldVal = searchField.value;
            if(serachFieldVal == "")
            {

                 markersArr.filter(function(elem){

                        for (var i = 0; i < filterElems.length; i++) {

                             var filterElemsArr = filterElems[i];
                             if(elem.type == filterElemsArr)
                             {

                                elem.setMap(map);

                             }
                        }

                  })


            }else{

              markersArr.filter(function(elem){

                     for (var i = 0; i < filterElems.length; i++) {

                          var filterElemsArr = filterElems[i];
                          if(elem.addressDescription.toLowerCase().indexOf(serachFieldVal) > -1 && elem.type == filterElemsArr)
                          {

                             elem.setMap(map);

                          }
                     }

               })

            }

      }





      function notFoundedFilterWaterPoint(checkedElem)
      {

          var serachFieldVal = searchField.value;

          if(serachFieldVal == "")
          {

                markersArr.filter(function(elem){
                  if(elem.type == checkedElem)
                  {

                    elem.setMap(null);

                  }

              })

          }else{

                markersArr.filter(function(elem){
                  if(elem.addressDescription.toLowerCase().indexOf(serachFieldVal) == -1 && elem.type == checkedElem)
                  {

                    elem.setMap(null);

                  }

              })

          }


      }




      function route(currentMarkerPos)
      {

        var directionService = new google.maps.DirectionsService;
        var displayDirection = new google.maps.DirectionsRenderer({

           panel: document.querySelector('.travelIinfoContainer'),
           map: map

        });


        displayDirection.addListener('directions_changed', function(){

           calcDstance(displayDirection.getDirections());

        })

        var myPos = {lat: Latitude, lng: Longitude};
        //var destination = $(".destinationAddress").text();
        renderRoute(myPos, currentMarkerPos, directionService, displayDirection);

      }



      function renderRoute(myPos, destination, service, display)
      {

         mapUtils.getTravelMode();
         var getTravel_mode = document.getElementById('travelMode');
         service.route({

            origin: myPos,
            destination: destination,
            travelMode: 'DRIVING'//getTravel_mode.className

         }, function(response, status){

                if(status === 'OK')
                {

                    display.setDirections(response);

                }else{

                  alert('could not display direction due: ' + status);

                }

            })

         }



      function calcDstance(result)
      {

         var totoKM = 0;
         var myRoute = result.routes[0];

         for (var i = 0; i < myRoute.legs.length; i++) {

            totoKM += myRoute.legs[i].distance.value;

         }
         totoKM = totoKM / 1000;
         console.log('tot:' + totoKM + ' km');

      }





    /*  function displayMarkers(map)
      {

          var xhr = initXHR();
          //var map = initmap();

          xhr.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {

                    var coords = JSON.parse(xhr.responseText);

                    var coord;

                    //for (var i = 0; i < coords.length; i++)
                    coords.forEach(function(data)
                    {



                        var marker = new google.maps.Marker({

                         id: data.id,
                         quality: data.quality,
                         position: new google.maps.LatLng(data.latitude, data.longitude),
                         map:map

                       });

                       marker.addListener("click", function(e){

                          var currentMarkerInfo = e.latLng;
                          var waterQuality = marker.quality;

                          markerInfo(map, marker, currentMarkerInfo, xhr);

                       })

                    })

              }

           };

           xhr.open("GET","https://drinkwater.000webhostapp.com/drinkWatyer_dashboard/select.php",true);
           xhr.send();

      }*/



  /*    function markerInfo(map, marker, currentMarkerInfo, xhr)
      {

            var currentPos = currentMarkerInfo;

        /*  var favorite = "<p id='favo' style='cursor: pointer;' onclick='addFavo()'>Add favorite</p>";
          //var addFavo = document.getElementById('favo');
          function addFavo(){
            alert("favo added");
          }

            var infoWindow = new google.maps.InfoWindow({});
            infoWindow.open(map, marker);

            xhr.onreadystatechange = function() {

               if (this.readyState == 4 && this.status == 200) {

                  var markerInfo = xhr.responseText;

                  infoWindow.setContent(markerInfo);

                  var favorite = document.querySelectorAll('.quality');
                  for (var i = 0; i < favorite.length; i++) {

                     var favoriteArr = favorite[i];
                     favoriteArr.style.color = "red";
                     favoriteArr.addEventListener('click', addFavo);

                  }


                  function addFavo(e){
                    alert("favo added");
                  }

               }

           };
           xhr.open("GET","https://drinkwater.000webhostapp.com/drinkWatyer_dashboard/getMarkerInfo.php?currentPos="+currentPos,true);
           xhr.send();



      }*/
