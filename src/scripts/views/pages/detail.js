import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render(){
    return `
            <div id="detail" class="detail"></div>
            <div id="likeButtonContainer"></div>
        `;
  },


  async afterRender(){
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.detailRestaurant(url.id);
    const RestaurantContainer = document.querySelector('#detail');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        rating: restaurant.rating,

        pictureId: restaurant.pictureId,
        menus: {
          foods: restaurant.menus.foods,
          drinks: restaurant.menus.drinks,
        },
        customerReviews: restaurant.customerReviews,
      },
    });
  },

};

export default Detail;