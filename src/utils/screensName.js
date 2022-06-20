/// <summary>
/// We create objects to name the different screens,...
/// ... so you can freely rename the screens.
/// You can change the theme of the application, ...
/// ... making your application be of companies, hotels, shops, etc...
/// </summary>

const restaurantStack = {
  tab: "RestaurantsTab",
  restaurants: "Restaurants",
  addRestaurant: "AddRestaurant",
  /*restaurant: "Restaurant",
  addReviewRestaurant: "AddReviewRestaurant", */
}

const favoritesStack = {
  tab: "FavoritesTab",
  favorites: "Favorites",
}

const topStack = {
  tab: "TopTab",
  top: "Top",
}

const searchStack = {
  tab: "SearchTab",
  search: "Search",
}

const accountStack = {
  tab: "AccountTab",
  account: "Account",
  login: "Login",
  register: "Register",
}

export const screen = {
  restaurant: restaurantStack,
  favorites: favoritesStack,
  top: topStack,
  search: searchStack,
  account: accountStack,
}