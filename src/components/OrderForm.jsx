import styles from "./OrderForm.module.css";

export default function OrderForm({ order, setOrder }) {
  const handleNestedChange = (category, field, value) => {
    setOrder((prev) => ({
      ...prev,
      [category]: { ...prev[category], [field]: value },
    }));
  };

  const addPackage = () => {
    setOrder((prev) => ({
      ...prev,
      packages: [
        ...prev.packages,
        {
          id: Date.now(),
          weight: "",
          length: "",
          width: "",
          height: "",
          value: "",
        },
      ],
    }));
  };

  const removePackage = (targetId) => {
    if (order.packages.length === 1) return;
    setOrder((prev) => ({
      ...prev,
      packages: prev.packages.filter((pkg) => pkg.id !== targetId),
    }));
  };

  const handlePackageChange = (id, field, value) => {
    setOrder((prev) => ({
      ...prev,
      packages: prev.packages.map((pkg) =>
        pkg.id === id ? { ...pkg, [field]: value } : pkg,
      ),
    }));
  };

  const handleCheckboxChange = (field) => {
    setOrder((prev) => ({ ...prev, [field]: !prev[field] }));
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

      <section className={styles.section}>
        <div className={styles.sectionHeaderWrap}>
          <h2 className={styles.sectionHeader}>
            <span>📦</span> Package Information
          </h2>
          <button
            type="button"
            onClick={addPackage}
            className={styles.addButton}
          >
            + Add Another Package
          </button>
        </div>

        {order.packages.map((pkg, index) => (
          <div key={pkg.id} className={styles.packageCard}>
            <div className={styles.packageHeader}>
              <span>Package {index + 1}</span>
              {order.packages.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePackage(pkg.id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              )}
            </div>

            <div className={styles.grid5Col}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Weight (kg)</label>
                <input
                  className={styles.input}
                  type="number"
                  value={pkg.weight}
                  onChange={(e) =>
                    handlePackageChange(pkg.id, "weight", e.target.value)
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Length (cm)</label>
                <input
                  className={styles.input}
                  type="number"
                  value={pkg.length}
                  onChange={(e) =>
                    handlePackageChange(pkg.id, "length", e.target.value)
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Width (cm)</label>
                <input
                  className={styles.input}
                  type="number"
                  value={pkg.width}
                  onChange={(e) =>
                    handlePackageChange(pkg.id, "width", e.target.value)
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Height (cm)</label>
                <input
                  className={styles.input}
                  type="number"
                  value={pkg.height}
                  onChange={(e) =>
                    handlePackageChange(pkg.id, "height", e.target.value)
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Value ($)</label>
                <input
                  className={styles.input}
                  type="number"
                  value={pkg.value}
                  onChange={(e) =>
                    handlePackageChange(pkg.id, "value", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={order.fragile}
            onChange={() => handleCheckboxChange("fragile")}
          />
          Fragile Handling
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={order.insured}
            onChange={() => handleCheckboxChange("insured")}
          />
          Insurance Required
        </label>
      </div>
    </div>
  );
}
