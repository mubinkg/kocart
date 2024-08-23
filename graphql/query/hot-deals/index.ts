import { gql } from "@apollo/client";

export const HOT_DELAS = gql`query HotDeals($limit: Float!, $offset: Float!) {
    hotDeals(limit: $limit, offset: $offset) {
      _id
      createdAt
      discountPercent
      status
      validTime
      product {
        _id
        pro_input_name
        pro_input_image
        productvariants {
          _id
          price
        }
      }
    }
  }`