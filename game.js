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

function gener_game_btn(aobj) {
    let xmp = document.getElementById("smallFrame_xmp").innerHTML;
    xmp = xmp.replace("*inx*", aobj.inx);
    xmp = xmp.replace("*platform*", aobj.platform);
    xmp = xmp.replace("*name*", aobj.name);
    xmp = xmp.replace("*imgsrc*", aobj.imgsrc);
    xmp = xmp.replace("*imgsize*", aobj.imgsize);
    return xmp;
}
var obj = JSON.parse(list);
var lcnt ='<p style="border-bottom:2px solid gray;">遊戲搜索欄</p>';
for (let i = 0; i < obj.length; i++) {
    lcnt += gener_game_btn(obj[i]);
}
document.getElementById("L_content").innerHTML = lcnt;

var L_content = document.getElementById("L_content").innerHTML;
var R_content = document.getElementById("R_content").innerHTML;

//toTop上捲動作
$("#toTop").on("click", "img", function () {
    var speed = scrollValue;
    var set = 
        setInterval(function () {
            speed -= 17;
            console.log(speed);
            $(window).scrollTop(speed);
            if (speed <= 0) {
                clearInterval(set);
            }
        }, 1);
})
//取出現在捲軸值
var scrollValue = 0;
//顯現 #toTop
$(window).scroll(function () {
    var s = $(this).scrollTop();
    scrollValue = s;

    if (s > 700) {
        //到下面才顯現 #toTop
        $("#toTop").css("visibility", "visible");
    } else {
        $("#toTop").css("visibility", "hidden");
    }
})
 
//    ----------------------tuku----------------------------
  
$(document).on("click", ".tuku_down img", function () {
    let small_src = $(this).attr("src");
    $(".tuku_up>img").prop("src", small_src);
});

var fullScreen_src="";
$(document).on("click",".tuku_up img", function () {
    fullScreen_src = $(this).attr("src");
    if ($(this).attr("class")=="smallScreen") {
        $(this).attr("class","fullScreen");
    } else {
        $(this).attr("class","smallScreen");
    }
});


$(document).on("click", "#r", img2R)
$(document).on("click", "#l", img2L)

//    ----------------------tuku----------------------------
function loadTuku() {
    var tuku_elm = "";
    var tukuArry = [];
    var childnum = document.getElementById('downini').children.length;
    for (var i = 0; i < childnum; i++) {
        tuku_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素        
        tukuArry.push(tuku_elm);
        $(".tuku_down img").eq(0).remove();
    }
    for (var i = 0; i < 11; i++) {
        tuku_elm = tukuArry[tukuArry.length - 1]
        $(".tuku_down").prepend(tuku_elm);
        tukuArry.pop();
    }
    $(".tuku_down img").css("margin", "3px");
}
loadTuku()
var arry = [];
var img_elm = "";

function img2L() {
    //第一張圖class不等於star
    if ($(".tuku_down img").eq(0).attr("class") != "star") { 
        img_elm = arry.pop();
        $(".tuku_down").prepend(img_elm);
    }
}
function img2R() {
    //最後一張圖class不等於end
    if ($(".tuku_down img").eq(5).attr("class") != "end") { 
        //取<img>元素
        img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html();      
        arry.push(img_elm);
        $(".tuku_down img").eq(0).remove();
    }
}  
//------------------全螢幕控制---------------------------
$("body").keydown(function () {
    if (event.key == "ArrowLeft") {
        img2L();
    }
    if (event.key == "ArrowRight") {
        img2R();
    }
})

var num=0;
$("body").keydown(function () {
    if ($(".tuku_up img").attr("class")=="fullScreen") {
        //------------------------------修到剩數字 
        let t_i = fullScreen_src.indexOf('.');
        let t_jpg = fullScreen_src.substring(t_i,t_i+4);
        let t_l = fullScreen_src.lastIndexOf('/');
        let t_img= fullScreen_src.substring(0,t_l+1);
        if(/\d{2}/.test(num)){
            num = fullScreen_src.substring(t_l+1,t_l+3);
        }else{
            num = fullScreen_src.substring(t_l+1,t_l+2);
        }
        // img/mons/1.jpg
        //------------------------------修到剩數字
        num=Number(num);
        if (event.key == "ArrowLeft" && num!=1) {
           num--;
        } 
        if (event.key == "ArrowRight" && fullScreen_src!=$(".end").attr("src")) { 
           num++;
        }
        fullScreen_src = t_img + String(num) + t_jpg;
        $(".tuku_up>img").prop("src", fullScreen_src);
    }
})

//------------------頁面切換搜索---------------------------


function shuffle(arr) {
    let i,j,temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
//搜索功能
function search() {
    $("#L_content").empty();
    var keyArry =[];
    var ch = $("#search>input").val();
    for (var i = 0; i < obj.length; i++) {
        var game = String(obj[i].name);
        if (game.indexOf(ch) > -1&&ch!="") {
            keyArry.push(gener_game_btn(obj[i])) ;
        }
    } 
    shuffle(keyArry);
    $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);   
    for (var i = 0; i < keyArry.length; i++) {  
        let result = keyArry.pop();
       $("#L_content").append(result);  
    }
};

$("#search>img").click(search) 
$("#search>input").keydown(function () {
    if (event.key =="Enter"){
        search();
    } 
})

function navShowL(search_platform){
    let result = "";
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].platform == search_platform) {    
            result += gener_game_btn(obj[i]);
    }
 } 
 $("#L_content").empty();
 $("#L_content").append(`<p style="border-bottom:2px solid gray;" >遊戲搜索欄</p>`);
 $("#L_content").append(result);
}
 
$("ul>li").eq(1).click(function () {
    navShowL("Online");
})
$("ul>li").eq(2).click(function () {
    navShowL("PC");
})
$("ul>li").eq(3).click(function () {
    navShowL("PS4");
})
$("ul>li").eq(4).click(function () {  
    navShowL("NS");
})

$("ul>li").eq(0).click(function () {
    $("#L_content").empty();
    $("#L_content").append(L_content);
    $("#R_content").empty();
    $("#R_content").append(R_content);
})

