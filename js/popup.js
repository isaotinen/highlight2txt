'use strict';

chrome.tabs.executeScript(null, {
    "code": "document.getElementById('highlight').innerHTML"
}, function(result) {
    document.getElementById('highlight').textContent = result
});


//getElementByIdで表示は可能になったが、最初の要素しか表示されない→querySelectorAllをつかう？getElementByClassName?
// chrome.tabs.query({}, function(tabs) {　最初でタブの選択.現在のウィンドウlastFocusedWinddow : true、現在のウィンドウのアクティブなタブactive:true
//   var i;
//   var results = document.getElementById('results');
//   var titles = [];
//   for (i = 0; i < tabs.length; i++) {
//     titles.push(tabs[i].title);
//     // console.log(tabs[i].title);
//   }
//   results.value = titles.join("\n");　配列の文字列変換
//   results.select();
// });

// //document.getElementById('colors').addEventListener('change', function() {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor = "' + this.value + '"'
//   });
// });

//値の保存→storage機能
//message passingでボタン埋め込み（オプションでグーグルアカウントをひも付けてkeepにできないか）
