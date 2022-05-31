import {Component} from "@wordpress/element";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import React from 'react';
import AlaminIcon from './AlaminIcon.json';
import { __ } from '@wordpress/i18n';
import { Icon, DimensionControl } from '@wordpress/components';
import { partialRight } from 'lodash';

import { useBlockProps, RichText, InspectorControls, ColorPalette, MediaUpload } from '@wordpress/block-editor';

import { PanelBody, SelectControl, IconButton, RangeControl } from '@wordpress/components';

let alamin_icons = Object.keys( AlaminIcon );

class InfoboxControls extends Component {
  /*constructor() {
    state = {
      icon: 'fas fa-star',
      iconimgPosition: 'above-title',
      iconSourceType: 'icon',
      iconSize: 20,
      //paddingSize: 30,
    };
  }*/

  

  

  onChangePaddingSize = (newPaddingSize) => {
    setAttributes( { paddingSize: newPaddingSize } );
  }

  render() {

    

		const { setAttributes, attributes } = this.props;

    

    const iconprops = {
      icons: alamin_icons,
      theme: 'bluegrey',
      renderUsing: 'class',
      value: icon,
      onChange: this.onChangeIcon,
      isMulti: false,
    };

		return (
      <>
        <InspectorControls style={ { marginBottom: '40px' } }>
          <PanelBody title={ 'Image/Icon' }>
            <SelectControl
              label={ __( "Icon/Image Position", 'alamin-gutenberg' ) }
              value={ this.state.iconimgPosition }
              onChange={ ( value ) => setAttributes( { iconimgPosition: value } ) }
              options={ [
                { value: "above-title", label: __( "Above Title", 'alamin-gutenberg' ) },
                { value: "left-title", label: __( "Left of Title", 'alamin-gutenberg' ) },
                { value: "left", label: __( "Left of Text and Title", 'alamin-gutenberg' ) },

              ] }
            />
            <SelectControl
              label={ __( "Select Source", 'alamin-gutenberg' ) }
              value={ this.state.iconSourceType }
              onChange={ ( value ) => setAttributes( { iconSourceType: value } ) }
              options={ [
                { value: "icon", label: __( "Icon", 'alamin-gutenberg' ) },
                { value: "image", label: __( "Image", 'alamin-gutenberg' ) },
              ] }
            />
            <div className='iconselector-wrapper'>            
              <FontIconPicker {...iconprops}/>
            </div>
            <RangeControl
              label = { __( "Icon Size", 'alamin-gutenberg' ) }
              value = { this.state.iconSize }
              onChange = { ( value ) => setAttributes( { iconSize: value } ) }
              min = { 10 }
              max = { 300 }
              beforeIcon = ""
              allowReset
            />
            {/* <DimensionControl
              label = { __( "Infobox Padding", 'alamin-gutenberg' ) }
              icon={ 'desktop' }
              onChange={ this.onChangePaddingSize }
              value={ this.state.paddingSize }
            /> */}
            
          </PanelBody>
        </InspectorControls>
        <div className="infobox-text" >
          {/* <InfoboxIcon attributes={ attributes }/> */}
          <p>Current Icon: {this.state.icon}</p>
          <p>Current Position: {this.state.iconimgPosition}</p>
          <p>Current Source: {this.state.iconSourceType}</p>
          <p>Current Size: {this.state.iconSize}</p>
          {/* <p>Padding Size: {this.state.paddingSize}</p> */}
          <i className={this.state.icon} />
          {__(
            'Gutenberg Infobox – hello from the infobox editor!',
            'alamin-gutenberg'
          )}
        </div>
      </>
		);
	}
}

export default InfoboxControls;