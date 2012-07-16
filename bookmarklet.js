//Copy the contents of this file
//Paste into the URL field of a Bookmark preceded by 'javascript:'
//e.g. javascript:(function(){...})();
(function(){
	var style = '#gtranslate-beatbox-helper-container {padding:0.2em 1em 0.2em 1em;border:2px dashed #888;margin-top:1em;}#gtranslate-beatbox-helper-container h3 {margin-top:0.5em;margin-bottom:0.5em;}#gtranslate-beatbox-helper-container p {margin-top:0.5em;margin-bottom:0.5em;}#gtranslate-beatbox-helper-example {float:left;font-style:italic;margin-right:1em;}#gtranslate-beatbox-helper-controls {margin-top:1em;}';
	var styleTag = document.createElement( 'style' );
	styleTag.setAttribute( 'type', 'text/css' );
	styleTag.innerHTML = style;
	document.getElementsByTagName( 'body' )[0].appendChild(  styleTag );

	var addNote = function( evt ) {
		var source = document.getElementById( 'source' );
			song = source.value;

		source.value = song + evt.target.getAttribute( 'data-notecode' ) + ' ';
	};
	
	var notes = {
			"suspended cymbal":"zk",
			"snare":"bschk",
			"brush":"pv",
			"bass":"bk",
			"flam1":"tk",
			"roll tap":"vk",
			"flam2":"kt",
			"flam tap":"kttp",
			"hi hat tap":"krp",
			"better hi hat":"th",
			"instant rimshot":"thp, ds",
			"break":".",
		},
		source = document.getElementById( 'source' ),
		parent = document.getElementById( 'gt-src-p' ),
		container = document.createElement( 'div' ),
		header = document.createElement( 'h3' ),
		example = document.createElement( 'input' ),
		reminder = document.createTextNode( 'Don\'t forget to select German!' ),
		controls = document.createElement( 'div' );
	
	container.id = 'gtranslate-beatbox-helper-container';
	header.innerHTML = 'Beatbox';
	container.appendChild( header );

	example.setAttribute( 'type', 'button' );
	example.id = 'gtranslate-beatbox-helper-example';
	example.value = 'Example';

	controls.id = 'gtranslate-beatbox-helper-controls';

	container.appendChild( example );
	container.appendChild( reminder );
	container.appendChild( controls );
	
	parent.appendChild( container );

	for( var idx in notes ) {
		var button = document.createElement( 'input' );
		button.setAttribute( 'type', 'button' );
		button.setAttribute( 'data-notecode', notes[ idx ] );
		button.value = idx;
		controls.appendChild( button );
	}

	example.onclick = function() {
		source.value = 'pv zk bschk pv zk pv bschk zk pv zk bschk pv zk pv bschk zk bschk pv bschk bschk pv kkkkkkkkkk bschk ';
	};

	buttons = controls.childNodes;

	for ( var idx in buttons ) {
		buttons[ idx ].onclick = addNote;
	}
})();