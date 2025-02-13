function ProductCard({ producto }) {
    return (
        <div className="item-container">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p><strong className="price">Precio: ${producto.precio}</strong></p>
        </div>
    );
}


export default ProductCard;
