(function ($) {
    'use strict'

    $('.plus').on('click', function () {
        let qtyInput = $(this).prev();
        if (qtyInput.val()) {
            if ($(this).data('max-value') <= qtyInput.val()) {
                return;
            }
            qtyInput.val(+qtyInput.val() + Number(qtyInput.data('step')));
        }
    });
    $('.minus').on('click', function () {
        let qtyInput = $(this).next();
        if (qtyInput.val() <= $(this).data('min-value')) {
            return;
        }
        qtyInput.val(+qtyInput.val() - Number(qtyInput.data('step')));
    });
})(jQuery);
