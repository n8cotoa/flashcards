$(document).ready(function() {
  $(".panel").click(function() {
    $(this).children("div.panel-heading").toggle();
    $(this).children("div.panel-body").toggle();
  });
});
