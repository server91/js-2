  var a = prompt('Введите свой возраст','');
  
  if(a <= 18){
      alert('Вы еще молоды вам надо учится');
  } else if(a <=50){
      alert('Вам нужно работать');
  }else if(a <=59){
      alert('Вам скоро на пенсию');
  }else if(a <=150){
      alert('Вы пенсионер ');
  }else{
      alert('что-то пошло не так')
  }







////////////////////////////////////////





    var b = +prompt('Укажите который сейчас у вас час');
     switch(b){
         case 1: alert ('01:00 ночи');
         break;
         case 2: alert ('02:00 ночи');
         break;
         case 3: alert ('03:00 ночи');
         break;
         case 4: alert ('04:00 утро');
         break;
         case 5: alert ('05:00 утро');
         break;
         case 6: alert ('06:00 утро');
         break;
         case 7: alert ('07:00 утро');
         break;
         case 8: alert ('08:00 утро');
         break;
         case 9: alert ('09:00 утро');
         break;
         case 10: alert ('10:00 утро');
         break;
         case 11: alert ('11:00 дня');
         break;
         case 12: alert ('12:00 дня');
         break;
         case 13: alert ('01:00 дня');
         break;
         case 14: alert ('02:00 дня');
         break;
         case 15: alert ('03:00 дня');
         break;
         case 16: alert ('04:00 дня');
         break;
         case 17: alert ('05:00 вечера');
         break;
         case 18: alert ('06:00 вечера');
         break;
         case 19: alert ('07:00 вечера');
         break;
         case 20: alert ('08:00 вечера');
         break;
         case 21: alert ('09:00 вечера');
         break;
         case 22: alert ('10:00 ночи');
         break;
         case 23: alert ('11:00 ночи');
         break;
         case 24: alert ('00:00 ночи');
         break;
     }
     
     var one = +prompt('Введите число');
     var two = +prompt('Введите число');
     var three = +prompt('Введите число');
     
     if(one < two && two < three || one > two && two > three){
         alert(two);
     }else if(one > two && one < three || one < two && one > three){
         alert(one);
     } else if(one < three && two > three || one > three && two < three){
         alert(three);
     }else{
         alert('Что-то пошло не так')
     }


