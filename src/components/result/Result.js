import React from 'react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Result.css'

const Result = () => {
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
                    <h2>76 of 1sd00</h2>
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
                    <div className='summary-list'>
                        <li className='reaction-item'>Reaction 80/100</li>
                        <li className='memory-item'>Memory 92/100</li>
                        <li className='verbal-item'>Verbal 61/100</li>
                        <li className='visual-item'>Visual 72/100</li>
                    </div>
                    <div className='btn'>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color='neutral'>Continue</Button>
                        </ThemeProvider>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Result