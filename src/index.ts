import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, -12, 5, 8, 0, -1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('something');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(100);
linkedList.add(-200);
linkedList.add(50);
linkedList.add(-10);
const sorter2 = new Sorter(linkedList);
sorter2.sort();
linkedList.print();
