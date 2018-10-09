var pet = {
  words: '...',
  speak: function(say) {
    console.log(say + ' ' + this.words);
  }
};

// pet.speak('Speak');
// this 指向的是调用speak方法的对象就是pet

var dog = {
  words: 'wang'
};

pet.speak.call(dog, 'Speak');
// 本来this指向的是pet，通过call改变了执行上下文，
// 将pet指向变成了dog，dog被调用的时候才拥有了speak的技能
