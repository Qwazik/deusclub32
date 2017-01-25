  ;(function($){
    $.fn.equalHeight = function(){
        var global = this,
            maxHeigh = 0,
            tmpHeigh = 0;
        $(this).each(function(){
            tmpHeight = $(this).outerHeight();
            if(tmpHeight > maxHeigh){
                maxHeigh = tmpHeight;
            }
        })

        $(this).each(function(){
            $(this).css('min-height', maxHeigh);
        })
    }
  }(jQuery));

  $(function(){
    $('.open-menu').click(function(){
        $('.main-menu').slideToggle().css('display','inline-block');
    });

    $('.fancybox').fancybox({
        padding: 0
    });
  });