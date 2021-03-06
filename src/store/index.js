import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

export default createStore({
  state: {
    renderedArray: [],
    favoritesArray: [],
    breedsArray: [],
    selectedBreed: "random",
    errorFetchingData: false
  },
  mutations,
  actions,
  modules: {}
});
