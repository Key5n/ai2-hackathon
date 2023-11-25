import { Suspense } from "react";
import { Grouping } from "../../features/Grouping/Grouping";
import { Spinner } from "@nextui-org/react";

export function Result() {
  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <Grouping />
      </Suspense>
    </main>
  );
}
