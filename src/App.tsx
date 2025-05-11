import { Navigate, Route, Routes } from "react-router-dom";
import routesPages from "./config/routes/routesPages";
import PageTitleManager from "./utils/PageTitleManager";

import React from "react";
function App() {
  return (
    <>
      <PageTitleManager />
      <Routes>
        {routesPages.map((route) => {
          const Layout = route.layout || React.Fragment;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
