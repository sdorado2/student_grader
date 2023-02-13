let letterGrade = Math.floor(Math.random()*100);

if (letterGrade >= 90){
  console.log(letterGrade,"Your letter grade is A.");
}
else if (letterGrade >=  80 && letterGrade <90){
  console.log(letterGrade,'Your letter grade is B.');
}
else if (letterGrade >=70 && letterGrade<80){
  console.log(letterGrade,'Your letter grade is C.');
}
else if(letterGrade >=55 && letterGrade <70){
  console.log(letterGrade,'Your letter grade is D.')
}
else{
  console.log('Your letter grade is F.');
}