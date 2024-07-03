import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("inside _app");
  return (
    <main style={{ display: "grid", gap: "2rem" }}>
      <header>
        <h1>header</h1>
      </header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </main>
  );
}
