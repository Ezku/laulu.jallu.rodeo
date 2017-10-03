import * as React from "react";
import Head from "next/head";

import scale from "@laulu.jallu.rodeo/components/dist/utils/scale";
import { stylesheet } from "./index.css";

export default () => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    hello{" "}
    {Array(12)
      .fill(null)
      .map((v, i) => i - 5)
      .map(scale)
      .join(", ")}
  </div>
);
