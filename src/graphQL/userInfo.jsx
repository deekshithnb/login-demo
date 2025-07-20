import { gql } from "@apollo/client";

const CUSTOMER_DEATILS = gql`
  query CustomerDeatil {
    customer {
      created_at
      email
      firstname
      is_subscribed
      lastname
      middlename
    }
  }
`;

export default CUSTOMER_DEATILS;
