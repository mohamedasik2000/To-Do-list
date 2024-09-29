var inputbox = document.getElementById("inputbox")
var list = document.getElementById("list")

function addList() {
    var newlist = document.createElement("li")
    newlist.classList.add("todo")
    newlist.innerHTML = inputbox.value + "<button class='removebtn' onclick='deleteList(event)'>Remove</button>"
    console.log(newlist)
    list.append(newlist)
    inputbox.value = ""
}

function deleteList(event) {
    event.target.parentElement.remove()
}