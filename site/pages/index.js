import * as React from "react";

import scale from "@laulu.jallu.rodeo/components/dist/utils/scale";
import { stylesheet } from "./index.css";

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    hello{" "}
    {Array(12)
      .fill(null)
      .map((v, i) => i - 5)
      .map(scale)
      .join(", ")}
  </div>
);
