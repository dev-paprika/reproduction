document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll(".menu-link");
    // menu-linkの要素全てに処理
    menuItems.forEach(function (item) {
        //aタグ
        var parentLink = item.querySelector("a");
        //sub-menu ul要素
        var submenu = item.querySelector(".sub-menu");
        //sub-menu submenuがある場合はul要素の中のliタグ要素を全て取得
        var submenuItems = submenu ? submenu.querySelectorAll("li") : [];

        //親要素のメニューにホバーされたとき
        parentLink.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#d4f1f8";
            //サブメニューが存在する場合はクラス属性のcloseを削除してopenを追加
            if (submenu) {
                submenu.classList.remove("close");
                submenu.classList.add("open");
            }
        });
        //親要素のメニューがマウスアウトしたとき
        parentLink.addEventListener("mouseout", function () {
            //親要素のバックグラウンドカラーを戻す
            this.style.backgroundColor = "";
            //サブメニューの要素にホバーされていないとき
            if (submenu && !submenu.querySelector(":hover")) {
                //サブメニューからopenを除去してcloseを加える
                submenu.classList.remove("open");
                submenu.classList.add("close");
            }
        });
        //サブメニューそれぞれに処理
        submenuItems.forEach(function (subitem) {
            //サブメニューからマウスアウトしたときは非表示にする
            subitem.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
                if (!submenu.querySelector(":hover")) {
                    submenu.classList.remove("open");
                    submenu.classList.add("close");
                }
            });
        });
    });
});
