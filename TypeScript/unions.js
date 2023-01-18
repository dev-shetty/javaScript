var score = 33;
score = 44;
score = "Homerun";
var deveesh = {
    name: "Deveesh",
    id: 123
};
deveesh = {
    username: "dev",
    id: 123
};
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
        return;
    }
    id + 2;
}
getDbId(5);
