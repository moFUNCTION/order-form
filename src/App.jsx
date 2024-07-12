import { lazy } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { LazyPageWrapper } from "./Components/Common/LazyPageWrapper/LazyPageWrapper";
const Main = lazy(() => import("./Pages/Order/Index"));
const CustomizationForm = lazy(() =>
  import("./Pages/Order/CustomizationForm/Index")
);
const StandardCategoryForm = lazy(() =>
  import("./Pages/Order/CustomizationForm/Catgeories/Standard/Index")
);
const AssemplyCategoryForm = lazy(() =>
  import("./Pages/Order/CustomizationForm/Catgeories/Assemply/Index")
);
const OrderRequistForm = lazy(() => import("./Pages/Order/OrderRequist/Index"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/order" />} />
        <Route
          path="/order"
          element={
            <LazyPageWrapper>
              <Main />
            </LazyPageWrapper>
          }
        >
          <Route
            path="request/:category"
            element={
              <LazyPageWrapper>
                <OrderRequistForm />
              </LazyPageWrapper>
            }
          />
          <Route
            index
            element={<Navigate to="/order/customization-form" replace />}
          />
          <Route
            path="customization-form"
            element={
              <LazyPageWrapper>
                <CustomizationForm />
              </LazyPageWrapper>
            }
          >
            <Route
              index
              element={
                <LazyPageWrapper>
                  <StandardCategoryForm />
                </LazyPageWrapper>
              }
            />
            <Route
              path="standard"
              element={
                <LazyPageWrapper>
                  <StandardCategoryForm />
                </LazyPageWrapper>
              }
            />
            <Route
              path="assembly"
              element={
                <LazyPageWrapper>
                  <AssemplyCategoryForm />
                </LazyPageWrapper>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
