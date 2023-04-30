var list ='[' +
    '{"inx":"0" ,"platform":"Online", "name":"魔獸世界：決戰艾澤拉斯" , "imgsrc":"wow.png", "imgsize":"120x120"},' +
    '{"inx":"1" ,"platform":"PC",     "name":"帝國：全軍破敵" ,        "imgsrc":"etw.jpg", "imgsize":"100x130"},' +
    '{"inx":"2" ,"platform":"PC",    "name":"刺客教條 2" ,             "imgsrc":"ac2.jpg", "imgsize":"100x130"},' +
    '{"inx":"3" ,"platform":"PC",    "name":"全軍破敵：三國" ,         "imgsrc":"ttw.jpg", "imgsize":"100x130"},' +
    '{"inx":"4" ,"platform":"PS4",    "name":"惡靈古堡 2 重製版" ,      "imgsrc":"bio2.png", "imgsize":"100x130"},' +
    '{"inx":"5" ,"platform":"Online", "name":"暗黑破壞神 3：奪魂之鐮" , "imgsrc":"d3.png", "imgsize":"120x120"},' +
    '{"inx":"6" ,"platform":"PS4",    "name":"惡魔獵人 5" ,            "imgsrc":"dmc5.jpg", "imgsize":"100x130"},' +
    '{"inx":"7" ,"platform":"PS4",    "name":"漫威蜘蛛人" ,            "imgsrc":"spm.png",  "imgsize":"100x130"},' +
    '{"inx":"8" ,"platform":"NS",    "name":"勇者鬥惡龍 XI S 尋覓逝去的時光 – Definitive Edition" ,"imgsrc":"dq.png", "imgsize":"100x130"},' +
    '{"inx":"9","platform":"PS4",    "name":"魔物獵人 世界" ,         "imgsrc":"mons.png","imgsize":"100x130" },'+
    '{"inx":"10","platform":"PC",    "name":"巫師 3：狂獵" ,          "imgsrc":"witch.jpg","imgsize":"100x130" },'+
    '{"inx":"11","platform":"NS",    "name":"寶可夢 劍" ,             "imgsrc":"poke.png","imgsize":"100x130" },'+
    '{"inx":"12","platform":"NS",    "name":"薩爾達傳說 曠野之息" ,    "imgsrc":"zelda.png","imgsize":"100x130" },'+
    '{"inx":"13","platform":"Online", "name":"佩里亞編年史" ,          "imgsrc":"peria.jpg","imgsize":"120x120" },'+
    

    '{"inx":"14" ,"platform":"NS",     "name":"哆啦 A 夢 牧場物語" ,    "imgsrc":"dora.png", "imgsize":"100x130"}]';
    function shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };


var obj = JSON.parse(list);

$("#search>img").click(function () {
    $("#L_content").empty();
    var siArry =[];
    // for (var i = 0; i < obj.length; i++) {
    //     siArry.push(i);
        
    // }
   
    
   
   
    var result = "";
    var result2 = "";
    var ch = $("#search>input").val();
    for (var i = 0; i < obj.length; i++) {
        console.log(ch);
        
        var game = String(obj[i].name);
        console.log(game.indexOf(ch));
        if (game.indexOf(ch) > -1&&ch!="") { //&& ch!=""
// result+=
siArry.push(`<table class="smallFrame">
<tr>
    <td>
        <img id="${obj[i].inx}" class="img_${obj[i].imgsize}" src="img/${obj[i].imgsrc}" alt="">
    </td>
    <td><span>${obj[i].platform}</span>&ensp;${obj[i].name}</td>
</tr>
</table>`) ;
 
        }
    } 
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);   
    shuffle(siArry);
    var len = siArry.length;
    for (var i = 0; i < len; i++) {    
        result=siArry.pop();
       $("#L_content").append(result);  
    }
    // console.log($("#L_content").html());
})
$("body").keydown(function () {
    if (window.event.keyCode ==13){
        $("#L_content").empty();
    
        var result = "";
        var result2 = "";
        var ch = $("#search>input").val();
        for (var i = 0; i < obj.length; i++) {
            var c = 0;
            var game = String(obj[i].name);
            if (game.indexOf(ch) > -1&& ch!="") { //&& ch!=""
             result += `<table class="smallFrame">
             <tr>
                 <td>
                     <img id="${obj[i].inx}" class="img_${obj[i].imgsize}" src="img/${obj[i].imgsrc}" alt="">
                 </td>
                 <td><span>${obj[i].platform}</span>&ensp;${obj[i].name}</td>
             </tr>
         </table>`
            }
        }
        $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);
        $("#L_content").append(result);
        console.log(result);
    }
})



function navShowL(platform){
   
    
    var result = "";
    var navch=platform;
    var c = 0;
    for (var i = 0; i < obj.length; i++) {
        var game = String(obj[i].platform);
        if (game.indexOf(navch) > -1 ) { //&& ch!=""   
         result += `<table class="smallFrame">
     <tr>
         <td>
             <img id="${obj[i].inx}" class="img_${obj[i].imgsize}" src="img/${obj[i].imgsrc}" alt="">
         </td>
         <td><span>${obj[i].platform}</span>&ensp;${obj[i].name}</td>
     </tr>
 </table>`
     
    }
 } 
 
 $("#L_content").append(result);
}


function navShowR(platform){
 var R_cnt = `  ` ;
    $("#R_content").empty();
    $("#R_content").append(cnt);
}


$("ul>li").eq(1).click(function () {
    $("#L_content").empty();
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

    navShowL("Online");
})

$("ul>li").eq(2).click(function () {
    $("#L_content").empty();
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

    navShowL("PC");
    // navShowR("PC");
})


$("ul>li").eq(3).click(function () {
    $("#L_content").empty();
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

    navShowL("PS4");
    // navShowR("PS4");
})

$("ul>li").eq(4).click(function () {  
    $("#L_content").empty();
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);

    navShowL("NS");
    // navShowR("NS");
})


$("ul>li").eq(0).click(function () {
    
    //首頁L-------------------------------------------------------
    // var hL =` `;
        
        $("#L_content").empty();
        $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);
        // $("#L_content").append(hL);

        navShowL("PC");
        navShowL("PS4");
        navShowL("Online");
        navShowL("NS");
   
     
//首頁R-------------------------------------------------------
    var hR=`  <table id="linkTable" class="news" style="width: 100%;">
    <tr>
        <td colspan="4">
            <p style="color:rgb(255, 138, 5);
        border-bottom:2px solid gray ;
        font-size:20px; "> 最新消息 </p>
        </td>
    </tr>
    <tr>
        <td>
            <a href="link/ps4.html"><img style="width: 100%;" src="img/ps4/1.jpg" alt=""></a></td>
        <td>
            <a href="link/xb.html"><img style="width: 100%;" src="img/xb/xb1.jpg " alt=""></a></td>
        <td>
            <a href="link/pirate.html"><img style="width: 100%;" src=" img/pirate/pirate1.jpg" alt=""></a></td>
        <td>
            <a href="link/gta5.html"><img style="width: 100%;" src="img/gta5/gta5.jpg " alt=""></a>
        </td>


    </tr>
    <tr>
        <td>
            <p id="ps4" style="font-size: 15px;"><a href="link/ps4.html"><span style="color: grey;">《魔物獵人
                        世界：Iceborne》將推出

                        PS4 主機上蓋、控制器及穿戴式揚聲器等相關產品</span></a></p>

        </td>
        <td>
            <p style="font-size: 15px;"><a href="link/xb.html"><span style="color: grey;">《戰爭機器 5》將推出特別款式
                        Xbox One X 主機同捆組 伴隨凱特揭露以血束縛的真相 </span></a></p>
        </td>
        <td>
            <p style="font-size: 15px;"><a href="link/pirate.html"><span
                        style="color: grey;">由迪士尼正版授權，西山居遊戲推出的《神鬼奇航 榮耀之海 》（iOS / Android）日前於 ChinaJoy 2019
                        中亮相。 </span></a></p>
        </td>
        <td>
            <p style="font-size: 15px;"><a href="link/gta5.html"><span style="color: grey;"> 《俠盜獵車手
                        5》線上模式「鑽石賭場度假村」發放開幕參與者獎勵 </span></a></p>
        </td>
    </tr>
</table>
<br>
<!-- ------- ---------小欄位------------------------------------------------- -->

<div style="border-bottom:3px dotted gray ; 
        padding-bottom: 30px;">
    <table id="linkTable2">
        <tr>
            <td>
                <a href="link/dxi.html" ><img style="height: 150px;
            width:150px;" src="img/dxi/1.jpg" alt=""></a>
            </td>
            <td>
                <h5 style="color:rgb(255, 115, 0);">
                    <a href="link/dxi.html">
                        《勇者鬥惡龍XI S》體驗版近期公開！《魔導少年》真島浩設計服裝同步發表
                    </a>
                </h5>
                <p style="color:rgb(115, 126, 126);">
                    日本 Square Enix 預定於 2019 年 9 月 27日在 Nintendo Switch 主機上推出，將之前在 PS4／N3DS 等平台推出的人氣
                    RPG《DQXI》重新加強移植的《勇者鬥惡龍XI S 尋覓逝去的時光 Definitive Edition》（ドラゴンクエストXI
                    過ぎ去りし時を求めてS），宣布將於近期推出遊戲體驗版讓玩家們搶先試玩！本作為一款將之前於 PS4／N3DS 主機上推出的《DQXI》給重新移植到 Switch
                    主機上重新推出，並追加角色語...</p>
            </td>
        </tr>
    </table>
</div>
<br>
<div style="border-bottom:3px dotted gray ; 
        padding-bottom: 30px;">
    <table id="linkTable2">
        <tr>
            <td>
                <a href="link/zinyu.html" ><img style="height: 150px;
            width:150px;" src="img/zinyu/2.jpg" alt=""></a>
            </td>
            <td>
                <h5 style="color:rgb(255, 115, 0);">
                    <a href="link/zinyu.html">
                        【評測】與其奔波勞碌廝殺拚命，不如回《神鵰俠侶2》做比翼雙飛
                    </a>
                </h5>
                <p style="color:rgb(115, 126, 126);">

                    由中國完美時空出品的重大IP製作《神鵰俠侶2》，歷經近一年的封測與調校，於7月底正式開啟內地全平台公測。
                    細緻畫質任君選擇與之前版本不同的，主要在於畫面細膩度與3D視角的自由移動。目前大多數的手遊雖然已經可以自由切換 ...</p>
            </td>
        </tr>
    </table>
</div>
<br>
<div style="border-bottom:3px dotted gray ; 
        padding-bottom: 30px;">
    <table id="linkTable2">
        <tr>
            <td>
                <a href="link/bee.html" ><img style="height: 150px;
            width:150px;" src=" img/bee.jpg" alt=""></a>
            </td>
            <td>
                <h5 style="color:rgb(255, 115, 0);">
                    <a href="link/bee.html">
                        人氣PC圖像益智猜謎問答手機移植版《Koongya Catch
                        Mind》8月8日韓國雙平台同步推出
                    </a>
                </h5>

                <p style="color:rgb(115, 126, 126);">

                    韓國 Netmarble（網石遊戲）預定於 2019 年在韓國手機平台上推出的圖像益智猜謎問答遊戲《Koongya Catch Mind》（쿵야 캐치마인드），正式宣布將決定於
                    8 月 8 日起在韓國 App Store／Google Play 推出上架！本作為一款將 200....</p>
            </td>
        </tr>
    </table>
</div>
<br>
<div style="border-bottom:3px dotted gray ; 
        padding-bottom: 30px;">
    <table id="linkTable2">
        <tr>
            <td>
                <a href="link/cod.html" ><img style="height: 150px;
            width:150px;" src="img/cod/1.jpg" alt=""></a>
            </td>
            <td>
                <h5 style="color:rgb(255, 115, 0);"> <a
                        href="link/cod.html">《決勝時刻：現代戰爭》多人對戰宣傳預告曝光！跨平台連線公測日期同步公布</a></h5>
                <p style="color:rgb(115, 126, 126);">

                    由 Infinity Ward 所開發的《決勝時刻：現代戰爭》在今年 5 月首次曝光後便獲得了不小的關注，而隨著正式的發售日期已確立為 10 月 25
                    日後，更是讓不少系列粉絲更為期待。而官方近期也釋出了新的遊戲展示預告，讓玩家一窺該作的多...</p>
            </td>
        </tr>
    </table>
</div>
<br>
<div style="border-bottom:3px dotted gray ; 
padding-bottom: 30px;">
    <table id="linkTable2">
        <tr>
            <td>
                <a href="link/wc3.html" ><img style="height: 150px;
width:150px;" src="img/wc3/wc3.jpg" alt=""></a>
            </td>
            <td>
                <h5 style="color:rgb(255, 115, 0);">
                    <a href="link/wc3.html">
                        《魔獸爭霸 3》重製版新資訊曝光！索爾、泰蘭妲及多個單位高畫質遊戲模組亮相
                    </a>
                </h5>
                <p style="color:rgb(115, 126, 126);">《魔獸爭霸 3》重製版在 2018 年的 Blizzcon
                    上曝光後，不少死忠玩家便都在等待該款作品再次以高品質的重製再次登場，不過官方至今依然沒有給出明確的上市日期，僅表示遊戲預計於今年正式登場，想必是讓不少人等的相當痛苦吧？...
                </p>
            </td>
        </tr>
    </table>
</div>
<br>
<div style="border-bottom:3px dotted gray ; 
padding-bottom: 30px;">
    <table id="linkTable2">
        <tr>
            <td>
                <a href="link/cadin.html" ><img style="height: 150px;
width:150px;" src="img/cadin/2.jpg" alt=""></a>
            </td>
            <td>
                <h5 style="color:rgb(255, 115, 0);">
                    <a href="link/cadin.html">
                        《跑跑卡丁車》世界爭霸賽國家代表決賽 4名國家代表將赴韓爭奪世界冠軍
                    </a>
                </h5>
                <p style="color:rgb(115, 126, 126);">
                    遊戲橘子今年首度舉辦的《跑跑卡丁車》世界爭霸賽，於昨（4）日在世貿漫畫博覽會現場舉行
                    2019《跑跑卡丁車》世界爭霸賽國家代表最終戰，來自各方實力強勁的代表隊在經過一連串精采絕倫的賽事後，最終由「爆哥」、「睏平」...</p>
            </td>
        </tr>
    </table>
</div>
<br>


<div style="background-color: rgb(254, 255, 246);
overflow: hidden;
width:10px;
height:30px;">
    <a href="" ><img style="visibility: hidden; " id="r" src=" " alt=""></a>

    <div style="visibility: hidden; " class="tuku_up">
        <a href="" ><img class="smallScreen" src=" " alt=""></a>
    </div>
    <a href="" ><img style="visibility: hidden; " id="l" src=" " alt=""></a>
    <div style="visibility: hidden; " id="downini" class="tuku_down">
        <a href="" ><img class="star" src=" " alt=""></a>
        <a href="" ><img class="end" src=" " alt=""></a>
    </div>

    <a href="" ><img style="visibility: hidden; " id="r" src=" " alt=""></a>
   `;

     
    $("#R_content").empty();
    $("#R_content").append(hR);
})

