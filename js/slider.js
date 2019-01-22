//Euro slider
let moveable = document.getElementById('moveable');
let move_number = document.getElementById('move_number');
let myRange_value = document.getElementById('myRange').value;
move_number.innerText = myRange_value.toString().concat('.000')
moveable.style.left = Math.round(myRange_value / 150 * 100).toString() + '%'
document.getElementById('myRange').oninput = (event) => {

    let moveable_two = document.getElementById('moveable');
    let move_number1 = document.getElementById('move_number');

    let ev = event.target.value;
    let calc = Number(ev);
    move_number1.innerText = ev.toString().concat('.000')
    let left = Math.round(ev / 150 * 100)
    console.log(left)
    if (left > 28 && left < 66) {
        moveable_two.style.left = left.toString() + '%'

    }




}

//Year slider
let moveable_years = document.getElementById('moveable_years');
let move_years = document.getElementById('move_years');
let myRange_value1 = document.getElementById('myRange1').value;
move_years.innerText = myRange_value1.toString()+' ';
moveable_years.style.left = Math.round(myRange_value1 / 15 * 100).toString() + '%'
document.getElementById('myRange1').oninput = (event) => {

    let moveable_two = document.getElementById('moveable_years');
    let move_number1 = document.getElementById('move_years');

    let ev = event.target.value;

    move_number1.innerText = ev.toString()+' ';
    let left = Math.round(ev / 15 * 100)
    console.log(left)
    if (left > 25 && left < 70) {
        moveable_two.style.left = left.toString() + '%'

    }




}