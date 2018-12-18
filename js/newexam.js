(function(){

  layui.use(['element','laypage'], function(){
      var element = layui.element,
          laypage = layui.laypage;
          laypage.render({
            elem: 'pagebar1' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: 50 //数据总数，从服务端得到
            ,layout: ['count', 'prev', 'page', 'next', 'skip']
          });
          laypage.render({
            elem: 'pagebar2' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: 50 //数据总数，从服务端得到
            ,layout: ['count', 'prev', 'page', 'next', 'skip']
          });
          laypage.render({
            elem: 'pagebar3' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: 50 //数据总数，从服务端得到
            ,layout: ['count', 'prev', 'page', 'next', 'skip']
          });
          laypage.render({
            elem: 'pagebar4' //注意，这里的 test1 是 ID，不用加 # 号
            ,count: 50 //数据总数，从服务端得到
            ,layout: ['count', 'prev', 'page', 'next', 'skip']
          });
    });
    
    var choose_data = {};
    choose_data.key = [false,false,false]; //多选开关
    choose_data.type = []; 
    choose_data.area = [];
    choose_data.grade = []; //分别存放选择的选项值
    //单多选功能
    $('.chooes_lists').each(function(i){ //每一位选项点击事件
      $(this).find('li').click(function(){
        if(!choose_data.key[i]){ //判断是否单选
          $(this).toggleClass('on').siblings().removeClass('on');
        }else{
          $(this).toggleClass('on');
        }
        $('.all').eq(i).removeClass('layui-btn-normal').addClass('layui-btn-primary');
      })
    })

    $('.all').each(function(j){ //全选点击事件
      $(this).click(function(){
        $(this).addClass('layui-btn-normal').removeClass('layui-btn-primary');
        $('.chooes_lists').eq(j).find('li').removeClass('on'); //恢复
      })
    })

    $('.many').each(function(x){
      $(this).click(function(){
        $(this).toggleClass('layui-btn-primary');
        choose_data.key[x] = !choose_data.key[x];
        if(!choose_data.key[x]){
          $('.chooes_lists').eq(x).find('li').removeClass('on');
          $('.all').eq(x).addClass('layui-btn-normal').removeClass('layui-btn-primary')
        }
      })
    })

})()