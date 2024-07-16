var shruti = { dbId: 77,
    name: "shrut", userId: 99,
    startTrial: function () {
        return "hello";
    },
    getCoupan: function (name, off) {
        return 20;
    },
};
//we can change non-readonly value
shruti.name = "radha";
