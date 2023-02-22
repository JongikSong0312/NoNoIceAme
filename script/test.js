var ret = prompt(" 이름을 입력하면 메뉴 추천이 시작됩니다.", "이름");

if(ret==null){
    
}
else if(ret==""){

}
else{
    
}


document.write(ret+"님께 커피를 추천하기 위한 준비를 시작하겠습니다. 4가지 선택지 중 가장 하나를 골라주세요.");
questions = new Array(4);//n개의 질문을 하고 4가지 선택지 중 하나를 받자. qeustions를 통해서 배열을 만들고, 질문과 선택지를 한 문자열로 각 요소에 넣는다.//
questions[0] = "당신이 생각하기에 AI는 무엇인가요? 1.깡통 2.장단점 있는 기술 3.오오 알파고님!  새로운 인류의 지배자님!  4.요즘 애들이 게을러지는 원인";
questions[1] = "다음 중 당신이 가장 좋아하는 영화는? 1.인셉션  2.어벤저스:인피니티 워  3.어바웃타임  4.러브레터 ";
questions[2] = "약속에 30분이나 지각한 친구에게 당신 해줄 말은? 1.뒈져라  2.오늘 커피는 네가 사라  3.괜찮아! 다음부터는 일찍와!  4.나 어릴 때는 말이다, 약속시간에 늦는다는 건 상상도 못 했다! ";
questions[3] = "학교 체육수업에서 축구를 하게됐을 때, 당신이 맡고 싶은 포지션은? 1.수비수  2.공격수  3.골키퍼  4.미드필더 ";

menu = [0, 0, 0, 0];//선택지들의 값을 배열에 대입하여 비교하자//
cold = menu[0];//1번 선택지들//
bitter = menu[1];//2번 선택지들//
sweet = menu[2];//3번 선택지들//
latte = menu[3];//4번 선택지들//

for(i=0; i<4; i++){

   var ans = prompt(questions[i]);//팝업창을 띄우고 답을 얻기 위해서 document.write로 선택지를 표시하는 것은 포기한다//
    switch(ans){
        case "1": cold+1; break;
        case "2": bitter+1; break;
        case "3": sweet+1; break;
        case "4": latte+1; break;
        default: var reans = prompt("1, 2, 3, 4 중 하나를 입력해주십시오."+questions[i]); 
       
    }     

}

best = cold;
for (i=0; i<4; i++){ //가장 큰 값을 가지는 menu를 찾기위한 알고리즘. //
 if(best<=menu[i]){
    best = menu[i];
    this.best = best;
 }
 else{
    this.best = best;
   
    }
    
    
}

switch(best){
    case 
}
result = confirm(ret+"님께는"+best+"를 추천해드립니다!");



