window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        GoToReview(event, button.id);
      });
    });
    
    });
  
  async function GoToReview(event, buttonId) {
    try {
      event.preventDefault();
      const button = event.target;
      console.log(button);
      const name = button.parentElement.querySelector('#name').textContent;
      const address = button.parentElement.querySelector('#address').textContent;

      const restaurantDetails = {
        name,
        address,
        buttonId
      };
  
      console.log(restaurantDetails);
  
      const response = await axios.post('http://localhost:3000/restaurant/post-restaurant', restaurantDetails);
  
      console.log(response);
  
      if (response.status === 201) {
        alert(response.data.message.name);
         window.location.href = '../html/review.html';
      } else {
        throw new Error("no restaurant");
      }
    } catch (error) {
      document.body.innerHTML += `<div style="color:red;">${error.message}</div>`;
    }
  }
  