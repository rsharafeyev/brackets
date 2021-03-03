module.exports = function check(str, bracketsConfig) {
  let repeat = true;
  while(repeat)
  {
    repeat = false;
    for(item of bracketsConfig)
    {
      let pair = item[0] + item[1];
      while(str.includes(pair))
      {
        str = str.slice(0,str.indexOf(pair)) + str.slice(str.indexOf(pair) + pair.length);
        repeat = true;
      }
    }
  }
  if(str){return false;} else {return true;}
}
