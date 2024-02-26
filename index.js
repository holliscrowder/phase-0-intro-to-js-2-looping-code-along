// create messages function
let messages = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        let newMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages = [...messages, newMessage];
    }
    return messages;
}

function countDown(integer) {
    for (let i = integer; i >= 0; i--) {
        console.log(i);
    }
}
