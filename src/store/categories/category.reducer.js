import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  categoriesLocal: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;    
    },
    setCategoriesLocal(state, action) {
      state.categoriesLocal = action.payload;
    }
  },
});

export const { setCategories, setCategoriesLocal } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;