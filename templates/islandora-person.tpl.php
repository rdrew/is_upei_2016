<?php
/**
 * @file
 * This is the template file for the object page for person objects.
 */
?>
<div class="scholar islandora-object islandora">

	<div class="islandora-object-image scholar-image">
	  <?php if (isset($variables['tn'])): ?>
		<img src="<?php print $variables['tn']; ?>"/>
	  <?php endif; ?>
	</div>
	<div class="islandora-object-metadata metadata">
	  <?php if (isset($variables['metadata'])): ?>
		<?php print $variables['metadata']; ?>
	  <?php endif; ?>
	</div>

	<div class="bio">
		<h3 ><?php print t('Biography'); ?></h3>
		<?php if (isset($variables['biography'])): ?>
		  <p><?php print $variables['biography']; ?></p>
		<?php endif; ?>
	</div>
		<div class="activities islandora-object-activities">
	  <?php if (isset($variables['activities'])): ?>
		<?php print $variables['activities']; ?>
	  <?php endif; ?>
	</div>


	<div class="view--citations">
<?php print views_embed_view('recent_citations', 'block', $identifier); ?>
	</div>

	<div class="citations">
		<?php if (isset($variables['recent_citations'])): ?>
		  <?php print $variables['recent_citations']; ?>
		<?php endif; ?>
	</div>

	<div class="other-scholars islandora-object-scholars">
	  <?php if (isset($variables['fellow_scholars'])): ?>
		<?php foreach ($variables['fellow_scholars'] as $dept): ?>
		  <?php print $dept; ?>
		<?php endforeach; ?>
	  <?php endif; ?>
	</div>
	<div class="rss">
		<?php if (isset($variables['rss_feed'])): ?>
		  <?php print $variables['rss_feed']; ?>
		<?php endif; ?>
	</div>
</div>
