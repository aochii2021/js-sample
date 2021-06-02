// console.log('Hello World! from hello.js');

/*
var y=80;

if(y>=90){
  console.log('A');
}
else if(y>=80){
  console.log('B');
}
else if(y>=60){
  console.log('C');
}
else{
  console.log('D');
}
*/

/*
var n=2;
switch(n){
  case 1:
    console.log('数値は1です');
    break;
  case 2:
    console.log('数値は2です');
    break;
  case 3:
    console.log('数値は3です');
    break;
  default:
    console.log('範囲外です');
    break;
}
*/


// 演習　テーマパークの入場料計算
/*
var age=4;

if (age >= 12){
  console.log('5,000円');
}
else if (6 <= age && age < 12){
  console.log('2,500円');
}
else{
  console.log('1,000円');
}
*/

// 演習　繰り返し処理
/*
var sum = 0;
for (var i=1; i<=100; i++){
  if(i%2==0){
    sum += i
  }
}

console.log(sum);
*/

// 演習 配列を使ったテストの点数の集計
var scores = [100, 90, 80, 70, 60];
var sum = 0;

var sc_length = scores.length;
for(var i = 0; i<sc_length; i++){
  sum+=scores[i];
}

console.log(sum/sc_length);