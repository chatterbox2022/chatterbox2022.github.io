const socket = io("https://chatter-box-server.herokuapp.com/");

var passname;

const clicked = () =>{
    
    passname = document.getElementById('nameinput').value;
    document.getElementById('nameinput').value = "";
    socket.emit("new-user",passname);

}


const messageclick = () =>{

    var message = document.getElementById('message').value;
    document.getElementById('message').value = "";
    socket.emit("new-message",passname,message);


    var messagemain = document.getElementById('chatsection');
    var newWrapM = document.createElement('div');
    var newElemM = document.createElement('elem');
    var newName = document.createElement('div');
    var newContent = document.createElement('div');
    var newImg = document.createElement('div');
    var newText = document.createElement('div');
    var ImgArrow = document.createElement('img');
    ImgArrow.classList.add('w-4');
    ImgArrow.src = "../media/turn-down.png";

    newWrapM.classList.add('wrapper', 'flex', 'justify-end', 'w-full','py-2');
    newElemM.classList.add('elem', 'w-1/3', 'rounded-md', 'bg-white', 'bg-opacity-70', 'font-DM', 'p-1');
    newName.classList.add('name','text-right', 'p-1', 'font-medium');4
    newContent.classList.add('message', 'flex', 'justify-end', 'items-center', 'p-1');
    newImg.classList.add('img','scale-x-flip');
    newText.classList.add('text');

    newName.innerHTML = `${passname}`;
    newText.innerHTML = `${message}`;
    newImg.appendChild(ImgArrow);

    messagemain.appendChild(newWrapM);
    newWrapM.appendChild(newElemM);
    newElemM.appendChild(newName);
    newElemM.appendChild(newContent);
    newContent.appendChild(newText);
    newContent.appendChild(newImg);
}


const back = () =>{
    document.getElementById("app").classList.add('hidden');
    document.getElementById("startup").classList.remove('hidden');
    socket.emit("goodbye",passname);
}

socket.on("construct",()=>{
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('startup').classList.add('hidden');
})

socket.on("error1", ()=>{
    alert("Name already Exists");
});
socket.on("error2",()=>{
    alert("Enter a valid name");
});

socket.on("welcome",welcomename =>{

    const mainsec = document.getElementById('chatsection');
    var newWrap = document.createElement('div');
    var newElem = document.createElement('elem');
    
    newWrap.classList.add('wrapper', 'flex', 'justify-start', 'w-full','py-2');
    newElem.innerHTML = `<span class="font-medium">${welcomename}</span> has joined the chat.`
    newElem.classList.add('elem', 'w-1/3', 'rounded-md', 'bg-white', 'bg-opacity-70', 'font-DM', 'p-1');
    
    mainsec.appendChild(newWrap);
    newWrap.appendChild(newElem);
});


socket.on("print-message",(passname,message) =>{
    var messagemain = document.getElementById('chatsection');
    var newWrapM = document.createElement('div');
    var newElemM = document.createElement('elem');
    var newName = document.createElement('div');
    var newContent = document.createElement('div');
    var newImg = document.createElement('div');
    var newText = document.createElement('div');
    var ImgArrow = document.createElement('img');
    ImgArrow.classList.add('w-4');
    ImgArrow.src = "../media/turn-down.png";

    newWrapM.classList.add('wrapper', 'flex', 'justify-start', 'w-full','py-2');
    newElemM.classList.add('elem', 'w-1/3', 'rounded-md', 'bg-white', 'bg-opacity-70', 'font-DM', 'p-1');
    newName.classList.add('name', 'p-1', 'font-medium');4
    newContent.classList.add('message', 'flex', 'justify-start', 'items-center', 'p-1');
    newImg.classList.add('img');
    newText.classList.add('text');

    newName.innerHTML = `${passname}`;
    newText.innerHTML = `${message}`;
    newImg.appendChild(ImgArrow);

    messagemain.appendChild(newWrapM);
    newWrapM.appendChild(newElemM);
    newElemM.appendChild(newName);
    newElemM.appendChild(newContent);
    newContent.appendChild(newImg);
    newContent.appendChild(newText);
})


socket.on("finito",byename =>{
    const mainsec2 = document.getElementById('chatsection');
    var newWrap2 = document.createElement('div');
    var newElem2 = document.createElement('elem');
    
    newWrap2.classList.add('wrapper', 'flex', 'justify-start', 'w-full','py-2');
    newElem2.innerHTML = `<span class="font-medium">${byename}</span> has left the chat.`
    newElem2.classList.add('elem', 'w-1/3', 'rounded-md', 'bg-white', 'bg-opacity-70', 'font-DM', 'p-1');
    
    mainsec2.appendChild(newWrap2);
    newWrap2.appendChild(newElem2);

})