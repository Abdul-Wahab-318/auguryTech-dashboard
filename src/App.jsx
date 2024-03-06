import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signin from "./pages/Signin/Signin.jsx"
import AdminLayout from "./layouts/AdminLayout/AdminLayout.jsx"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from 'react-redux'
import store from './redux/store/store';
import Team from './pages/Team/Team.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Categories from './pages/Categories/Categories.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000" ,
    } ,
    secondary : {
      main: "#3321FF"
    } ,
    light : {
      main : "#8E8E8E" ,
      dark : "#D9D9D9"
    }
  }
});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<AdminLayout/>}>
              <Route index element={<Team/>} />
              <Route exact path="projects" element={<Projects/>} />
              <Route exact path="categories" element={<Categories/>} />
            </Route>
            <Route exact path="/login" element={<Signin/>} />
          </Routes>
        </BrowserRouter>

      </Provider>
    </ThemeProvider>
    </>
  )
}

export default App
