$(document).ready(function(){
    var count_group = $(".list .item").length;
    var active = 0;
    var begin = true;
    function Load(){

        if(begin != true){
           
        }else{
            begin = false;
        }
        $('.list .item').removeClass('after');
        $('.list .item').removeClass('active');
        $('.list .item').removeClass('before');

        $('#item_'+(active-1 < 0 ? count_group - 1 : active - 1)).removeClass('after');
        $('#item_'+(active-1 < 0 ? count_group - 1 : active - 1)).removeClass('active');
        $('#item_'+(active-1 < 0 ? count_group - 1 : active - 1)).addClass('before');

        $('#item_'+active).removeClass('before');
        $('#item_'+active).removeClass('after');
        $('#item_'+active).addClass('active');

        $('#item_'+(active+1 > count_group- 1 ? 0 : active + 1)).removeClass('before');
        $('#item_'+(active+1 > count_group- 1 ? 0 : active + 1)).removeClass('active');
        $('#item_'+(active+1 > count_group- 1 ? 0 : active + 1)).addClass('after');

        $('#content_'+active).removeClass('hide_item');
        $('#content_'+active).addClass('active');

        $('.dots-page div').removeClass('active');
        $('#dot_'+active).addClass('active');

        $('.effect').addClass('show_effect_v1');
    }
    Load();
    
    $('#next').on('click', function(){
      active = active + 1 >= count_group ? 0 : active + 1;
      Load();
    })
        $('#prev').on('click', function(){
        active = active - 1 < 0 ? count_group - 1 : active - 1;
        Load();
        })
    });
    $('#info').on('click', function(){
        if ($(".list").hasClass("info_2")) {
            $('.list').removeClass('info_2');
        }else  if ($(".list").hasClass("info_1")) {
            $('.list').removeClass('info_1');
            $('.list').addClass('info_2');
        }else  if ($(".list").hasClass("info")) {
            $('.list').removeClass('info');
            $('.list').addClass('info_1');
        }else{
            $('.list').addClass('info');
        }
    })