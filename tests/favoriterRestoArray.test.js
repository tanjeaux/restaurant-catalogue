import { itActsAsFavoriteRestoModel } from "./contracts/favoriteRestoContract";
 
let favoriteResto = [];
 
const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
 
    return favoriteResto.find((restaurant) => restaurant.id == id);
  },
 
  getAllResto() {
    return favoriteResto;
  },
 
  putResto(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(restaurant.id)) {
      return;
    }
 
    favoriteResto.push(restaurant);
  },
 
  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((movie) => movie.id != id);
  },
};
 
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteResto = [];
  });
 
  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
