import React, { useEffect, useState } from "react";
import Button from "../Button";
import { products } from "../../../services/products.service";
import { useCart } from "../../../hooks/CartContext";
import Toast from "../Toast";

const Card = ({ harga, dropdown, image, nama, uniqueId }) => {
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImage, setCurrentImage] = useState(image);
  const [price, setPrice] = useState(harga);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const { updateCart } = useCart();
  const [toast, setToast] = useState({ show: false, message: "", type: ""});

  const handleVariantChange = (e) => {
    const variant = e.target.value;
    setSelectedVariant(variant);
    setSelectedSize("");
    if (variant) {
      setCurrentImage(dropdown[variant].gambar);
      if (selectedSize) {
        setPrice(dropdown[variant].ukuran[selectedSize]);
      }
    } else {
      setCurrentImage(image);
      setPrice(harga);
    }
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);

    if (size && selectedVariant) {
      setPrice(dropdown[selectedVariant].ukuran[size]);
    } else {
      setPrice(harga);
    }
  };

  const handleIncrementQty = () => {
    setQty((prev) => prev + 1);
  };

  const handleDecrementQty = () => {
    setQty((prev) => Math.max(0, prev - 1));
  };

  const handleQtyChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setQty(Math.max(0, value));
  };

  const validateCartItem = () => {
    if (dropdown && !selectedVariant) {
      setToast({
        show: true,
        message: "Harap pilih rasa terlebih dahulu",
        type: "error",
      });
      return false;
    }

    if (dropdown && !selectedSize) {
      setToast({
        show: true,
        message: "Harap pilih ukuran terlebih dahulu",
        type: "error",
      });
      return false;
    }

    if (qty < 1) {
      setToast({
        show: true,
        message: "Jumlah tidak boleh 0",
        type: "error",
      });
      return false;
    }

    return true;
  };

  const generateNewCartId = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (existingCart.length === 0) return 1;

    const maxId = Math.max(...existingCart.map((item) => item.id));
    return maxId + 1;
  };

  const handleAddToCart = (id, qty, size) => {
    if (!validateCartItem()) return;

    const product = products.find((product) => product.id === uniqueId);

    if (!product) {
      setToast({
        show: true,
        message: "Produk tidak ditemukan",
        type: "error",
      });
      return;
    }
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = {
      id: generateNewCartId(),
      idItems: uniqueId,
      nama: nama,
      qty: qty,
      harga: price,
      image: currentImage,
      totalHarga: price * qty,
      variant: selectedVariant || null,
      size: size || null,
    };

    const existingItemIndex = currentCart.findIndex(
      (item) =>
        item.idItems === id &&
        item.variant === cartItem.variant &&
        item.size === cartItem.size
    );

    let newCart;
    if (existingItemIndex !== -1) {
      newCart = [...currentCart];
      const existingItem = newCart[existingItemIndex];
      newCart[existingItemIndex] = {
        ...existingItem,
        qty: existingItem.qty + qty,
        totalHarga: (existingItem.qty + qty) * price,
      };
    } else {
      newCart = [...currentCart, cartItem];
    }

    setToast({
      show: true,
      message: "Produk berhasil ditambahkan ke keranjang",
      type: "success",
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    updateCart(newCart);
    setSelectedVariant("");
    setSelectedSize("");
    setQty(0)
  };

  return (
    <div className="border border-black/20 bg-white flex flex-col p-2 justify-between max-w-64 sm:max-w-max sm:w-72 gap-2 pb-3 rounded-md shadow-md mx-auto capitalize self-start h-full sm:max-h-[480px] md:max-h-[450px] select-none">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <div>
        <img
          src={currentImage}
          alt={`${nama} ${selectedVariant}`}
          className="rounded-md"
        />
        <div className="text-lg font-semibold">{nama}</div>
      </div>
      {dropdown && (
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex gap-2">
            {Object.keys(dropdown).map((item, index) => (
              <label
                key={`variant-${uniqueId}-${index}`}
                className="flex items-center gap-1 py-1 px-2 relative cursor-pointer"
              >
                <input
                  type="radio"
                  name={`variant-${uniqueId}`}
                  value={item}
                  checked={selectedVariant === item}
                  onChange={handleVariantChange}
                  className="mr-1 peer hidden"
                />
                <span className="text-sm capitalize peer-checked:text-blue-500 font-semibold z-10">
                  {item}
                </span>
                <span className="h-full w-full absolute top-0 left-0 peer-checked:bg-blue-100 rounded-md"></span>
              </label>
            ))}
          </div>
          {selectedVariant && (
            <div className="flex items-center">
              <span className="mr-2 hidden md:block">|</span>
              <div className="flex gap-2">
                {Object.keys(dropdown[selectedVariant].ukuran).map(
                  (item, index) => (
                    <label
                      key={`size-${uniqueId}-${index}`}
                      className="flex items-center gap-1 py-1 px-2 relative cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`size-${uniqueId}`}
                        value={item}
                        checked={selectedSize === item}
                        onChange={handleSizeChange}
                        className="mr-1 peer hidden"
                      />
                      <span className="text-sm capitalize peer-checked:text-green-500 font-semibold z-10">
                        {item}
                      </span>
                      <span className="h-full w-full absolute top-0 left-0 peer-checked:bg-green-100 rounded-md"></span>
                    </label>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-1.5">
          <div className="flex items-center gap-1">
            <Button onClick={handleDecrementQty} variant="rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 16 16"
              >
                <rect
                  width="10"
                  height="1.5"
                  x="3"
                  y="7.25"
                  fill="currentColor"
                  rx=".5"
                />
              </svg>
            </Button>
            <input
              value={qty}
              onChange={handleQtyChange}
              type="text"
              maxLength={3}
              className="max-w-10 px-2 py-1 outline-none text-sm font-semibold text-center"
            />
            <Button onClick={handleIncrementQty} variant="rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
            </Button>
          </div>
          <p className="text-sm font-semibold">
            Rp
            {(qty !== 0 ? price * qty : price).toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
        <Button
          onClick={() => handleAddToCart(uniqueId, qty, selectedSize)}
          variant="capitalize bg-blue-500 py-2 rounded-md text-white font-semibold text-sm"
        >
          masukkan ke keranjang
        </Button>
      </div>
    </div>
  );
};

export default Card;
