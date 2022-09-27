const { Server } = require("socket.io");
const PORT = process.env.PORT || 3000;
const io = new Server(PORT, { 
    cors:{
        origin:"*",
    },
 });

 
const users = [];

io.on("connection", (socket) => {
    const user = {}
    user.id = socket.id;
    socket.on("new-user", newname => {
        if (newname != "" && users.includes(newname)) {
            user.username = newname;
            users.push(newname);
            socket.emit("welcome", newname);
            socket.emit("construct");
        }
        else {
            if (newname == "") {
                socket.emit("error2");
            }
            else {
                socket.emit("error1");
            }
        }
    })

    socket.on("new-message", (passname, message) => {
        socket.broadcast.emit("printmessage",passname,message);
    });

    socket.on("goodbye", (passname) => {

        const i = users.indexOf(passname);
        if (i > -1) {
            users.splice(i, 1);
        }
        socket.broadcast.emit("finito",passname);
        user.username = "";
    })

    socket.on("disconnect",()=>{
        const i = users.indexOf(byename);
        if (i > -1) {
            users.splice(i, 1);
        }
        socket.broadcast.emit("finito",user.username);
    })

});