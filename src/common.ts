import { createTheme } from "@mui/material";
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export interface ICard {
    text: string;
    title: string;
    subHeader: string;
    header: string;
}
export const StyledToolbar = styled(Toolbar)(() => ({
    justifyContent: 'end',
    flexGrow: 1,
    borderBottom: '5px solid #CCCCCC',
}));
export const StyledButton = styled(Button)(() => ({
    borderRadius: '20px',
}));