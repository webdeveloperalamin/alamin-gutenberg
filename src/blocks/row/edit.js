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
import { InnerBlocks, useBlockProps, RichText, InspectorControls, ColorPalette, MediaUpload } from '@wordpress/block-editor';



import { partialRight } from 'lodash';

import {Component} from "@wordpress/element";

import { PanelBody, SelectControl, IconButton, RangeControl, Button,
	ButtonGroup, } from '@wordpress/components';

import { __experimentalDimensionControl as DimensionControl, __experimentalSpacer as Spacer,
	__experimentalHeading as Heading,
	__experimentalView as View, __experimentalUnitControl as UnitControl, __experimentalFlex as Flex,
	__experimentalFlexBlock as FlexBlock,
	__experimentalFlexItem as FlexItem,
	__experimentalText as Text, } from '@wordpress/components';


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

 import InfoboxStyle from "./components/inline-styles"

let alamin_icons = Object.keys( AlaminIcon );

export default function Edit({setAttributes, attributes, clientId}) {

	const blockProps = useBlockProps( {
		className: 'section-wrapper section-wrapper-'+clientId,
	} );

	const {
		blockId,
		contentWidth,
		innerWidth,
		innerWidthType,
		tag,
	} = attributes;
	
	if ( ! blockId ) {
			setAttributes( { blockId: clientId } );
	}

	const updateSpacing = ( dimension, size, device = '' ) => {
		setAttributes( {
				[ `${ dimension }${ device }` ]: size,
		} );
	};

  function onChangeIcon (newIcon) {
    setAttributes( { icon: newIcon } );
  }

	function onChangeIconImagePosition (newIconImagePosition) {
    setAttributes( { iconimgPosition: newIconImagePosition } );
  }

  function onChangeSourceType (newSourceType) {
    setAttributes( { iconSourceType: newSourceType } );
  }

  function onChangeIconSize (newIconSize) {
    setAttributes( { iconSize: newIconSize } );
  }

	function onChangeTitle( newTitle ){
		setAttributes({ title: newTitle });            
	}

	function onChangeContentWidth( newContentWidth ){
		setAttributes({ contentWidth: newContentWidth });            
	}

	function onChangeInnerWidth( newInnerWidth ){
		setAttributes({ innerWidth: newInnerWidth });            
	}

	function onChangeInnerWidthType( newInnerWidthType ){
		setAttributes({ innerWidthType: newInnerWidthType });            
	}

	function onChangeTag( newTag ){
		setAttributes({ tag: newTag });            
	}

	return (
		<>
			<InspectorControls style={ { marginBottom: '40px' } }>
				<PanelBody title={ 'Layout' }>
					<SelectControl
              label={ __( "Content Width", 'alamin-gutenberg' ) }
              value={ contentWidth }
              onChange={ ( value ) => setAttributes( { contentWidth: value } ) }
              options={ [
                { value: "boxed", label: __( "Boxed", 'alamin-gutenberg' ) },
                { value: "full_width", label: __( "Full Width", 'alamin-gutenberg' ) },
              ] }
            />
						<Fragment>
							<ButtonGroup className="ag-size-type-field" aria-label={ __( "Size Type", 'alamin-gutenberg' ) }>
								<Button key={ "px" } className="ag-size-btn" isSmall isPrimary={ innerWidthType === "px" } aria-pressed={ innerWidthType === "px" } onClick={ () => setAttributes( { innerWidthType: "px" } ) }>{ "px" }</Button>
								<Button key={ "%" } className="ag-size-btn" isSmall isPrimary={ innerWidthType === "%" } aria-pressed={ innerWidthType === "%" } onClick={ () => setAttributes( { innerWidthType: "%" } ) }>{ "%" }</Button>
							</ButtonGroup>
							<RangeControl
								label = { __( "Inner Width", 'alamin-gutenberg' ) }
								value = { innerWidth }
								onChange = { ( value ) => setAttributes( { innerWidth: value } ) }
								min = { 0 }
								max = { 2000 }
							/>
						</Fragment>
						
            <SelectControl
              label={ __( "HTML Tag", 'alamin-gutenberg' ) }
              value={ tag }
              onChange={ ( value ) => setAttributes( { tag: value } ) }
              options={ [
                { value: "div", label: __( "div", 'alamin-gutenberg' ) },
                { value: "header", label: __( "header", 'alamin-gutenberg' ) },
                { value: "footer", label: __( "footer", 'alamin-gutenberg' ) },
                { value: "main", label: __( "main", 'alamin-gutenberg' ) },
                { value: "article", label: __( "article", 'alamin-gutenberg' ) },
                { value: "section", label: __( "section", 'alamin-gutenberg' ) },
                { value: "aside", label: __( "aside", 'alamin-gutenberg' ) },
                { value: "nav", label: __( "nav", 'alamin-gutenberg' ) },
              ] }
            />			
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps } >
					{ "full_width" == contentWidth && (
						<div className="container-fluid">
							<div className="row">
								<InnerBlocks templateLock={false} />
							</div>
						</div>
					)}
					{ "boxed" == contentWidth && (
						<div className="container">
							<div className="row">
								<InnerBlocks templateLock={false} />
							</div>
						</div>
					) }				
			</div>
		</>
	);
}