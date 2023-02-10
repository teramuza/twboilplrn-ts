export const isNumber = (value: any) => typeof value === 'number';
export const isObject = (value: any) => typeof value === 'object';
export const isString = (value: any) => typeof value === 'string';
export const isBoolean = (value: any) => typeof value === 'boolean';

/*
    stringFormat
    this function is created because string in js doesnt support template
    literals with a fix template code. some times, we need to create a text template
    that could be used anywhere such as 'hellow {} I am {}'. In general js, we need to
    use replace to fill the '{}' value, but using this function, it could be done by
    stringFormat(template, value1, value2, ...etc).

    this func is inspired by string.format python : https://www.w3schools.com/python/ref_string_format.asp

    use case :
    txt2 = stringFormat("My name is {1}, I'm {0}", "John", 36)
    txt3 = stringFormat("My name is {}, I'm {}", "John", 36)
*/

export const stringFormat = (string: string, ...values: any[]) => {
    let result = string;
    values.forEach((value, index) => {
        let tempResult = result.replace('{}', value as string);
        tempResult = tempResult.replace(
            RegExp(`\\{${index}\\}`, 'g'),
      value as string,
        );

        result = tempResult;
    });
    return result;
};
