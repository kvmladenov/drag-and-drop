$(function() {

	// [ DRAG ]
	$('#shop .item').draggable({

		//
		cursor: "pointer",

		helper: 'clone',

		classes: {
			"ui-draggable-dragging": "special-draggable"
		},

		containment: "window",

		revert: "invalid",

		start: function(event, ui) {
			// Change opacity of static element.
			$('#inventory').prepend('<div class="slot free temp"></div>');
			$(this).css('opacity', '0.3');

		},

		stop: function() {
			// Revert opacity of static element.
			$(this).css('opacity', '1');
		}
	});

	// [ DROP ]
	$( "#inventory .slot.free" ).droppable({
		// activate: function() {
		// 	console.log('activate');
		// 	$(this).append('<div class="slot new-item"></div>');
		// },
		// deactivate: function() {

		// }

		//TODO: Use accept if Hero have enough money for buying item
		over: function() {
		// 	$(this).append('<div class="slot new-item"></div>');
			$(this).parent().css('border', '2px solid #eee');
		},
		drop: function(event, ui) {

			$(this).append(ui.draggable);
		}
	});

});