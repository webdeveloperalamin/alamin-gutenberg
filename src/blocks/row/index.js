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
	blockId: {
		type: 'string'
 	},
	contentWidth : {
		type: "string",
		default: "boxed",
	},
	innerWidth : {
		type: "number",
		default: 960,
	},
	innerWidthType : {
		type: "string",
		default: "px",
	},
	tag : {
		type: "string",
		default: "section",
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