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

export const PRODUCT_DETAILS = gql`query ProductForWeb($productId: String!) {
    productForWeb(productId: $productId) {
      _id
      attributes {
        _id
        attribute {
          _id
          name
        }
        values {
          _id
          color
          image
          valueName
          type
        }
      }
      pro_input_image
      other_images
      pro_input_name
      productvariants {
        _id
        price
        specialPrice
      }
      pro_input_description
    }
  }`