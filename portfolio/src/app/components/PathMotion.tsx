/** @jsxImportSource @emotion/react */

import * as React from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

const PathMotionContainer = css`
  width: 150px;
  height: 150px;
  display: flex;
  place-content: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
`;

const PathMotionSvg = css`
  width: 56%;
  overflow: visible;
  stroke: #fff;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const PathMotion = () => (
  <div css={[PathMotionContainer]}>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      css={[PathMotionSvg]}
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
);

export default PathMotion;
