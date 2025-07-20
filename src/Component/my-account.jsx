import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../App";
import { useLazyQuery } from "@apollo/client";
import CUSTOMER_DEATILS from "../graphQL/userInfo";
import { Link } from "react-router";

export default function MyAccount() {
  const { token } = useContext(TokenContext);
  const [getCustomerDeatils, { data }] = useLazyQuery(CUSTOMER_DEATILS);

  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    if (token) {
      getCustomerDeatils({
        context: { headers: { authorization: `Bearer ${token}` } },
      }).then(({ data }) => {
        console.log(data);
        setCustomerData(data.customer);
      });
    }
  }, [token]);

  return (
    <div>
      <h2>My Account</h2>
      <h2>User Profile Card</h2>

      <div className="card">
        <img src="/assets/image.png" alt="user" style={{ width: "100%" }} />
        <h3>
          {customerData.firstname} {customerData.lastname}
        </h3>
        <p className="title">Created At : {customerData.created_at}</p>
        <p className="title">E-Mail : {customerData.email}</p>
        <p>
          <Link to="/login">
            <button>Log out</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
