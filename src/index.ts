import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, -12, 5, 8, 0, -1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('something');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data);
