import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BtnContext, BtnContextData, DefaultBtnContextProvider } from './components/context/btnContext';
import Header from './components/layout/header';
import Custompage from './components/page/custompage';
import OpenMenuPage from './components/page/menuListPage';
import EditButtonPage from './components/page/editButtonPage';
import LoginPage from './components/page/loginPage';
import Mainpage from './components/page/mainPage';
// import TestPage from './components/page/testPage';
import ProtoTestPage from './components/page/testPageHer';
import MapPage from './components/page/mapPage';
const App = (): JSX.Element => {
  console.log(BtnContextData);
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '',
    '/main': '홈',
    '/edit': '단축 편집 버튼',
    '/custom': '카테고리 선택',
    '/login': '로그인',
    '/signUp': '회원가입',
    '/open': '햄버거 버튼 메뉴 선택'
  };
  React.useEffect(() => {
    // switch (location.pathname) {
    //     case "/" :
    //         setPageTitle("테스트");
    //     break;
    //     case "/home" :
    //         setPageTitle("홈")
    // }
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <div>
      <Header title={pageTitle} />
      <DefaultBtnContextProvider>
      <BtnContext.Provider value={BtnContextData}>
        <Routes>
          <Route path="/" element={<ProtoTestPage />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/custom" element={<Custompage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/open" element={<OpenMenuPage />} />
          <Route path="/edit/:value/:image/:name" element={<EditButtonPage />} />
        </Routes>
      </BtnContext.Provider>
      </DefaultBtnContextProvider>
    </div>
  );
};

export default App;
