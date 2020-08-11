export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // add your token here and delete after finished developing
  token: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_MOOD_BOOSTER":
      return {
        ...state,
        mood_booster: action.mood_booster,
      };

    default:
      return state;
  }
};

export default reducer;
