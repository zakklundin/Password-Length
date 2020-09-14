let x = prompt("Type_Password")

if (x.length === 7){
    alert('korrekt')
}

while (x.length > 7){
    alert('för långt')
    x = prompt('try again')
}

while (x.length < 7){
    alert('för kort')
    x = prompt('try again')
}