import { gql } from "graphql-request";

export const GET_RESTAURANTS = gql`
  query getRestaurants(
    $term: String!
    $location: String!
    $limit: Int!
    $reviews: Int!
  ) {
    search(term: $term, location: $location, limit: $limit, reviews: $reviews) {
      total
      businesses {
        id
        photos
        name
        location {
          display_address
          formatted_address
        }
        image_url
        review_count
        rating
        display_phone
        price
        # reviews( limit:$reviews ) {
        #   id
        #   rating
        #   user {
        #     id
        #     image_url
        #     name
        #   }
        #   text
        #   time_created
        # }
        hours {
          hours_type
          is_open_now
          open {
            start
            end
            day
          }
        }
        is_closed
      }
    }
  }
`;
