if (!ThanksRoy) {
    var ThanksRoy = {};
}

if (!Omeka) {
    var Omeka = {};
}

(function($) {
    ThanksRoy.mobileMenu = function() {
        var subNavId = 0;
        var subnavToggleLabel = Omeka.jsTranslate('Toggle subnavigation');

        var activateToggle = function(toggleButton, menu) {
            menu.toggleClass('open');
            if (menu.hasClass('open')) {
                toggleButton.attr('aria-expanded', 'true');
            } else {
                toggleButton.attr('aria-expanded', 'false');
            }
        }

        $('#primary-nav li ul').each(function() {
            var childMenu = $(this);
            var childMenuId = 'sub-nav-' + subNavId;
            var subnavToggle = $('<button type="button" class="sub-nav-toggle" aria-expanded="false"></button>');

            childMenu.parent().addClass('parent');
            childMenu.attr('id', childMenuId).addClass('sub-nav').before(subnavToggle);
            subnavToggle.attr('aria-controls', childMenuId).attr('aria-label', subnavToggleLabel).attr('title', subnavToggleLabel);
            subNavId++;
        });

        $('#primary-nav').on('click', '.sub-nav-toggle', function() {
            var subNavToggle = $(this);
            var parentMenu = subNavToggle.parent();
            activateToggle(subNavToggle, parentMenu);
        });

        if ($('.sub-nav .active').length > 0) {
            var parentToggle = $('.sub-nav .active').parents('.parent').find('.sub-nav-toggle');
            parentToggle.click();
        }

        $('#primary-nav ul.navigation').attr('id', 'main-nav');

        $('#primary-nav').on('click', '#mobile-nav-toggle', function() {
            activateToggle($(this), $('#main-nav'));
        });
    };
})(jQuery);
