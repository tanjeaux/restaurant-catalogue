const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.dontSeeElement('.resto-item');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.resto-item');
  I.amOnPage('/');
  I.waitForElement('.resto-item');
  I.seeElement('.resto-item-title a');

  const firstRestaurant = locate('.resto-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const likedRestaurantTitle = await I.grabTextFrom('.resto-item-title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
