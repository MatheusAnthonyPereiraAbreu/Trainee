"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.white);
var StatusPermisson;
(function (StatusPermisson) {
    StatusPermisson[StatusPermisson["admin"] = 0] = "admin";
    StatusPermisson[StatusPermisson["user"] = 1] = "user";
    StatusPermisson[StatusPermisson["support"] = 2] = "support";
})(StatusPermisson || (StatusPermisson = {}));
console.log(StatusPermisson.support);
