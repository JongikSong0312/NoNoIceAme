var ret = prompt(" 이름을 입력하면 메뉴 추천이 시작됩니다.", "이름");

if(ret==null){
    
}
else if(null==""){

}
else{
    
}


document.write(ret+"님께 커피를 추천하기 위한 준비를 시작하겠습니다. 4가지 선택지 중 가장 하나를 골라주세요.");
questions = new Array(4);//n개의 질문을 하고 4가지 선택지 중 하나를 받자. qeustions를 통해서 배열을 만들고, 질문과 선택지를 한 문자열로 각 요소에 넣는다.//
questions[0] = "당신이 생각하기에 AI는 무엇인가요? 1.깡통 2.장단점 있는 기술 3.오오 알파고님! 새로운 인류의 지배자님! 4.요즘 애들이 게을러지는 원인";
questions[1] = "다음 중 당신이 가장 좋아하는 영화는? 1.인셉션 2.어벤저스:인피니티 워 3.어바웃타임 4.러브레터";
questions[2] = "약속에 30분이나 지각한 친구에게 당신 해줄 말은? 1.뒈져라 2.오늘 커피는 네가 사라 3.괜찮아! 다음부터는 일찍와! 4.나 어릴 때는 말이야...";
questions[3] = "학교 체육수업에서 축구를 하게됐을 때, 당신이 맡고 싶은 포지션은? 1.수비수 2.공격수 3.골키퍼 4.미드필더";

cold = 0;//1번 선택지들//
bitter = 0;//2번 선택지들//
sweet = 0;//3번 선택지들//
latte =0;//4번 선택지들//

for(i=0; i<length.questions; i++){
    ask = prompt(questions[i]);
    switch(ask){
        case "1":
            cold+1;
            break;
        case "2": 
            bitter+1;
            break;
        case "3":
            sweet+1;
            break;
        case "4":
            latte+1;
            break;
         default: 
          

    }
}

if(cold>0){
    document.write("추천메뉴는 아이스아메리카노입니다.")
}