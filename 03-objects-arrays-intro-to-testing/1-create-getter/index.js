/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    return function(obj) {
        const pathArr = path.split('.');
        let value = obj;

        for (const item of pathArr) {
            if (item in value) {
                value = value[item];
            } else {
                return undefined;
            }
        }

        return value;
    }
}
