$("#doLogin").click(function () {
    var userId = $("#loginId").val();
    $("#loginjoin").hide();
    $("#keepLogin").show();
    $(".userName").text(userId + "님");
    $("#beforelogin").hide();
    $("#afterlogin").show();
});

$(".clickLogout").click(function () {
    $("#loginjoin").show();
    $("#keepLogin").hide();
    $(".userName").text("");
    $("#beforelogin").show();
    $("#afterlogin").hide();
    $("#loginId").val("");
});



$(".gameStart").click(function(){
    $.when($(".gamefire").animate({"opacity": 1}, 1000)).then(
        $(".gamefire").animate({"opacity": 0.4}, 1000)
    );
});

$("#loginId").on("propertychange change keyup paste input", function(){
    $("#idLabel").addClass("getvalue");
});

$("#loginPw").on("propertychange change keyup paste input", function(){
    $("#pwLabel").addClass("getvalue");
});

$("#joinInputId").on("propertychange change keyup paste input", function(){
    $("#joinIdLabel").addClass("getvalue");
});

$("#joinInputPw").on("propertychange change keyup paste input", function(){
    $("#joinPwLabel").addClass("getvalue");
});

$("#joinInputPwCheck").on("propertychange change keyup paste input", function(){
    $("#joinPwCheckLabel").addClass("getvalue");
});

$("#joinInputPhone").on("propertychange change keyup paste input", function(){
    $("#joinPhoneLabel").addClass("getvalue");
});

$("#joinInputEmail").on("propertychange change keyup paste input", function(){
    $("#joinEmailLabel").addClass("getvalue");
});

$(".checkbox").click(function(){
    $(this).css('color', 'red');
    $(this).css('opacity', 1);
});

$("#wholeCheck").click(function(){
    $(".checkbox").css('color','red');
    $(".checkbox").css('opacity', 1);
});


$("#agreeconfirm").click(function(){
    var opacity = $("#wholeCheck").css('opacity');
    if(opacity == 1){
       $(".agreeBoxes").hide();
       $("#headerFirst").css("color", "#898989");
       $("#headerSecond").css("color", "white");
       $(".joinInfo").show();
       $(".joinInfo").css("display", "inline-block");
    }
});

$("#inputconfirm").click(function(){
    var userid= $("#joinInputId").val();
    var userpw= $("#joinInputPw").val();
    var userpwCheck= $("#joinInputPwCheck").val();
    var userphone = $("#joinInputPhone").val();
    var useremail = $("#joinInputEmail").val();
    if(userid == ""){
        alert("아이디를 입력해주세요.");
    }else if(userpw == ""){
        alert("비밀번호를 입력해주세요.");
    }else if(userpwCheck== ""){
        alert("비밀번호 획인을 입력해주세요.");
    }else if(userphone==""){
        alert("핸드폰 번호를 입력해주세요.");
    }else if(useremail==""){
        alert("이메일 주소를 입력해주세요.");
    }else if(userpw != userpwCheck){
        alert("비밀번호와 비밀번호 확인란을 일치시켜주세요.");
    }else{
        $(".joinInfo").hide();
        $(".joinsuccess").show();
        $(".joinsuccess").css("display", "inline-block");
        $("#headerSecond").css("color", "#898989");
        $("#headerThird").css("color", "white");
    }
});

$("#agreecancel").click(function(){
    $(location).attr('href', 'index.html');
});

$("#inputcancel").click(function(){
    $(location).attr('href', 'join.html');
});

$(".classsymbol").mouseenter(function(){
    $(this).animate({"margin-top": "70px"}, 900);
});

$(".classsymbol").mouseleave(function(){
    $(this).animate({"margin-top": "0px"}, 900);
});

$("#swordsman").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".sworsmanInfo").css("display", "inline-block");
});

$("#crusader").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".crusaderInfo").css("display", "inline-block");
});

$("#warrior").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".warriorInfo").css("display", "inline-block");
});

$("#ranger").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".rangerInfo").css("display", "inline-block");
});

$("#rogue").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".rogueInfo").css("display", "inline-block");
});

$("#priest").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".priestInfo").css("display", "inline-block");
});

$("#berserker").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".berserkerInfo").css("display", "inline-block");
});

$("#magician").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".magicianInfo").css("display", "inline-block");
});

$("#fighter").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".fighterInfo").css("display", "inline-block");
});

$("#summoner").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".summonerInfo").css("display", "inline-block");
});

$("#necromancer").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".necromancerInfo").css("display", "inline-block");
});

$("#magicfencer").click(function(){
    $("#classimg li").css("display", "none");
    $("#classtext li").css("display", "none");
    $(".magicfencerInfo").css("display", "inline-block");
});

$("#classInfo td").click(function(){
    $(location).attr('href', 'gameInfo.html');
});

$(".community").click(function(){
    alert("아직 준비중입니다.");
});

$(".download").click(function(){
    alert("아직 준비중입니다.");
});

$("eventPost").click(function(){
    alert("오픈 준비중 입니다.");
});