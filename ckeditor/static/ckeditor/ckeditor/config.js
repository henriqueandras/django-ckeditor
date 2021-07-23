/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	// Enable a limited set of text formats:
	config.format_tags = 'p;title;caption';
	config.format_title = {
        name: 'Title',
        element: 'h2',
        styles: {
            'font-weight': '700',
   					'margin-top': '60px',
    				'margin-bottom': '30px',
        }
	};
	config.format_caption = {
        name: 'Image Caption',
        element: 'figcaption',
        styles: {
            'font-size': '14px',
						'font-style': 'italic',
						'padding': '10px',
						'text-align': 'center',
						'color': '#BFBFBF',
        }
	};

	config.enterMode = CKEDITOR.ENTER_BR;
};
