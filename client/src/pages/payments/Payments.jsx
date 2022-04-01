import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import ShowSpinnerOrErrors from "../../components/ShowSpinnerOrErrors";

//* Make sure to call `loadStripe` outside of a component’s render to avoid
//* recreating the `Stripe` object on every render.
//! change this key to the live key in production environment

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

function Payments() {
  const [clientKey, setClientKey] = useState(null);
  const { userId } = useParams();
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    `/payments/createPaymentIntent/${userId}`,
    response => {
      setClientKey(response.client_secret);
    },
  );
  useEffect(() => {
    performFetch();

    return cancelFetch;
  }, []);

  const options = {
    // passing the client secret obtained in step 2
    clientSecret: clientKey,
    // Fully customizable with appearance API.
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  return (
    <>
      <div className="page-container">
        <div className="page-content-container">
          <ShowSpinnerOrErrors
            isLoading={isLoading}
            error={error ? true : false}
            errorTxt="Error happened please try again later"
          />
          {clientKey && !isLoading && !error && (
            <>
              <h2 style={{ textAlign: "center" }}>
                Please fill the payment info to activate your account
              </h2>
              <h4 style={{ textAlign: "center" }}>
                <em>
                  Note: this website is not a real payment website <br />
                  You can use these fake info to activate your account{" "}
                  <span style={{ color: "black" }}>
                    5555 5555 5555 4444
                  </span>{" "}
                  <br />
                  Then you can put any future date and any CVC number
                </em>
              </h4>
              <div className="payment-form-container">
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm userId={userId} />
                </Elements>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Payments;
