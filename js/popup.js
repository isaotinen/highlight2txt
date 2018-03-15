chrome.tabs.executeScript(null, {
    "code": "document.getElementById('highlight').innerHTML"
}, function(result) {
    document.getElementById('highlight').textContent = result
});

//クリックしたらコピー
// document.getElementById("button_copy").onclick = function(){
//     copyHighlight();
//

//getElementByIdで表示は可能になったが、最初の要素しか表示されない→querySelectorAllをつかう？getElementByClassName?
