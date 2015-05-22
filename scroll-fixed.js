(function ($, window) {
    $.fn.scrollFixed = function () {
        return this.each(function () {
            var $this = $(this);
            if (!$this.data('scrollFixed')) {
                var start = $this.offset().top;
                $(this).data('scrollFixed', {
                    start: start
                });
                $(window).scroll(function () {
                    var p = $(window).scrollTop();
                    $this.css('position', ((p) > start) ? 'fixed' : 'static');
                    $this.css('top', ((p) > start) ? '0px' : '');
                });
            }
        });
    };
})(jQuery, window);
