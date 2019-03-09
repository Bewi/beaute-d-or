( function( blocks, editor, i18n, element, components, _ ) {
	var el = element.createElement;
	var __ = i18n.__;
	var RichText = editor.RichText;

	var namespace = 'beautedor';
	var pluginName = 'flex-grid';

	blocks.registerBlockType( namespace + '/' + pluginName, {
		title: __( pluginName ),
		icon: 'index-card',
		category: 'layout',
		attributes: {
			name: {
				type: 'array',
				source: 'children',
				selector: '.name',
			},
			description: {
				type: 'array',
				source: 'children',
				selector: '.description',
			},
			price: {
				type: 'array',
				source: 'children',
				selector: '.price',
			},
			time: {
				type: 'array',
				source: 'children',
				selector: '.time',
			},
		},
		edit: function( props ) {
			return el( 'div', { className: props.className },
				el(RichText,
				{
					tagName: 'div',
					onChange: function( value ) {
						props.setAttributes( { name: value } );
					},
					value: props.attributes.name,
					className: "name"
				}),	
				el(RichText,
				{
					tagName: 'div',
					onChange: function( value ) {
						props.setAttributes( { description: value } );
					},
					value: props.attributes.description,
					className: "description"
				}),	
				el('div', {}, 
					el(RichText,
					{
						tagName: 'div',
						onChange: function( value ) {
							props.setAttributes( { price: value } );
						},
						value: props.attributes.price,
						className: "price"
					}),	
					el(RichText,
					{
						tagName: 'div',
						onChange: function( value ) {
							props.setAttributes( { time: value } );
						},
						value: props.attributes.time,
						className: "time"
					})
				)				
			);
		},
		save: function( props ) {
			return el( 'div', { className: props.className },
				el( RichText.Content, {
					tagName: 'div',
					value: props.attributes.name,
					className: "name"
				}),
				el( RichText.Content, {
					tagName: 'div',
					value: props.attributes.description,
					className: "description"
				}),
				el( 'div', { className: props.className }, 
					el( RichText.Content, {
						tagName: 'div',
						value: props.attributes.price,
						className: "price"
					}),
					el( RichText.Content, {
						tagName: 'div',
						value: props.attributes.time,
						className: "time"
					}),
				)
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._,
) );
