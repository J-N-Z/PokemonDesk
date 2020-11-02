
// Работа с простыми типами

type concatFn = (str1: string, str2: string) => string;

const concat: concatFn = (str1, str2) => str1 + str2
concat('Hello ', 'World') // -> Hello World;

// Работа с интерфейсами

type StringOrNumber = string | number;

interface IMyHometask {
    howIDoIt: string;
    simeArray: StringOrNumber[];
    withData: { howIDoIt: string, simeArray: StringOrNumber[] }[]
}

const MyHometask: IMyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// Типизация функций, используя Generic

interface MyArray<T> {
    [N: number]: T;
    
    map<U>(fn: (el: T) => U): U[];
	reduce<T>(fn: (acc: T, curr: T, idx?: number) => T, init?: T): T;
}

const tsArr: Array<number> = [1,2,3,4];

const tsArr2: Array<string> = ['a', 'b', 'c'];

tsArr.map((i: number) => i + 1);
tsArr.map((i: number) => `${i + 1}`);

tsArr.reduce((prev, curr) => prev + curr);
tsArr2.reduce((prev, curr) => prev + curr);