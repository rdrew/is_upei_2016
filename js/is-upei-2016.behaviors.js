(function ($) {


	Drupal.behaviors.selectlist_defaults = {
		attach: function (context, settings) {

			$('#islandora-bookmark option[value="default"]').remove();
			$('.form-item-add-bookmarks select').hide();
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

			var bookmarks_button = '#islandora-bookmark a[href^="/islandora-bookmark/listid/"]';
			$( bookmarks_button ).empty();
			$( bookmarks_button ).append('My Bookmarks');


		}
	};

	Drupal.behaviors.islandora_thumbnails = {
		attach: function (context, settings) {

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
			$('a.plus').append('<i class="fa fa-search-plus" aria-hidden="true"></i>');
			$('a.minus').append('<i class="fa fa-search-minus" aria-hidden="true"></i>');
		}
	};


	Drupal.behaviors.check_upei_button = {
		attach: function (context, settings) {
			$('.coins-img').replaceWith( '<div class="button--check-upei"><span>Check</span><span>@</span><span>UPEI</span></div>' );
		}
	};



	Drupal.behaviors.search_navigation = {
		attach: function (context, settings) {

			$('.block--search-navigation--prev a').empty();
			$('.block--search-navigation--return a').empty();
			$('.block--search-navigation--next a').empty();
			$('.block--search-navigation--prev a').prepend('<i class="fa fa-arrow-left" aria-hidden="true"></i> Prev');
			$('.block--search-navigation--return a').prepend('<i class="fa fa-search aria-hidden="true"></i> Search Results');
			$('.block--search-navigation--next a').append('Next <i class="fa fa-arrow-right" aria-hidden="true"></i>');

		}
	};
	Drupal.behaviors.solr_search_move_results = {
		//this moves the search results behind the page title 
		attach: function (context, settings) {

			$('#islandora-solr-result-count').insertAfter($('.page-islandora-search h1'));

		}
	};

	Drupal.behaviors.citation_page_blocks = {
		attach: function (context, settings) {

			$('.block--search-navigation').insertBefore($('form#islandora-scholar-citation-select-form'));

		}
	};

	Drupal.behaviors.placeholder_text = {
		//adds placeholder text in the search box for the jQuery DataTables
		attach: function (context, settings) {

			$(".dataTables_filter input").attr("placeholder", "Filter Results:").val("").focus().blur();
		}

	};

	Drupal.behaviors.move_the_sort = {

		attach: function (context, settings) {
			$('.block--islandora-facets .block__title').after($('#block-islandora-solr-sort'));
			$("#block-islandora-solr-basic-facets .block__title").click(function() {
				$("#block-islandora-solr-basic-facets .block__content").slideToggle();
				$("#block-islandora-solr-sort").slideToggle();



			} );
		}

	};


})(jQuery);
