<?php
   /**
   * @file
   * Omega theme implementation to present all user profile data.
   *
   * This template is used when viewing a registered member's profile page,
   * e.g., example.com/user/123. 123 being the users ID.
   *
   * Use render($user_profile) to print all profile items, or print a subset
   * such as render($user_profile['user_picture']). Always call
   * render($user_profile) at the end in order to print all remaining items. If
   * the item is a category, it will contain all its profile items. By default,
   * $user_profile['member_for'] is provided, which contains data on the user's
   * history. Other data can be included by modules. $user_profile['user_picture']
   * is available for showing the account picture.
   *
   * Available variables:
   *   - $user_profile: An array of profile items. Use render() to print them.
   *   - Field variables: for each field instance attached to the user a
   *     corresponding variable is defined; e.g., $account->field_example has a
   *     variable $field_example defined. When needing to access a field's raw
   *     values, developers/themers are strongly encouraged to use these
   *     variables. Otherwise they will have to explicitly specify the desired
   *     field language, e.g. $account->field_example['en'], thus overriding any
   *     language negotiation rule that was previously applied.
   *
   * @see template_preprocess_user_profile()
   */
   ?>
<?php
   //dpm( get_defined_vars() );
   //$variables['user']->name should equal the mods u1. cleaning it up for use as contextual filter
   //$identifier = $variables['user']->name;
   $identifier = 'abdelaziz';
   
   //print $identifier;
   ?>
<article<?php print $attributes; ?>>
   <?php print render($user_profile); ?>
   <hr>
   <h3>
      Your Scholar Profile
   </h3>
   <div class="block--profile_admin">
      <div class="expander">
         <button class="green">
         <i class="fa fa-user" aria-hidden="true"></i>
         <a style="color: #fff;" href="/people/<?php print $identifier; ?>">
         View your profile
         </a>
         </button>
         <a href="javascript:void(0)" class="button expander-trigger expander-hidden">Edit profile / Submit new publications</a>
         <div class="expander-content">
            <?php
               $block = module_invoke('webform', 'block_view', 'client-block-15');
               print render($block['content']);
               ?>
         </div>
      </div>
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
   <hr>
   <div class="view--citations">
      <h3>
         Recent Publications
      </h3>
      <button class="green">
      <i class="fa fa-gear" aria-hidden="true"></i>
      <a style="color: #fff;" href="/update-publications">
      Submit new publications
      </a>
      </button>
      <?php print views_embed_view('recent_citations', 'citations', $identifier); ?>
   </div>
</article>
