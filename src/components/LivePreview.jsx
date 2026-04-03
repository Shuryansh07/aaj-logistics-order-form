import styles from "./LivePreview.module.css";

export default function LivePreview({ order }) {
  const totalItems = order.packages.length;

  const grossWeight = order.packages.reduce((sum, pkg) => {
    return sum + (Number(pkg.weight) || 0);
  }, 0);

  const declaredValue = order.packages.reduce((sum, pkg) => {
    return sum + (Number(pkg.value) || 0);
  }, 0);

  return (
    <div className={styles.previewContainer}>
      <div className={styles.headerDark}>
        <div className={styles.headerLabel}>Order Reference</div>
        <div className={styles.orderIdWrapper}>
          <div className={styles.orderId}>{order.id}</div>
          <div className={styles.deliveryBadge}>{order.type}</div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.dateSection}>
          <div>
            <div className={styles.headerLabel}>Date Issued</div>
            <div className={styles.valueLarge}>{order.date}</div>
          </div>
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#f2f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "24px" }}>▦</span>
          </div>
        </div>

        <div className={styles.routeGrid}>
          <div>
            <div className={styles.headerLabel}>From</div>
            <div className={styles.valueLarge}>
              {order.sender.name || "Sender Name"}
            </div>
            <div className={styles.addressText}>
              {order.sender.address && <div>{order.sender.address}</div>}
              {order.sender.city && <span>{order.sender.city}, </span>}
              {order.sender.pincode}
            </div>
          </div>
          <div>
            <div className={styles.headerLabel}>Ship To</div>
            <div className={styles.valueLarge}>
              {order.receiver.name || "Receiver Name"}
            </div>
            <div className={styles.addressText}>
              {order.receiver.address && <div>{order.receiver.address}</div>}
              {order.receiver.city && <span>{order.receiver.city}, </span>}
              {order.receiver.pincode}
            </div>
          </div>
        </div>

        <div>
          <div className={styles.headerLabel}>Manifest Items</div>
          <div className={styles.itemListGrid} style={{ color: "#a1a1aa" }}>
            <div>QTY</div>
            <div>DIMENSIONS</div>
            <div>WEIGHT</div>
            <div>VALUE</div>
          </div>

          {order.packages.map((pkg, index) => (
            <div key={pkg.id} className={styles.itemListGrid}>
              <div>{String(index + 1).padStart(2, "0")}</div>
              <div>
                {pkg.length || 0} × {pkg.width || 0} × {pkg.height || 0} cm
              </div>
              <div>{pkg.weight || 0} kg</div>
              <div>${pkg.value || 0}</div>
            </div>
          ))}

          <div className={styles.badgeGroup}>
            {order.fragile && (
              <div className={styles.badgeFragile}>⚠ FRAGILE</div>
            )}
            {order.insured && (
              <div className={styles.badgeInsured}>✔ INSURED</div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.totalsGrid}>
        <div>
          <div className={styles.totalLabel}>Total Items</div>
          <div className={styles.totalValue}>{totalItems}</div>
        </div>
        <div>
          <div className={styles.totalLabel}>Gross Weight</div>
          <div className={styles.totalValue}>{grossWeight.toFixed(1)} kg</div>
        </div>
        <div>
          <div className={styles.totalLabel}>Declared Value</div>
          <div className={styles.totalValueTeal}>
            ${declaredValue.toFixed(2)}
          </div>
        </div>
      </div>

      <button className={styles.finalizeBtn}>Finalize & Print Labels 🖨</button>
    </div>
  );
}
