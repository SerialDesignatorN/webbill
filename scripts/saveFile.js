let saveFile = () => {
    const msg = document.getElementById('msg');
    let data = 
        '' + msg.value;
    
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = document.getElementById('thenameofthefile').value + ".html";

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
    function insertText(text) {
document.getElementById("msg").innerHTML = text;
}