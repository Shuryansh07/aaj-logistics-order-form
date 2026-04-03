import { useState } from "react";
import styles from "./App.module.css";
import OrderForm from "./components/OrderForm";
import LivePreview from "./components/LivePreview";

export default function App() {
  const [order, setOrder] = useState({
    id: `LC-${Math.floor(Math.random() * 10000)}-SNG`,
    date: "September 24, 2024",
    type: "Standard Delivery",
    sender: { name: "", address: "", city: "", pincode: "" },
    receiver: { name: "", address: "", city: "", pincode: "" },
    packages: [
      {
        id: Date.now(),
        weight: "",
        length: "",
        width: "",
        height: "",
        value: "",
      },
    ],
    fragile: false,
    insured: false,
  });
  return (
    <div className={styles.layout}>
      <main>
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>Create New Shipment</h1>
          <p className={styles.subtitle}>
            Enter shipment details and package metrics for instant routing.
          </p>
        </header>

        <OrderForm order={order} setOrder={setOrder} />
      </main>

      <aside>
        <aside>
          <LivePreview order={order} />
        </aside>
      </aside>
    </div>
  );
}
