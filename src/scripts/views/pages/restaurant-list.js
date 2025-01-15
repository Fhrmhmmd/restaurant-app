import TheRestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render(){
    return `
    <section class="hero" id="hero">
  <picture>
    <source srcset="/images/heros/hero-image_2-small.jpg" media="(max-width: 600px)">
    <img src="/images/heros/hero-image_2-large.jpg" alt="Hero Image" class="hero-img lazyload">
  </picture>
  
  <div class="hero-text" tabindex="0">
    <h2>Welcome To Eat<span>Street</span></h2>
    <p>
      EatStreet serves as an essential guide for discovering exceptional dining 
      establishments locally and beyond. Designed to simplify the process of finding quality 
      dining options, EatStreet provides a curated selection of highly rated restaurants.
    </p>
  </div>
</section>

        <section class="restaurant">
            <h2 class="list-title">EatStreet Restaurant</h2>
            <div id="loading-indicator" class="loading hidden">
              <div class="spinner"></div>
            </div>
                <div id="restaurant-list" class="restaurant-list">
                    <!-- restaurant list -->
                 </div>
      </section>
        `;
  },

  async afterRender(){
    const restaurants = await TheRestaurantSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });

  },

};

export default RestaurantList;