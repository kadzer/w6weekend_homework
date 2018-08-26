document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  console.log('we have a liftoff');

});

const handleFormSubmit = function(event){
  event.preventDefault();

}
