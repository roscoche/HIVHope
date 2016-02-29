var erros=0;

function checkAnswer(questao,resposta){
	var answersheet=[3,4,2,2,2,4,4,1,2,4,3,1];
	if(resposta==answersheet[questao-1]){
		nova=1+questao;
		if(questao==12) window.location.href="#success";
		else window.location.href="#q"+nova;
	}
	else {
		window.location.href="#q"+questao+"e";
		erros+=1;
		document.getElementById('numerrors').value = erros;
	}
	
	
}

function continua(questao){
	if(erros<3){
		window.location.href="#q"+questao;
	}
	else{
		window.location.href="#welcome";
		erros=0;
	}
}