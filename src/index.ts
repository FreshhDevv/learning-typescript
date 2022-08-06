class ArrayUtils {
wrapInArray<T>(value: T) {
return [value];
}

}

let utils = new ArrayUtils();
let numbers = utils.wrapInArray('1');