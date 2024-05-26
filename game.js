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

$(window).click(function () {
    var w2 = event.clientX;
    var w3 = event.clientY; //可見高  非所有捲軸的高
})

//    ----------------------tuku----------------------------

// --------------------載入tuku後都需再跑一遍 loadTuku();--------------------
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
    $(".tuku_down img").css("margin", "2px");
}

// --------------------載入tuku後都需再跑一遍 loadTuku();--------------------
loadTuku();

var tuku_up_index=-1;
var v="";

$(document).on("click", ".tuku_down img", function () {
    v = $(this).attr("src");
    $(".tuku_up>img").prop("src", v);
    tuku_up_index=$(this).index();  
    // console.log(tuku_up_index);
        //取得小圖index
});
var trans_src="";
$(document).on("click", ".tuku_up img", function () {
    trans_src = $(this).attr("src");

})


var arry = [];
var img_elm = "";
var flag = true; //if通行開關 ,避免連續點選造成錯誤


    $(document).on("click", "#r", function () {
    if ($(".tuku_down img").eq(5).attr("class") != "end" && flag) { //最後一張圖class不等於end
        flag = false;
        img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素     
        arry.push(img_elm);
        $(".tuku_down img").eq(0).remove();
        flag = true;
    }
})
var flag2 = true; //一進if就關 ,避免連續點選造成錯誤
$(document).on("click", "#l", function () {

    if ($(".tuku_down img").eq(0).attr("class") != "star" && flag2) { //第一張圖class不等於star
        flag = false;
        img_elm = arry.pop();
        $(".tuku_down").prepend(img_elm);// $(".tuku_down img").eq(0).css("margin","0px 3px 0px 0px");  
        flag = true;
    }
})

var bs = 0;
$(document).on("click",".tuku_up img", function () {
    if (bs == 0) {
        bs++;
        $(this).removeClass("smallScreen");
        $(this).addClass("fullScreen");

    } else {
        bs--;
        $(this).removeClass("fullscreen");
        $(this).addClass("smallScreen");
    }
});

//    ----------------------tuku----------------------------





//------------------全螢幕控制---------------------------
var c=0;
$("body").keydown(function () {
    
   
    if (bs == 1) {
        var pattID =/^img.*g$/;
        if (window.event.keyCode == 37 && pattID.test(trans_src)) {//左
            
            //------------------------------修到剩數字 
            var t_i = trans_src.indexOf('.');
            var t_jpg = trans_src.substring(t_i,t_i+4);
            var t_l = trans_src.lastIndexOf('/');
            var t_img= trans_src.substring(0,t_l+1);
            var pattID2= /\d{2}/;
           if(pattID2.test(c)){
            c = trans_src.substr(t_l+1,2);
           }else{
            c = trans_src.substr(t_l+1,1);
           }

            
           
           //------------------------------修到剩數字
           c=Number(c);
           if(c!=1 ){
                c--;
                trans_src=String(c);
                trans_src=t_img+trans_src+t_jpg;
                $(".tuku_up>img").prop("src", trans_src);
                }
            
        } 
        if (window.event.keyCode == 39 && pattID.test(trans_src)) {//右

            //------------------------------修到剩數字 
            var t_i = trans_src.indexOf('.');
            var t_jpg = trans_src.substring(t_i,t_i+4);
            var t_l = trans_src.lastIndexOf('/');
            var t_img= trans_src.substring(0,t_l+1);
            var pattID3= /\d{2}/;
           if(pattID3.test(c)){
            c = trans_src.substr(t_l+1,2);
           }else{
            c = trans_src.substr(t_l+1,1);
           }
            
            console.log(c);
           //------------------------------修到剩數字
           c=Number(c);
           if(trans_src!=$(".end").attr("src") ){
                c++;
                trans_src=String(c);
                trans_src=t_img+trans_src+t_jpg;
                $(".tuku_up>img").prop("src", trans_src);
                }

        }

    }console.log(trans_src);
})

// 左邊

$("body").keydown(function () {
    // if (bs == 0) {
        if (window.event.keyCode == 37) {
            if ($(".tuku_down img").eq(0).attr("class") != "star" && flag2) { //第一張圖class不等於star
                flag = false;
                img_elm = arry.pop();
                $(".tuku_down").prepend(img_elm);
                flag = true;
            }
        }
    // }
})

//右邊
$("body").keydown(function () {
    // if (bs == 0) {
        if (window.event.keyCode == 39) {
            if ($(".tuku_down img").eq(5).attr("class") != "end" && flag) { //最後一張圖class不等於end
                flag = false;
                img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素     
                arry.push(img_elm);
                $(".tuku_down img").eq(0).remove();
                flag = true;
            }
        }
    // }
})

//bs==0  smallScreen
//bs==1  fullScreen



// $("body").click(function(){
//     console.log(tuku_up_index);
// })
// 左邊
$("body").keydown(function () {
    // if (bs == 1) {
    //     if (window.event.keyCode == 37) {
            
    //         tuku_up_index--;
    //         // if(tuku_up_index>-1){
    //        var newSrc= $(".tuku_down img").eq(tuku_up_index).attr("src")
    //        console.log(tuku_up_index);
           
    //        console.log(newSrc);
           
    //         $("tuku_up img").attr("src",newSrc);

          
    //     }
    // }
    if ($(".fullScreen").attr("src") == $(".tuku_down img").eq(0).attr("src")) {
        if (window.event.keyCode == 37) {
            if ($(".tuku_down img").eq(0).attr("class") != "star" && flag2) { //第一張圖class不等於star
                flag = false;
                img_elm = arry.pop();
                $(".tuku_down").prepend(img_elm);
                flag = true;
            }
        }
    }
})
//右邊
$("body").keydown(function () {
    // if (bs == 1) {
    //     if (window.event.keyCode == 39) {
    //         tuku_up_index++;
    //         if(tuku_up_index>-1){
    //        var newSrc= $(".tuku_down img").eq(tuku_up_index).attr("src")
    //         $("tuku_up img").attr("src",newSrc);
            
    //       }

    //     }
    // }
    if ($(".fullScreen").attr("src") == $(".tuku_down img").eq(5).attr("src")) {
        if (window.event.keyCode == 39) {
            if ($(".tuku_down img").eq(5).attr("class") != "end" && flag) { //最後一張圖class不等於end
                flag = false;
                img_elm = $("<p>").append($(".tuku_down img").eq(0).clone()).html(); //取<img>元素     
                arry.push(img_elm);
                console.log(arry);
                $(".tuku_down img").eq(0).remove();
                flag = true;
            }
        }
    }
})

