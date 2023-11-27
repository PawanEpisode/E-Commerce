"use client";

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store, persistor } from "@/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider>{children}</SessionProvider>
        </PersistGate>
      </Provider>
    )
}

export default Layout