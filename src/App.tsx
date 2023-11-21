import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Grouping } from "./features/Grouping/Grouping";
import { BasicLayout } from "./features/layouts/BasicLayout";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<Grouping />}></Route>
        </Routes>
      </BasicLayout>
    </NextUIProvider>
  );
}

export default App;
