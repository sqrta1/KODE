const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
        },
    };

const getObjectProperty = (obj, path, defaultValue) => {
    let paths = path.split('.');

    for (let i = 0; i < paths.length; ++i) {
        if (obj[paths[i]] == undefined) {
            if(defaultValue) {
                return defaultValue
            } else {
                return undefined
            }
        } else {
            obj = obj[paths[i]];
    }
  }
  return obj;
}


const { log } = console;

let first_test = getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
let second_test = getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
let third_test = getObjectProperty(obj, "pupa.foo"); // > 'bar'
let fourth_test = getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
let fifth_test = getObjectProperty(obj, "pupa.ne.tuda", true); // > true
let sixth_test = getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
log(first_test, second_test, third_test, fourth_test, fifth_test, sixth_test);

