<?php

/**
 * @file
 * Theme the more link.
 *
 * - $view: The view object.
 * - $more_url: the url for the more link.
 * - $link_text: the text for the more link.
 *
 * @ingroup views_templates
 */
?>

<?php 
/*********************************************************************
 *  this changes the link to a solr search of the authors citations  *
 *********************************************************************/
$var = explode("/", $more_url);
$id = $var[2];
$new_link = "/islandora/search/mods_identifier_u1_mt:(" . $id . ")?sort=mods_canonical_date_issued_dt%20desc";
?>

<div class="more-link">
  <a href="<?php print $new_link ?>">
	<?php print $link_text; ?>
  </a>
</div>
