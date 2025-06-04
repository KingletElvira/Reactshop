import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API_KEY, API_URL } from "../config";

export function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async() => {
            try {
                const response = await fetch(`${API_URL}/${productId}`,
                {
                    headers: {Authorisation: API_KEY}
                })
                const data = await response.json()
                setProduct(data)
            } catch (error) {
                console.error('Error!!!', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct();
    }, [productId]);
    return (
        <div className="product-page">
            <div className="product-images">
                {product.displayAssets.map((asset, index) => (
                    <img
                    key={index}
                    src={asset.full_background}
                    alt={product.displayName}
                  />
                ))}
            </div>
            <div className="product-info">
            <h1>{product.displayName}</h1>
            <p className="price">Цена:{product.price.finalPrice} V</p>
            <div className="description">{product.displayDescription}</div>
            </div>
        </div>
    )
}