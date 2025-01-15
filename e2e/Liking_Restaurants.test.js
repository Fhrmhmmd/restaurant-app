Feature('Liking And Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
  I.waitForElement('#restaurants', 10); 
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.say('Navigating to favorites page');
  I.waitForElement('#restaurants', 10); 
  I.see('Tidak ada resto favorit', '#restaurants');
});

Scenario('liking restaurant', ({ I }) => {
  I.say('Navigating to favorites page');
  I.waitForElement('#restaurants', 5);
  I.see('Tidak ada resto favorit', '#restaurants');

  I.amOnPage('/');
  I.say('Navigating to home page');

  I.waitForElement('.restaurant-card a', 10);
  I.seeElement('.restaurant-card a');
  I.click(locate('.restaurant-card a').first());

  I.waitForElement('#likeButton', 10); 
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like'); 
  I.say('Navigating back to favorites page');

  I.waitForElement('.restaurant-card', 10); 
  I.seeElement('.restaurant-card');
});

Scenario('Unliking Restaurant', async ({ I }) => {
    I.say('Navigating to favorites page');
    I.waitForElement('#restaurants', 10); 
    I.see('Tidak ada resto favorit', '#restaurants');
  
    I.amOnPage('/');
    I.say('Navigating to home page');
  
    I.waitForElement('.restaurant-card a', 10); 
    I.seeElement('.restaurant-card a');
    I.click(locate('.restaurant-card a').first());
  
    I.waitForElement('#likeButton', 10); 
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.say('Navigating back to favorites page');
  
    I.waitForElement('.restaurant-card', 10); 
    I.seeElement('.restaurant-card');
  
    await I.grabTextFrom('.restaurant-card .name'); 
  
    I.click(locate('.restaurant-card a').first());
  
    I.waitForElement('#likeButton', 10); 
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.say('Navigating back to favorites page');
  
    I.waitForElement('#restaurants', 10);
    I.see('Tidak ada resto favorit', '#restaurants');
});





