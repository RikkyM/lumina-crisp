import { useEffect, useState } from "react";
import { useCart } from "../hooks/CartContext";
import Toast from "../components/Elements/Toast";

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const { cartItems, updateCart } = useCart();
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (cartItems.length > 0) {
      const sum = cartItems.reduce((acc, item) => {
        const sum = item.harga * item.qty;
        return acc + sum;
      }, 0);
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [cartItems]);

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
    setToast({
      show: true,
      message: "Item berhasil dihapus dari keranjang",
      type: "success",
    });
  };

  const capitalizeWords = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e) => {
    setNama(capitalizeWords(e.target.value));
  };

  const formatOrderDetails = () => {
    const header = "*DETAIL PESANAN*\n\n";

    const customerInfo = `*Nama*: ${nama}\n*Metode Pengiriman*: ${deliveryMethod}\n${
      deliveryMethod === "delivery" ? `*Alamat*: ${alamat}\n` : ""
    }\n`;

    const items = cartItems
      .map(
        (item) =>
          `*${item.nama}*\n` +
          `Quantity: ${item.qty}\n` +
          `Variant: ${item.variant}\n` +
          `Ukuran: ${item.size}\n` +
          `Harga: Rp${item.totalHarga.toLocaleString("id-ID")}\n`
      )
      .join("\n");

    const totalText = `\n*Total: Rp${total.toLocaleString("id-ID")}*`;

    return encodeURIComponent(header + customerInfo + items + totalText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama) {
      setToast({
        show: true,
        message: "Silakan isi nama anda",
        type: "error",
      });
      return;
    }

    if (!deliveryMethod) {
      setToast({
        show: true,
        message: "Silakan pilih metode pengiriman",
        type: "error",
      });
      return;
    }

    if (deliveryMethod === "delivery" && !alamat) {
      setToast({
        show: true,
        message: "Silakan isi alamat lengkap",
        type: "error",
      });
      return;
    }

    if (cartItems.length === 0) {
      setToast({
        show: true,
        message: "Keranjang masih kosong",
        type: "error",
      });
      return;
    }

    const phoneNumber = "6283114829384";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formatOrderDetails()}`;
    window.open(whatsappUrl, "_blank");

    setToast({
      show: true,
      message: "Pesanan berhasil dibuat! Anda akan diarahkan ke WhatsApp",
      type: "success",
    });
  };

  return (
    <section className="h-svh pt-20 relative">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <div
        style={{ backgroundImage: "url('images/background.png')" }}
        className="bg-cover bg-no-repeat bg-center opacity-10 absolute inset-0"
      ></div>
      <div className="text-black h-full max-w-[560px] mx-auto relative overflow-auto gap-4 flex flex-col px-6 pt-4 no-scrollbar">
        <h2 className="font-bold text-2xl">Keranjang</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-2">
            <div className="bg-white p-5 flex flex-col gap-5 border border-black/20">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 relative">
                  <img src={item.image} alt="gambar" className="max-w-32" />
                  <div>
                    <p className="capitalize font-semibold text-sm">
                      {item.nama}
                    </p>
                    <div>
                      <p className="capitalize font-semibold text-sm">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <p className="font-semibold text-sm mt-2">
                      Variant: {item.variant}
                    </p>
                    <p className="font-semibold text-sm">Ukuran: {item.size}</p>
                    <p className="capitalize font-semibold text-sm mt-4">
                      Rp
                      {item.totalHarga.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </div>
                  <button
                    className="bg-red-500 h-max w-max p-3 absolute right-0 bottom-0 rounded-full"
                    onClick={() => handleDelete(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 fill-white"
                      viewBox="0 0 56 56"
                    >
                      <path d="m44.524 48.66l1.617-34.265h2.343c.961 0 1.735-.797 1.735-1.758s-.774-1.782-1.735-1.782H38.242V7.34c0-3.352-2.273-5.531-5.882-5.531h-8.766c-3.61 0-5.86 2.18-5.86 5.53v3.516H7.54c-.937 0-1.758.82-1.758 1.782c0 .96.82 1.758 1.758 1.758h2.344L11.5 48.684c.164 3.375 2.39 5.507 5.766 5.507h21.492c3.351 0 5.601-2.156 5.765-5.53M21.484 7.574c0-1.336.985-2.273 2.391-2.273h8.227c1.43 0 2.414.937 2.414 2.273v3.281H21.484Zm-3.867 43.102c-1.36 0-2.367-1.032-2.437-2.39l-1.64-33.891h28.85l-1.546 33.89c-.07 1.383-1.055 2.39-2.438 2.39Zm17.344-4.125c.773 0 1.36-.633 1.383-1.524l.703-24.75c.023-.89-.586-1.547-1.383-1.547c-.726 0-1.336.68-1.36 1.524l-.702 24.773c-.024.844.562 1.524 1.359 1.524m-13.898 0c.797 0 1.382-.68 1.359-1.524l-.703-24.773c-.024-.844-.656-1.524-1.383-1.524c-.797 0-1.383.657-1.36 1.547l.727 24.75c.024.891.586 1.524 1.36 1.524m8.367-1.524V20.254c0-.844-.633-1.524-1.407-1.524c-.773 0-1.43.68-1.43 1.524v24.773c0 .844.657 1.524 1.43 1.524c.75 0 1.407-.68 1.407-1.524" />
                    </svg>
                  </button>
                </div>
              ))}
              <div className="font-semibold flex justify-between border-t pt-3">
                <p>Total:</p>{" "}
                <p>
                  Rp
                  {total.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-5 flex flex-col gap-5 border border-black/20 mt-2 mb-5"
            >
              <h2 className="font-semibold">Data Pembeli</h2>
              <div className="font-semibold flex flex-col gap-4 justify-between border-t pt-3">
                <label
                  htmlFor="nama"
                  className="flex flex-col capitalize w-full max-w-[90%] mx-auto gap-1"
                >
                  <span>nama</span>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={handleNameChange}
                    className="border border-black/30 w-full px-2 py-1 rounded-sm"
                    placeholder="Masukkan nama lengkap"
                  />
                </label>
                <label
                  htmlFor="pembayaran"
                  className="flex flex-col capitalize w-full max-w-[90%] mx-auto gap-1"
                >
                  <span>Pesan Antar</span>
                  <select
                    name="pembayaran"
                    id="pembayaran"
                    className="border border-black/30 px-2 py-1 rounded-sm capitalize"
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  >
                    <option value="">pilih pembayaran</option>
                    <option value="pick up">Pick Up</option>
                    <option value="delivery">Delivery</option>
                  </select>
                </label>
                {deliveryMethod === "delivery" && (
                  <label
                    htmlFor="alamat"
                    className="flex flex-col capitalize w-full max-w-[90%] mx-auto gap-1"
                  >
                    <span>Alamat Lengkap</span>
                    <textarea
                      id="alamat"
                      name="alamat"
                      rows="4"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      className="border border-black/30 w-full px-2 py-1 rounded-sm resize-none"
                      placeholder="Masukkan alamat lengkap anda"
                    />
                  </label>
                )}
                <button
                  type="submit"
                  className="bg-green-500 max-w-[90%] mx-auto w-full py-2 px-3 text-center font-semibold text-white rounded-sm"
                >
                  Pesan
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="border border-black/20 bg-white h-full flex items-center justify-center font-bold text-2xl capitalize">
            tidak ada pesanan
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
