let friends = ['Steven', 'Bob', 'John', 'Merritt', 'Tori', 'Luke']

// let x = 99

// let song = [x + ' ' + 'lines of code in the file,' + ' ' + x + ' ' + 'lines of code;' + ' ' + friends[0] + ' ' + 'strikes one out, clears it all out,' + ' ' + (x-1) + ' ' + 'lines of code in the file']

// function singIt (anyfriend) {
//     console.log(song);
// }


for (let i = 0; i < friends.length; i++) {
    // singIt (anyfriend);
    let friend = friends[i];
    console.log(friend.toUpperCase());
// let song = 'xxxx'
    for (let j = 99; j > 0; j--) {
        if (j == 1) {
            console.log(j+' line of code in the file, ' + j +' line of code; ' + friend + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file.');
        }else{
            if (j == 2) {
                console.log(j+' lines of code in the file, ' + j +' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file.');
            }else{
                console.log(j+' lines of code in the file, ' + j +' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file.');
            }
        }
        
    }
}


