tinymce-skin-bootstrap
======================

Thème pour tinyMCE basé sur la CSS de Bootstrap

Authors
-------

 * Gerits Aurelien (Author-Developer) contact[at]aurelien-gerits[point]be

###Installation
 * Télécharger le skin
 * Décompresser l'archive
 * Déposer le dossier bootstrap dans tinyMCE (tiny_mce/themes/advanced/)


Exemple d'intégration
---------------------
<pre>
tinyMCE.init({
        // General options
        mode : "textareas",
        theme : "advanced",
        skin : "bootstrap",
        plugins : "table,inlinepopups",

        // Theme options
        theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,|,table,removeformat,code",
        theme_advanced_buttons2 : "",
        theme_advanced_buttons3 : "",
        theme_advanced_buttons4 : "",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_statusbar_location : "bottom",
        theme_advanced_resizing : true,

        // Example content CSS (should be your site CSS)
        content_css : "/js/tinymce/examples/css/content.css"
});
</pre>

Licence
------------

<pre>
TinyMCE skin Bootstrap

Copyright (C) 2013 Gerits Aurelien (Author - Developer) contact[at]aurelien-gerits[point]be

Redistributions of files must retain the above copyright notice.
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

####DISCLAIMER

Do not edit or add to this file if you wish to upgrade tinyMCE skin Bootstrap to newer
versions in the future. If you wish to customize tinyMCE skin Bootstrap for your
needs please refer to aurelien-gerits.be for more information.
</pre>
