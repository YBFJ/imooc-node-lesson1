var globalVarible = 'this is global variable';

function globalFunction() {
  var localvarible = 'this is local variable';

  console.log('visit global/local variable');
  console.log(globalVarible);
  console.log(localvarible);
  globalVarible = 'this is change global variable';
  console.log(globalVarible);
  function localFunction() {
    var innerLocalVarible = 'this is inner local variable';
    console.log('visit global/local/innerLocal Varible variable');
    console.log(localvarible);
    console.log(globalVarible);
    console.log(innerLocalVarible);
  }
  localFunction();
}

globalFunction();
