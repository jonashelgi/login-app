import { Box } from "@chakra-ui/react";
import React from "react";
import Wave from "react-wavify";

import { color } from "../../utils";
import styles from "./Waves.module.css";

export interface WavesProps {
  Points?: number;
  Type?: "top" | "bottom";
}

export const Waves = ({ Points = 3, Type = "top" }: WavesProps) => (
  <Box display={"flex"}>
    {Type === "top" && (
      <Wave
        fill={color.main}
        paused={false}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.1,
          points: Points,
        }}
        className={styles.top}
      />
    )}
    {Type === "bottom" && (
      <Wave
        fill={color.second}
        paused={false}
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.1,
          points: Points,
        }}
        className={styles.bottom}
      />
    )}
  </Box>
);

export default Waves;
