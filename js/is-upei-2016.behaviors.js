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
	Drupal.behaviors.nicer_select_box = {
		attach: function (context, settings) {

			$('select').selectbox("attach");

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


	Drupal.behaviors.facet_buttons = {
		//this moves the search results behind the page title 
		attach: function (context, settings) {

			$('.islandora-solr-facet-wrapper .soft-limit').prepend('<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>');

		}
	};

})(jQuery);
