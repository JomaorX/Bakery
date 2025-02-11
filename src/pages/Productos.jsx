import ProductCard from "../components/ProductCard";

function Productos() {
    const productos = [
        { id: 1, nombre: "Tarta de Chocolate", precio: 10 },
        { id: 2, nombre: "Cheesecake de Fresa", precio: 12 },
        { id: 3, nombre: "Macarons", precio: 8 },
    ]
    return (
        <div>
            {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
        ))}
        </div>
    )
}

export default Productos