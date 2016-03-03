<?php
/**
 * @file
 * Islandora solr search navigation block.
 *
 * Variables available:
 * - $return_link: link to reutrn to original search.
 * - $prev_link: Link to previous object in search result.
 * - $next_link: link to next object in the search result.
 *
 */
?>


  <ul class="block--search-navigation--list">
	  <li class="block--search-navigation--prev block--search-navigation--list-item" id="islandora-solr-search-prev-link"><?php print $prev_link; ?></li>
	  <li class="block--search-navigation--return block--search-navigation--list-item" id="islandora-solr-search-return-link"><?php print $return_link; ?></li>
	  <li class="block--search-navigation--next block--search-navigation--list-item" id="islandora-solr-search-next-link"><?php print $next_link; ?></li>
  </ul>
