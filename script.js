const vowels = ["a","e","i","o","u"];
const consonants = ["b","c","d","f"];

// function pigLatin(text){
//   const textArray = text.toLowerCase().split(" ");
//   let result = [];
//   for(let i = 0; i < textArray.length; i++){
//     if(vowels.includes(textArray[i][0])){
//       result.push(textArray[i] +"way");
//       return result;
//     }else if(!vowels.includes(textArray[i][0])){
//       result.push(textArray[i].slice(1) + textArray[i][0] + "ay" )
//     }
//   }
//   return result;
// }

function pigLatin (text){
  const textArray = text.toLowerCase().split(" ");
  let result = [];
  debugger;
  for(let i = 0; i < textArray.length; i++){
   
    if(vowels.includes(textArray[i][0])){
      result.push(textArray[i] +"way");
      return result;
    }

    let charsInWord=Array.from (textArray[i]);
    let resultWord=[];

    for (let j=0; j<charsInWord.length; j++){
      if (!vowels.includes(charsInWord [j])){
        charsInWord.push(charsInWord [j]);
      } else  if (vowels.includes(charsInWord [j])){
        resultWord=charsInWord.slice (j);
        resultWord.push ("a", "y");
        break;
      }
    }
   
    return result.push (resultWord.join(" "));
  }
}

console.log(pigLatin("code")); 