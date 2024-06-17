import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestaurantList,
  '/list-restaurant': RestaurantList,
  '/detail/:id': RestaurantDetail,
  '/like': Like,
};

export default routes;
