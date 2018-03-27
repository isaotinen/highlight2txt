'use strict';

var buttonTargetId = "test1"
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
  Array.from(document.querySelectorAll('div.aaa'), function(e){
    document.getElementById("highlightarea").innerText = e.innerText;
  });
}
//テキストエリア作って書き込むとこまで。繰り返し処理すると最後の内容しか表示されない。
