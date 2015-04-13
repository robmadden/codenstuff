
$(function() {


  /** reponsive videos **/
  $(".post-content").fitVids();

  $(".post-content img:first").each(function() {
    var src = $(this).attr("src");
    $(".blog-header").css("background-image", "url(" + src + ")");
  });

    // scroll up plugin
  $().showUp('.js-scroll-up', {
    upClass: '{{upClass}}',
    downClass: '{{downClass}}'
  });

  if($(".posts-pagination .newer-posts").length == 0) {
    $(".posts-pagination .page-number").before('<span class="newer-posts faded">← Newer Posts</span> ');
  }

  if($(".posts-pagination .older-posts").length == 0) {
    $(".posts-pagination .page-number").after(' <span class="older-posts faded">Older Posts →</span>');
  }

  // responsive google map
  $("iframe[src*='google.com']").each(function() {
    $(this).wrap($("<div class='google-map'></div>"));
  });

  // disqus
  if($("#disqus_thread").length > 0) {
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }
});

$(window).load(function(){
  /** animation **/
  $('.js-animate').waypoint(function() {
    $(this).removeClass("non-visible");
    $(this).addClass($(this).data('animate'));
  }, {offset: '85%', triggerOnce: true});
});
