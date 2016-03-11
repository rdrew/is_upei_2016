(function ($) {

	//this is a bit of a hack that removes the default selectlist, making the remaing one selected 
	Drupal.behaviors.selectlist_defaults = {
		attach: function (context, settings) {

			$('#islandora-bookmark option[value="default"]', context).once( function() {
				$(this).remove();
			});

			/*********************************
			 *  this could be done in css!!  *
			 *********************************/

			$('.form-item-add-bookmarks select', context).once( function() {
				$(this).hide();
			});

			$('.roblib-bookmark-form option[value="default"]', context).once( function() {
				$(this).remove();
			});

			/*********************************
			 *  this could be done in css!!  *
			 *********************************/
			$('.roblib-bookmark-form select', context).once( function() {
				$(this).hide();
			});

		}
	};

	/*
	 *attach at pretty selectbox dropdown
	 */
	Drupal.behaviors.nicer_select_box = {
		attach: function (context, settings) {
			//$('select').selectbox("attach");
		}
	};

	/*
	 *move the bookmarks block on the scholar page
	 */
	Drupal.behaviors.move_bookmarks = {
		attach: function (context, settings) {

			var target = '.scholar-image';

			$(target, context).once(function() {
				$(this).append($('#block-islandora-bookmark-islandora-bookmark'));
			});
		}
	};

	//Drupal.behaviors.button_icons = {
	//attach: function (context, settings) {

	//var target = '.roblib-bookmark-form a[href^="/islandora-bookmark/listid/"]';

	//$(target, context).once(function() {
	//$(this).empty();
	//$(this).append('My Bookmarks');
	//});

	//var target = '#islandora-bookmark a[href^="/islandora-bookmark/listid/"]';

	//$(target, context).once(function() {
	//$(this).empty();
	//$(this).append('My Bookmarks');
	//});


	//}
	//};

	//Drupal.behaviors.islandora_thumbnails = {
	//attach: function (context, settings) {

	//var image = 'img.islandora-solr-default-image.scholar-Journal--Electronic';
	//var icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';

	//$(image, context).once(function() {
	//$(this).replaceWith( icon );
	//});

	//var image = 'img.islandora-solr-default-image.scholar-Journal-Article';
	//var icon = '<div class="icon-wrapper"><i class="fa fa-file-text-o" aria-hidden="true"></i></div>';

	//$(image, context).once(function() {
	//$(this).replaceWith( icon );
	//});

	//var image = 'img.islandora-solr-default-image.scholar-Book--Whole';
	//var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';

	//$(image, context).once(function() {
	//$(this).replaceWith( icon );
	//});

	//var image = 'img.islandora-solr-default-image.scholar-Book--Section';
	//var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';

	//$(image, context).once(function() {
	//$(this).replaceWith( icon );
	//});

	//var image = 'img.islandora-solr-default-image.scholar-Book--Edited';
	//var icon = '<div class="icon-wrapper"><i class="fa fa-book aria-hidden="true"></i></div>';

	//$(image, context).once(function() {
	//$(this).replaceWith( icon );
	//});

	//}
	//};

	/*
	 *this opens the islandora metadata fieldset
	 */
	Drupal.behaviors.open_metadata = {
		attach: function (context, settings) {
			$('.islandora-metadata').removeClass('collapsed');

			$('.islandora-metadata').once(function() {

				$(this).removeClass('collapsed');

			});
		}
	};

	//Drupal.behaviors.solr_plus_minus = {
	//attach: function (context, settings) {

	//var target = 'a.plus';
	//var replacement = '<i class="fa fa-search-plus" aria-hidden="true"></i>';

	//$(target, context).once(function() {
	//$(this).empty();
	//$(this).append(replacement);
	//});

	//var target = 'a.minus';
	//var replacement = '<i class="fa fa-search-minus" aria-hidden="true"></i>';

	//$(target, context).once(function() {
	//$(this).empty();
	//$(this).append(replacement);
	//});


	//}
	//};



	/*
	 *this moves the search results behind the page title 
	 */
	Drupal.behaviors.solr_search_move_results = {
		attach: function (context, settings) {

			$('#islandora-solr-result-count', context).once(function() {
				$(this).insertAfter($('.page-islandora-search h1'));
			});
		}
	};



	/*
	 *this moves the search navigation on the citation pages
	 */
	Drupal.behaviors.citation_page_blocks = {
		attach: function (context, settings) {

			$('.block--search-navigation', context).once(function() {
				$(this).insertBefore($('form#islandora-scholar-citation-select-form'));
			});

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
