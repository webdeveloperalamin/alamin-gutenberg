/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, InspectorControls, ColorPalette, MediaUpload } from '@wordpress/block-editor';

import { PanelBody, SelectControl, IconButton, RangeControl } from '@wordpress/components';

import {Component} from "@wordpress/element";

import IconSelector from './components/IconSelector';
import InfoboxControls from './components/InfoboxControls';

import InfoboxIcon from './components/Icon';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

 import classnames from "classnames";

 import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
 import AlaminIcon from './components/AlaminIcon.json';

export default function Edit(props) {

	console.log('edit-props',props);

	const blockProps = useBlockProps( {
		className: 'infobox-wrapper',
	} );

	/*let alamin_icons = Object.keys( AlaminIcon );

	const iconprops = {
		icons: alamin_icons,
		theme: 'bluegrey',
		renderUsing: 'class',
		value: this.state.icon,
		onChange: this.onChangeIcon,
		isMulti: false,
	};*/
	
	return (
		<>
			{/* <InspectorControls style={ { marginBottom: '40px' } }>
				<FontIconPicker {...iconprops}/>
			</InspectorControls> */}
			<div { ...blockProps } >				
				<InfoboxControls />				
		</div>
		</>
	);
}