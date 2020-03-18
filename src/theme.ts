const theme = {
  fonts: {
    fontFamily: `'Averta', 'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
  },
  colors: {
    primary: '#008C73',
    primaryLight: '#A1D2CA',
    primaryHover: '#B2B5B2',

    // secondary: '#',
    // secondaryLight: '#',
    // secondaryHover: '#',

    // disabled: '#'

    error: '#DB3A3D',
    errorHover: '#C31717',
    placeHolder: '#5D6D74',
    serviceIcon: '#B2B5B2',
    rinkeby: '#E8673C',
    pendingTagHover: '#FBE5C5',

    tag: '#D4D5D3',
    separator: '#E8E7E6',
    inputField: '#F0EFEE',
    background: '#F7F5F5',

    overlay: {
      opacity: '75%',
      color: '#E8E7E6'
    },
    shadow: {
      opacity: '18%',
      color: '#28363D'
    },
    cardShadow: {
      opacity: '59%',
      color: '#D4D4D3'
    }
  },
  buttons: {
    size: {
      xs: '50px',
      sm: '70px',
      md: '90px',
      lg: '90px'
    }
  },
  text: {
    size: {
      xs: {
        fontSize: '11px',
        lineHeight: '14px'
      },
      sm: {
        fontSize: '12px',
        lineHeight: '16px'
      },
      md: {
        fontSize: '14px',
        lineHeight: '20px'
      },
      lg: {
        fontSize: '16px',
        lineHeight: '22px'
      },
      xl: {
        fontSize: '20px',
        lineHeight: '26px'
      }
    }
  },
  loader: {
    size: {
      xs: '10px',
      sm: '30px',
      md: '50px',
      lg: '70px'
    }
  },
  icons: {
    size: {
      sm: '16px',
      md: '24px'
    }
  }
};

export type Theme = typeof theme;

export default theme;
