import {
    container,
    defaultFont,
    primaryColor,
    defaultBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    drawerWidth
} from "../dashboard.style";

const headerStyle = theme => ({
    appBar: {
        backgroundColor: theme.palette.primary.A400,
        borderBottom: "0",
        marginBottom: "0",
        position: "fixed",
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
        paddingTop: "10px",
        zIndex: "1029",
        color: "#ffffff",
        border: "0",

        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block",

    },
    appNormal: {
        width: `calc(100% - ${drawerWidth}px)`,
        padding:'3px'
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
});

export default headerStyle;