$(function() {
    new Fx.Accordion($$('.panel-heading'), $$('.panel-collapse'), {
        display : 0,
        alwaysHide : true
    });

    $('.workflow .panel-heading').on('click', function() {
        $('.workflow .panel').each(function() {
            $(this).removeClass('selected');
        });
        $(this).closest('.panel').addClass('selected');
    })
});
