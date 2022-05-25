console.log('hello');


document.getElementById('selectall').onclick = function () {
    var checkboxes = document.getElementsByName('dg');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox')
            checkboxes[i].checked = true;
    }
}

document.getElementById('deselec').onclick = function () {
    var selec = document.getElementsByName('dg');
    for (var i = 0; i < selec.length; i++) {
        if (selec[i].type == 'checkbox' && selec[i].checked == true)
            selec[i].checked = false;
    }
}

document.getElementById('clr').onclick = function () {
    var clr = document.getElementsByName('fname');
    for (var i = 0; i < clr.length; i++) {
        fname[i].value = '';
    }
    var clr = document.getElementsByName('lname');
    for (var i = 0; i < clr.length; i++) {
        lname[i].value = '';
    }
    var clr = document.getElementsByName('cname');
    for (var i = 0; i < clr.length; i++) {
        cname[i].value = '';
    }
}

document.getElementById('clrbg').onclick = function () {
    var cbg = document.getElementsByName('dg')
    for (var i = 0; i < cbg.length; i++) {
        if (cbg[i].checked == true){
            fname[i].value = '';
            lname[i].value = '';
            cname[i].value = '';
        }
    }
}