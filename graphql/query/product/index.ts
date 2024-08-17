import { gql } from "@apollo/client";

export const GET_PRODUCT_LIST = gql`query GetProductForWeb($getProductInput: GetProductDto!) {
    getProductForWeb(getProductInput: $getProductInput) {
      _id
      pro_input_name
      pro_input_image
      productvariants {
        _id
        price
        specialPrice
      }
    }
  }`