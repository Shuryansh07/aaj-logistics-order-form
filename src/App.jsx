import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.layout}>
      <main>
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>Create New Shipment</h1>
          <p className={styles.subtitle}>
            Enter shipment details and package metrics for instant routing.
          </p>
        </header>

        <div
          style={{
            padding: "2rem",
            backgroundColor: "#f2f4f6",
            borderRadius: "8px",
          }}
        >
          [Form Placeholder]
        </div>
      </main>

      <aside>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          [Manifest Placeholder]
        </div>
      </aside>
    </div>
  );
}
