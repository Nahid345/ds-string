// Ques- valid anagram
// An anagram is a word or phrase formed by rearranging the letters of
// a different  word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t= "nagram"); ------ output: true
//Input: (s="rat"), (t=car) ------output: false

// expanation: anagram = [a,n,a,g,r,a,m] => [a,a,g,n,m,r] =>aagnmr
//    nagramn =[n,a,g,r,a,m,n] => [a,a,g,n,m,r] => aagnmr

// First Approach:


const isAnagram = function(s,t){
    s = s.split("").sort().join("");
    t= t.split("").sort().join("");

    return s===t;
}

// console.log(isAnagram("anagran","angaran"));




// 2nd approach

const anagram = function(s,t){
    if(s.length !== t.length) return false;

    let obj1 = {}
    let obj2 ={}

    for(let i =0; i<s.length; i++){
        obj1 =(obj1[s[i]] || 0)+1;
        obj2 = (obj2[t[i]] || 0)+1;
    }

    for (const key in obj1) {
       if(obj1[key] !== obj2[key])return false;
    }

    return true

}

console.log(anagram("anagran","angaran"));






