$("button").click(function() {
    $(".sa-success").addClass("hide");
    setTimeout(function() {
      $(".sa-success").removeClass("hide");
    }, 10);
  });