// var pet = {
//   words: '...',
//   speak: function() {
//     console.log(this.words);
//     console.log(this === pet);
//   }
// };
// pet.speak();
// this指向pet

// function pet(words) {
//   this.words = words;

//   console.log(this.words);
//   console.log(this === global);
// }

// pet('...');
// 此时this表示的是顶层global的对象

function Pet(words) {
  this.words = words;
  this.speack = function() {
    console.log(this, words);
    console.log(this);
  };
}

var cat = new Pet('Miao');

cat.speack();
