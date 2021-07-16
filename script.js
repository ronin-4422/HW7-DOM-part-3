let btn = document.getElementById('btn')
let button = document.createElement("button");
let li = document.createElement('li')

btn.addEventListener('click', function ()  {
  let text = document.getElementById('username').value;
  li.innerText = text;
  li.classList.add('to__do');
  li.style.marginTop = '20px';
  button.innerHTML = "delete";
  button.style.marginLeft = '20px';
  li.appendChild(button);
  document.querySelector('ul').append(li);
});

li.addEventListener('click', (event) =>{
  if(event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
  } else if (event.target.tagName === 'BUTTON') {
    button.parentElement.remove();
  }
  console.log(event);
});


