(function(){tinymce.PluginManager.requireLangPack("nosimage");tinymce.create("tinymce.plugins.NosImagePlugin",{init:function(b,c){var a=this,f;if(!tinymce.nosMediaCached){tinymce.nosMediaCached={}}f=tinymce.nosMediaCached;a.editor=b;b.addCommand("nosImage",function(i,g,h){a._nosImage(i,g,h)});b.addButton("nosimage",{title:"nosimage.title",label:"nosimage.label",cmd:"nosImage","class":"mce_image"});b.onNodeChange.add(function(k,o,i,m,h){var g,l;function j(p){var r,n=h.parents,s=p;if(typeof(p)=="string"){s=function(t){return t.nodeName==p}}for(r=0;r<n.length;r++){if(s(n[r])){return n[r]}}}g=j("IMG");if(l=o.get("nosimage")){var q=!m&&!!g&&i.className.indexOf("mceItem")==-1;l.setActive(!m&&!!g&&i.className.indexOf("mceItem")==-1)}});function d(g){g.find("img").each(function(){var k=$(this);var m=k.attr("data-media-id");if(!m){return}var i=k.attr("src");if(i.substr(0,6)!=="nos://"){var n="nos://media/"+m;var l=k.attr("width");var h=k.attr("height");if(l&&h){n+="/"+l+"/"+h;var j=l*h}else{j=0}if(j==0||!f[m]||j>f[m].resolution){f[m]={attrs:{src:k.attr("src"),"data-media-id":m},resolution:j}}k.attr({src:n}).removeClass("nosMedia").removeAttr("data-media").removeAttr("data-media-id")}k.removeData().attr("data-mce-src",i).removeAttr("data-mce-src")})}function e(g){g.find("img").each(function(){var i=$(this);i.removeData().removeAttr("data-mce-src");var h=i.attr("src");if(h.substr(0,6)=="nos://"){var j=h.substr(12).split("/")[0];if(j&&f[j]){i.attr(f[j]["attrs"]).addClass("nosMedia")}}})}b.onGetContent.add(function(g,i){var h=$(i.content);d(h);i.content=$("<div></div>").append(h).html()});b.onSetContent.add(function(g,h){setTimeout(function(){var i=$(g.getBody());e(i)},1)})},_nosImage:function(d,f){var a=this.editor;if(a.dom.getAttrib(a.selection.getNode(),"class","").indexOf("mceItem")!=-1){return}var e=a.selection.getNode().nodeName=="IMG";var c=a.selection.getBookmark(1);var b=null;b=$nos(a.getElement()).nosDialog({contentUrl:"admin/nos/wysiwyg/image"+(e?"/edit":""),title:e?a.getLang("nosimage.edit"):a.getLang("nosimage.insert"),ajax:true,open:function(g){$(g.target).data("tinymce",a)}});b.bind("insert.media",function(m,g){b.nosDialog("close");if(tinymce.isIE){a.selection.moveToBookmark(c)}var j=$(g);if(e){var l=a.selection.getNode();if(l.nodeName=="IMG"){var h={};$.each("src title alt width height style".split(" "),function(o,n){var p=j.attr(n);h[n]=p});h["data-media-id"]=j.data("media")._id;$(l).data("media-id",h["data-media-id"]);a.dom.setAttribs(l,h);a.execCommand("mceRepaint");a.undoManager.add()}}else{var k=$(g).data("media")._id;var j=$(g).attr("data-media-id",k).removeAttr("data-media");var i=$("<div></div>").append(j).html();a.execCommand("mceInsertContent",false,i,{skip_undo:1})}a.execCommand("mceEndUndoLevel")})}});tinymce.PluginManager.add("nosimage",tinymce.plugins.NosImagePlugin)})();