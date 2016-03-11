(function ($) {


	Drupal.behaviors.button_icons = {
		attach: function (context, settings) {

			var target = '.roblib-bookmark-form a[href^="/islandora-bookmark/listid/"]';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append('My Bookmarks');
			});

			var target = '#islandora-bookmark a[href^="/islandora-bookmark/listid/"]';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append('My Bookmarks');
			});


		}
	};



	Drupal.behaviors.islandora_thumbnails = {
		attach: function (context, settings) {

			var image = 'img.islandora-solr-default-image.scholar-Journal--Electronic';
			var icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';

			$(image, context).once(function() {
				$(this).replaceWith( icon );
			});

			var image = 'img.islandora-solr-default-image.scholar-Journal-Article';
			var icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';

			$(image, context).once(function() {
				$(this).replaceWith( icon );
			});

			var image = 'img.islandora-solr-default-image.scholar-Book--Whole';
			var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';

			$(image, context).once(function() {
				$(this).replaceWith( icon );
			});

			var image = 'img.islandora-solr-default-image.scholar-Book--Section';
			var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';

			$(image, context).once(function() {
				$(this).replaceWith( icon );
			});

			var image = 'img.islandora-solr-default-image.scholar-Book--Edited';
			var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';

			$(image, context).once(function() {
				$(this).replaceWith( icon );
			});

		}
	};


	Drupal.behaviors.solr_plus_minus = {
		attach: function (context, settings) {

			var target = 'a.plus';
			var replacement = '<i class="fa fa-search-plus" aria-hidden="true"></i>';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append(replacement);
			});

			var target = 'a.minus';
			var replacement = '<i class="fa fa-search-minus" aria-hidden="true"></i>';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append(replacement);
			});


		}
	};


/*
*this adds idons to the islandora search navigation block
 */
	Drupal.behaviors.search_navigation = {
		attach: function (context, settings) {

			var target = '.block--search-navigation--prev a';
			var replacement = '<i class="fa fa-arrow-left" aria-hidden="true"></i> Prev';

			$(target, context).once(function() {
				$(this).empty();
				$(this).prepend(replacement);
			});

			var target = '.block--search-navigation--return a';
			var replacement = '<i class="fa fa-search aria-hidden="true"></i> Search Results';

			$(target, context).once(function() {
				$(this).empty();
				$(this).prepend(replacement);
			});

			var target = '.block--search-navigation--next a';
			var replacement = 'Next <i class="fa fa-arrow-right" aria-hidden="true"></i>';

			$(target, context).once(function() {
				$(this).empty();
				$(this).append(replacement);
			});

		}
	};

































})(jQuery);
