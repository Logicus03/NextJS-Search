export default async function getStaticProps() {
  return {
    props: {
      YELP_API_KEY: process.env.YELP_API_KEY,
      YELP_CLIENT_ID: process.env.YELP_CLIENT_ID,

      ALGOLIA_APPLICATION_ID: process.env.ALGOLIA_SEARCH_APPLICATION_ID,
      ALGOLIA_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
    },
  };
}
