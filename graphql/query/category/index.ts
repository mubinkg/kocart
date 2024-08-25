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

export const GET_ATTRIBUTE_SET_VALUES = gql`query AttributeSetValues {
  getAttributeValuesByAttributeSet {
    _id
    attributeSetName
    attributeSetValues {
      _id
      valueName
    }
  }
}`