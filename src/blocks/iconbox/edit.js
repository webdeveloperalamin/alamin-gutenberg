import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
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

 const state = {
		value: 'fipicon-angle-left',
	};

 const handleChange = (value) => {
	setState({ value });
}

const props = {
	icons: ['fipicon-angle-left', 'fipicon-angle-right', 'fipicon-angle-up', 'fipicon-angle-down'],
	theme: 'bluegrey',
	renderUsing: 'class',
	value: state.value,
	onChange: handleChange.value,
	isMulti: false,
};

// console.log(useBlockProps);


export default function Edit() {
	const blockProps = useBlockProps( {
			className: 'iconbox-wrapper',
	} );
	return (
		<>
		<div { ...blockProps } >
			{__(
				'Gutenberg Iconbox – hello from the editor!',
				'alamin-gutenberg'
			)}
		</div>
		{/* <FontIconPicker {...props}/> */}
		</>
	);
}
