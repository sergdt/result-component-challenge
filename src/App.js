import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  
  const theme = createTheme({
    borderRadius: '1px',
    palette: {
      neutral: {
        main: 'hsl(224, 30%, 27%)',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div className='main-container'>
      <div className='left-container'>
        <div className='title-result'>
          <h1>Your Result</h1>
        </div>
        <div className='circle-result'>
          <h2>76 of 100</h2>
        </div>
        <div className='result'>
          <h1>Great</h1>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className='right-container'>
        <div className='title-summary'>
          <h1>Summary</h1>
        </div>
        <div className='summary-container'>
          <ul>
            <li>Reaction 80/100</li>
            <li>Memory 92/100</li>
            <li>Verbal 61/100</li>
            <li>Visual 72/100</li>
          </ul>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color='neutral'>Continue</Button>
          </ThemeProvider>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
