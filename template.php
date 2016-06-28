<?php


/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * IS_UPEI_2016 theme.
 */

function IS_UPEI_2016_form_alter(&$form, &$form_state, $form_id) {
	// target a single form
	if($form_id == "islandora_solr_simple_search_form"){
		$form['simple']['islandora_simple_search_query']['#default_value'] = t('Search IslandScholar:'); // Set a default value for the textfield
		$form['simple']['islandora_simple_search_query']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search IslandScholar:';}";
		$form['simple']['islandora_simple_search_query']['#attributes']['onfocus'] = "if (this.value == 'Search IslandScholar:') {this.value = '';}";
	}

		//dpm($form_id);
	// target a single form
	//if($form_id == "upei_roblib_scholar_search_bookmark_form_ir-11822"){
	if(strpos($form_id, "upei_roblib_scholar_search_bookmark_form_ir") !== false) {
		//dpm( get_defined_vars() );
	}
//function IS_UPEI_2016_preprocess_page(&$vars) {
  //drupal_add_library('system','ui.button');
  //drupal_add_js(path_to_theme().'/ls/is-upei-2016.behaviors.js','file');
}
