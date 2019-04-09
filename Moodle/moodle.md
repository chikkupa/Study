# Key Files in Moodle Directory
	config.php - contains basic settings. This file does not come with Moodle. It is created when the install.php script runs or it can be created and edited manually.
	install.php - the script that will run to create config.php
	version.php - defines the current version of Moodle code
	index.php - the front page of the site

# Moodle Directory Structure
	admin/ - code to administrate the whole server
	auth/ - plugin modules to authenticate users
	blocks/ - plugin modules for the little side blocks on many pages
	calendar/ - all the code for managing and displaying calendars
	course/ - code to display and manage courses
	files/ - code to display and manage uploaded files
	lang/ - texts in different languages, one directory per language
		Eg: lang/en/error.php
	lib/ - libraries of core Moodle code
	login/ - code to handle login and account creation
	mod/ - all the main Moodle course modules are here
	pix/ - generic site graphics
	repository/ - code to handle the 2.x file handling system
	theme/ - theme packs/skins to change the look of the site
	user/ - code to display and manage users

# Caching
1. Add efinitions in the /lib/db/caches.php file, if the definition not exists

2. Getting a cache object
	$cache = cache::make('mod_myplugin', 'somedata');

3. Using cache object
	There are three basic basic operations. get, set, and delete
	$result = $cache->set('key', 'value'); // The result is true if the operation was a success, false otherwise
	$data = $cache->get('key'); // $data will either be what ever was being stored in the cache, or false if the cache could not find the key
	$result = $cache->delete('key'); // $result will either be true if the operation was a success, or false otherwise

# Edit Template Files
	Go to theme/{theme-name}/<template-file>.mustache

# Access Database Files
	1. The data manipulation API is exposed via public methods of the $DB object.
	2. Moodle core takes care of setting up the connection to the database according to values specified in the main config.php file.
	3. The $DB global object is an instance of the moodle_database class. It is instantiated automatically during the bootstrap setup, i.e. as a part of including the main config.php file.
	4. The DB object is available in the global scope right after including the config.php file:
		<?php
 
			require(__DIR__.'/../../../config.php');
	5. To make the DB object available in your local scope, such as within a function:
		<?php
		 
		defined('MOODLE_INTERNAL') || die();
		 
		function my_function_making_use_of_database() {
		    global $DB;
		 
		    // You can access the database via the $DB method calls here.
		}
	Reference: https://docs.moodle.org/dev/Data_manipulation_API
