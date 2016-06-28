(function ($) {



	Drupal.behaviors.citation_link = {
		attach: function (context, settings) {
			$(".scholar-page .more-link", context).once(function() {
				$(this).clone().appendTo('.scholar-image').addClass("publications_button");
			});
			
			$('.publications_button a', context).once(function() {
				$(this).contents().replaceWith('<i class="fa fa-book" aria-hidden="true"></i>View Publications');
			});

		}
	};
	Drupal.behaviors.button_icons = {
		attach: function (context, settings) {

			var target = '.roblib-bookmark-form a[href^="/islandora-bookmark/listid/"]';

			$(target).empty();
			$(target).append('My Bookmarks');

			var target = '#islandora-bookmark a[href^="/islandora-bookmark/listid/"]';

			$(target).empty();
			$(target).append('My Bookmarks');

			var target = '.ir_thesisCModel .form-item a';

			$(target).empty();
			$(target).append('Full Text');

			var target = '.ir_citationCModel .form-item a';

			$(target).empty();
			$(target).append('Full Text');

		}
	};
	Drupal.behaviors.scholar_tabs = {
		attach: function (context, settings) {

			//details tab
			var target = '.tabs--primary li:nth-child(1) a[href^="/islandora/object/"]';
			var replacement = ' <i class="fa fa-user" aria-hidden="true"></i> Scholar Details'
				$(target).empty();
			$(target).append(replacement);
			//citations tab
			var target = '.tabs--primary a[href$="citations"]';
			var replacement = ' <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Export Citations '
				$(target).empty();
			$(target).append(replacement);
			//theses tab
			var target = '.tabs--primary a[href$="theses"]';
			var replacement = ' <i class="fa fa-book" aria-hidden="true"></i> Export Theses '
				$(target).empty();
			$(target).append(replacement);

		}
	};

	Drupal.behaviors.current_facet_query = {
		attach: function (context, settings) {

			var target = '.remove-filter';
			var icon = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
			$(target, context).once(function() {

				$(this).html(icon);


			});
			var target = 'a.remove-query';
			var icon = '<i class="fa fa-times-circle" aria-hidden="true"></i>';
			$(target, context).once(function() {

				$(this).html(icon);
				//$(this).append(icon);


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

	Drupal.behaviors.check_upei_button = {
		attach: function (context, settings) {
			$('.coins-img').replaceWith( '<div class="button--check-upei"><span>Check</span><span>@</span><span>UPEI</span></div>' );
		}
	}


	Drupal.behaviors.bookmark_button_text = {
		attach: function (context, settings) {
			$('.roblib-bookmark-form .form-submit').attr('value', 'Bookmark This');
			$('#block-islandora-bookmark-islandora-bookmark .form-submit').attr('value', 'Bookmark This');
		}
	}


	Drupal.behaviors.move_bookmark_on_cit_page = {
		attach: function (context, settings) {
			$('.citation-page .fulltext .form-item').after($( '#block-islandora-bookmark-islandora-bookmark' ));
		}
	}



























})(jQuery);
