import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

const pageAnimationConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function AnimatableOutlet() {
  const { pathname }: { pathname: string } = useLocation();

  return (
    <motion.div
      key={pathname}
      variants={pageAnimationConfig}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}>
      <Outlet />
    </motion.div>
  );
}

export default AnimatableOutlet;
