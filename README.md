# Google Translate Beatbox Helper
In the German Google Translate is a little easter egg, a beatbox.
There are a few commands for this and this extension helps you use them by adding a few buttons right into the Google Translate interface.

## Bookmarklet

Copy the contents of bookmarklet.js into the URL field of any bookmark in your browser. Make sure it is preceded by javascript:
e.g. javascript:(function(){ ... })();

## Chrome Exntension Installation
Because this extension is not (yet) at the Google Chrome Web Store, you have to install it manually.
 * Download the repository
 * go to Google Chrome > `Tools` > `Extensions` > `Developer Mode` > `Load unpacked extension...` 
 * select the directory you have downloaded

### Autoupdate
Because this extension is not yet at the Google Chrome Web Store, there will be no autoupdate and you will have to install updates manually.

## Usage
To use this extension, go to [Google Translate](http://translate.google.com) (the extension will only work on `google.com` and `google.de`!) and you will see the beatbox notes.
Click on the buttons and the codes will be automatically inserted into the source field.
The beatbox is only available if you selected German as either 'from' or 'to' language.

## Credits
Many thanks to [tybenz](https://github.com/tybenz) who ported the original Chrome extension to a bookmarklet.
Thanks to the creator of the list of all notes: http://news.ycombinator.com/item?id=1952531
The icon is from [Wojciech Walczyszyn](http://wwalczyszyn.deviantart.com/), found at [FindIcons.com](http://findicons.com/icon/450342/music_player?id=450342).

## License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License</a>.
