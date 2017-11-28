
mapUtils = {


  markersInfoWidow:function(map, marker, content)
  {

     var info = new google.maps.InfoWindow();
     info.setContent(content);
     info.open(map, marker);
     return info;

  },

    markersStyle: function(address, city, waterType)
    {

      let content = "<div class='infoContainer'>"+
        "<h3 class='address'>"+address+"</h3>"+
        "<h3 class='city'>"+city+"</h3>"+
        "<img src='../waterTypeImg/"+waterType+".jpg' class='waterType'/>"+
        "<div class='routeFavo'>"+
        "<a href='https://www.google.com/maps/dir//"+address+"+"+city+"'>Route</a>"+
        "</div>"+
      "</div>";

      return content;

    },


    markersSearchStyle:function(map, marker, searchAddress, city, waterType)
    {

        var searchInfo = new google.maps.InfoWindow();
        searchInfo.open(map, marker);
        searchInfo.setContent("<div class='nearByMarkers'>"+"<h3>" + searchAddress + "</h3>"+"<button class='nearByMarkersInfo'>More info</button>"+"</div>");


        $('.nearByMarkersInfo').click(function(e){

            var currentAddress = e.target.parentNode.childNodes[0].textContent;
            var searchNewInfo = mapUtils.markersStyle(currentAddress, city, waterType);
            searchInfo.setContent(searchNewInfo);

        })

    },


    enableMarkers: function(markerArr, map)
    {

       for (var i = 0; i < markerArr.length; i++) {

           markerArr[i].setMap(map);

       }

    },



    desableMarkers: function(markerArr)
    {

       for (var i = 0; i < markerArr.length; i++) {

           markerArr[i].setMap(null);

       }

    },



    /*displayRouteOpts: function(currentMarkerPos)
    {

        $('.route').click(function(e)
        {

            let markerAddress = e.target.parentNode.parentNode.childNodes[0].textContent;
            let city = e.target.parentNode.parentNode.childNodes[1].textContent;

            $(".destinationAddress").html(markerAddress+', '+city);

            domManipulation.displayRoutOpts();
            route(currentMarkerPos);

        })

    },*/

    showErrMessage: function(title, span, butt)
    {

        domManipulation.showMessage();
        $(".title").html(title);
        $(".title span").html(span);
        $("#action").html(butt);
        $(".messageContainer").css('backgroundColor', 'white');

    },


    showSuccessMessage: function(title, span, butt)
    {

        domManipulation.showMessage();
        $(".title").html(title);
        $(".title span").html(span);
        $("#action").html(butt);
        $(".messageContainer").css('backgroundColor', 'white');

    },


    geocodeMyPosition: function(lat, lng, myPosArr)
    {

       var geocoderReverse = new google.maps.Geocoder;
       geocoderReverse.geocode({'location' : {lat: lat, lng: lng}}, function(results, status){
console.log(results);
           if(status === 'OK')
           {

              var posAddress = results[0].formatted_address;
              myPosArr.push(posAddress);

           }else{

             alert('Geocoder failed due to: ' + status);

           }

       });

       return myPosArr;

    },


    getTravelMode: function(){

        var getTravel_mode = document.getElementById('travelMode');

        $('.travel').click(function(e){

           if(e.target.className == 'travel')
           {

              getTravel_mode.className = e.target.id;
              alert(getTravel_mode.className);

           }else{

             getTravel_mode.className = e.target.parentNode.id;
             alert(getTravel_mode.className);

           }

        })

    },


    positionSatus: function(target, status)
    {

        $(target).click(function(){

            locationAlowed = status;

        })

    },



    nearBySearch: function(lat, lng)
    {

        var googlePlaceServices = new google.maps.places.PlacesService(map);

        var nearSearchOpts = {

          location: new google.maps.LatLng(lat, lng),
          radius: '500'

        };
        var nearbySearch = googlePlaceServices.nearbySearch(nearSearchOpts, function(results, status){

             if(status == google.maps.places.PlacesServiceStatus.OK)
             {

                  getNearSearchData(results);


             }else{

                console.log('Places service not successful');

             }

        });

    },


    getArrMinVal: function(arr)
    {

       return Math.min.apply(null, arr);      

    }

}
