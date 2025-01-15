import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) =>`
    <h2 class="restaurant-name">${restaurant.name}</h2>
    <div class="detail-container">
    <div class="restaurant-detail-card">
    <div class="img-container">
    <img class="img-detail lazyload" data-src="${CONFIG.BASE_IMAGE_URL+restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="restaurant-info">
        
        <div class="info-item">
         <h4>Address</h4>
        <p>${restaurant.address}, Kota ${restaurant.city}</p>
        </div>
        <div class="info-item">
         <h4>Rating</h4>
        <p> ⭐ ${restaurant.rating}</p>
        </div>
        <div class="info-item">
         <h4>Categories</h4>
         <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
        </div>
        <div class="info-item">
         <h4>Food Menu</h4>
         <ul>
        ${restaurant.menus.foods
    .map((food) => `<li>${food.name}</li>`)
    .join('')}
      </ul>
        </div>
        <div class="info-item">
         <h4>Drinks Menu</h4>
         <ul>
        ${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}
      </ul>
        </div>
        </div>
        </div>
       <hr>
       <div class="description-container">
         <h4>Description</h4>
        <p>${restaurant.description}</p>
        </div>
         <hr>
        <div class="review-list">
         <h4>Review</h4>
         <p> ${restaurant.customerReviews
    .map(
      (review) => `
            <div class="review-item">
              <p class="review-name">${review.name}</p>
              <p class="review-text">${review.review}</p>
              <p class="review-date">${review.date}</p>
            </div>
          `
    )
    .join('')}
        </p>
        </div>
        </div>
    
`;

const createRestaurantListTemplate = (restaurant) =>`
    <article class="restaurant-card" tabindex="0" aria-label="Restaurant ${restaurant.name} in ${restaurant.city}">
      <img data-src="${CONFIG.BASE_IMAGE_URL+restaurant.pictureId}" class="restaurant-image lazyload" alt="Restaurant ${restaurant.name} in ${restaurant.city}">
        <h2 class="name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
        <p class="city" aria-label="Located in ${restaurant.city}">${restaurant.city}</p>
        <div class="rate-container">
            <p class="rating" aria-label="Rating of ${restaurant.name} is ${restaurant.rating}">${restaurant.rating}</p>
            <i class="fa-solid fa-star" style="color:#ffd43b;"></i>
        </div>
        <p class="restaurant-description">${restaurant.description}</p>
    </article>
`;


const createLikeButton = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
`;


const createLikedButton = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa-solid fa-heart" aria-hidden="true"></i>
     </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createLikeButton,
  createLikedButton
};