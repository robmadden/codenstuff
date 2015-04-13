Change Disqus
=============
Change assets/js/config.js to use your disqus ID.

Change Nav
==========
Change partials/nav.hbs file.

Change Theme
============
Mega is designed to allow you to customize theme colors.
To use particular theme, open default.hbs file using text editor (Notepad, Notepad++),
then change "alternate stylesheet" to "stylesheet" of your favored theme.

For example, if you want to use "green" theme, change:
<link rel="alternate stylesheet" title="green" type="text/css" href="{{asset "css/theme-green.css"}}" />

become

<link rel="stylesheet" title="green" type="text/css" href="{{asset "css/theme-green.css"}}" />


Enjoy!
