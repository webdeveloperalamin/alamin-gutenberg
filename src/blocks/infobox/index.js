/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';

const { title, name } = metadata;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const attributes = {
  icon: {
		type : "string",
		default : "fas fa-star"
	},
  iconimgPosition: {
		type: "string",
		default: "above-title"
	},
  iconSourceType :{
		type: "string",
		default: "icon",
	},
	iconSize : {
		type: "number",
		default: 40,
	},
  boxPaddingSize : {
		type: "number",
		default: 20,
	},
}


registerBlockType(name, {
    title,

    attributes,
    /**
     * @see ./edit.js
     */
    edit,
    /**
     * @see ./save.js
     */
    save,
});