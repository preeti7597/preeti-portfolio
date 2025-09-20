import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Roboto_Slab } from "next/font/google";

// Load Roboto Slab with weights you need
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: robotoSlab.style.fontFamily, // ✅ use Roboto Slab in MUI
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Apply to whole app (Tailwind + custom elements) */}
      <main className={robotoSlab.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
