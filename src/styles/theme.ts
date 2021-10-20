import { extendTheme, ThemeConfig, useColorMode } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

export const theme = extendTheme({
    components: {
        Steps,
      },
    colors: {
        gray: {
            "900": "#111113",
            "800": "#242424",
            "300": "#3d3d3d",
            "100": "#d7d7d7",
            "50": "#f2f2f3"
        },
        green: {
            "300": "#04D361"
        },

        purple: {
            "300": "#8257E5" 
        },
    },
    fonts: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif',
    },

    styles: {
        global: (theme) => ({
            body: {
                bg: theme.colorMode === 'dark' ? 'gray.800' : 'gray.50',
                color: 'gray.50',
            }
        })
    }
})