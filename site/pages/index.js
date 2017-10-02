import * as React from "react";

import scale from "@laulu.jallu.rodeo/components/dist/utils/scale";

export default () => (
  <div>
    hello{" "}
    {Array(12)
      .fill(null)
      .map((v, i) => i - 5)
      .map(scale)
      .join(", ")}
  </div>
);
