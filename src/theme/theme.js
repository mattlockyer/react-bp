const font = {
  fontFamily: "'IBM Plex Mono', monospace !important",
}
const rootFont = { root: font }

export default {
  palette: {
    primary: {
      main: '#F00',
    },
  },
  overrides: {
    MuiTypography: rootFont,
    MuiButton: { ...rootFont, outlined: { borderRadius: 0 } },
    MuiBottomNavigationAction: { label: font },
  },
}