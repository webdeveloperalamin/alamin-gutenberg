import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import React from 'react';
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
import { useBlockProps } from '@wordpress/block-editor';

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

 const {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	ButtonGroup,
} = wp.components

const { Component, Fragment } = wp.element

class AlaminInfobox extends Component {
	constructor(props) {
    super(props);
    this.state = {
      value: 'fipicon-angle-left',
    };
  }
  handleChange = (value) => {
    this.setState({ value });
  }
	render() {	
			
		const props = {
      icons: ['fipicon-angle-left', 'fipicon-angle-right', 'fipicon-angle-up', 'fipicon-angle-down'],
      theme: 'bluegrey',
      renderUsing: 'class',
      value: this.state.value,
      onChange: this.handleChange,
      isMulti: false,
    };

		console.log(props);
		
		// const blockProps = useBlockProps({
		// 	className: 'infobox-wrapper',
		// });
		
		return (
			<>
			<div  >
				{__(
					'Gutenberg Infobox – hello from the editor!',
					'alamin-gutenberg'
				)}
			</div>
			<FontIconPicker {...props}/>
			</>
		);
	}
}

export default AlaminInfobox;

// export default function Edit() {
// 	const blockProps = useBlockProps( {
// 		className: 'infobox-wrapper',
// 	} );
// 	return (
// 		<>
// 		<div { ...blockProps } >
// 			{__(
// 				'Gutenberg Infobox – hello from the editor!',
// 				'alamin-gutenberg'
// 			)}
// 		</div>
// 		{/* <FontIconPicker {...props}/> */}
// 		</>
// 	);
// }
