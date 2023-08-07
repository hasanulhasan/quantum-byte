const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  search: '',
  sort: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchText: (state, action)=> {
      state.search = action.payload
    },
    sortType: (state, action)=> {
      state.sort = action.payload
    }
  }
})

export default filterSlice.reducer;
export const {searchText,sortType} = filterSlice.actions