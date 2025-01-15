import Detail from '../views/pages/detail';
import RestaurantList from '../views/pages/restaurant-list';
import Like from '../views/pages/like';

const routes = {
  '/': RestaurantList,
  '/restaurant-list': RestaurantList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;