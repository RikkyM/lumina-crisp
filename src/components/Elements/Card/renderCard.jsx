import Card from ".";

const renderCard = (product, index) => {
  if (product.variant) {
    const defaultVariant = Object.keys(product.variant)[0];
    const variantData = product.variant[defaultVariant];
    const defaultSize = Object.keys(variantData.ukuran)[0];

    return (
      <Card
        key={product.id}
        uniqueId={product.id}
        image={variantData.gambar}
        harga={variantData.ukuran[defaultSize]}
        dropdown={product.variant}
        nama={product.nama}
        rasa={true}
      />
    );
  }

  return (
    <Card
      key={product.id}
      uniqueId={product.id}
      image={product.gambar}
      harga={product.harga}
      nama={product.nama}
    />
  );
};

export default renderCard;