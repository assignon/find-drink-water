var domManipulation = {

  /*  $('. outeOpts').click(function(e)
    {

       domManipulation.hideRouteOpts();

    })*/



    showMessage:function()
    {

       $(function(){

           $('.messageContainer').animate({

              bottom: 20+'vh'

           },{

             duration: 700

           });

       })

    },



    hidemessages:function()
    {

        $(function(){

            $('.messageContainer').animate({

               bottom: 1000

            },{

              duration: 700

            });


        })
    },



    locationAllowShow: function(target)
    {

       $(target).click(function(){

          $(".locationAllow").css('zIndex','1');

          $(".locationAllow").animate({

             bottom: 100

          },{

            duration: 700

          });


       })

    },


    locationAllowHide: function(target)
    {

        $(".locationAllow").animate({

           bottom: 700

        },{

          duration: 700

        });


    },


    showLoaderAnimation: function()
    {

        $(".searchLoader").animate({

           bottom: 500

        },{

          duration: 1

        });

    },


    hideLoaderAnimation: function()
    {

        $(".searchLoader").animate({

           bottom: 1000

        },{

          duration: 700

        });

    },


    closeSearchLoader: function()
    {

        $("#loaderCloser").click(function(){

            domManipulation.hideLoaderAnimation();

        })

    },



     searchAnimation:function()
     {

          $("#searchField").keyup(function(){

               $(".searchedResults").css('opacity','1');
               $('.searchForm input').css('borderRadius','7px 7px 0px 0px');
               $('.searchForm input').css('border','1px solid #E6E7E8');
               $(".searchedResults").css('display','flex');

               if($("#searchField").val() == "")
               {

                  $(".searchedResults").css('opacity','0');
                  $(".searchedResults").hide('slow')
                  $('.searchForm input').css('borderRadius','7px');
                  $('.searchForm input').css('border','1px solid white');

               }else{

                 $(".searchedResults").css('opacity','1');
                 $(".searchedResults").show('slow');
                 $('.searchForm input').css('borderRadius','7px 7px 0px 0px');
                 $('.searchForm input').css('border','1px solid #E6E7E8');

               }

          })


          $("#searchField").focus(function(){

              $("#myPosition").hide('slow');

          })


          $("#searchField").blur(function(){

              $("#myPosition").show('slow');

          })

     },


     aboutFDW: function()
     {

        $(".aboutApp").click(function(){

          $("#closeAppInfo").show('slow');
          $("#closeAppMenu").hide();
          $(".menuItems").hide();
          $("#closeWaterInfo").hide('slow');
          $(".appInfo").show('slow');
          $(".waterInfo").hide();

          $(".siteLogo").hide('slow');

        })

        $("#closeAppInfo").click(function(){

          $("#closeAppInfo").hide('slow');
          $("#closeAppMenu").show('slow');
          $(".menuItems").show('slow');
          $("#closeWaterInfo").hide('slow');
          $(".appInfo").hide('slow');
          $(".waterInfo").hide();

          $(".siteLogo").show('slow');

        })

     },


     aboutWater: function()
     {

        $(".aboutWater").click(function(){

          $("#closeAppInfo").hide('slow');
          $("#closeAppMenu").hide();
          $(".menuItems").hide();
          $("#closeWaterInfo").show('slow');
          $(".appInfo").hide('slow');
          $(".waterInfo").show('slow');

          $(".siteLogo").hide('slow');

        })

        $("#closeWaterInfo").click(function(){

          $("#closeAppInfo").hide('slow');
          $("#closeAppMenu").show('slow');
          $(".menuItems").show('slow');
          $("#closeWaterInfo").hide('slow');
          $(".appInfo").hide('slow');
          $(".waterInfo").hide();

          $(".siteLogo").show('slow');

        })

     },


     tutorial: function()
     {

        $(".tuto").click(function(){

           $("#Tutorial").fadeIn(700);
           $("#tutorial-1").fadeIn(300);
           $("#tutorial-2").fadeOut(300);
           $("#tutorial-3").fadeOut(300);
           $("#tutorial-4").fadeOut(300);

           $("#slide-1 .circle").css("background", "#8AC5FF");
           $("#slide-2 .circle").css("background", "white");
           $("#slide-3 .circle").css("background", "#white");
           $("#slide-4 .circle").css("background", "white");

           $(".mapContainer").css('opacity','0');
           $(".mapContainer").hide('slow');

        })

     },


     responsive: function(){

        var windowHeight = window.innerHeight;console.log(windowHeight);
         var searchedResults = document.querySelector(".searchedResults");

        if(windowHeight < 736 && windowHeight > 568)
        {

           searchedResults.style.bottom = "93.5vh";

        }else if(windowHeight <= 568)
        {

           searchedResults.style.bottom = "92.8vh";

        }else if(windowHeight > 736 && windowHeight < 1366)
        {

           searchedResults.style.bottom = "96vh";

        }else if(windowHeight > 1024)
        {

          searchedResults.style.bottom = "97vh";

        }

     }



}
