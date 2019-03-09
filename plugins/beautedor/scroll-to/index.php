<?php

/**
 * Plugin Name: Beautedor scroll to
 * Description: TODO.
 * Version: 1.0.0
 * Author: Bewi
 *
 * @package beautedor
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'beautedor_scroll_to_load_textdomain' );

function beautedor_scroll_to_load_textdomain() {
	load_plugin_textdomain( 'beautedor', false, basename( __DIR__ ) . '/languages' );
}

function beautedor_scroll_to_register_block() {
	$namespace = 'beautedor';
	$blockType = 'scroll-to';
	$blockName = $namespace .  '-' . $blockType;

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	wp_register_script(
		$blockName,
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	wp_register_style(
		$blockName . '-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
	
	wp_register_style(
		$blockName,
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type($namespace . '/' . $blockType, array(
		'style' => $blockName,
		'editor_style' => $blockName . 'editor',
		'editor_script' => $blockName,
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( $blockName, 'beautedor' );
  }

}
add_action( 'init', 'beautedor_scroll_to_register_block' );
