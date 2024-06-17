import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavRestaurantIdb from '../../data/favrestaurant-idb';

const RestaurantDetail = {
  async render() {
    return `
    <section class="content" tabindex="0">
      <div class="catalog" tabindex="0">
        <div class="resto-detail" tabindex="0"></div>
        <div id="reviewDiv" tabindex="0"></div>
        <div id="likeDiv" tabindex="0"></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoDetail = await RestoDbSource.restaurantDetail(url.id);
    const restoDetailContainer = document.querySelector('.resto-detail');
    restoDetailContainer.innerHTML = createRestoDetailTemplate(restoDetail);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeDiv'),
      favoriteResto: FavRestaurantIdb,
      restaurant: {
        id: restoDetail.id,
        pictureId: restoDetail.pictureId,
        city: restoDetail.city,
        rating: restoDetail.rating,
        name: restoDetail.name,
        description: restoDetail.description,
      },
    });
    const reviewContainer = document.querySelector('#reviewDiv');
    reviewContainer.innerHTML = createReviewTemplate();
    const formName = document.querySelector('#input-name');
    const formReview = document.querySelector('#input-review');
    const submitButton = document.querySelector('.submit-button');
    const restaurantId = restoDetail.id;

    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();

      if (formName.value === '' || formReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Please fill out the form!');
        formName.value = '';
        formReview.value = '';
      } else {
        const review = { id: restaurantId, name: formName.value, review: formReview.value };

        const addReview = await RestoDbSource.sendReview(review);
        formName.value = '';
        formReview.value = '';
        console.log(addReview);
      }
    });

    this._hideDivHero();
  },

  _hideDivHero() {
    const heroContent = document.querySelector('hero-div');
    heroContent.style.display = 'none';
  },

};

export default RestaurantDetail;
