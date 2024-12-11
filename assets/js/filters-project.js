// projects filters isotop
$(".product-filters li").on("click", function () {
    $(".product-filters li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");

    $(".row.product-lists").isotope({
      filter: selector,
    });
  });