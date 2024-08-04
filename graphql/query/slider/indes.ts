import { gql } from "@apollo/client";

export const GET_SLIDER_LIST = gql`query Sliders($limit: Float!, $offset: Float!) {
    sliders(limit: $limit, offset: $offset) {
      _id
      image
      link
      product
      category
      slider_type {
        type
        type_id
        _id
      }
    }
  }`