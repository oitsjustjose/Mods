$(document)
    .ready(function() {
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            });

        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');

    });

$(function() {
    $('a.tinkersaddons_bonus').click(function() {
        $('.ui.modal.tinkersaddons_bonus').modal('show');
    })

    $('a.tinkersaddons_amelioration').click(function() {
        $('.ui.modal.tinkersaddons_amelioration').modal('show');
    })

    $('a.persistentbits_autoload').click(function() {
        $('.ui.modal.persistentbits_autoload').modal('show');
    })

    $('a.persistentbits_indicator').click(function() {
        $('.ui.modal.persistentbits_indicator').modal('show');
    })
});
