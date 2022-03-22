for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 1 - ..1s.. 0 ..1s.. 1 ..1s.. 2
// 2 - ..1s.. 3 3 3
// 3 - ..1s.. 2 2 2


// ^
// |
// |                                    lg lg lg
// |for { st - st - st }                => => =>
// +------i=0--i=1--i=2--i=3------------dans 1s->
//                                      3  3  3

setTimeout(() => console.log('A'), 500)
setTimeout(() => console.log('B'), 0)
setTimeout(() => console.log('C'), 1000)
setTimeout(() => console.log('D'), 500)

console.log('E')

// 1 - A B C D E
// 2 - E B A D C
// 3 - B E A D C
// 4 - E B D A C
// 5 - B E D A C

// ^
// |
// |                         lg         lg lg           lg
// |st - st - st - st - lg   =>         => =>           =>
// +-------------------------3ms--------500-501---------1000--------------->
//

// file d'attente (0ms): =>
// file d'attente (3ms):

// Jake Archibald : In the loop
