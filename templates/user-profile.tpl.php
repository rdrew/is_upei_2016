<?php
/*
 *variables
 */
$currentUser = $variables['user']->name;
$currentPath = current_path();
$pathParts = explode('/', $currentPath);
$userPath = $pathParts[count($pathParts) - 2];
$profile_uid = $pathParts[count($pathParts) - 1];
$profile_name = user_load($profile_uid)->name;
?>

<?php if($profile_name == $currentUser): ?>
	<?php 
	// user editing own profile
	$identifier = $variables['user']->name;
	drupal_add_library ( 'system' , 'ui.tabs' );
	drupal_add_js (
		array(
			'scholarsVars' => array(
				'identifier' => $identifier,
			),
		),
		array('type' => 'setting')
	);
	drupal_add_js ( 'jQuery(document).ready(function(){
		jQuery("#tabs").tabs();
		var url = "/people/" + Drupal.settings.scholarsVars.identifier + " " + ".l-content";
		jQuery("#tabs-1 .container").load(url);
		jQuery("#tabs-1").prepend("<h3> Preview Your Profile </h3>");
		jQuery(".block--share-links").remove();
		jQuery("#block-block-3").hide();
	   });
	   ' , 'inline' );


?>

<article<?php print $attributes; ?>>
  <h2>Manage Your Scholar Profile</h2>
  <div class="block--profile_admin"></div>
  <div id="tabs">
    <ul>
      <li>
        <a href="#tabs-1"><i aria-hidden="true" class="fa fa-eye"></i>&nbsp;Preview</a>
      </li>
      <li>
        <a href="#tabs-2"><i aria-hidden="true" class="fa fa-list"></i>&nbsp;Your Publications</a>
      </li>
      <li>
        <a href="#tabs-3"><i aria-hidden="true" class="fa fa-edit"></i>&nbsp;Edit Profile</a>
      </li>
      <li>
        <a href="#tabs-4"><i aria-hidden="true" class="fa fa-plus"></i>&nbsp;Add Scholarly Works</a>
      </li>
      <li>
        <a href="#tabs-5"><i aria-hidden="true" class="fa fa-plus"></i>&nbsp;Deposit Full Text</a>
      </li>
    </ul><!-- -tab 1 -->
<?php
$tab2 = views_embed_view('recent_citations', 'user_block', $identifier);
$tab3 = module_invoke('entityform_block', 'block_view', 'edit_scholar_profile');
$tab4 = module_invoke('entityform_block', 'block_view', 'add_publications');
$tab5 = module_invoke('entityform_block', 'block_view', 'deposit_full_text');
?>
    <div id="tabs-1">
      <div class="container">
        You do not have a Scholar Profile!
      </div><!--this is filled in by the ajax function above-->
    </div>

    <div id="tabs-2">
      <div class="view--citations">
		<h3>Your Scholarly Works</h3>
		<?php print $tab2; ?>
      </div>
    </div>

    <div id="tabs-3">
	<h3>Request Changes to Your Profile</h3>
		<?php print render($tab3['content']); ?>
    </div>

    <div id="tabs-4">
	<h3>Add scholarly works to your profile</h3>
		<?php print render($tab4['content']); ?>
    </div>


    <div id="tabs-5">
	<h3>Deposit Full Text</h3>
		<?php print render($tab5['content']); ?>
    </div>

  </div>
  <hr>
  <?php print render($user_profile); ?>
</article>
	
<?php else: ?>
	<?php 
	$identifier = $profile_name;
	drupal_add_library ( 'system' , 'ui.tabs' );
	drupal_add_js (
		array(
			'scholarsVars' => array(
				'identifier' => $identifier,
			),
		),
		array('type' => 'setting')
	);

	drupal_add_js ( 'jQuery(document).ready(function(){
		jQuery("#tabs").tabs();
		var url = "/people/" + Drupal.settings.scholarsVars.identifier + " " + ".l-content";
		jQuery("#tabs-1 .container").load(url);
		jQuery(".block--share-links").remove();
		jQuery("#block-block-3").hide();
	   });
	   ' , 'inline' );
	?>

<article<?php print $attributes; ?>>
  <h2>View Profile: <?php print $profile_name; ?></h2>
  <div class="block--profile_admin"></div>
  <div id="tabs">
    <ul>
      <li>
        <a href="#tabs-1"><i aria-hidden="true" class="fa fa-eye"></i>&nbsp;Preview</a>
      </li>
      <li>
        <a href="#tabs-2"><i aria-hidden="true" class="fa fa-list"></i>&nbsp;List Publications</a>
      </li>
    </ul>
    <div id="tabs-1">
      <div class="container">
        You do not have a Scholar Profile!
      </div>
    </div>
    <div id="tabs-2">
      <div class="view--citations">
        <h3>Recent Publications</h3><?php print views_embed_view('recent_citations', 'user_block', $identifier); ?>
      </div>
    </div>
  </div>
  <hr>
  <?php print render($user_profile); ?>
</article> 

<?php endif; ?>

