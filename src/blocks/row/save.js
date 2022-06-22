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
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import InfoboxIcon from "./components/Icon"


import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {

		const {
			blockId,
			contentWidth,
			innerWidth,
			innerWidthType,
			tag,
		} = attributes;

		const blockProps = useBlockProps.save({
			className: 'section-wrapper section-wrapper-'+blockId,
		});

	return (
		<div {...blockProps}>
				{ "full_width" == contentWidth && (
						<div className="container-fluid">
							<div className="row">
								<InnerBlocks.Content />
							</div>
						</div>
					)}
					{ "boxed" == contentWidth && (
						<div className="container">
							<div className="row">
								<InnerBlocks.Content />
							</div>
						</div>
					) }	
		</div>
	);
}
