// ナビゲーションの表示切替え
$(function() {
    $('nav').each(function() {
        let nav = $(this);
        let selected = nav.find('a');
        let lastSelected = selected.filter('.selected');
        let currentSelected;
        let selectedClass = 'selected';

        //クリックされたナビゲーションの表示を変更する
        selected.click(function() {
            let a = $(this);
            currentSelected = a;

            //選択されている場合は処理をしない
            if(currentSelected.get(0) === lastSelected.get(0)) {
                return;
            }

            a.addClass(selectedClass);
            a.parent().addClass(selectedClass);
            
            lastSelected.removeClass(selectedClass);
            lastSelected.parent().removeClass(selectedClass);
            
            lastSelected = currentSelected;
        });
    });
});

// ナビゲーションのスクロール
$(function() {
    let win = $(window);
    let nav = $('nav');
    let navPos = nav.offset().top; //offset() 表示位置を取得
    let fixedClass = 'fixed';

    win.on('load scroll', function() { //winにload,scrollイベントを設定
        let value = $(this).scrollTop(); //ウインドウ最上部のスクロールを取得
        if(value > navPos) {
            nav.addClass(fixedClass);
        }
        else {
            nav.removeClass(fixedClass);
        }
    });
});
