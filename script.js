let btn = document.getElementById('btn')
let btnClear = document.createElement('button');
btn.addEventListener('click', function ()  {
  let text = document.getElementById('username').value;
  let li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI') {
      event.target.classList.toggle('done');
    } else if (event.target.tagName === 'BUTTON') {
      btnClear.parentElement.remove();
    }
    console.log(event);
  });
  li.classList.add('to__do');
  li.style.marginTop = '20px';
  btnClear.innerHTML = "delete"
  btnClear.style.marginLeft = '20px';
  li.append(btnClear);
  document.querySelector('ul').append(li);
  document.getElementById('username').value = '';
});








