$path = drupal_get_path_alias();
$parts = explode('/', $path);
$target = array_pop($parts);
$filter_value = substr($target, 3);
dpm($filter_value);
return trim($filter_value);
