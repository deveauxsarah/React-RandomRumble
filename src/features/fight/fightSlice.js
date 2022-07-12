import { createSlice } from '@reduxjs/toolkit';
const initialState = {

    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
  ],
  
    monster: {        
        name: "monster",
        pv: 800,
        pvMax: 800,
        mana: 30,
        manaMax: 30,
        id: 5}
  }
export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {},
})
export default fightSlice.reducer