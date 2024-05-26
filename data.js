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

