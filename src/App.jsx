import { Loading } from "./components/Loader/Loading";
import { StyleGlobal } from "./style";
import CursorManager from "./style/cursor/CustomManager";
export default function App() {
  return (
    <CursorManager>
      <StyleGlobal />
      <Loading />
    </CursorManager>
  );
}
