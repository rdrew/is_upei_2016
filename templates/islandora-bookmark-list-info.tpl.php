<?php

/**
 * @file
 * Template for generating the bookmark list column view.
 *
 * Available variables:
 * - $name: The name of this bookmark list.
 * - $user: The name of the user who created the list.
 * - $description: The description of the bookmark list.
 * - $link: A link to the bookmark list page.
 */
?>
<ul class="menu">
	<li>
		<a href="<?php print $link; ?>" class="button--bookmark">
			<i class="fa fa-bookmark" aria-hidden="true"></i> My Bookmarks
		</a>
	</li>
</ul>
