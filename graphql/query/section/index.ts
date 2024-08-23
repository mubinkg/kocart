import { gql } from "@apollo/client";

export const SECTION_LIST = gql`query SectionForWeb($getSectionInput: GetSectionsInput!) {
    sectionForWeb(getSectionInput: $getSectionInput) {
      _id
      title
      products {
        _id
        pro_input_name
        pro_input_image
        pro_input_description
        productvariants {
          _id
          price
          specialPrice
        }
      }
    }
  }`