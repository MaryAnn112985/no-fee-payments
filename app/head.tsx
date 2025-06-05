export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Merchant Account Audit",
            provider: {
              "@type": "Organization",
              name: "Diversified Payments",
              logo: "https://diversifiedpayments.com/diversified-payments-logo.png",
              telephone: "817-398-8533",
            },
            description:
              "Free AI audit of your merchant account to uncover hidden fees and save thousands on credit card processing.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  )
}
