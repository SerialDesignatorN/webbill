/*

AB Epik Engine 1.2.0
by AB Studios on use for AB Epik Studio

*/
function typeInTextarea(el, newText) {
    var start = el.selectionStart
    var end = el.selectionEnd
    var text = el.value
    var before = text.substring(0, start)
    var after  = text.substring(end, text.length)
    el.value = (before + newText + after)
    el.selectionStart = el.selectionEnd = start + newText.length
    el.focus()
  }
  
  document.getElementById('newtext').onclick = function() {
     typeInTextarea(document.getElementById('msg'), "<p>Hello World!</p>");
  }
  document.getElementById('newimg').onclick = function() {
     typeInTextarea(document.getElementById('msg'), '<img src=""></img>');
  }
  document.getElementById('newcomment').onclick = function() {
     typeInTextarea(document.getElementById('msg'), "<!--Comment-->");
  }
  document.getElementById('newbutton').onclick = function() {
     typeInTextarea(document.getElementById('msg'), "<button>Button</button>");
  }
  document.getElementById('newbr').onclick = function() {
     typeInTextarea(document.getElementById('msg'), "<br>");
  }
  document.getElementById('newheading').onclick = function() {
     typeInTextarea(document.getElementById('msg'), "<h1>Hello World!</h1>");
  }
  document.getElementById('newvid').onclick = function() {
     typeInTextarea(document.getElementById('msg'), '<video src=""></video>');
  }
  document.getElementById('newdiv').onclick = function() {
     typeInTextarea(document.getElementById('msg'), '<div></div>');
  }
  document.getElementById('newmeta').onclick = function() {
   typeInTextarea(document.getElementById('msg'), '<meta name="viewport" content="width=device-width;initial-scale=1;">')
  }
  document.getElementById('newlink').onclick = function() {
   typeInTextarea(document.getElementById('msg'), '<link rel="" href="">')
  }
  document.getElementById('newscript').onclick = function() {
   typeInTextarea(document.getElementById('msg'), '<script></script>')
  }