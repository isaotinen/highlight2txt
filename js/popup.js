$(function () {
    // chrome.tabs.executeScript(null, {
    //     "code": "document.getElementByTagName('h3').innerHTML"
    // }, function(result) {
    //     $('#title').text(result);
    // });

    chrome.tabs.executeScript(null, {
        "code": "document.getElementById('highlight').innerHTML"
    }, function(result) {
        $('#highlight').text(result);
    });

});

//クリックしたらコピー
// document.getElementById("button_copy").onclick = function(){
//     copyHighlight();
//

//getElementByIdで表示は可能になったが、最初の要素しか表示されない→querySelectorAllをつかう？getElementByClassName?
