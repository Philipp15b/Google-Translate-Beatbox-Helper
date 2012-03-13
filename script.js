/*
 * Google Translate Beatbox Helper
 *
 * by Philipp Schröer
 */

(function() {
  // Notes from http://news.ycombinator.com/item?id=1952531
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
  };

  // container
  var container = $('<div id="gtranslate-beatbox-helper-container"><h3>Beatbox</h3></div>').appendTo('#gt-src-p');

  // example
  $('<input type="button" id="gtranslate-beatbox-helper-example" value="Example" />').appendTo(container).click(function(){
  	song.val('pv zk bschk pv zk pv bschk zk pv zk bschk pv zk pv bschk zk bschk pv bschk bschk pv kkkkkkkkkk bschk ');
  });

  // reminder to select German
  $('<p>Don\'t forget to select German!</p>').appendTo(container);

  // controller wrapper
  var controls = $('<div id="gtranslate-beatbox-helper-controls"></div>').appendTo(container);

  // the google translate source field
  var song = $('#source');


  // add note buttons to controls
  $.each(notes, function(index, value){
  	elem = controls.append('<input type="button" data-notecode="' + value + '" value="' + index + '" />');
  });
  // click handler for buttons
  $(controls).children().click(function(e){
  	song.val(song.val() + $(e.target).data('notecode') + "  ");
  });


})();
