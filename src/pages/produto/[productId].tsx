import Head from 'next/head';
import Layout from 'modules/Loja/Components/Layout';
import ProductDetails from 'modules/Loja/Pages/ProductDetails';
import { loadProductDetails } from 'modules/Loja/Lib/ProductDetails';
import { ProductModel } from 'modules/Loja/Lib/ProductDetails/models';
import { SITE_TITLE } from 'lib/configs';
import { wrapper } from 'store/redux/store';

interface Props {
  productDetails: ProductModel;
}

export default function ProductDetailsPage({ productDetails }: Props) {
  const domain = process.env.DOMAIN;
  const firstImage = productDetails.images ? productDetails.images[0] : null;

  const description = productDetails.description ? `${productDetails.description} - GamerApp` : SITE_TITLE;
  const image = firstImage ?? `${domain}/images/seo/media-gamerapp.png`;
  const title = `${productDetails.title} - GamerApp`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>

        <meta key="title" name="title" content={title} />
        <meta
          key="description"
          name="description"
          content={description}
        />

        {/* Open Graph / Facebook */}
        <meta key="og-title" property="og:title" content={title} />
        <meta key="og-description"
          property="og:description"
          content={description}
        />
        <meta key="og-image" property="og:image" content={image} />

        {/* Twitter */}
        <meta key="twitter-title" property="twitter:title" content={title} />
        <meta
          key="twitter-description"
          property="twitter:description"
          content={description}
        />
        <meta key="twitter-image" property="twitter:image" content={image} />
      </Head>

      <ProductDetails productDetails={productDetails} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ params }) => {
  let data;
  let notFound = true;

  if (params?.productId && typeof params.productId === 'string') {
    const request = await loadProductDetails({ id: params.productId });

    if (request.success) {
      data = request.data;
      notFound = false;
    }
  }

  if (notFound) {
    return {
      notFound,
    };
  }

  return {
    props: {
      productDetails: data,
    },
  };
});
