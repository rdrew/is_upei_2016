<?php

/**
 * Implements hook_preprocess_page().
 */
function is_upei_2016_preprocess_page(&$variables) {
	drupal_add_library('system', 'ui');
	drupal_add_library('system', 'ui.core');
	drupal_add_library('system', 'ui.widget');
	drupal_add_library('system', 'ui.button');
	drupal_add_library('system', 'effects.highlight');
	// You can use preprocess hooks to modify the variables before they are passed
	// to the theme function or template file.
}

