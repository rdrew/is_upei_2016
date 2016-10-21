<?php
//using the username as contextual filter as it is the same as the pid

   //$variables['user']->name should equal the mods u1. cleaning it up for use as contextual filter
   //$identifier = $variables['user']->name;
   $identifier = 'abdelaziz';
   
   //print $identifier;
drupal_add_library ( 'system' , 'ui.tabs' );
drupal_add_js ( 'jQuery(document).ready(function(){
	jQuery("#tabs").tabs();
   });
   ' , 'inline' );
   ?>

<article<?php print $attributes; ?>>
   <?php print render($user_profile); ?>
   <hr>
   <h3>
      Your Scholar Profile
   </h3>
   <div class="block--profile_admin">
      <!--<button class="green">-->
      <!--<i class="fa fa-user" aria-hidden="true"></i>-->
      <!--<a style="color: #fff;" href="/people/<?php print $identifier; ?>">-->
      <!--View your profile-->
      <!--</a>-->
      <!--</button>-->
      <!--<button class="green">-->
      <!--<i class="fa fa-gear" aria-hidden="true"></i>-->
      <!--<a style="color: #fff;" href="/update-publications">-->
      <!--Edit your profile-->
      <!--</a>-->
      <!--</button>-->
   </div>
</article>
<div id="tabs">
   <ul>
      <li><a href="#tabs-1">Tab 1</a></li>
      <li><a href="#tabs-2">Tab 2</a></li>
      <li><a href="#tabs-3">Tab 3</a></li>
   </ul>
   <div id="tabs-1">
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
   <div id="tabs-2">
      <h2>
         Submit New Publications
      </h2>
      <?php
         $block = module_invoke('entityform_block', 'block_view', 'add_publications');
         print render($block['content']);
         //$block = module_invoke('webform', 'block_view', 'client-block-15');
         //print render($block['content']);
         ?>
   </div>
   <div id="tabs-3">
      <h2>
         test
      </h2>
   </div>
</div>
