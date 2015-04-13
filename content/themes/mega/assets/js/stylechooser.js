/**
 * Theme Switcher
 * remove this from production
 */
$(function() {
  $(document).on("click", ".theme-toggle.toggle-close", function() {
    $(".theme-wrap").animate({ "right": "-=" + $(".theme-wrap").outerWidth() }, "slow" );
    $(this).addClass("toggle-open").removeClass("toggle-close");
  });

  $(document).on("click", ".theme-toggle.toggle-open", function() {
    $(".theme-wrap").animate({ "right": "+=" + $(".theme-wrap").outerWidth() }, "slow" );
    $(this).addClass("toggle-close").removeClass("toggle-open");
  });
});
