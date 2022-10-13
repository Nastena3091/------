const   users = [{name:"User1", age:"16"},{name:"User2", age:"18"}];

module.exports = function(app){
    app.get("/", (req, res) => {
        res.json(users);
    })

    app.post("/", (req, res) => {
        res.send(users);
    })
}