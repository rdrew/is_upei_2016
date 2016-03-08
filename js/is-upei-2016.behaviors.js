(function ($) {
	Drupal.behaviors.selectlist_defaults_scholar_page = {
		attach: function (context, settings) {

			$('#islandora-bookmark option[value="default"]').remove();
			$('.form-item-add-bookmarks select').hide();

		}
	};

	Drupal.behaviors.selectlist_defaults = {
		attach: function (context, settings) {

			$('.roblib-bookmark-form option[value="default"]').remove();
			$('.roblib-bookmark-form select').hide();

		}
	};

	Drupal.behaviors.nicer_select_box = {
		attach: function (context, settings) {

			//$('select').selectbox("attach");

		}
	};

	//move the bookmarks block on the scholar page
	Drupal.behaviors.bookmarks = {
		attach: function (context, settings) {

			$('.scholar-image').append($('#block-islandora-bookmark-islandora-bookmark'));

		}
	};

	Drupal.behaviors.button_icons = {
		attach: function (context, settings) {

			var bookmarks_button = '.roblib-bookmark-form a[href^="/islandora-bookmark/listid/"]';
			$( bookmarks_button ).empty();
			$( bookmarks_button ).append('My Bookmarks');


		}
	};
	Drupal.behaviors.islandora_thumbnails = {
		attach: function (context, settings) {

			//var journal_image = 'img.islandora-solr-default-image.scholar-Journal-Article';
			//var journal_icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';
			//$( journal_image ).replaceWith( journal_icon );
			var image = 'img.islandora-solr-default-image.scholar-Journal--Electronic';
			var icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';
			$( image ).replaceWith( icon );

			var image = 'img.islandora-solr-default-image.scholar-Journal-Article';
			var icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';
			$( image ).replaceWith( icon );

			var image = 'img.islandora-solr-default-image.scholar-Book--Whole';
			var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';
			$( image ).replaceWith( icon );

			var image = 'img.islandora-solr-default-image.scholar-Book--Section';
			var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';
			$( image ).replaceWith( icon );

			var image = 'img.islandora-solr-default-image.scholar-Book--Edited';
			var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';
			$( image ).replaceWith( icon );

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
			$('a.plus').append('<i class="fa fa-search-minus" aria-hidden="true"></i>');
			$('a.minus').append('<i class="fa fa-search-plus" aria-hidden="true"></i>');

		}
	};

	Drupal.behaviors.search_navigation = {
		attach: function (context, settings) {

			//$('a.plus').empty();
			$('.block--search-navigation--prev a').empty();
			$('.block--search-navigation--return a').empty();
			$('.block--search-navigation--next a').empty();
			$('.block--search-navigation--prev a').prepend('<i class="fa fa-arrow-left" aria-hidden="true"></i> Prev');
			$('.block--search-navigation--return a').prepend('<i class="fa fa-search aria-hidden="true"></i> Search Results');
			$('.block--search-navigation--next a').append('Next <i class="fa fa-arrow-right" aria-hidden="true"></i>');
			//$('a.minus').empty();
			//$('a.plus').append('<i class="fa fa-search-minus" aria-hidden="true"></i>');
			//$('a.minus').append('<i class="fa fa-search-plus" aria-hidden="true"></i>');

		}
	};
	Drupal.behaviors.solr_search_move_results = {
		//this moves the search results behind the page title 
		attach: function (context, settings) {

			//$('.page-islandora-search h1').append($('#islandora-solr-result-count'));
			$('#islandora-solr-result-count').insertAfter($('.page-islandora-search h1'));

		}
	};

	Drupal.behaviors.citation_page_blocks = {
		//this moves the search results behind the page title 
		attach: function (context, settings) {

			//$('.page-islandora-search h1').append($('#islandora-solr-result-count'));
			$('.block--search-navigation').insertBefore($('form#islandora-scholar-citation-select-form'));

		}
	};


})(jQuery);
