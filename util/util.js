//获取可视窗口高度
function getClientHeight()
{
    var clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight)
    {
        var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    else
    {
        var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    return clientHeight;
}

function getScrollHeight()
{
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}