import { LoaderPage, LoaderStyle, LoaderCircle, LoaderShadow } from "../styles/loader-style";

const Loader = () => {
  return (
    <LoaderPage>
      <LoaderStyle>
        <LoaderCircle />
        <LoaderCircle />
        <LoaderCircle />
        <LoaderShadow />
        <LoaderShadow />
        <LoaderShadow />
      </LoaderStyle>
    </LoaderPage>
  );
};

export default Loader;
