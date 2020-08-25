function toggleNav() {
    var x = document.getElementById('navvy');
    
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}