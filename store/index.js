import { configureStore} from '@reduxjs/toolkit';
import itemSlice from './ItemSlice';
import FetchingSlice from './FetchingSlice';
import BagSlice from './BagSlice';
const MyStore = configureStore(
    {reducer: {
        myntraItems : itemSlice.reducer,
        fetching : FetchingSlice.reducer,
        bagitem : BagSlice.reducer,
}});
export default MyStore;
