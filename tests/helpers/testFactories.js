import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavRestaurantIdb from '../../src/scripts/data/favrestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavRestaurantIdb,
    restaurant,
  });
};
export { createLikeButtonPresenterWithRestaurant };
