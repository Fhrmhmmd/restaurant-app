import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
            <section class="restaurant">
            <h2 class="list-title">Favorite Restaurant</h2>
                <div id="restaurants" class="restaurant-list">
                 
                 </div>
            </section>
        `;
  },

  async afterRender(){
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    if(restaurants.length === 0){
      restaurantContainer.innerHTML = '<p>Tidak ada resto favorit</p>';
    }else{
      restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
    }

  },

};

export default Like;