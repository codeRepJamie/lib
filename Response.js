/**
 * Created by Administrator on 2014/4/20.
 */
var Response={
    resultSuccess:0,
    resultFalure:0
};

Response.uiController= {
    BoxStyle:'#loading_unit{display:none;border-radius:8px;box-shadow:0 0 4px rgba(0,0,0,.5),inset 0 0 60.5px rgba(225,225,225,.4);position:fixed;z-index:9999;width:310px;height:auto;left:50%;top:50%;margin-left:-155px;margin-top:-60px;background:white;text-align:center;font-size:16px;}#loading_unit p{margin:0;}#loading_unit h1{font-size:16px;color:#555;font-weight:bold;padding:0;margin:16px 0 5px 0;letter-spacing:-.0125em;background:none;}#loading_unit h2{font-size:12px;color:#555;font-weight:400;padding:0;letter-spacing:-.0125em;',
    DrawBox: function () {
        var oLoadingBox=document.createElement('div');
        oLoadingBox.id='loading_unit';
        oLoadingBox.innerHTML='<h1>正在保存...</h1><p></p><h2>如长时间无响应，请刷新页面重新保存</h2>';
        var oBoxStyle=document.createElement('style');
        oBoxStyle.innerHTML=Response.uiController.BoxStyle;
        document.body.appendChild(oLoadingBox);
        document.body.appendChild(oBoxStyle);
    },
    showSuccess:function(){
        $('#loading_unit p').html("<img src='/subject/edit/images/onebit_34.png' />");
        $('#loading_unit h2').html("操作成功！");
        $('#loading_unit').fadeIn('normal');
    },
    showFailure:function(exp){
        $('#loading_unit p').html("<img src='/subject/edit/images/onebit_33.png' />");
        $('#loading_unit h2').html("操作失败！详细情况："+exp);
        $('#loading_unit').fadeIn('normal');
    },
    showResult:function(){
        $('#loading_unit h1').text("保存结果");
        $('#loading_unit .progress').fadeOut(1000);
    },
    showComputedResult:function(aEditor){
        $('#loading_unit h1').text("保存结果");
        if(!Response.resultFalure){
            $('#loading_unit p').html("<img src='/subject/edit/images/onebit_34.png' />");
        }else{
            $('#loading_unit p').html("<img src='/subject/edit/images/onebit_33.png' />");
        }
        $('#loading_unit h2').html("修改项目："+aEditor.length+"项；成功："+Response.resultSuccess+"项；失败："+Response.resultFalure+"项！");
        if(aEditor.length==(i+1))
            $('#loading_unit .progress').fadeOut(1000);
    },
    showLoadingBar:function(){
        $('#loading_unit p').html("<img src='/subject/edit/images/loading_bar.gif' />");
    },
    hideLoadingBar:function(){
        $('#loading_unit .progress').hide();
    }
};

