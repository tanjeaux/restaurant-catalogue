import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestaurantIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavRestaurantIdb.deleteResto(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unsave from favorites"]')).toBeTruthy();
  });

  it('should not display like widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="save to favorites"]')).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unsave from favorites"]').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Hapus dulu film dari daftar film yang disukai
    await FavRestaurantIdb.deleteResto(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unsave from favorites"]').dispatchEvent(new Event('click'));
    expect(await FavRestaurantIdb.getAllResto()).toEqual([]);
  });
});
