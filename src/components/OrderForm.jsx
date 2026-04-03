import styles from "./OrderForm.module.css";

export default function OrderForm({ order, setOrder }) {
  const handleNestedChange = (category, field, value) => {
    setOrder((prev) => ({
      ...prev,
      [category]: { ...prev[category], [field]: value },
    }));
  };

  return (
    <div className={styles.formContainer}>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <span>↗</span> Sender Details
        </h2>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            className={styles.input}
            placeholder="Global Trade Inc."
            value={order.sender.name}
            onChange={(e) =>
              handleNestedChange("sender", "name", e.target.value)
            }
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Street Address</label>
          <input
            className={styles.input}
            placeholder="Industrial Park South, Bldg 4"
            value={order.sender.address}
            onChange={(e) =>
              handleNestedChange("sender", "address", e.target.value)
            }
          />
        </div>

        <div className={styles.grid2Col}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>City</label>
            <input
              className={styles.input}
              placeholder="Rotterdam"
              value={order.sender.city}
              onChange={(e) =>
                handleNestedChange("sender", "city", e.target.value)
              }
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Pincode</label>
            <input
              className={styles.input}
              placeholder="3011 AL"
              value={order.sender.pincode}
              onChange={(e) =>
                handleNestedChange("sender", "pincode", e.target.value)
              }
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>
          <span>→</span> Receiver Details
        </h2>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            className={styles.input}
            placeholder="Pacific Electronics"
            value={order.receiver.name}
            onChange={(e) =>
              handleNestedChange("receiver", "name", e.target.value)
            }
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Street Address</label>
          <input
            className={styles.input}
            placeholder="888 Marina Blvd"
            value={order.receiver.address}
            onChange={(e) =>
              handleNestedChange("receiver", "address", e.target.value)
            }
          />
        </div>

        <div className={styles.grid2Col}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>City</label>
            <input
              className={styles.input}
              placeholder="Singapore"
              value={order.receiver.city}
              onChange={(e) =>
                handleNestedChange("receiver", "city", e.target.value)
              }
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Pincode</label>
            <input
              className={styles.input}
              placeholder="018989"
              value={order.receiver.pincode}
              onChange={(e) =>
                handleNestedChange("receiver", "pincode", e.target.value)
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
