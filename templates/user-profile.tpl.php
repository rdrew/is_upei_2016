<?php
//using the username as contextual filter as it is the same as the pid

//$variables['user']->name should equal the mods u1. cleaning it up for use as contextual filter
$identifier = $variables['user']->name;
//$identifier = 'abdelaziz';

//print $identifier;

/*
 * initiate jQuery tabs plugin
 */
drupal_add_library ( 'system' , 'ui.tabs' );
/*
 * make the id available to the js
 */
drupal_add_js (
	array(
		'scholarsVars' => array(
			'identifier' => $identifier,
		),
	),
	array('type' => 'setting')
);

drupal_add_js ( 'jQuery(document).ready(function(){

	//init tabs
	jQuery("#tabs").tabs();

	//build url for ajax loading into tab1 & only bring in div.l-content
	var url = "/people/" + Drupal.settings.scholarsVars.identifier + " " + ".l-content";
	jQuery("#tabs-1 .container").load(url);
	jQuery("#tabs-1").prepend("<h3> Preview Your Profile </h3>");
	//jQuery("#tabs-1").append("hello");
	jQuery(".block--share-links").remove();
	jQuery("#block-block-3").hide();

   });
   ' , 'inline' );
?>

<article<?php print $attributes; ?>>
   <h2>
	  Manage Your Scholar Profile
   </h2>
   <div class="block--profile_admin">
   </div>
<div id="tabs">
   <ul>
	  <li><a href="#tabs-1"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;Preview </a></li>
	  <li><a href="#tabs-2"><i class="fa fa-edit" aria-hidden="true"></i>&nbsp;Edit</a></li>
	  <li><a href="#tabs-3"><i class="fa fa-list" aria-hidden="true"></i>&nbsp;List Publications</a></li>
	  <li><a href="#tabs-4"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Add Publication(s)</a></li>
   </ul>
<!--
   -tab 1
   -->

   <div id="tabs-1">
<div class="container">
You do not have a Scholar Profile!
</div>
<!--this is filled in by the ajax function above-->
   </div>
<!--
   -tab 2
   -->
   <div id="tabs-2">
<h3>
	Request Changes to Your Profile
</h3>
<?php
   $block = module_invoke('entityform_block', 'block_view', 'edit_scholar_profile');
   print render($block['content']);
?>
   </div>
<!--
   -tab 3
   -->
   <div id="tabs-3">
	  <div class="view--citations">
		 <h3>
			Your Recent Publications
		 </h3>
		 <!--<button class="green">-->
		 <!--<i class="fa fa-gear" aria-hidden="true"></i>-->
		 <!--<a style="color: #fff;" href="/update-publications">-->
		 <!--Submit new publications-->
		 <!--</a>-->
		 <!--</button>-->
		 <?php print views_embed_view('recent_citations', 'user_block', $identifier); ?>
	  </div>
   </div>
<!--
   -tab 4
   -->
   <div id="tabs-4">

	  <h3>
		 Submit New Publications
	  </h3>
<?php
   $block = module_invoke('entityform_block', 'block_view', 'add_publications');
   print render($block['content']);
?>

   </div>
<!--
   -end of tabs
   -->
</div>

   <hr>
   <?php print render($user_profile); ?>
</article>
