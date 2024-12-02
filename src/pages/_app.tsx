import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";

const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Text to Image, Video and AI Voice Generator Online | ModelsLab
        </title>
      </Head>
      <div className={poppins.className}>
        <ThemeProvider
          enableColorScheme
          enableSystem
          storageKey="theme"
          attribute="class"
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}
