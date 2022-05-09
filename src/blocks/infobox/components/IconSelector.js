import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import React from 'react';

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


class IconSelector extends Component {
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
		
		return (
      <div className='iconselector-wrapper'>
        <FontIconPicker {...props}/>
      </div>				
		);
	}
}

export default IconSelector;