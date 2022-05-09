<?php
/**
 * Plugin Name:       Alamin Gutenberg
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       alamin-gutenberg
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function create_block_alamin_gutenberg_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build/blocks/iconbox' );
	register_block_type_from_metadata( __DIR__ . '/build/blocks/infobox' );
}
add_action( 'init', 'create_block_alamin_gutenberg_block_init' );

function alamin_enqueue_blocks_scripts() {
	$asset_file = require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script( 'alamin-main', plugins_url( '/build/index.js', __FILE__ ), $asset_file['dependencies'], 1.0, false);
}
add_action( 'enqueue_block_editor_assets', 'alamin_enqueue_blocks_scripts');

function alamin_gutenburg_plugin_block_categories( $categories ) {
	return array_merge(
			$categories,
			[
					[
							'slug'  => 'alaminblock',
							'title' => __( 'Al Amin Blocks', 'lemonhive-gutenburg' ),
					],
			]
	);
}
add_action( 'block_categories_all', 'alamin_gutenburg_plugin_block_categories', 10, 2 );
