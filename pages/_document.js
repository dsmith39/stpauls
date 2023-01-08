import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="backdrop-root">
          <div id="overlay-root"></div>
        </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
