( function( blocks, editor, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
	var RichText = editor.RichText;

	var namespace = 'beautedor';
	var pluginName = 'scroll-to';

	blocks.registerBlockType( namespace + '/' + pluginName, {
		title: __( pluginName ),
		icon: 'universal-access-alt',
		category: 'layout',
		attributes: {
			anchors: {
				type: 'array',
				source: 'children',
				selector: 'ul',
			},
		},
		edit: function( props ) {
			var anchors = props.attributes.anchors;

			return el( 'div', { className: props.className },
				el(RichText,
				{
					tagName: 'ul',
					multiline: 'li',
					className: props.className,
					onChange: function( value ) {
						props.setAttributes( { anchors: value } );
					},
					value: anchors,
				})				
			);
		},

		save: function( props ) {
			return el( 'div', { className: props.className },
				el( RichText.Content, {
					tagName: 'ul',
					value: props.attributes.anchors,
				})
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element
) );
