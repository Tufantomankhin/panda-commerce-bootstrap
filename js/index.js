document.getElementById('btn-supply').addEventListener('click', function () {
        console.log('buttton clicked');
        // function myFunction(event) {
        //     if (document.getElementById('btn-supply').disabled = true) {
        //         event.removeAtribute('disabled');
        //     } 
        //     else { document.getElementById('btn-supply').disabled = false;
        //         event.setAtribute('disabled');
        //     }
        // }
    })

const buttons350 = document.querySelectorAll('.supply-350')
for (const button350 of buttons350) {
    button350.style.backgroundColor = 'tomato'
    button350.style.borderRadius = '10px'
    button350.style.color = 'white'
    button350.style.width = '120px'
    button350.style.hight = '120px'
}