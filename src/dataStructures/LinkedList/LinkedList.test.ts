// import 'jest';
import { LinkedList } from './LinkedList';

// describe('LinkedList', (): void => {
//   it('Instantiate LinkedList successfully', (): void => {});
// });

const ll = new LinkedList<number>();
ll.append(3).append(1).prepend(7).append(4).prepend(5).insert(1, 6);
// ll.append(1);
// console.log(ll);
// ll.prepend(7);
// ll.append(4);
// ll.prepend(5);
ll.at(1)?.log();
ll.remove(7);
console.log(ll.toString());
