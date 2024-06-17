import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item" tabindex="0">
  <img
    class="resto-item-thumbnail lazyload"
    data-src="${CONFIG.BASE_IMAGE_URL_M + restaurant.pictureId}"
    alt="${restaurant.name}"
    tabindex="0"
  />
  <div class="resto-item-content" tabindex="0">
    <p class="resto-item-location" tabindex="0">${restaurant.city}</p>
    <p class="resto-item-rate" tabindex="0">★ ${restaurant.rating}</p>
    <h1 class="resto-item-title" tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <p class="resto-item-desc" tabindex="0">${restaurant.description}</p>
  </div>
</div>
`;

const createRestoDetailTemplate = (restaurant) => `
<div class="restaurant-detail" tabindex="0">
  <h2 class="restaurant-name" tabindex="0">${restaurant.name}</h2>
  <div class="restaurant-content" tabindex="0">
    <div class="restaurant-main" tabindex="0">
      <img
        class="restaurant-image"
        src="${CONFIG.BASE_IMAGE_URL_M + restaurant.pictureId}"
        alt="${restaurant.name}"
        tabindex="0"
      />
      <div class="menu-section" tabindex="0">
        <p class="menu-title" tabindex="0">Menu</p>
        <div class="menu-list">
          <div class="menu-category" tabindex="0">
            <p class="menu-category-title" tabindex="0">Foods</p>
            <ul class="menu-items" tabindex="0">${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
          </div>
          <div class="menu-category" tabindex="0">
            <p class="menu-category-title" tabindex="0">Drinks</p>
            <ul class="menu-items" tabindex="0">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    </div>
    <div class="restaurant-info-section" tabindex="0">
      <div class="restaurant-info" tabindex="0">
        <p class="restaurant-city" tabindex="0">Location: ${restaurant.city}</p>
        <p class="restaurant-description" tabindex="0">${restaurant.description}</p>
        <p class="restaurant-address" tabindex="0">Address: ${restaurant.address}</p>
      </div>
    </div>
    <div class="reviews-section" tabindex="0">
      <p class="reviews-title" tabindex="0">Reviews</p>
      <div class="reviews-list">
        ${restaurant.customerReviews.map((review) => `
          <div class="review-item" tabindex="0">
            <p class="reviewer-name" tabindex="0">${review.name}</p>
            <p class="review-text" tabindex="0">"${review.review}"</p>
            <p class="review-date" tabindex="0">${review.date}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="save to favorites" id="likeButton" class="like" tabindex="0">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unsave from favorites" id="likeButton" class="like" tabindex="0" >
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = () => `
<div class="add-review-section" tabindex="0">
  <h2 class="add-review-section-title" tabindex="0">Add a New Review</h2>
  <form class="form" action="#" id="form" tabindex="0">
    <div class="input-group" tabindex="0">
      <div class="customer-div" tabindex="0">
        <label for="input-name" tabindex="0">Name</label>
        <input type="text" id="input-name" name="input-name" required tabindex="0">
      </div>
    </div>
    <div class="input-group" tabindex="0">
      <div class="customer-div" tabindex="0">
        <label for="input-review" tabindex="0">Review</label>
        <textarea name="input-review" id="input-review" rows="5" required tabindex="0"></textarea>
      </div>
    </div>
    <input type="submit" value="Submit" name="submit" class="submit-button" tabindex="0">
  </form>
</div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};
