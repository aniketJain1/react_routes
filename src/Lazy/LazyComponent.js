// import LargeData from "./LargeData";
// import LessData from "./LessData";
import React, { Suspense, lazy } from "react";

const LessData = lazy(() => import("./LessData"));
const LargeData = lazy(() => import("./LargeData"));

function LazyComponent() {
  return (
    <div>
      <Suspense fallback={<div> LOADING... LessData </div>}>
        <LessData />
      </Suspense>
      <Suspense fallback={<div> LOADING... LargeData </div>}>
        <LargeData />
      </Suspense>
    </div>
  );
}

export default LazyComponent;
