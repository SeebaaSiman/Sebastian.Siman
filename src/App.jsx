import CustomCursor from "./components/CustomCursor";
import useDeviceType from "./hook/useDeviceType";
import { usePageVisibility } from "./hook/usePageVisibility";
import Home from "./views/Home";

function App() {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  const deviceType = useDeviceType();

  return (
    <>
      {deviceType === "desktop" && <CustomCursor />}
      <Home deviceType={deviceType} />
    </>
  );
}

export default App;
