let str1="act";
let str2="cat";

function areAnagrams(str1, str2){
    if (str1.length !== str2.length){
        return "not anagram";
    }
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");

    if (sortedStr1 === sortedStr2) {
      return "anagram";
    } else {
      return "not anagram";
    }
}




console.log(areAnagrams(str1,str2));




