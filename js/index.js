

loadlunbo();
loadjishiqi();
loadzi();
loadzi2();
loadfaxian();
maodian();
lilunbo();
function loadlunbo() {
    var div=document.getElementById("lunbo");
    var lunbo=div.querySelector(".lunbo");
    var li=div.querySelectorAll(".lunbo ul li");
    var a=div.querySelectorAll(".lunbo div a")
    var timer=setInterval(task,3000);
    var i=0;
    function task() {
        if (i<li.length-1){
            li[i].className="";
            a[i].className="";
            i++;
            li[i].className="cur";
            a[i].className="cur";
         }else{
            li[i].className="";
            a[i].className="";
            i=0;
            li[i].className="cur";
            a[i].className="cur";
        }
    }
lunbo.onmouseover=function () {
    clearInterval(timer);
}
lunbo.onmouseout=function () {
    timer=setInterval(task,3000);
}

for (var j=0;j<a.length;j++){
    a[j].onmouseover=function () {
        for (var c=0;c<a.length;c++){
            if (this==a[c]){
                if (i!=c){
                    li[i].className="";
                    a[i].className="";
                    i=c;
                    li[i].className="cur";
                    a[i].className="cur";
                }
                break;
            }
        }
    }
}
}


function loadjishiqi() {
    task();
    var timer=setInterval(task,86400000);
    function task() {
        var now=new Date();
        var end=new Date("2016/12/24");
        var s=parseInt((now-end)/1000);
        var d=parseInt(s/(3600*24));
        var span=document.getElementById("tiao").querySelector(".red .b");
        span.innerHTML=d;
    }
}


function loadzi() {
    var bj=document.getElementById("nav").querySelector(".bj");
    var zi=document.getElementById("search").firstElementChild;
    var yincang=document.getElementById("search").querySelector("div .yincang");
    bj.onmouseover=function() {
        zi.className="zi";
        bj.style="background-color: white;border:1px solid rgba(200,200,200,0.3);";
        yincang.className="xianshi";
    }
    zi.onmouseover=function() {
        zi.className="zi";
        bj.style="background-color: white;border:1px solid rgba(200,200,200,0.3);";
        yincang.className="xianshi";
    }
    zi.onmouseout=function () {
        zi.className="";
        bj.style="";
        yincang.className="yincang";
    }
    bj.onmouseout=function () {
        zi.className="";
        bj.style="";
        yincang.className="yincang";
    }
}


function loadzi2() {
    var lis=document.getElementById("lunbo").querySelectorAll(".list ul li");
    var div=document.getElementById("zi2").firstElementChild;
    var a;
    for(var j=0;j<lis.length;j++) {
        lis[j].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
                this.className = "a";
                a=this;
            }
            div.className = "xianshi";





            if(this==lis[0]){
            div.innerHTML='        <div class="nav">\n' +
                '            <ul>\n' +
                '                <li><a href="">家电馆 &gt;</a></li>\n' +
                '                <li><a href="">乡镇专卖店 &gt;</a></li>\n' +
                '                <li><a href="">家电服务 &gt;</a></li>\n' +
                '                <li><a href="">家电企业购 &gt;</a></li>\n' +
                '                <li><a href="">商用电器 &gt;</a></li>\n' +
                '                <li><a href="">高端家电 &gt;</a></li>\n' +
                '            </ul>\n' +
                '        </div>\n' +
                '        <div class="nav_box">\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">电视 &gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">曲面电视</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">超薄电视</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">HDR电视</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">OLED电视</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">4K超清电视</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">55英寸</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">65英寸</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">电视配件</a></li>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">空调 &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">壁挂式空调</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">柜式空调</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">中央空调</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">以旧换新</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">0元安装</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">空调配件</a></li>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">洗衣机 &gt;&nbsp;&nbsp;</a></li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">滚筒洗衣机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">洗烘一体机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">波轮洗衣机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">迷你洗衣机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">烘干机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">洗衣机配件</a></li>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">冰箱 &gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">多门</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">对开门</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">三门</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">双门</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">冷柜/冰吧</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">酒柜</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">冰箱配件</a></li>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">厨卫大电 &gt;</a></li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">油烟机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">燃气灶</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">烟灶套装</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">消毒柜</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">洗碗机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">电热水器</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">燃气热水器</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">嵌入式厨电</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">商用厨房电器</a></li>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">厨房小电 &gt;</a></li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">电饭煲</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">微波炉</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">电烤箱</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">电磁炉</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">收音机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">麦克风</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">MP3/MP4</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">专业音频</a></li>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">智能手环</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">贴膜</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">手机存储卡</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">数据线</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">充电器</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">手机耳机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">创意配件</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">手机饰品</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">手机电池</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">苹果周边</a></li>\n' +
                '                <div class="ov">\n' +
                '                    <li>|&nbsp;&nbsp;<a href="">移动电源</a>&nbsp;&nbsp;|</li>\n' +
                '                    <li><a href="">蓝牙耳机</a>&nbsp;&nbsp;|</li>\n' +
                '                    <li><a href="">手机支架</a>&nbsp;&nbsp;|</li>\n' +
                '                    <li><a href="">车载配件</a>&nbsp;&nbsp;|</li>\n' +
                '                    <li><a href="">拍照配件</a>&nbsp;&nbsp;|</li>\n' +
                '                </div>\n' +
                '            </ul>\n' +
                '            <hr>\n' +
                '            <ul class="nav_box1">\n' +
                '                <li class="b"><a href="">手机通讯 &gt;</a></li>\n' +
                '                <li>|&nbsp;&nbsp;<a href="">手机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">对讲机</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">以旧换新</a>&nbsp;&nbsp;|</li>\n' +
                '                <li><a href="">手机维修</a></li>\n' +
                '            </ul>\n' +
                '        </div>\n' +
                '        <div class="zi2_image">\n' +
                '            <span><img src="images/im2.jpg" alt=""></span>\n' +
                '        </div>';
        }else if(this==lis[1]){
                div.innerHTML='        <div class="nav">\n' +
                    '            <ul>\n' +
                    '                <li><a href="">玩3C &gt;</a></li>\n' +
                    '                <li><a href="">手机频道 &gt;</a></li>\n' +
                    '                <li><a href="">网上营业厅 &gt;</a></li>\n' +
                    '                <li><a href="">配件选购中心 &gt;</a></li>\n' +
                    '                <li><a href="">企业购 &gt;</a></li>\n' +
                    '                <li><a href="">以旧换新 &gt;</a></li>\n' +
                    '            </ul>\n' +
                    '        </div>\n' +
                    '        <div class="nav_box">\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">手机通讯 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">手机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">对讲机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">以旧换新</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机维修</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">运营商 &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">合约机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">选号码</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">固化宽带</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">办套餐</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">充话费/流量</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">中国电信</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">中国移动</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">中国联通</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">京东通信</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">170选号</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">手机配件 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">手机壳</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">贴膜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机存储卡</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">数据线</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">充电器</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">创意配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机饰品</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机电池</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">苹果周边</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">移动电源</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">蓝牙耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">手机支架</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">车载配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">拍照配件</a></li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">摄影摄像 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">数码相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">单电/微单相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">单反相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">拍立得</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">运动相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">摄像机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">镜头</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">户外器材</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">影棚器材</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">冲印服务</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">数码相框</a></li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">数码配件 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">存储卡</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">三脚架/云台</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">相机包</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">滤镜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">闪光灯/手柄</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">相机清洁/贴膜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">机身附件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">镜头附件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">读卡器</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">支架</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">电池/充电器</a></li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">影音娱乐 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">耳机/耳麦</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">音箱/音响</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">智能音箱</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">便携/无线音箱</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">收音机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">麦克风</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">MP3/MP4</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">专业音频</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">智能手环</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">贴膜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机存储卡</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">数据线</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">充电器</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">创意配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机饰品</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机电池</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">苹果周边</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">移动电源</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">蓝牙耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">手机支架</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">车载配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">拍照配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">手机通讯 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">手机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">对讲机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">以旧换新</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机维修</a></li>\n' +
                    '            </ul>\n' +
                    '        </div>\n' +
                    '        <div class="zi2_image">\n' +
                    '            <span><img src="images/im.jpg" alt=""></span>\n' +
                    '        </div>';
            }else if(this==lis[2]){
                div.innerHTML='        <div class="nav">\n' +
                    '            <ul>\n' +
                    '                <li><a href="">发的答案 &gt;</a></li>\n' +
                    '                <li><a href="">包包拆分 &gt;</a></li>\n' +
                    '                <li><a href="">表表VB &gt;</a></li>\n' +
                    '                <li><a href="">阴影 &gt;</a></li>\n' +
                    '                <li><a href="">擦擦擦 &gt;</a></li>\n' +
                    '                <li><a href="">偶偶 &gt;</a></li>\n' +
                    '            </ul>\n' +
                    '        </div>\n' +
                    '        <div class="nav_box">\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">手机通讯 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">电放费</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">巴巴爸爸</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">那你弄吧</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">共同体</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">手机配件 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">手机壳</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">贴膜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机存储卡</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">数据线</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">充电器</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">创意配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机饰品</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机电池</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">苹果周边</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">移动电源</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">蓝牙耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">手机支架</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">车载配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">拍照配件</a></li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">运营商 &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">合约机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">选号码</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">固化宽带</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">办套餐</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">充话费/流量</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">中国电信</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">中国移动</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">中国联通</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">京东通信</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">170选号</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">摄影摄像 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">数码相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">单电/微单相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">单反相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">拍立得</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">运动相机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">摄像机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">镜头</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">户外器材</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">影棚器材</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">冲印服务</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">数码相框</a></li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">数码配件 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">存储卡</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">三脚架/云台</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">相机包</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">滤镜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">闪光灯/手柄</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">相机清洁/贴膜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">机身附件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">镜头附件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">读卡器</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">支架</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">影音娱乐 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">耳机/耳麦</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">音箱/音响</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">智能音箱</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">便携/无线音箱</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">收音机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">麦克风</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">MP3/MP4</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">专业音频</a></li>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">智能手环</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">贴膜</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机存储卡</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">数据线</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">充电器</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">创意配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机饰品</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机电池</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">苹果周边</a></li>\n' +
                    '                <div class="ov">\n' +
                    '                    <li>|&nbsp;&nbsp;<a href="">移动电源</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">蓝牙耳机</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">手机支架</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">车载配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                    <li><a href="">拍照配件</a>&nbsp;&nbsp;|</li>\n' +
                    '                </div>\n' +
                    '            </ul>\n' +
                    '            <hr>\n' +
                    '            <ul class="nav_box1">\n' +
                    '                <li class="b"><a href="">手机通讯 &gt;</a></li>\n' +
                    '                <li>|&nbsp;&nbsp;<a href="">手机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">对讲机</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">以旧换新</a>&nbsp;&nbsp;|</li>\n' +
                    '                <li><a href="">手机维修</a></li>\n' +
                    '            </ul>\n' +
                    '        </div>\n' +
                    '        <div class="zi2_image">\n' +
                    '            <span><img src="images/im3.jpg" alt=""></span>\n' +
                    '        </div>';
            }else {
                div.innerHTML='<h1>太多了，不想写了！</h1>' +
                    '<p><img src="images/el.jpg" alt="" height="400px" style="float: left"></p>' +
                    '<span><img src="images/el.gif" alt="" height="400px"></span>';
            }








        }
        lis[j].onmouseout = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = "";
            }
            div.className = "yincang";
        }

    }
    div.onmouseover=function () {
        div.className = "xianshi";
        a.className="a";
    }
    div.onmouseout=function () {
        div.className = "yincang";
        a.className="";
    }
}




var a=document.querySelectorAll("#a .c");
var a1=document.getElementById("a1");
a[0].className="s";
a1.innerHTML='<p>11.11狂欢再续24小时</p>\n' +
    '        <p>居家好物跨万店3件7折</p>\n' +
    '        <p>全球购好物满299减150</p>\n' +
    '        <p>红包雨至高1111元</p>';
a[1].onmouseover=function () {
    a[0].className="c";
    a[1].className="s";
    a1.innerHTML='<p>京东物流推出配送员统一外...</p>\n' +
        '        <p>天府大件运营中心开仓公告</p>\n' +
        '        <p>京东大件物流“送装一体” ...</p>\n' +
        '        <p>京东扶贫频道正式上线运营</p>';
}
a[0].onmouseover=function () {
    a[1].className="c";
    a[0].className="s";
    a1.innerHTML='<p>11.11狂欢再续24小时</p>\n' +
        '        <p>居家好物跨万店3件7折</p>\n' +
        '        <p>全球购好物满299减150</p>\n' +
        '        <p>红包雨至高1111元</p>';
}

var shou=document.querySelector(".tu .y");
var d=document.querySelector(".tu");
shou.onclick=function () {
    d.className="yi";
}



function loadfaxian() {
    var lunbo=document.getElementById("faxian_lunbo")
    var div=lunbo.getElementsByTagName("div");
    var li=lunbo.getElementsByTagName("li");
    var i=0;
    var len=div.length;
    var time=setInterval(task,3000);
    function task() {
        if (i<len-1){
            div[i].className="";
            li[i].className="";
            i++;
            div[i].className="cur";
            li[i].className="cur";
        }else {
            div[i].className="";
            li[i].className="";
            i=0;
            div[i].className="cur";
            li[i].className="cur";
        }
    }
    lunbo.onmouseover=function () {
        clearInterval(time);
    }
    lunbo.onmouseout=function () {
        time=setInterval(task,3000);
    }
    for (var j=0;j<len;j++){
        li[j].onmouseover=function () {
            for (var c=0;c<len;c++){
                if (this==li[c]){
                    if (i!=c){
                        div[i].className="";
                        li[i].className="";
                        i=c;
                        div[i].className="cur";
                        li[i].className="cur";
                    }
                    break;
                }
            }
        }
    }
}



var as=document.getElementById("faxian_right").querySelectorAll(".a a");
var table=document.getElementById("faxian_right").querySelector(".b table");
for(var s=0;s<as.length;s++){

    as[s].onmouseover=function () {
        for(var s1=0;s1<as.length;s1++){
            as[s1].className="";
            this.className="cur";
            if(as[0]==this){
                table.innerHTML='<tr>\n' +
                    '                                <td><img src="images/right.jpg" alt=""><p>【牛栏山】百年牛栏山二锅头陈酿</p></td>\n' +
                    '                                <td><img src="images/right.jpg" alt=""><p>【牛栏山】百年牛栏山二锅头陈酿</p></td>\n' +
                    '                                <td><img src="images/right.jpg" alt=""><p>【牛栏山】百年牛栏山二锅头陈酿</p></td>\n' +
                    '                            </tr>\n' +
                    '                            <tr>\n' +
                    '                                <td><img src="images/right.jpg" alt=""><p>【牛栏山】百年牛栏山二锅头陈酿</p></td>\n' +
                    '                                <td><img src="images/right.jpg" alt=""><p>【牛栏山】百年牛栏山二锅头陈酿</p></td>\n' +
                    '                                <td><img src="images/right.jpg" alt=""><p>【牛栏山】百年牛栏山二锅头陈酿</p></td>\n' +
                    '                            </tr>';
            }else if(as[1]==this){
                table.innerHTML=' <tr>\n' +
                    '                                <td><img src="images/right1.jpg" alt=""><p>小米Max2 全网通4GB+32GB 金色</p></td>\n' +
                    '                                <td><img src="images/right1.jpg" alt=""><p>小米Max2 全网通4GB+32GB 金色</p></td>\n' +
                    '                                <td><img src="images/right1.jpg" alt=""><p>小米Max2 全网通4GB+32GB 金色</p></td>\n' +
                    '                            </tr>\n' +
                    '                            <tr>\n' +
                    '                                <td><img src="images/right1.jpg" alt=""><p>小米Max2 全网通4GB+32GB 金色</p></td>\n' +
                    '                                <td><img src="images/right1.jpg" alt=""><p>小米Max2 全网通4GB+32GB 金色</p></td>\n' +
                    '                                <td><img src="images/right1.jpg" alt=""><p>小米Max2 全网通4GB+32GB 金色</p></td>\n' +
                    '                            </tr>';
            }else if(as[2]==this){
                table.innerHTML=' <tr>\n' +
                    '                                <td><img src="images/right2.jpg" alt=""><p>花花公子贵宾 羽绒马甲男2017</p></td>\n' +
                    '                                <td><img src="images/right2.jpg" alt=""><p>花花公子贵宾 羽绒马甲男2017</p></td>\n' +
                    '                                <td><img src="images/right2.jpg" alt=""><p>花花公子贵宾 羽绒马甲男2017</p></td>\n' +
                    '                            </tr>\n' +
                    '                            <tr>\n' +
                    '                                <td><img src="images/right2.jpg" alt=""><p>花花公子贵宾 羽绒马甲男2017</p></td>\n' +
                    '                                <td><img src="images/right2.jpg" alt=""><p>花花公子贵宾 羽绒马甲男2017</p></td>\n' +
                    '                                <td><img src="images/right2.jpg" alt=""><p>花花公子贵宾 羽绒马甲男2017</p></td>\n' +
                    '                            </tr>';
            }else if(as[3]==this){
                table.innerHTML=' <tr>\n' +
                    '                                <td><img src="images/right3.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right3.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right3.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                            </tr>\n' +
                    '                            <tr>\n' +
                    '                                <td><img src="images/right3.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right3.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right3.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                            </tr>';
            }else {
                table.innerHTML=' <tr>\n' +
                    '                                <td><img src="images/right4.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right4.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right4.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                            </tr>\n' +
                    '                            <tr>\n' +
                    '                                <td><img src="images/right4.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right4.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                                <td><img src="images/right4.jpg" alt=""><p>百雀羚 男士净衡保湿畅透水凝霜</p></td>\n' +
                    '                            </tr>';
            }

        }

    }

}


function maodian() {
    var mao_a=document.getElementById("maodian1").querySelectorAll("a");

    var mao=document.getElementById("maodian1").querySelectorAll(".span");
    var mao2_a=document.getElementById("maodian2").querySelectorAll("a");
    var mao2=document.getElementById("maodian2").querySelectorAll(".span");
    for(var i=0;i<mao_a.length;i++){
        mao_a[i].onmouseover=function () {
            if (this==mao_a[0]){
            mao[0].innerHTML="京东会员";
            }else if(this==mao_a[1]){
            mao[1].innerHTML="购物车";
            }else if(this==mao_a[2]){
                mao[2].innerHTML="我的关注";
            }else if(this==mao_a[3]){
                mao[3].innerHTML="我的足迹";
            }else if(this==mao_a[4]){
                mao[4].innerHTML="我的消息";
            }else{
                mao[5].innerHTML="咨询JIMI";
            }
        }
        mao_a[i].onmouseout=function () {
            for(var i=0;i<mao.length;i++){
                mao[i].innerHTML="";
            }
        }
        mao2_a[0].onmouseover=function () {
            mao2[0].innerHTML="顶部";
        }
        mao2_a[1].onmouseover=function () {
            mao2[1].innerHTML="反馈";
        }
        mao2_a[0].onmouseout=function () {
            mao2[0].innerHTML="";
        }
        mao2_a[1].onmouseout=function () {
            mao2[1].innerHTML="";
        }
        }

}


function lilunbo() {
    var la=document.getElementById("la");
    var li=la.getElementsByTagName("li");
    var span=document.getElementById("yuandian").getElementsByTagName("span");
    var len=li.length;
    var i=0;
    var time=setInterval(task,3000);
    function task() {
        if(i<len-1){
            li[i].className="";
            span[i].className="";
            i++;
            li[i].className="cur";
            span[i].className="cur";
        }else {
            li[i].className="";
            span[i].className="";
            i=0;
            li[i].className="cur";
            span[i].className="cur";
        }
    }
la.onmouseover=function () {
    clearInterval(time);
}
la.onmouseout=function () {
    time=setInterval(task,3000);
}
}


var block=document.getElementById("block_nav");
window.onscroll=function () {
    if(document.body.scrollTop>=700) {
        // block.style.display = "block";
        block.style.top="0px";
    }else {
        // block.style.display = "";
        block.style.top="-60px";
    }
}