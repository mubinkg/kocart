import { gql } from "@apollo/client";

export const PRODUCT_CATEGORY = gql`query Categories($getCategoriesInput: GetCategoryDto!) {
    categories(getCategoriesInput: $getCategoriesInput) {
      _id
      children {
        _id
        name
      }
      name
    }
  }`