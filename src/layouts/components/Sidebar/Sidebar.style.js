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
        zIndex: "1030",
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            position: "fixed",
            height: "100%",
            borderRight: "1px solid rgba(0, 0, 0, 0.12)"
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
        backgroundColor: "white",
    },
    active: {

    },
    logoImage: {
        maxWidth: "60px",
        display: "inline-block",
        height: "70px",
        marginLeft: "5px",
        marginRight: "5px",
        float: "left"
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,


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
    expandableIcon: {
        float: "right"
    },
    mobileContent: {
        padding: "10px",
        backgroundColor: 'white'
    },
    mobileAvatar: {
        fontSize: "40px"
    },
    mobileTitle: {
        fontSize: "13px"
    },
    mobileSubTitle: {
        fontSize: "10px"
    },
    mobileTitleContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    hidden: {
        display: 'none'
    },
    itemLink: {
        color: 'black'
    }

});

export default sidebarStyle;