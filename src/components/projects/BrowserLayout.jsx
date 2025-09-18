import { useCustomCursorContext, useLanguage } from "../../hook/useContextProvider";
import {
  BrowserStyle,
  BrowserWrapper,
  BrowserCircles,
  BrowserTab,
  BrowserChevrons,
  BrowserSearchBar,
  BrowserContent,
} from "../../styles/product-detail-style";

export const BrowserLayout = ({ children, projectUrl, projectTitle }) => {
  const { texts } = useLanguage();
  const { handleCursorNotSize, handleCursorSmall } = useCustomCursorContext();
  return (
    <BrowserStyle className='browser-container'>
      <BrowserWrapper className='browser-circles'>
        <BrowserCircles className='circles'>
          <div className='c'></div>
          <div className='c'></div>
          <div className='c'></div>
        </BrowserCircles>
        <BrowserTab className='browser-tab'>
          <BrowserChevrons className='chevrons'>
            <svg viewBox='0 0 20 20' height='16' width='16' xmlns='http://www.w3.org/2000/svg' data-name='20' id='_20'>
              <path
                transform='translate(6.25 3.75)'
                d='M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z'
                id='Fill'
              ></path>
            </svg>
            <svg viewBox='0 0 20 20' height='16' width='16' xmlns='http://www.w3.org/2000/svg' data-name='20' id='_20'>
              <path
                transform='translate(6.625 3.75)'
                d='M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z'
                id='Fill'
              ></path>
            </svg>
          </BrowserChevrons>
          <BrowserSearchBar className='search-bar'>
            <a href={projectUrl} target='_blank' onMouseEnter={handleCursorNotSize} onMouseLeave={handleCursorSmall}>
              {texts.buttonVisit} {projectTitle}
            </a>
          </BrowserSearchBar>
        </BrowserTab>
      </BrowserWrapper>
      <BrowserContent>{children}</BrowserContent>
    </BrowserStyle>
  );
};
