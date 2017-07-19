// ホストマウスオーバー時にツールチップ表示
$(function() {
    let host = $('#host');
    let balloon = $('<div class="balloon"></div>').appendTo('body');
    let text = host.attr('title');

    host.hover(function() {
        let position = host.offset();
        let posTop = position.top;
        let posLeft = position.left;

        let element = $(this);
        
        element.attr('title', '');
        balloon.text(text);
        balloon.css({
            top: posTop + 63,
            left: posLeft - 50
        })
        balloon.show();
    }, function() {
        balloon.hide();
    });
});

// ログイン押下時のモーダルウィンドウオープン
$(function() {
    let login = $('#login-open');
    let content = $('#modal-content');
    let overlay;

    login.click(function() {
        $('body').append('<div id="modal-overlay"></div>');
        let overlay = $('#modal-overlay');

        centeringModal();
        overlay.show();
        content.show();
    });

    // モーダルを画面中央に表示する
    function centeringModal() {
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        let modalWidth = content.outerWidth();
        let modalHeight = content.outerHeight();
        
        let left = ((windowWidth - modalWidth) / 2);
        let top = ((windowHeight - modalHeight) / 2);
 
        content.css({
            "left": left + "px",
            "top": top + "px"
        });   
    }

});

// ログインのモーダルウィンドウクローズ
$(function() {
    $('#login-close').unbind().click(function() {
        $('#modal-content').hide();
        $('#modal-overlay').remove();
    });
})

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