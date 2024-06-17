import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavRestaurantIdb from '../src/scripts/data/favrestaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestaurantIdb.getAllResto()).forEach(async (restaurant) => {
      await FavRestaurantIdb.deleteResto(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavRestaurantIdb);
});
