'use client';
import { LazyMotion, domMax, m } from 'framer-motion';
import { ReactNode } from 'react';
type props = {
  children: ReactNode[] | ReactNode;
};
export default function PageTransition({ children }: props) {
  return (
    <LazyMotion features={domMax}>
      <m.div layout>{children}</m.div>
    </LazyMotion>
  );
}
