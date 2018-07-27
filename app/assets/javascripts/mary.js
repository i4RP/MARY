
var mary;
var userAccount;

window.addEventListener('load', function() {

  // Web3がブラウザにインジェクトされているかチェック (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Mist/MetaMaskのプロバイダの使用
    web3js = new Web3(web3.currentProvider);
    window.web3 = web3js;
    console.log(window.web3)
  } else {
    // ユーザーがweb3を持たない場合の対処。
    // アプリを使用するためにMetamaskをインストールするよう
    // 伝えるメッセージを表示。
    alert("Metamaskをインストールしてください")
  }

  // アプリのスタート＆Web3.jsへの自由なアクセスが可能に:
  startApp()
  //  alert("startapp完了")
})
function startApp() {
  // Rposten
  //  maryABIは別ファイルからインポート
  var maryAddress = "0xe792919397F171A74f0FDF9D8607c37C25b90D5D";
  mary = new window.web3.eth.Contract(maryABI, maryAddress);
}

 var userAccount = window.web3.eth.accounts[0];
 console.log(userAccount);

function propose(pertnerAddress) {
  // しばらく時間がかかるので、UIを更新してユーザーに
  // トランザクションが送信されたことを知らせる
  // $("#txStatus").text("Proposing marriage on the block chain. This may take a while...");
  // トランザクションをコントラクトに送信する:
  console.log(userAccount, pertnerAddress);
    return mary.methods.propose(pertnerAddress)
      .send({ from: userAccount })
      .on("receipt", function(receipt) {
      //  $("#txStatus").text("Successfully Proposed " + address + "!");
        // トランザクションがブロックチェーンに取り込まれた。UIをアップデートしよう
        alert("トランザクションが成功しました");
      })
      .on("error", function(error) {
        // トランザクションが失敗したことをユーザーに通知するために何かを行う
        alert("トランザクションが失敗しました。入力したアドレスが間違いないか。もしくはMetamaskなどでトランザクションを発行する際に設定するGasを少し高めにしてみてください。");
      });
  }

  function checkEngagement(firstAddress,secondAddress) {
    // しばらく時間がかかるので、UIを更新してユーザーに
    // トランザクションが送信されたことを知らせる
    // $("#txStatus").text("Proposing marriage on the block chain. This may take a while...");
    // トランザクションをコントラクトに送信する:
    console.log(firstAddress, secondAddress);
      return mary.methods.checkEngagement(firstAddress,secondAddress)
        .send({ from: userAccount })
        .on("receipt", function(receipt) {
        //  $("#txStatus").text("Successfully Proposed " + address + "!");
          // トランザクションがブロックチェーンに取り込まれた。UIをアップデートしよう
          alert("トランザクションが成功しました");
        })
        .on("error", function(error) {
          // トランザクションが失敗したことをユーザーに通知するために何かを行う
          alert("トランザクションが失敗しました。入力したアドレスが間違いないか。もしくはMetamaskなどでトランザクションを発行する際に設定するGasを少し高めにしてみてください。");
        })
    }
