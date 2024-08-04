import { gql } from "@apollo/client";

export const GET_BRANDS = gql`query Brands($limit: Float!, $offset: Float!) {
    brands(limit: $limit, offset: $offset) {
      _id
      image
      name
    }
  }`