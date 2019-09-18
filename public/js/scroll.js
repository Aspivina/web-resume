$(document).ready(function(){

   // $("#btn-close").on('click', function(event) {
   //     $('.menu-mobile').hide();
   // });


   // $("#btn-menu-equis").on('click', function(event) {
   //     // console.log('$(window).width()',$(window).width());
   //     if($(window).width() < 768){
   //         $('.menu-mobile').show();
   //     }
   // });


   // $(window).scroll(function() {
   //    //console.log($(window).scrollTop())
   //     if($(window).scrollTop() > 100) {
   //         document.getElementById("btn-float").style.display = "block";
   //     }else{
   //         document.getElementById("btn-float").style.display = "none";
   //     }
   // });

   // Add smooth scrolling to all links
   $("a").on('click', function(event) {
       if($(window).width() < 768){
           $('.menu-mobile').hide();
       }
       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
           // Prevent default anchor click behavior
           event.preventDefault();
           // Store hash
           var hash = this.hash;
           // Using jQuery's animate() method to add smooth page scroll
           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function(){
               // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
           });
       } // End if
    });
});
