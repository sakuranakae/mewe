function sindan(){
	var mepoint=0;
    var wepoint=0;

	if(document.quiz.a[0].checked){mepoint+=20;}
    if(document.quiz.a[1].checked){wepoint+=20;}

	if(document.quiz.b[0].checked){mepoint+=20;}
	if(document.quiz.b[1].checked){wepoint+=20;}
	
    if(document.quiz.c[0].checked){mepoint+=20;}
    if(document.quiz.c[1].checked){wepoint+=20;}
	
    if(document.quiz.d[0].checked){mepoint+=20;}
    if(document.quiz.d[1].checked){wepoint+=20;}
	

    if(document.quiz.e[0].checked){mepoint+=20;}
    if(document.quiz.e[1].checked){wepoint+=20;}

    alert("あなたはmeタイプ"+mepoint+"％で、\nweタイプ"+wepoint+"％です。");

	document.quiz.a[0].checked=true;
	document.quiz.b[0].checked=true;
	document.quiz.c[0].checked=true;
	document.quiz.d[0].checked=true;
	document.quiz.e[0].checked=true;
}