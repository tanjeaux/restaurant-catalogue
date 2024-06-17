import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
        <section class="content" tabindex="0">
          <div class="catalog" tabindex="0">
            <p class="app-description" tabindex="0">
            Welcome to Find Dining, where culinary exploration meets convenience. 
            With Find Dining, you'll embark on a journey to enhance your dining experiences like never before. 
            Our intuitive platform empowers you to discover hidden culinary gems, indulge in delectable dishes, 
            and connect with your favorite eateries effortlessly.
          </p>
          <div class="catalog" tabindex="0">
            <h2 class="catalog-label" tabindex="0">Find Now</h2>
            <div class="post" tabindex="0"></div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestoDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('.post');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
