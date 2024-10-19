  import { createSlice, PayloadAction } from '@reduxjs/toolkit';

  interface Amenity {
    name: string;
    available: boolean;
  }

  interface Advert {
    id: number;
    address: string;
    dealType: string;
    price: number;
    area: number;
    bedrooms: number;
    floor: number;
    publicationDate: string;
    images: string[];
    amenities: Amenity[];
    unitsPerFloor: number;
    orientation: string;
    propertyType: string;
    description: string;
    totalFloors: number;
    ownerName: string;
    ownerContact: string;
    documentStatus: string;
  }

  interface AdvertsState {
    adverts: Advert[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }

  const initialState: AdvertsState = {
    adverts: [],
    status: 'idle',
  };

  const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    reducers: {
      setAdverts(state, action: PayloadAction<Advert[]>) {
        state.adverts = action.payload;
      },
      addAdvert(state, action: PayloadAction<Advert>) {
        state.adverts.push(action.payload);
      },
      updateAdvert(state, action: PayloadAction<Advert>) {
        const index = state.adverts.findIndex(ad => ad.id === action.payload.id);
        if (index !== -1) {
          state.adverts[index] = action.payload;
        }
      },
      removeAdvert(state, action: PayloadAction<number>) {
        state.adverts = state.adverts.filter(ad => ad.id !== action.payload);
      },
    },
  });

  export const { setAdverts, addAdvert, updateAdvert, removeAdvert } = advertsSlice.actions;

  export default advertsSlice.reducer;
