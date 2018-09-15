import {
    drawerWidth,
    drawerWidthMobile,
    transition,
    boxShadow,
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor
} from "../dashboard.style.js";

const sidebarStyle = theme => ({
    drawerPaper: {
        border: "none",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "1",
        ...boxShadow,
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            position: "fixed",
            height: "100%"
        },
        [theme.breakpoints.down("sm")]: {
            width: drawerWidthMobile,
            ...boxShadow,
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "auto",
            left: "0",
            zIndex: "1032",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            transform: `translate3d(${drawerWidthMobile}px, 0, 0)`,
            ...transition
        },
        backgroundColor: theme.palette.primary.A400,
    },
    logoImage: {
        maxWidth: "60px",
        display: "inline-block",
        maxHeight: "60px",
        marginLeft: "5px",
        marginRight: "5px",
        marginTop: "5px",
        float: "left"
    },
    img: {
        width: "35px",
        top: "22px",
        position: "absolute",
        verticalAlign: "middle",
        border: "0"
    },
    background: {
        position: "absolute",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: "#000",
            opacity: ".8"
        }
    },
    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset"
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: "#FFFFFF"
        }
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        borderRadius: "3px",
        position: "relative",
        display: "flex",
        padding: "10px 15px",
        backgroundColor: "transparent",
        ...defaultFont,

        [theme.breakpoints.up("md")]: {
            display: "block",
            padding: "5px 5px",
        }
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(255, 255, 255, 0.8)",

        [theme.breakpoints.up("md")]: {
            width: "100%",
            height: "25px"
        }
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,

        [theme.breakpoints.up("md")]: {
            paddingLeft: "0px",
        }
    },
    itemText: {
        ...defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: "#FFFFFF",

        [theme.breakpoints.up("md")]: {
            wordWrap: "break-word",
            padding: "0px 2px",
            textAlign: "center",
            fontSize: "10px"
        }
    },
    whiteFont: {
        color: "#FFFFFF"
    },
    sidebarWrapper: {
        position: "relative",
        height: "calc(100vh - 75px)",
        overflow: "auto",
        width: `${drawerWidthMobile}px`,
        zIndex: "4",
        overflowScrolling: "touch",

        [theme.breakpoints.up("md")]: {
            width: `${drawerWidth}px`,
        }
    },
    activePro: {
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            width: "100%",
            bottom: "13px"
        }
    },
    expandableIcon: {
        float: "right"
    }
});

export default sidebarStyle;