import { forwardRef } from "react";
import { Page1, Page2 } from ".";

export const SectionVertical = forwardRef(({ page1Ref, aboutRef }, ref) => {
  // Traigo del componente padre totalSection las ref con forwardsRef
  return (
    <>
      <Page1 ref={page1Ref} />
      <Page2 ref={aboutRef} />
    </>
  );
});
