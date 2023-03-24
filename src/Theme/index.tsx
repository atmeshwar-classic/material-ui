import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {

    interface Palette {
        tertiary: PaletteColor,
        outline: PaletteColor
    }

    interface PaletteOptions {
        tertiary : PaletteOptions['primary'],
        outline : PaletteOptions['primary'],
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#6750A4',
            light:'#EADDFF',
            dark:'#21005D',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#625B71',
            light:'#E8DEF8',
            dark:'#1D192B',
            contrastText: '#FFFFFF'
        },
        error: {
            main: '#B3261E',
            light:'#F9DEDC',
            dark:'#410E0B',
            contrastText: '#FFFFFF'
        },
        tertiary: {
            main: '#7D5260',
            light: '#FFD8E4',
            dark: '#31111D',
            contrastText: '#FFFFFF'
        },
        background: {
            default: '#FFFBFE',
            paper: '#FFFBFE'
        },
        outline: {
            main: '#79747E',
            dark: '#CAC4D0'
        }
        
        
    }
})

export default theme