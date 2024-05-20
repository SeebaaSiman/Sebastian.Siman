import { useEffect, useState } from "react"

export const useScrollTop = () => {
 const [scrollValue, setScrollValue] = useState(0);

 useEffect(() => {
  const handleScroll = (event) => {
   setScrollValue(window.scrollY);
  }
  window.addEventListener("scroll", handleScroll)
  return () => {
   window.removeEventListener("scroll", handleScroll)
  }
 }, [])

 return { scrollValue }
}
