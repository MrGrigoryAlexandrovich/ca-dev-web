import primary from "./colors/primary";
import secondary from "./colors/secondary";
import divider from "./colors/divider";
import text from "./colors/text";
import additional1 from "./colors/additional1";
import additional2 from "./colors/additional2";

export const Theme = {
  palette: {
    primary: {
      main: primary[800],
      ...primary,
    },
    secondary: {
      main: secondary[500],
      dark: secondary[800],
      light: secondary[400],
      ...secondary,
    },
    background: {
      default: "#ECECF1",
      secondary: "#F9F9FF",
    },
    text: {
      primary: text.primary,
      secondary: text.secondary,
      onPrimary: text.onPrimary,
      headlines: text.headlines,
      secondaryVariant2: text.secondaryVariant2,
      secondaryVariant3: text.secondaryVariant3,
      white: text.white,
      selected: text.selected,
    },
    divider: divider[500],
    dividerAndOutline: {
      ...divider,
    },
    states: {
      main: "#D1DBFF",
    },
    info: {
      main: "#5341C7",
    },
    success: {
      main: "#00DA8B",
      700: "#0DB277",
    },
    warning: {
      main: "#FFB03A",
      700: "#ED8E20",
    },
    alert: {
      main: "#F64949",
    },
    vip: `#linear-gradient(270.7deg, 
            #DBA223 -1.25%, #F0C954 25.49%, #FEE085 48.55%, #F0C954 73.19%, #DBA223 96.78%)`,
    other: {
      star: "#FFC700",
    },
    additional1,
    additional2,
  },
  typography: {
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "88px",
      lineHeight: "117%",
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "60px",
      lineHeight: "120%",
      letterSpacing: "-0.5px",
    },
    h2Bold: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "60px",
      lineHeight: "120%",
      letterSpacing: "-0.5px",
    },
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "48px",
      lineHeight: "117%",
      letterSpacing: 0,
    },
    h3Bold: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "117%",
      letterSpacing: 0,
    },
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "124%",
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "133%",
      letterSpacing: 0,
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "120%",
      letterSpacing: 0,
    },
    h7: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "120%",
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "175%",
      letterSpacing: 0,
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "157%",
      letterSpacing: "0.1px",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "160%",
      letterSpacing: "0.15px",
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "143%",
      letterSpacing: "0.15px",
    },
    body3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "143%",
      letterSpacing: "0.15px",
    },
    body4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "143%",
      letterSpacing: "0.15px",
    },
    body5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "12px",
      letterSpacing: "5%",
    },
    body6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "9px",
      lineHeight: "12px",
    },
    body7: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "7.5px",
      lineHeight: "10px",
      letterSpacing: "2%",
    },
    body8: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "21px",
      letterSpacing: "2%",
    },
    body9: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "22.8px",
      letterSpacing: "0.02em",
    },
    body10: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "143%",
      letterSpacing: "0.15px",
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "146%",
      letterSpacing: "0.4px",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "166%",
      letterSpacing: "0.4px",
    },
    caption2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "166%",
      letterSpacing: "0.4px",
    },
    caption3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "166%",
      letterSpacing: "0.4px",
    },
    caption4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: "166%",
      letterSpacing: "0.4px",
    },
    overline: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "266%",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    tooltipTitle: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "9px",
      lineHeight: "11px",
      letterSpacing: "0.05em",
    },
    tooltipBody: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "10.5px",
      lineHeight: "13px",
      letterSpacing: "0.02em",
    },
    statsTitle: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "11px",
      lineHeight: "14.3px",
      letterSpacing: "0.03em",
    },
    insightsTitle: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "15px",
      lineHeight: "17.58px",
      letterSpacing: "0.16px",
    },
    subscript: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "133%",
      letterSpacing: 0,
    },
  },
  shadows: [
    "none",
    "-3.75px -3.75px 7.5px rgba(255, 255, 255, 0.3), 3.75px 3.75px 11.25px rgba(178, 182, 196, 0.3)",
    "0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
    "0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)",
    "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12)",
  ],
  components: {
    MuiAppBar: {
      root: {
        backgroundColor: primary[800],
      },
    },
    MuiPaper: {
      styleOverrides: {
        secondary: {
          backgroundColor: "#F9F9FF",
        },
        sidebar: {
          backgroundColor: primary[700],
          borderRadius: 0,
        },
        header: {
          backgroundColor: primary[700],
          borderRadius: 0,
        },
        autocompleteDropdown: {
          backgroundColor: primary[600],
          color: "#fff",
          "& li:hover": {
            backgroundColor: "#D1DBFF !important",
            color: primary[800],
          },
          "& .Mui-focused": {
            backgroundColor: "#D1DBFF !important",
            color: primary[800],
            "& .MuiSvgIcon-root": {
              color: text.primary,
            },
          },
          scrollbarWidth: "thin",
          scrollbarColor: `${primary[400]} ${primary[100]}`,
          "& ::-webkit-scrollbar": {
            width: 9,
          },
          "& ::-webkit-scrollbar-thumb": {
            background: primary[400],
          },
          "& ::-webkit-scrollbar-track": {
            background: primary[100],
          },
          "& .MuiSvgIcon-root": {
            color: primary[100],
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          color: text.secondary,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: secondary[400],
        },
      },
      variants: [
        {
          props: { variant: "pointer" },
          style: {
            cursor: "pointer",
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff !important",
          "& fieldset": {
            border: "1px solid #fff !important",
            color: "#fff !important",
          },
          "& fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid #9A9FAF",
          },
          "&.Mui-focused fieldset": {
            border: "1.5px solid #fff",
          },
          "&.Mui-error": {
            color: "red !important",
          },
          "&.Mui-error fieldset": {
            border: "1.5px solid red !important ",
          },
        },
        input: {
          fontSize: "14px",
          "&:-webkit-autofill": {
            transitionDelay: "9999s",
            transitionProperty: "color, #fff, background-color,black",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          // When you change this fontSize, then you also have to change legend's fontSize
          fontSize: 14,
          color: "#fff !important",
          "&.Mui-focused": {
            color: "#fff !important",
          },
          "&.Mui-error": {
            color: "red !important",
          },
        },
        colorSecondary: {
          color: "#9A9FAF",
          "&.Mui-focused": {
            color: "#D3D6E0 !important",
          },
        },
        asterisk: {
          color: "#d32f2f",
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined", disabled: true },
          style: {
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "1px solid #CCCCCC !important",
            },

            "& .MuiFormLabel-root.Mui-disabled": {
              color: "#CCCCCC",
            },
          },
        },
        {
          props: { variant: "outlined", disabled: true, color: "secondary" },
          style: {
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "1px solid #7F7F7F !important",
            },
            "& .MuiFormLabel-root.Mui-disabled": {
              color: "#7F7F7F",
            },
          },
        },
        {
          props: { variant: "outlined", specialvariant: "basicInput" },
          style: {
            display: "flex",
            "& .MuiInputBase-input": {
              flex: 1,
              fontWeight: 600,
              fontSize: 16,
              padding: "6.5px 10px",
              textAlign: "center",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          "& legend": {
            fontSize: 10.5,
          },
          "& .MuiSvgIcon-root": {
            color: `${divider[700]} !important`,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: `${divider[700]} !important`,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: secondary[100],
          },
          minHeight: "48px !important",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primary[400],
          "&:hover": {
            background: "#9f9d9d29",
          },
          "&:disabled": {
            color: "#4C4C4C",
          },
        },
      },
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { variant: "test" },
          style: {
            color: "red !important",
          },
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          color: "#568fd2",
          "&$checked": {
            color: "#568fd2",
          },
        },

        label: {
          fontSize: "0.8rem",
        },
      },
    },
    MuiAutocomplete: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            root: {
              fontSize: "0.7rem",
            },
            input: {
              color: text.onPrimary,
            },
          },
        },
        {
          props: { color: "secondary" },
          style: {
            input: {
              color: text.primary,
            },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
        sizeLarge: {
          fontWeight: 500,
          fontSize: "15px",
          lineHeight: "173%",
          padding: "8px 22px",
        },
        sizeMedium: {
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "171%",
          padding: "6px 16px",
        },
        sizeSmall: {
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "169%",
          padding: "4px 10px",
        },
        autocompleteButton: {
          color: "#5073E8",
          "&:hover": {
            background: "transparent",
          },
          "&:disabled": {
            color: "#D32F2F",
            "-webkit-text-fill-color": "inherit !important",
          },
        },
        containedPrimary: {
          background: "#5073E8",
          color: "#FFFFFF",
          "&:hover": {
            background: "#304BA8",
          },
          "&:disabled": {
            background: "#D3D6E0",
            color: "#9A9FAF",
          },
        },
        containedSecondary: {
          background: "#7645C3",
          color: "#FFFFFF",
          "&:hover": {
            background: "#441090",
          },
          "&:disabled": {
            background: "#DDD1EF",
            color: "#BBA3E1",
          },
        },
        outlinedPrimary: {
          border: "1px solid #5073E8 !important",
          color: "#5073E8",
          "&:hover": {
            background: "#EEF1FD",
          },
          "&:disabled": {
            border: "1px solid #D3D6E0 !important",
            color: "#D3D6E0",
          },
        },
        outlinedSecondary: {
          border: "1px solid #7645C3 !important",
          color: "#7645C3",
          "&:hover": {
            background: "#EEE8F8",
          },
          "&:disabled": {
            border: "1px solid #DDD1EF !important",
            color: "#BBA3E1",
          },
        },
        textPrimary: {
          color: "#5073E8",
          "&:hover": {
            color: "#304BA8",
            background: "transparent",
          },
          "&:disabled": {
            color: "#9A9FAF",
          },
        },
        textSecondary: {
          color: "#fff",
          "&:hover": {
            color: "#441090",
            background: "transparent",
          },
          "&:disabled": {
            color: "#BBA3E1",
          },
        },
        vip: {
          color: "#615124",
          background:
            "linear-gradient(270.7deg, #DBA223 -1.25%, #F0C954 40.54%, #F0C954 64.13%, #EFD37E 97.59%)",
          "&:hover": {
            background:
              "linear-gradient(267.03deg, #5F5132 -73.99%, #A78436 10.88%, #D6B247 80.8%)",
            backgroundBlendMode: "overlay, normal",
          },
          "&:disabled": {
            color: "#625225",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(270.7deg, #DBA223 -1.25%, #F0C954 25.49%, #FEE085 48.55%, #F0C954 73.19%, #DBA223 96.78%)",
            backgroundBlendMode: "darken, normal",
          },
        },
        subscribe: {
          color: "#FFFFFF",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(266.99deg, #161616 -6.18%, #535353 97.97%)padding-box, linear-gradient(270.7deg, #DBA223 -1.25%, #F0C954 40.54%, #F0C954 64.13%, #EFD37E 97.59%)border-box",
          border: "1.9px solid transparent",
          borderRadius: "10px",
          "&:hover": {
            color: "#000000",
            background:
              "linear-gradient(267.03deg, #5F5132 -73.99%, #A78436 10.88%, #D6B247 80.8%)",
            backgroundBlendMode: "overlay, normal",
          },
          "&:disabled": {
            color: "#858585",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(266.99deg, #161616 -6.18%, #535353 97.97%)padding-box, linear-gradient(267.03deg, #5F5132 -73.99%, #A78436 10.88%, #D6B247 80.8%)border-box",
            backgroundBlendMode: "darken, normal",
          },
        },
        menuItem: {
          color: "#ccc",
          textTransform: "capitalize",
          "&:hover": {
            color: "#5073E8",
          },
          fontSize: "15px !important",
          "&.Mui-disabled": {
            // Enables tooltip for disabled buttons
            pointerEvents: "auto",
            cursor: "pointer",
            color: "#4C4C4C",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          border: "1px solid #D3D6E0",
          background: "#F5F5F5",
          color: "#7F7F7F",
          fontSize: "12px",
          "&:hover": {
            background: "#D1DBFF",
            color: "#7F7F7F",
            border: "1px solid #7F7F7F",
            "& .MuiChip-deleteIcon": {
              color: "#7F7F7F !important",
            },
          },
        },
        deleteIcon: {
          color: "#D3D6E0 !important",
        },
        stack1: {
          background: additional1.main,
          border: `1.5px solid ${additional1[900]}`,
          borderRadius: "8px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 500,
          "&:hover": {
            background: additional1.main,
            border: `1.5px solid ${additional1[900]}`,
            borderRadius: "8px",
            color: "#fff",
          },
        },
        stack2: {
          background: additional2.main,
          border: `1.5px solid ${additional2[900]}`,
          borderRadius: "8px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 500,
          "&:hover": {
            background: additional2.main,
            border: `1.5px solid ${additional2[900]}`,
            borderRadius: "8px",
            color: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          filter:
            "drop-shadow(-3.75px -3.75px 7.5px rgba(255, 255, 255, 0.3)) drop-shadow(3.75px 3.75px 11.25px rgba(178, 182, 196, 0.3))",
          borderRadius: "4px",
          background: "#FFFFFF",
          "&:hover": {
            background: "#D1DBFF",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "#9A9FAF",
          borderRadius: "4px",
          fontSize: "10px",
          fontWeight: 500,
          lineHeight: "140%",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: "#F5F5F5 !important",
          color: "#7F7F7F",
          filter: "drop-shadow(0px 1.5px 1.5px rgba(0, 0, 0, 0.3))",
          "&:hover": {
            background: "#7F7F7F !important",
            color: "#FFFFFF",
          },
          "&:active": {
            background: "#000000 !important",
            color: "#FFFFFF",
          },
          "&:disabled": {
            background: "#D3D6E0 !important",
            color: "#9A9FAF",
          },
        },
        secondary: {
          background: "#5073E8 !important",
          color: "#FFFFFF !important",
          filter: "drop-shadow(0px 1.5px 1.5px rgba(0, 0, 0, 0.3))",
          "&:hover": {
            background: "#304BA8 !important",
            color: "#FFFFFF",
          },
          "&:active": {
            background: "#6B8AFF !important",
            color: "#FFFFFF",
          },
          "&:disabled": {
            background: "#D3D6E0 !important",
            color: "#9A9FAF",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider[500]}`,
        },
      },
    },
    MuiSwitch: {
      variants: [
        {
          // Normal switch
          props: { variant: undefined },
          style: {
            "& .MuiSwitch-switchBase": {
              color: primary[50],
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: divider[300],
              },
              "& .MuiSwitch-thumb": {
                boxShadow:
                  "0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
              },
              "&.Mui-checked": {
                color: secondary[500],
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: secondary[200],
                },
              },
              "&.Mui-disabled": {
                color: divider[300],
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: divider[700],
                },
              },
            },
          },
        },
        {
          props: { variant: "alwaysOn" },
          style: {
            "& .MuiSwitch-switchBase": {
              color: secondary[500],
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: secondary[200],
              },
              "& .MuiSwitch-thumb": {
                boxShadow:
                  "0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
              },
              "&.Mui-checked": {
                color: secondary[500],
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: secondary[200],
                },
              },
              "&.Mui-disabled": {
                color: divider[300],
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: divider[700],
                },
              },
            },
          },
        },
      ],
    },
    MuiAlert: {
      styleOverrides: {
        action: {
          alignItems: "center",
          padding: "0 0 0 16px",
          "& .MuiSvgIcon-root": {
            color: text.white,
          },
        },
        filledSuccess: {
          backgroundColor: "#0DB277",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow:
            "0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12) !important",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        textSecondary: {
          color: "#fff",
        },
        icon: {
          color: "#fff",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#F9F9FF",
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#FFC700",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: 20,
        },
        indicator: {
          bottom: 8,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 40,
          padding: 8,
          borderBottom: "2px solid #e0e0e0",
          color: primary[600],
        },
      },
    },
    MuiFormControl: {
      variants: [
        {
          props: { variant: "outlined", chartVariant: true },
          style: {
            "& .MuiInputBase-root": {
              borderRadius: 1.5,
              "& .MuiOutlinedInput-notchedOutline": {
                border: `0.6px solid ${divider[300]} !important`,
              },
            },
            "& .MuiSelect-select": {
              fontSize: 9,
              padding: "3.5px 21px 2.5px 6.3px",
              borderRadius: 1.5,
            },
            "& .MuiSvgIcon-root": {
              color: `${primary[400]} !important`,
              width: 20,
            },
          },
          // Menu styles for the special select component inside charts.
          // Can be accessed through theme.components.MuiFormControl.variants[0].MenuStyle
          MenuStyle: {
            maxHeight: 120,
            width: 205,
            color: text.secondary,
            "& .MuiMenuItem-root": {
              minHeight: "20px !important",
              fontSize: 9,
              "&:hover": {
                background: "none",
                fontWeight: 500,
                color: text.secondaryVariant2,
              },
              "&.Mui-selected": {
                background: "none",
              },
              "&.Mui-focusVisible": {
                backgroundColor: "transparent",
                color: text.secondaryVariant2,
              },
            },
            scrollbarWidth: "thin",
            scrollbarColor: `${primary[400]} ${primary[100]}`,
            "&::-webkit-scrollbar": {
              width: 9,
            },
            "&::-webkit-scrollbar-thumb": {
              background: primary[400],
            },
            "&::-webkit-scrollbar-track": {
              background: primary[100],
            },
          },
          // Menu styles for the filter select component.
          // Can be accessed through theme.components.MuiFormControl.variants[0].FilterMenuStyle
          FilterMenuStyle: {
            backgroundColor: primary[600],
            color: "#fff",
            "& .MuiMenuItem-root": {
              "&:hover": {
                backgroundColor: "#D1DBFF !important",
                color: primary[800],
                "& .MuiSvgIcon-root": {
                  color: text.primary,
                },
              },
              "&.Mui-selected": {
                backgroundColor: "#D1DBFF !important",
                color: primary[800],
                "& .MuiSvgIcon-root": {
                  color: `${secondary[500]} !important`,
                },
              },
              "&.Mui-focusVisible": {
                backgroundColor: "#D1DBFF",
                color: primary[800],
                "& .MuiSvgIcon-root": {
                  color: text.primary,
                },
              },
              scrollbarWidth: "thin",
              scrollbarColor: `${primary[400]} ${primary[100]}`,
              "& ::-webkit-scrollbar": {
                width: 9,
              },
              "& ::-webkit-scrollbar-thumb": {
                background: primary[400],
              },
              "& ::-webkit-scrollbar-track": {
                background: primary[100],
              },
              "& .MuiSvgIcon-root": {
                color: primary[100],
              },
            },
          },
        },
      ],
    },
  },
};
