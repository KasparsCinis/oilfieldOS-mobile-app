import {
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor
} from "../dashboard.style";

const headerStyle = theme => ({
    appBar: {
        backgroundColor: theme.palette.primary.A100,
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        position: "fixed",

        paddingTop: "10px",
        zIndex: "1029",
        color: "#555555",
        border: "0",
        borderRadius: "3px",
        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block",
        [theme.breakpoints.up("md")]: {
            backgroundColor: theme.palette.primary.A400,
        },
        [theme.breakpoints.up("sm")]: {
            backgroundColor: theme.palette.primary.A700,
        },
    },
    appNormal: {
        width: 'calc(100% - 260px)',
    },
    hidden: {
        [theme.breakpoints.down("md")]: {
            transform: 'translateY(-110%)',
            transition: 'transform .5s',
        },
    },
    container: {
        ...container,
        minHeight: "50px"
    },
    flex: {
        flex: 1
    },
    title: {
        ...defaultFont,
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        margin: "0",
        "&:hover,&:focus": {
            background: "transparent"
        }
    },
    appResponsive: {
        top: "8px"
    },
    primary: {
        backgroundColor: primaryColor,
        color: "#FFFFFF",
        ...defaultBoxShadow
    },
    info: {
        backgroundColor: infoColor,
        color: "#FFFFFF",
        ...defaultBoxShadow
    },
    success: {
        backgroundColor: successColor,
        color: "#FFFFFF",
        ...defaultBoxShadow
    },
    warning: {
        backgroundColor: warningColor,
        color: "#FFFFFF",
        ...defaultBoxShadow
    },
    danger: {
        backgroundColor: dangerColor,
        color: "#FFFFFF",
        ...defaultBoxShadow
    }
});

export default headerStyle;