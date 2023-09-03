export const addToHistory = (searchInput) => {
    return {
      type: "ADD_TO_HISTORY",
      payload: searchInput,
    };
  };