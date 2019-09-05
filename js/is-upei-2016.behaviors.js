(function ($) {






	Drupal.behaviors.doi_link = {
		attach: function (context, settings) {
			$('a[href*="doi.org"]', context).once('doi_url_tidy', function() {
				var doiUrl = $(this).attr('href');
				$(this).empty().append(doiUrl);
			} );

		}
	};

    Drupal.behaviors.login_form = {
        attach: function (context, settings) {
            $(".user-login .form-item-name .description").replaceWith('Enter your UPEI username');

        }
    };


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
            $('.islandora-bookmark-fedora-repository-object-form .form-type-select').once( function() {
                $(this).hide();
            });
            //$('.islandora-bookmark-fedora-repository-object-form .form-type-select').once( function() {
            //$(this).hide();
            //});
            $('.roblib-bookmark-form .form-type-select').once( function() {
                $(this).hide();
            });

        }
    };

    /*
     * twitter stuff
     */
    Drupal.behaviors.facebook = {
        attach: function (context, settings) {
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    };
    Drupal.behaviors.twitter = {
        attach: function (context, settings) {
            window.twttr = (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function(f) {
                    t._e.push(f);
                };

                return t;
            }(document, "script", "twitter-wjs"));
        }
    };

    Drupal.behaviors.altimetrics = {
        //move the link
        attach: function (context, settings) {
            $('.citation-page .block--islandora-altmetrics').appendTo($(".share-links")).wrap("<li></li>");
        }
    };
    /*
     *remove some elements from My Bookmarks
     */
    Drupal.behaviors.book_marks_list_mods = {
        attach: function (context, settings) {
            $('.islandora-bookmark-overview-form .fieldset-wrapper').unwrap();
        }
    };
    /*
     *attach at pretty selectbox dropdown
     */
    Drupal.behaviors.nicer_select_box = {
        attach: function (context, settings) {
            //$('.islandora-scholar-citation-select-form select').selectbox("attach");
            $('select').selectbox("attach");
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

            $('.page-islandora-object .block--search-navigation', context).once(function() {
                $(this).insertBefore($('.scholar'));
            });
            $('.block--search-navigation', context).once(function() {
                $(this).insertAfter($('form#islandora-scholar-citation-select-form'));
            });

        }
    };


    /*
     *adds placeholder text in the search box for the jQuery DataTables
     */
    Drupal.behaviors.placeholder_text = {
        attach: function (context, settings) {

            var target = ".dataTables_filter input";
            var placeholder_text = "Filter Results:";

            $(target).attr("placeholder", placeholder_text).val("").focus().blur();
        }

    };


    Drupal.behaviors.equal_height_lp_blocks = {

        attach: function (context, settings) {
            $('.lp-second-row .view-content').matchHeight();
        }

    };

    /*
     *move the solr sort box after the facet block title
     */

    Drupal.behaviors.move_the_sort = {

        attach: function (context, settings) {
            var location = '.block--islandora-facets .block__title';
            var target = '.block--islandora-solr-current-query';

            $(target).insertAfter(location);

            var target = '#block-islandora-solr-sort';

            $(target).insertAfter(location);
        }

    };

    Drupal.behaviors.mobile_facets = {

        attach: function (context, settings) {
            $("#block-islandora-solr-basic-facets .block__title").click(function() {

                $("#block-islandora-solr-basic-facets .block__content").toggleClass("show_me", 500);
                $("#block-islandora-solr-sort").toggleClass("show_me", 500);

            } );
        }

    };


    Drupal.behaviors.showme = {

        attach: function (context, settings) {
            $('.block--islandora-facets .block__title').click(function() {

                $('.block--islandora-facets .block__content').toggleClass("show_me");
                $('.block--islandora-solr-current-query').toggleClass("show_me");
                $("#block-islandora-solr-sort").toggleClass("show_me");


            });
        }

    };

    Drupal.behaviors.citation_thumbnail = {

        attach: function (context, settings) {
            //$('<div>').insertBefore('.ir_citationCModel > a');
            $('.ir_citationCModel > a').each(function(){
                $(this).next('.ir_citationCModel .form-item').andSelf().wrapAll('<div class="fulltext"/>');
            });
            $('.ir_thesisCModel > a').each(function(){
                $(this).next('.ir_thesisCModel .form-item').andSelf().wrapAll('<div class="fulltext"/>');
            });
        }

    };
    Drupal.behaviors.pubstatus_tooltips = {

        attach: function (context, settings) {
            $(".fulltext .form-item a").before( $(".tooltip-item") );

        }

    };

    /*
     *this deals witht the expandable webform on the user page
     */
    Drupal.behaviors.expander = {

        attach: function (context, settings) {
            $('.expander-trigger').click(function() {

                $(this).toggleClass("expander-hidden");


            });
        }

    };

    Drupal.behaviors.userMenu = {

        attach: function (context, settings) {
            $(".dropdown .block__title").click(function() {
                var $button, $menu;
                $button = $(this);
                $menu = $button.siblings(".menu");
                $menu.toggleClass("show-menu");
            });
        }
    };

	Drupal.behaviors.remove_blank_field = {
		attach: function (context, settings) {
			$('.view--classification', context).once('remove_blank', function() {
				var el = $(".view--classification ul li.first").text().trim();
				if (el == "no classification") {
				$(this).remove();
				}
			} );

		}
	};

    Drupal.behaviors.orcid_icon = {
           attach: function (context, settings) {
                        $('a[href^="https://orcid.org/"]').prepend('<img src="https://orcid.org/sites/default/files/images/orcid_24x24.png" style=" width: 18px; margin-right: 5px; ">');
                        //$('a[href^="http://orcid.org"]').remove();

                }
    };



})(jQuery);

