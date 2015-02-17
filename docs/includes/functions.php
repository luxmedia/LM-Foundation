<?php

function render_nav($dir) {

	$htmlbase = "docs";
	$html = "";
	
	$path = $_SERVER["DOCUMENT_ROOT"] . DIRECTORY_SEPARATOR . $htmlbase . DIRECTORY_SEPARATOR . $dir;
	
	if ($handle = opendir($path)) {
		
		// read directory get files
		$dirArray = [];
		while (false !== ($file = readdir($handle))) {
			$dirArray[] = $file;
		}
		closedir($myDirectory); // close directory

		sort($dirArray); // sort 'em
		$iCount	= count($dirArray); // count elements in array

		// loop through the array of files and print them all
		for($i=0; $i < $iCount; $i++) {
			// don't list hidden files
			if (substr($dirArray[$i], 0, 1) != ".") {
				// get html file types
				if (strstr($dirArray[$i], ".") == ".html" || strstr($dirArray[$i], ".") == ".php") {
					$folder = end((explode('/', $dir)));
					$filename = substr($dirArray[$i], 0, (strlen($dirArray[$i])-4));
					if ($filename != 'index') {
						$url = 'type='.$folder.'&content=' . $filename;
						$css = "";

						if ($_SERVER["QUERY_STRING"] == $url) $css = ' class="is-active"';

						$html .= '<li'.$css.'><a href="index.php?'.$url.'">'.$filename.'</a></li>';
					}
				}
			}
		}
	} else {
		$html = '<li><a href="">No Files!</a></li>';
	}

	return $html;
}

?>