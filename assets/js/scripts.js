jQuery(document).ready(function($){

  // Open the menu – thanks Jonathon Suh

  $('.menu-toggle').on("click", () => {
    $('.hamburger').toggleClass("is-active");
    $('.nav-links').toggleClass("menu-open");
  })

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://public.ecologi.com/users/samuelmead/trees",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json"
    }
  };

  $.ajax(settings).done((response) => console.log(this.total))

});
