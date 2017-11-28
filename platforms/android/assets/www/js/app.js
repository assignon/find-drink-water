class GoogleMap
{


    constructor()
    {

      /* var mapScript = document.createElement('script');
       mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwfl87elX-XGrxaLsOUABmfgnjDYPVyhc &callback=initMap";
       mapScript += 'async defer';
       document.body.appendChild(mapScript);*/

         this.initMap();
         this.hideMenus();
         this.showsideMenu();
         this.showMapOps();
         this.closeMenu();
         this.getUserPosition();

    }


    hideMenus()
    {

       $('.sideBars').hide();
      /* $('.sideBars').css('opacity','0');*/
       $('.sideMenu').hide();
       $('.sideMapOps').hide();
       $("#closeMenu").hide();

    }


    closeMenu()
    {

       $("#closeMenu").click(function(){

         $("#bMenu").show('slow');
         $("#closeMenu").css('opacity','0');
         $("#closeMenu").hide('slow');
         $('.sideBars').hide();
        /* $('.sideBars').css('opacity','0');*/
         $('.sideMenu').hide();
         $('.sideMapOps').hide();
         $("#closeMenu").hide();

       })

    }


    showsideMenu()
    {

        $("#bMenu").click(function(){

          $("#bMenu").hide('slow');
          $("#closeMenu").css('opacity','1');
          $("#closeMenu").show('slow');
          $('.sideBars').css('opacity','1');
          $('.sideBars').show();
          $('.sideMenu').show('slow');

        })

    }


    showMapOps()
    {

        $("#mapOps").click(function(){

          $('.sideBars').css('opacity','1')
          $('.sideBars').show('slow');
          $('.sideMenu').hide('slow');
          $('.sideMapOps').show('slow');

        })

    }



    initXHR()
    {

       let xhr;
       if (window.XMLHttpRequest) {
           // code for IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
          } else {
           // code for IE6, IE5
             xhr = new ActiveXObject("Microsoft.XMLHTTP");
         }

         return xhr;

    }



    initMap()
    {


            let options = {

               center: {lat: 46.779231, lng: 6.659431},
               zoom: 8,
               mapTypeId: google.maps.MapTypeId.ROADMAP

            };

            let map = new google.maps.Map(document.getElementById('appCore'), options);
            return map;
          //  xhr.setRequestHeader("content-type","application/json");


    }



    getUserPosition()
    {


         navigator.geolocation.getCurrentPosition(this.onSucces, this.onError, {enableHeighAccureacy: true});

    }


    onSucces(pos)
    {

        let Latitude = pos.coords.latitude;
        let Longitude = pos.coords.longitude;

        let options = {

           center: {lat: Latitude, lng: Longitude},
           zoom: 8,
           mapTypeId: google.maps.MapTypeId.ROADMAP

        };

        let mapi = new google.maps.Map(document.getElementById('appCore'), options);

        let image = {

           url:"img/userpos.svg",
           size: new google.maps.Size(20,30),
           origin: new google.maps.Point(0,0),
           anchor: new google.maps.Point(0,30)

        };

        const userMarker = new google.maps.Marker({

         position: {lat: Latitude, lng: Longitude},
          map: mapi,
          icon: image

        });

      //  userMarker.getPosition(Latitude, Longitude);

      //  map.setCenter(userMarker.getPosition());

    }




    userMarker(latitude, longitude)
    {

        const map = this.initMap();

        let image = {

           url:"img/userpos.svg",
           size: new google.maps.Size(20,30),
           origin: new google.maps.Point(0,0),
           anchor: new google.maps.Point(0,30)

        };

        let userMarker = new google.maps.Marker({

          position: new google.maps.LatLong(latitude, longitude),
          map: map,
          icon: image

        });

        map.setCenter(userMarker.getPosition());


    }


    onError()
    {



    }




  /*  initMap()
    {

      let map = new google.maps.Map(document.getElementById('appCore'), options);
      return map;

    }*/



    makeMarkers(latitude, longitude)
    {

        /* this.latitude = latitude;
         this.longitude = longitude;
         const map = this.initMap();
         let marker = new google.maps.Marker({

          position: new google.maps.LatLng(this.latitude, this.longitude),
          map:map

        });
        return marker;*/

    }


    getMarkerInfo(e)
    {

      alert(e.latLng);

    }



    displayMarker()
    {

        const xhr = this.initXHR();
        const map = this.initMap();

        xhr.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {

                  let coords = JSON.parse(xhr.responseText);
                  let coord;

                  for(coord in coords)
                  {

                  //   const markers = this.makeMarkers(coords[coord]['latitude'], coords[coord]['longitude']);
                    //this.makeMarkers();
                      let marker = new google.maps.Marker({

                       position: new google.maps.LatLng(coords[coord]['latitude'], coords[coord]['longitude']),
                       map:map

                     });

                     marker.addListener("click", function(e){

                        alert(e.target);

                     });

                  }

            }

         };

         xhr.open("GET","https://drinkwater.000webhostapp.com/drinkWatyer_dashboard/select.php",true);
         xhr.send();

    }


}
