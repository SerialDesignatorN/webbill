/*

aleale engine v0.5.0
you may use this on your projects as run/debug engine
it is licensed under GNU GPL-3.0
sincere.
zeankun.dev

 */
let label = document.querySelector('[aria-label="run-button"]');
let msg = document.getElementById('msg');
let logic = false;
function startWorker(){
    if (logic == false) {
        logic = true;
        label.innerHTML = `<span class="material-symbols-outlined">
        block
        </span> Stop Debugging`;
        msg.setAttribute('oninput', 'updateKey();')
    } else if (logic == true) {
        logic = false;
        label.innerHTML = `<span class="material-symbols-outlined">
        play_arrow
        </span> Run and Debug`
        msg.setAttribute('oninput', '');
    }
    updateKey();
}
const updateKey = () => {
    var myFrame = $("#myframe").contents().find('body');
    var textareaValue = $("textarea").val();
    myFrame.html(textareaValue);
}


var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}