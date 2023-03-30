import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollHorizontal = (sliderRef, panelCount) => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: 100 * (panelCount - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: sliderRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + sliderRef.current.offsetWidth,
                },
            });
        }, sliderRef.current);

        return () => ctx.revert();
    }, [sliderRef, panelCount]);
};

export default useScrollHorizontal;
