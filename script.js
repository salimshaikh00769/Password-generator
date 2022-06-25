let gen = document.querySelector('#gen')




function generate() {
    let charecter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var arr = []

    for (let i = 1; i <= 10; i++) {
        let num = Math.floor(Math.random() * 72)
        let char = charecter.charAt(num)
        arr.push(char)
    }
    var password = arr.join('');
    document.querySelector('#input').value = password
}

function copy() {
    let password = document.querySelector('#input').value;

    navigator.clipboard.writeText(password);
    alert("Copied the text: " + password);


}