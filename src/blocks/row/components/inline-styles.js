function InfoboxStyle( props ) {
  const {
    iconimgPosition,
		iconSourceType,
		iconSize
  } = props.attributes;

  var selectors = {
    ".infobox-wrapper i" : {
      "font-size" : iconSize,
    },
  }

  var id = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

  var styling_css = generateCSS( selectors, id );

  return selectors;

}

export default InfoboxStyle;