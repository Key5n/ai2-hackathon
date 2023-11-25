import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Grouping } from "./features/Grouping/Grouping";
import { BasicLayout } from "./features/layouts/BasicLayout";
import { Result } from "./pages/{groupId}/result";
import { Test } from "./pages/{groupId}/test";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<Grouping />}></Route>
          <Route path="/:classId/result" element={<Result />}></Route>
          <Route path="/:classId/test" element={<Test />}></Route>
        </Routes>
      </BasicLayout>
    </NextUIProvider>
  );
}

export default App;
