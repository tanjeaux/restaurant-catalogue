import FavRestaurantIdb from '../../data/favrestaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <section class="content">
          <div class="catalog">
          <div class="resto-catalog" tabindex="0"></div>
            <h1 tabindex="0" class="catalog-label">Favorites</h1>
            <div class="post"></div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restos = await FavRestaurantIdb.getAllResto();
    const restosContainer = document.querySelector('.post');

    restos.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });

    this._hideDivHero();
  },

  _hideDivHero() {
    const heroContent = document.querySelector('hero-div');
    heroContent.style.display = 'none';
  },
};

export default Like;
