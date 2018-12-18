(function(){
    layui.use('layer', function(){})
    $('#login').click(function(){
        var uname = $('#uname').val(),
            pwd = $('#pwd').val();
        if(!(emailReg(uname)||phoneReg(uname))){
            layer.msg('用户名不符合',{icon: 2});
            return false;
        }
        if(!pwdReg(pwd)){
            layer.msg('密码不符合',{icon: 2});
            return false;
        }
        layer.msg('登录成功',{icon: 1})
    })
})()
