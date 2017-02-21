;
! function(win) {
    win.AFN = {};
    AFN.bgResize = function() { //初始化背景图
        var documentHeight = $(document).height(),
            dw = $(document).width(),
            dh = documentHeight + 'px',
            erweima = documentHeight - 350 + 'px';
        $('.dapin_body').css({ "background-size": ' ' + dw + ' ' + dh + ' ' });

        var dp_con_title = $('.dp_con_title');
        var title_height = documentHeight * 0.18;

        dp_con_title.css({ "height": title_height + 'px' });

        var time_h = $('.dp_con_time').height();

        var bar_h = $('.bar_box').find('.bar').height();
        $('.bar_name').css({ "line-height": bar_h + 'px' });

        var support_h = $('.dp_con .support').height();
        var dp_con_time = $('.dp_con .dp_con_time').height();

        var erweima = $('.dp_con .erweima');
        var erweima_h = documentHeight - title_height - time_h - bar_h - support_h - dp_con_time - 60 + 'px';
        erweima.css({ "height": erweima_h });

        var dp_box = $('.dp_box');
        var dp_box_h = documentHeight - title_height - support_h - 100 + 'px';
        dp_box.css({ "height": dp_box_h });
        var show_name_ul = documentHeight - title_height - support_h - 220 + 'px';
        $('.show_name_ul').css({ "height": show_name_ul });
        $('.dp_con .cj_right').css({ "height": dp_box_h });

    };

    win.onresize = function() {
        AFN.bgResize();
    };
    var icon_box_c = $('.cj_left_icon_box').find('li');
    var icon_box = icon_box_c.length;
    var i=0;
    var turnLampOn = setInterval(function(){ //旋转亮灯
        if(i == icon_box ){
          i=0;
        };
        i++;
        icon_box_c.eq(i-1).addClass('yellow');
        icon_box_c.eq(i - 10).removeClass('yellow');
      },70);
      //clearInterval(turnLampOn);


}(window);

$(function() {
    setTimeout('AFN.bgResize()',50);
});
