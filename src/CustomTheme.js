import {
    teal100, cyan700,
    greenA200, tealA700,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack, lightBlue600,
} from 'material-ui/styles/colors';
import { fade, darken } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: {
        primary1Color: white,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: tealA700,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        secondaryTextColor: fade(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(white, 0.3),
        pickerHeaderColor: teal100,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
    stepper: {
        iconColor: tealA700
    },
    raisedButton: {
        disabledColor: darken(white, 0.1),
        primaryTextColor: lightBlue600,
    },
};