function f_table(table_name, img1, img2) {
  var o = document.getElementById(table_name);
  o.innerHTML = ''
  o.innerHTML += '<table>'
  o.innerHTML += '<tr>'
  o.innerHTML += '<td>'
  o.innerHTML += img1
  o.innerHTML += '</td>'
  o.innerHTML += '<td>'
  o.innerHTML += img2
  o.innerHTML += '</td>'
  o.innerHTML += '</tr>'
  o.innerHTML += '</table>'
}

