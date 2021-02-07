// // import { gql, useQuery } from "@apollo/client";

// const GET_RESTAURANTS = gql`
//   query getRestaurants(
//     $term: String!
//     $location: String!
//     $limit: Int!
//     $reviews: Int!
//   ) {
//     search(location: "NY", limit: 10) {
//       total
//       business {
//         name
//       }
//     }
//   }
// `;

// export default function Search(
//   term: string,
//   location: string,
//   limit = 10,
//   reviews = 10
// ) {
//   const { loading, error, data } = useQuery(GET_RESTAURANTS, {
//     variables: {
//       term,
//       location,
//       limit,
//       reviews,
//     },
//   });
//   if (loading) return <p>Loading ...</p>;

//   return data?.search;
// }

export default function Search(
  term: string,
  location: string,
  limit = 10,
  reviews = 10
) {
  console.log("Hello!");
}
