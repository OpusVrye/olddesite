import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: { main: '#263238' },
    },
    status: {
        danger: 'orange',
    },
});

export default theme


