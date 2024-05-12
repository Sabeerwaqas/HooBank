import logo from './logo.svg';
import './App.css';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Footer from './layout/footer/Footer';
import Home from './pages/home/Home';

let theme = createTheme();
theme = responsiveFontSizes(theme);



function App() {
  return (
    <Box component={"main"}>
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
