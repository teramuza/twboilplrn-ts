// you can add global type/type utils of data here

/***
 *     To define a type based on a string value or a certain number value
 *     whose source value is taken from an array variable
 *
 *     `type NewType = ValueOf<typeof ArrayData>`
 */
export type ValueOf<T> = T[keyof T];
