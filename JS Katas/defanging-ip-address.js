var defangIPaddr = function(address) {
    let array = address.split("");

    for (let index = 0; index < array.length; index++) {
        if(array[index] == '.') {
            array[index] = array[index].replace(".", "[.]");
        }
    }

    return array.join("");
};