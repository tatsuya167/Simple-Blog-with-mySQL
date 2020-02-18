function checkDel() {
    console.log('HHEEERRE')
    let r = confirm("Notice!\n Are you sure to delete this Note?");
    if (r == true) {
        document.getElementById('delSubmit').submit();
    } 
}
