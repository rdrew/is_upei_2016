<?php
//using the username as contextual filter as it is the same as the pid

   //$variables['user']->name should equal the mods u1. cleaning it up for use as contextual filter
   //$identifier = $variables['user']->name;
   $identifier = 'abdelaziz';
   
   //print $identifier;
drupal_add_library ( 'system' , 'ui.tabs' );
drupal_add_js ( 'jQuery(document).ready(function(){
	jQuery("#tabs").tabs();
	var identifier = jQuery("#identifier").text();
	var url = "/people/" + identifier + " " + ".l-content";
	jQuery("#tabs-1").load(url);
	
   });
   ' , 'inline' );
   ?>

   <span id="identifier" style="display: none;" ><?php print render($identifier); ?></span>
<article<?php print $attributes; ?>>
   <?php print render($user_profile); ?>
   <hr>
   <h3>
      Manage Your Scholar Profile
   </h3>
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
   </div>
<!--
   -tab 2
   -->
   <div id="tabs-2">
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
	  
	  <h2>
		 Submit New Publications
	  </h2>
<?php
   $block = module_invoke('entityform_block', 'block_view', 'add_publications');
   print render($block['content']);
?>

   </div>
<!--
   -end of tabs
   -->
</div>
</article>
