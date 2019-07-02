function Button1Click() {
    window.location.href = './game.html';
}

function Button2Click() {
    myTable0.style.display = 'none';
    myTable1.style.display = 'none';
    myTimer.style.display = 'none';
    myButton1.style.display = 'none';
    S.UI.simulate('Thank You ！||');
    setTimeout("myTable0.style.display='block'", 1678);
    setTimeout("myTable1.style.display='block'", 1678);
    setTimeout("myTimer.style.display='block'", 1678);
    setTimeout("myButton1.style.display='block'", 1678);
}