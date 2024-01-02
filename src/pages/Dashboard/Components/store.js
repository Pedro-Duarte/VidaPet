import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserInfo";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
