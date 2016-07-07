<?php
/**
 * @file
 * UPEI roblib custom results template file.
 *
 * Variables available:
 * - $results: Primary profile results array
 *
 * @see template_preprocess_islandora_solr()
 */

?>
<h2>
	hi
</h2>
<?php dpm(get_defined_vars()); ?>
<?php if (empty($results)): ?>
  <p class="no-results"><?php print t('Sorry, but your search returned no results.'); ?></p>
<?php else: ?>
  <div class="islandora islandora-solr-search-results">
    <?php $row_result = 0; ?>
    <?php foreach($results as $key => $result): ?>
      <!-- Search result -->
      <div class="islandora-solr-search-result clear-block <?php print $row_result % 2 == 0 ? 'odd' : 'even'; ?>">
        <div class="islandora-solr-search-result-inner">
          <!-- Thumbnail -->
          <dl class="solr-thumb">
            <dt>
              <?php print $result['thumbnail']; ?>
            </dt>
            <dd></dd>
            <dt class="solr-label roblib-coins">
              <?php print $result['coins_url']; ?>
            </dt>
            <dd></dd>
            <dt class="solr-label roblib-fulltext">
              <?php print $result['full_text_url']; ?>
            </dt>
            <dd></dd>
            <dt class="solr-label roblib-bookmark-form">
              <?php print $result['roblib_bookmark_form']; ?>
            </dt>
            <dd></dd>
          </dl>
          <!-- Metadata -->
          <dl class="solr-fields islandora-inline-metadata">
            <?php foreach($result['solr_doc'] as $key => $value): ?>
              <dt class="solr-label <?php print $value['class']; ?>">
                <?php print $value['label']; ?>
              </dt>
              <dd class="solr-value <?php print $value['class']; ?>">
                <?php print $value['value']; ?>
              </dd>
            <?php endforeach; ?>

          </dl>

        </div>
      </div>
    <?php $row_result++; ?>
    <?php endforeach; ?>
  </div>
<?php endif; ?>