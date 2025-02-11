import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productosData from "../data/products.json";

function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData); // Simula cargar datos desde un archivo JSON
    }, []);

    return (
        <div>
            <h2>Nuestros Productos</h2>
            <div style={styles.grid}>
                {productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
}

const styles = {
    grid: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
    }
};

export default Productos;
