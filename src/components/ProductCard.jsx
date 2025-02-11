function ProductCard({ producto }) {
    return (
        <div style={styles.card}>
            <img src={producto.imagen} alt={producto.nombre} style={styles.imagen} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>Precio: ${producto.precio}</strong></p>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        width: "250px",
        margin: "10px",
        backgroundColor: "#fff5f5",
    },
    imagen: {
        width: "100%",
        borderRadius: "10px",
    }
};

export default ProductCard;
