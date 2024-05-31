import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionHeader
        headerText="Add Payment"
        paraText="get your payment done"
      ></SectionHeader>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
