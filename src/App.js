import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFounPage, PostsPage, UsersPage} from "./pages";

const App = () => {
    return(
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'posts'} element={<PostsPage/>}/>
              <Route path={'about'} element={<AboutPage/>}/>
              <Route path={'*'} element={<NotFounPage/>}/>
          </Route>
      </Routes>

    );
};

export default App;