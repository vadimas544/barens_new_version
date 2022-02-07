// Dropdown

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

// End Dropdown

// Accordion

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }


// New accordion on Jquery

$(document).ready(function() {
  $('.accordion-item__trigger').click(function(){
    const parent = $(this).parent();

    if(parent.hasClass('accordion-item--active')) {
      parent.removeClass('accordion-item--active');
    } else {
      $('.accordion-item').removeClass('accordion-item--active');
      parent.addClass('accordion-item--active');
    }
});
});
// End Accordion

// Timeline


// End Timeline