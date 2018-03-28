'use strict';

var buttonTargetId = "kp-notebook-head"
var createButton = document.createElement("button");
createButton.innerText = "Show Highlights";
createButton.onclick = showHighlight;
var highlightArea = document.createElement("div");
add(buttonTargetId, document.createElement("br"));
add(buttonTargetId, createButton);
add(buttonTargetId, document.createElement("br"));
add(buttonTargetId, highlightArea);

function add(id, tag){
  document.getElementById(id).appendChild(tag);
}

function showHighlight() {
  highlightArea.innerHTML = '<textarea id="highlightarea" name="contents" rows="30" cols="100"></textarea>';
  document.getElementById("highlightarea").value = Array.from( document.querySelectorAll( 'span.a-size-base-plus.a-color-base' ), e => e.innerText ).join( "\n" );
}
