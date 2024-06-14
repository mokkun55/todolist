// 追加ボタンが押されたときの関数
const clickAdd = () => {
  console.log("追加が押された");

  // テキストボックスの中身を取得
  const inputText = document.getElementById("inputText").value;

  // 未完了todoに追加
  createIncompleteTodo(inputText);

  // その後初期化
  document.getElementById("inputText").value = "";
};

const createIncompleteTodo = (todo) => {
  if (todo == "") {
    alert("値が空白です");
  } else {
    // li生成
    const li = document.createElement("li");
    li.innerHTML = todo;

    //完了button生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // 完了button押されたとき
    completeButton.addEventListener("click", () => {
      // どのliの完了が押されたか検索
      // →押されたボタンから一番近いliタグ
      const moveTarget = completeButton.closest("li");
      console.log(moveTarget);

      // 完了ボタン 削除
      completeButton.remove();

      // 完了リストへ移動
      document.getElementById("completeList").appendChild(moveTarget);
    });

    document
      .getElementById("incompleteList")
      .appendChild(li)
      .appendChild(completeButton);
  }
};

// 完了ボタンが押されたとき
const clickComplete = () => {};

document.getElementById("addButton").addEventListener("click", clickAdd);
document
  .getElementById("completeButton")
  .addEventListener("click", clickComplete);
