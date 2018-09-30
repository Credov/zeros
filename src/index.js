module.exports = function getZerosCount(number) {
 var res=0;
 while (number>1){
    res+=Math.floor(number/5);
    number=Math.floor(number/5);
 }
 return res;
}