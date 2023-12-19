function kill(element) {
    element.parentElement.remove()
}

function petAlert(element) {
    var petType = element.value
    console.log(pet)
    if (pet == "Any Pet") {
        alert("You are looking for:\n" + petType)
    }
    else {
        alert("You are looking for a:\n" + petType)
    }
}

var pettings = [3, 5, 8]

function pet(element) {
    var petting = element.previousElementSibling
    if (petting.id == "Pepper") {
        pettings[0]++
        petting.innerText = pettings[0] + " petting(s)"
        console.log(petting.value)
    }
    if (petting.id == "Bruce") {
        pettings[1]++
        petting.innerText = pettings[1] + " petting(s)"
        console.log(petting.value)
    }
    if (petting.id == "Oscar") {
        pettings[2]++
        petting.innerText = pettings[2] + " petting(s)"
        console.log(petting.value)
    }
}