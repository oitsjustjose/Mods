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
  });

  $('a.tinkersaddons_amelioration').click(function() {
    $('.ui.modal.tinkersaddons_amelioration').modal('show');
  });

  $('a.persistentbits_autoload').click(function() {
    $('.ui.modal.persistentbits_autoload').modal('show');
  });

  $('a.persistentbits_indicator').click(function() {
    $('.ui.modal.persistentbits_indicator').modal('show');
  });

  $('a.auto-smelt').click(function() {
    $('.ui.modal.auto-smelt').modal('show');
  });

  $('a.hypermending').click(function() {
    $('.ui.modal.hypermending').modal('show');
  });

  $('a.lumbering').click(function() {
    $('.ui.modal.lumbering').modal('show');
  });
	
  $('a.multifaceted').click(function() {
    $('.ui.modal.multifaceted').modal('show');
  });
	
  $('a.imperishable').click(function() {
    $('.ui.modal.imperishable').modal('show');
  });

  $('a.stepboost').click(function() {
    $('.ui.modal.stepboost').modal('show');
  });

  $('a.featherfalling').click(function() {
    $('.ui.modal.featherfalling').modal('show');
  });

  $('a.challengers').click(function() {
    $('.ui.modal.challengers').modal('show');
  });

  $('a.dropbuffs').click(function() {
    $('.ui.modal.dropbuffs').modal('show');
  });

  $('a.plucking').click(function() {
    $('.ui.modal.plucking').modal('show');
  });

  $('a.mob_disabler').click(function() {
    $('.ui.modal.mob_disabler').modal('show');
  });

  $('a.wither_restriction').click(function() {
    $('.ui.modal.wither_restriction').modal('show');
  });

  $('a.pet_armory').click(function() {
    $('.ui.modal.pet_armory').modal('show');
  });

  $('a.crop_harvesting').click(function() {
    $('.ui.modal.crop_harvesting').modal('show');
  });

  $('a.bonemeal').click(function() {
    $('.ui.modal.bonemeal').modal('show');
  });

  $('a.cake_drop').click(function() {
    $('.ui.modal.cake_drop').modal('show');
  });

  $('a.tool_efficiency').click(function() {
    $('.ui.modal.tool_efficiency').modal('show');
  });

  $('a.torch_helper').click(function() {
    $('.ui.modal.torch_helper').modal('show');
  })

  $('a.glitch_fix').click(function() {
    $('.ui.modal.glitch_fix').modal('show');
  });

  $('a.extra_fuels').click(function() {
    $('.ui.modal.extra_fuels').modal('show');
  });

  $('a.saplings').click(function() {
    $('.ui.modal.saplings').modal('show');
  });

  $('a.hatching').click(function() {
    $('.ui.modal.hatching').modal('show');
  });

  $('a.despawn').click(function() {
    $('.ui.modal.despawn').modal('show');
  });

  $('a.leaf_blower').click(function() {
    $('.ui.modal.leaf_blower').modal('show');
  });

  $('a.sleeping_bag').click(function() {
    $('.ui.modal.sleeping_bag').modal('show');
  });

  $('a.base_game').click(function() {
    $('.ui.modal.base_game').modal('show');
  });

  $('a.horse_armor').click(function() {
    $('.ui.modal.horse_armor').modal('show');
  });

  $('a.stack_tweaks').click(function() {
    $('.ui.modal.stack_tweaks').modal('show');
  });

  $('a.thunder_storms').click(function() {
    $('.ui.modal.thunder_storms').modal('show');
  });

  $('a.food_tooltips').click(function() {
    $('.ui.modal.food_tooltips').modal('show');
  });
});
