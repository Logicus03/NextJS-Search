require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API_KEY);

const typeDefs = `
    type Query {
        search(location: String): [Business]
        getDetail(alias: String): Detail
        getReviews(alias: String): [Review]
    }
    
    type Business {
        id: ID!
        name: String
        alias: String
        rating: Float
        review_count: Int
        display_phone: String
        image_url: String
        location: Location
    }

    type Time {
        is_overnight: Boolean
        start: Int
        end: Int
        day: Int
    }

    type Hour {
        open: [Time]
        hours_type: String
        is_open_now: Boolean
    }

    type Detail {
        id: ID!
        name: String
        alias: String
        rating: Float
        is_closed: String
        photos: [String]
        hours:[Hour]
        price: String
        review_count: Int
        display_phone: String
        image_url: String
        location: Location
    }

    type Location {
        display_address: [String!]
    }

    type User {
        id: ID!
        name: String
        profile_url: String
        image_url: String
    }

    type Review {
        id: ID!
        rating: Float
        user: User
        text: String
        time_created: String
    }
`;

const resolvers = {
  Query: {
    search: async (_, { location }) => {
      const resp = await client.search({ location, limit: 10 });
      return resp.jsonBody.businesses;
    },
    getDetail: async (_, { alias }) => {
      const resp = await client.business(alias);
      return resp.jsonBody;
    },
    getReviews: async (_, { alias }) => {
      const resp = await client.reviews(alias);
      return resp.jsonBody.reviews;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(
  {
    port: 4000,
    cors: {
      credentials: true,
      origin: ["http://localhost:3000"],
    },
  },
  ({ port }) => console.log(`Server is running on port ${port}`)
);
