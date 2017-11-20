var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ],
    d, m, y, now, out_string;
now = new Date();
d = now.getDate();
m = now.getMonth();
y = now.getFullYear();


out_string = d + '. ' + months[m] + ' . ' + y;

document.getElementById('date').innerHTML = out_string;