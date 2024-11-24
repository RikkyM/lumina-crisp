import { useState, useEffect } from "react";
import renderCard from "../components/Elements/Card/renderCard";
import { products } from "../services/products.service";
import LoadingSpinner from "../components/Layouts/Loading";

const OrderPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setProductData(products);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <section className="h-dvh pt-20 relative">
        <div
          style={{ backgroundImage: "url('images/background.png')" }}
          className="bg-cover bg-repeat bg-center opacity-10 absolute inset-0"
        ></div>
        <div className="overflow-auto h-full relative p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 2xl max-w-screen-2xl mx-auto no-scrollbar">
          {isLoading ? <LoadingSpinner /> : products.map(renderCard)}
        </div>
      </section>
    </>
  );
};

export default OrderPage;
