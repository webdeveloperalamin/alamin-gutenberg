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



import { partialRight } from 'lodash';

import {Component} from "@wordpress/element";

import { PanelBody, SelectControl, IconButton, RangeControl } from '@wordpress/components';

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

console.log(wp.blockEditor);
//console.log(__experimentalDimensionControl);

export default function Edit({setAttributes, attributes, clientId}) {

	const blockProps = useBlockProps( {
		className: 'infobox-wrapper',
	} );

	const {
		icon,
		iconimgPosition,
		iconSourceType,
		iconSize,
		title,
		paddingSize
	} = attributes;

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

	return (
		<>
			<InspectorControls style={ { marginBottom: '40px' } }>
				<PanelBody title={ 'Image/Icon' }>
					<SelectControl
              label={ __( "Icon/Image Position", 'alamin-gutenberg' ) }
              value={ iconimgPosition }
              onChange={ ( value ) => setAttributes( { iconimgPosition: value } ) }
              options={ [
                { value: "above-title", label: __( "Above Title", 'alamin-gutenberg' ) },
                { value: "left-title", label: __( "Left of Title", 'alamin-gutenberg' ) },
                { value: "left", label: __( "Left of Text and Title", 'alamin-gutenberg' ) },
              ] }
            />
            <SelectControl
              label={ __( "Select Source", 'alamin-gutenberg' ) }
              value={ iconSourceType }
              onChange={ ( value ) => setAttributes( { iconSourceType: value } ) }
              options={ [
                { value: "icon", label: __( "Icon", 'alamin-gutenberg' ) },
                { value: "image", label: __( "Image", 'alamin-gutenberg' ) },
              ] }
            />
						<div className='iconselector-wrapper'>            
								<FontIconPicker 
									icons={ alamin_icons }
									theme='bluegrey'
									renderUsing='class'
									value={icon}
									onChange={onChangeIcon}
									isMulti={false}
								/>
						</div>
						<RangeControl
              label = { __( "Icon Size", 'alamin-gutenberg' ) }
              value = { iconSize }
              onChange = { ( value ) => setAttributes( { iconSize: value } ) }
              min = { 10 }
              max = { 300 }
              beforeIcon = ""
              allowReset
            />
						
						{/* <DimensionControl
                label={ __( 'Padding' ) }
                icon={ 'desktop' }
                onChange={ partialRight( updateSpacing, 'paddingSize' ) }
                value={ paddingSize }
            />
						
						<UnitControl />
						<UnitControl />
						<UnitControl />
						<UnitControl />				 */}
						
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps } >	
				<i className={icon}
				style={ { fontSize: iconSize } } />
				<p>Current Icon: {icon}</p>
          <p>Current Position: {iconimgPosition}</p>
          <p>Current Source: {iconSourceType}</p>
          <p>Current Size: {iconSize}</p>	
					<RichText key="editable" 
											tagName="h2" 
											placeholder="Your Infobox Title" 
											value={ title } 
											onChange={ onChangeTitle }
											/>
				{/* <InfoboxControls />				 */}
		</div>
		</>
	);
}