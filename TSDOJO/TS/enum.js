var Color;
(function (Color) {
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
var key_color = Color.Blue;
var name_color = Color[1];
console.log(key_color);
console.log(name_color);
