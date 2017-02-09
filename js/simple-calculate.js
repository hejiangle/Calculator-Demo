var result = "";
//    console.log("aaa");

function dot(id){
//      console.log("b");
  if(isNaN(id)){
//        console.log('d');
    if(result == ""){
      alert("非法输入！");
      return;
    }
    if(result != ""){
//          console.log('e');
      if(isNaN(result.charAt(result.length-1))){
        alert("非法输入！");
        return;
      }else{
        result += document.getElementById(id).value;
        document.getElementById('result').value = result;
        return;
      }
    }
  }else{
//        console.log('c');
    result += document.getElementById(id).value;
    document.getElementById('result').value = result;
    return;
  }
}

// function calculate(){
//   var symbol = (function (){
//     if(result.match(/[+]/) != null){
//       return '+';
//     }
//     if(result.match(/[-]/) != null){
//       return '-';
//     }
//     if(result.match(/[*]/) != null){
//       return '*';
//     }
//     if(result.match(/[\/]/) != null){
//       return '/';
//     }
//   })();
//   var nums = result.split(/[*+-/]/);
//   var num1 = parseFloat(nums[0]);
//   var num2 = parseFloat(nums[1]);
//   switch(symbol){
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//   }
//   document.getElementById('result').value = result;
//   result = "";
//   return;
// }

function eva(){
  document.getElementById('result').value = eval(document.getElementById('result').value);
  result = document.getElementById('result').value;
  return;
}

function clean(){
  document.getElementById('result').value = '';
  result = '';
  return;
}
