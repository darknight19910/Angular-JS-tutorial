function peopleName(firstname) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstname + " " + restOfName.join(" ");
}
var name_1 = peopleName("ken", "lau", "tee");
console.log(name_1);
