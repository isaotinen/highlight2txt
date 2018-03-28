'use strict';

var buttonTargetId = "kp-notebook-head"
var highlightButton = document.createElement("button");
highlightButton.innerText = "Show Highlights";
highlightButton.onclick = showHighlight;
var closeButton = document.createElement("button");
closeButton.innerText = "Close Highlights";
closeButton.onclick = closeHighlight;
var copyallButton = document.createElement("button");
copyallButton.innerText = "Copy All";
copyallButton.onclick = copyall;

add(buttonTargetId, document.createElement("br"));
add(buttonTargetId, copyallButton);
add(buttonTargetId, highlightButton);
add(buttonTargetId, closeButton);

function add(id, tag){
  document.getElementById(id).appendChild(tag);
}

function showHighlight() {
  if (document.getElementById("highlightarea") != null) {
    return;
  }
  var highlightDiv = document.createElement("div");
  highlightDiv.innerHTML = '<textarea id="highlightarea" name="contents" rows="30" cols="100"></textarea>';
  add(buttonTargetId, highlightDiv);
  document.getElementById("highlightarea").value = Array.from( document.querySelectorAll( 'span.a-size-base-plus.a-color-base' ), e => e.innerText ).join( "\n" );
}

function copyall(){
  if (document.getElementById("highlightarea") != null) {
    document.getElementById("highlightarea").select();
    document.execCommand("copy");
  }
  else{
    showHighlight();
    document.getElementById("highlightarea").select();
    document.execCommand("copy");
    document.getElementById("highlightarea").remove();
  }
}

function closeHighlight() {
  document.getElementById("highlightarea").remove();
}
