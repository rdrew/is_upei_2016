(function ($) {
	Drupal.behaviors.bookmarks = {
		attach: function (context, settings) {

			$('.scholar-image').append($('#block-islandora-bookmark-islandora-bookmark'));

		}
	};
	Drupal.behaviors.button_icons = {
		attach: function (context, settings) {

			$('a[href="/islandora-bookmark/listid/1"]').replaceWith('<a href="/islandora-bookmark/listid/1" class="button--bookmark"><i class="fa fa-bookmark" aria-hidden="true"></i>My Bookmarks</a>');
			$('.roblib-fulltext a').prepend('<i class="fa fa-file-text" aria-hidden="true"></i>');
			//$('.roblib-bookmark-form input[type="submit"]').prepend('<i class="fa fa-file-text" aria-hidden="true"></i>');
			//$('.roblib-bookmark-form input[type="submit"]').hide();

		}
	};
	Drupal.behaviors.open_metadata = {
		attach: function (context, settings) {

			$('.islandora-metadata').removeClass('collapsed');

		}
	};
	Drupal.behaviors.solr_plus_minus = {
		attach: function (context, settings) {

			$('a.plus').empty();
			$('a.minus').empty();
			$('a.plus').append('<i class="fa fa-plus-square-o" aria-hidden="true"></i>');
			$('a.minus').append('<i class="fa fa-minus-square-o" aria-hidden="true"></i>');

		}
	};
	Drupal.behaviors.nicer_select_box = {
		attach: function (context, settings) {

			$('select').selectbox("attach");

		}
	};

})(jQuery);
