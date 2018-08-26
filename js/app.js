document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});

const handleFormSubmit = function(event){
  event.preventDefault();
  const drinkUl = document.createElement('ul');
  const nameLi = document.createElement('li');
  nameLi.textContent = `Name: ${event.target.name.value}`;
  const distilleryLi = document.createElement('li');
  distilleryLi.textContent = `Distillery: ${event.target.distillery.value}`;
  const countryLi = document.createElement('li');
  countryLi.textContent = `Country of origin: ${event.target.country.value}`;

  drinkUl.appendChild(nameLi);
  drinkUl.appendChild(distilleryLi);
  drinkUl.appendChild(countryLi);

  const listDiv = document.querySelector('#drinklist');
  listDiv.appendChild(drinkUl);
}
