var ret = prompt(" 이름을 입력하면 메뉴 추천이 시작됩니다.", "이름");

if(ret==null){
    
}
else if(ret==""){

}
else{
    
}


document.write(ret+"님께 커피를 추천하기 위한 준비를 시작하겠습니다. 4가지 선택지 중 가장 하나를 골라주세요.");
questions = new Array(5);//n개의 질문을 하고 4가지 선택지 중 하나를 받자. qeustions를 통해서 배열을 만들고, 질문과 선택지를 한 문자열로 각 요소에 넣는다.//
questions[0] = "당신이 생각하기에 AI는 무엇인가요? 1.깡통 2.장단점 있는 기술 3.오오 알파고님!  새로운 인류의 지배자님!  4.요즘 애들이 게을러지는 원인";
questions[1] = "다음 중 당신이 가장 좋아하는 영화는? 1.인셉션  2.어벤저스:인피니티 워  3.어바웃타임  4.러브레터 ";
questions[2] = "약속에 30분이나 지각한 친구에게 당신 해줄 말은? 1.뒈져라  2.오늘 커피는 네가 사라  3.괜찮아! 다음부터는 일찍와!  4.나 어릴 때는 말이다, 약속시간에 늦는다는 건 상상도 못 했다! ";
questions[3] = "학교 체육수업에서 축구를 하게됐을 때, 당신이 맡고 싶은 포지션은? 1.골키퍼  2.공격수 3.미드필더  4.수비수 ";
questions[4] = "당신이 좋아하는 음악의 장르는? 1.힙합 2.발라드 락 3.K팝 4.재즈";

var esffre=0;                                                                                                                                                 
var hotAme=0;
var straw=0;
var latte=0;


for(i=0; i<5; i++){
   
   var ans = prompt(questions[i]);
   var reans = parseInt(ans);
    switch(reans){//switch는 상수(literal)값에 따라서 작동한다.//
        case 1: 
        esffre+1; 
        break;

        case 2: 
        hotAme+1; 
        break;

        case 3: 
        straw+1; 
        break;

        case 4: 
        latte+1; 
        break;

        default: var requestion = prompt("1, 2, 3, 4 중 하나를 입력해주십시오."+questions[i]); 
       
    }   
}

var result = "";

if(hotAme==3){
    result="뜨거운 아메리카노";
}
else if(esffre==3){
result="에스프레소";
}
else if(straw==3){
    result="딸기 프라푸치노";
}
else if(latte==3){
    result="라떼";
}
else{
    result="다시 테스트를 하는 것"
}
recomment = confirm(ret+"님에게는 "+result+"를(을) 추천해드립니다!");



