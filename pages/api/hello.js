// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {

//   ApolloClient
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

//   // res.statusCode = 200
//   // res.json({ name: 'John Doe' })
// }

const query = (props) => {
  console.log(props);
};

export default query;
