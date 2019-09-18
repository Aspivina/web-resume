window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
 // if ($(window).scrollTop() > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function enfasis(my_id){
  // var p=document.getElementsByid(my_class.);
  var xx = document.querySelectorAll(".btn.btn-link.text-white.mb-0");
  var xxz = document.querySelectorAll(".btn.btn-link.text-info.mb-0");
  var yy = document.querySelectorAll(".btn.btn-link.text-white.mb-0.collapsed");
  var yyz = document.querySelectorAll(".btn.btn-link.text-info.mb-0.collapsed");
  console.log( xx.length, xxz.length, yy.length,  yyz.length);
   var i;
   for (i = 0; i < yyz.length; i++) {
     console.log( yyz[i].className);
     yyz[i].className="btn btn-link text-white mb-0 collapsed"
   }
   for (i = 0; i < xxz.length; i++) {
     console.log( xxz[i].className);
     xxz[i].className="btn btn-link text-white mb-0"
    }
    console.log( my_id.className);
    console.log(my_id.className==".btn.btn-link.text-white.mb-0.collapsed");
    if(my_id.className=="btn btn-link text-white mb-0 collapsed"){
      my_id.className="btn btn-link text-info mb-0 collapsed"
   }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// $(document).ready(function () {
//             $("a.scrollLink").click(function (event) {
//               console.log("ni idea");
//                 event.preventDefault();
//                 $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top },500);
//             });
//         });
