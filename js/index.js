$(function () {
    /*1.判断屏幕大小
    * 2.动态插入大图
    * 3.或者小图
    * */

    $(window).on('resize',changeImg);

    //动态控制图片
    function changeImg() {
        //1.当前屏幕大小
        var screenW = $(window).width();
        // console.log(screenW);
        //2.如果当前屏幕大于790就显示大图，否则显示小图
        var isBigImg = screenW > 790;

        //3.获取所有的item（div）
        var $items = $('#wjs_carousel .item');

        //4.遍历
        $items.each(function (index, item) {
            // console.log(index, item);

            //4.1取出item
            var $item = $(item);

            //4.2判断是大图还是小图
            var attr = isBigImg?$item.data('lg-img'):$item.data('sm-img');
            // console.log(attr);

            //4.3设置背景图片
            $item.css({
                backgroundImage:'url(' + attr + ')'
            });

            $item.width(screenW);

            if (!isBigImg){
                $item.height(screenW*17/32);
            }else {
                $item.height(410);
            }

        })

    }


    //是否显示滚动条
    $(window).on('resize',changeUlWidth);
    function changeUlWidth() {
        //获得ul标签
        var $ul = $('#wjs_product .nav');

        //获得所有的li
        //$(selector,context)
        var $lis = $('li[role=presentation]',$ul)
        //console.log($lis.length);

        //遍历，求出所有li的总宽度
        //初始宽度
        var totalLiLength = 0;
        $lis.each(function (index, item) {
            //console.log(index, item);
            totalLiLength += $(item).width();
        });
        //console.log(totalLiLength);

        //获取父标签的宽度
        var parentLength = $ul.parent().width();

        //比较大小
        if (totalLiLength >= parentLength){//给ul设置宽度
            $ul.css({
                width:totalLiLength
            });
        }else{
            $ul.removeAttr('style');
        }
    }

    //程序一进来就触发相应的事件
    $(window).trigger('resize');

    //$('[data-toggle="tooltip"]').tooltip();
});