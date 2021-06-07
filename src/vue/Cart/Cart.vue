<template>
  <div class="cart-container">
    <div class="cart-container_breakdown">
      <div class="cart-container_breakdown_detail">
        <h3>Product</h3>
        <span> {{ productDetails[0] }}</span>
      </div>
      <div class="cart-container_breakdown_detail">
        <h3>Price</h3>
        <span> {{ productDetails[1] }} € </span>
      </div>
      <div class="cart-container_breakdown_detail">
        <h3>Number of pieces</h3>
        <span> {{ productDetails[2] }} </span>
      </div>
      <div class="cart-container_breakdown_detail">
        <h3>Taxes</h3>
        <span class="payment-box_taxes">
          + $26.34 Shipping and Import Fees Deposit to France</span
        >
      </div>
      <div class="cart-container_breakdown_detail">
        <h3>Total</h3>
        <span> {{ totalToPay() }} € </span>
      </div>
    </div>
    <div class="cart-container_forms">
      <personal-info :person="person" :countries="countries"></personal-info>
      <credit-card :circuits="circuits" :card="card"></credit-card>
      <button @click="validateForms()" class="payment-button">
        Complete Purchase
      </button>
    </div>
  </div>
</template>

<script>
import CreditCard from "./CreditCard.vue";
import PersonalInfo from "./PersonalInfo.vue";

export default {
  name: "Cart",
  components: { CreditCard, PersonalInfo },
  data() {
    return {
      countries: [
        {
          id: 1,
          name: "Italy",
          prefix: "+39",
        },
        {
          id: 2,
          name: "France",
          prefix: "+33",
        },
        {
          id: 3,
          name: "The Netherlands",
          prefix: "+31",
        },
        {
          id: 4,
          name: "Spain",
          prefix: "+34",
        },
        {
          id: 5,
          name: "Portugal",
          prefix: "+351",
        },
        {
          id: 6,
          name: "Germany",
          prefix: "+49",
        },
        {
          id: 7,
          name: "Greece",
          prefix: "+30",
        },
      ],
      card: [
        {
          id: 1,
          identity: "cnumber",
          name: "cardnumber",
          text: "Card number",
          suggestion: "XXXX - XXX - XXX",
        },
        {
          id: 2,
          identity: "edate",
          name: "expirydate",
          text: "Expiry date",
          suggestion: "mm/yyyy",
        },
        {
          id: 3,
          identity: "cvc",
          name: "cvccode",
          text: "CVC-code",
          suggestion: "123",
        },
      ],
      circuits: [
        {
          id: 1,
          name: "Visa",
        },
        {
          id: 2,
          name: "Visa Electron",
        },
        {
          id: 3,
          name: "American Express",
        },
        {
          id: 4,
          name: "Maestro",
        },
        {
          id: 5,
          name: "Mastercard",
        },
      ],
      person: [
        {
          id: 1,
          text: "name",
          infos: [
            {
              id: 1,
              identity: "fname",
              name: "firstname",
              text: "First Name",
            },
            {
              id: 2,
              identity: "lname",
              name: "lastname",
              text: "Last Name",
            },
          ],
        },
        {
          id: 2,
          text: "email",
          infos: [
            {
              id: 1,
              identity: "email",
              name: "email-address",
              text: "Email Address",
            },
            {
              id: 2,
              identity: "confirm-email",
              name: "confirm-email-address",
              text: "Confirm Email Address",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getProductDetails() {
      const urlParams = new URLSearchParams(window.location.search);
      var productInfo = urlParams.get("final-details");
      return productInfo.split("-");
    },
    totalToPay() {
      return this.productDetails[1] * this.productDetails[2] + 26.34;
    },
    validateForms() {
      const fname = document.getElementById("fname").value;
      var fnameLabel = document.querySelector(".firstname");
      const lname = document.getElementById("lname").value;
      var lnameLabel = document.querySelector(".lastname");
      const email = document.getElementById("email").value;
      var emailLabel = document.querySelector(".email-address");
      const confirmEmail = document.getElementById("confirm-email").value;
      var confirmEmailLabel = document.querySelector(".confirm-email-address");
      const phoneNumber = document.getElementById("phone-number").value;
      var phoneNumberLabel = document.querySelector(".phone-number");
      const cname = document.getElementById("cname").value;
      var cnameLabel = document.querySelector(".cardholdername");
      const cnumber = document.getElementById("cnumber").value;
      const edate = document.getElementById("edate").value;
      var edateLabel = document.querySelector(".expirydate");
      const cvc = document.getElementById("cvc").value;
      var cvcLabel = document.querySelector(".cvccode");
      this.checkUserName(fname, fnameLabel, lname, lnameLabel);
      this.checkEmailAddress(
        email,
        emailLabel,
        confirmEmail,
        confirmEmailLabel
      );
      this.checkPhoneNumber(phoneNumber, phoneNumberLabel);
      this.checkCardholderName(cname, cnameLabel);
      this.checkExpiryDate(edate, edateLabel);
      this.checkCVCCode(cvc, cvcLabel);
    },
    checkUserName(fname, fnameLabel, lname, lnameLabel) {
      if (fname.length === 0) {
        fnameLabel.innerHTML = "Invalid First Name";
      } else {
        fnameLabel.innerHTML = "";
      }
      if (lname.length === 0) {
        lnameLabel.innerHTML = "Invalid Last Name";
      } else {
        lnameLabel.innerHTML = "";
      }
    },
    checkEmailAddress(email, emailLabel, confirmEmail, confirmEmailLabel) {
      const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
      if (!regex.test(email) || email.length === 0) {
        emailLabel.innerHTML = "Invalid Email Address";
      } else {
        emailLabel.innerHTML = "";
      }
      if (email !== confirmEmail) {
        confirmEmailLabel.innerHTML = "Not Matching Email";
        return;
      }
      confirmEmailLabel.innerHTML = "";
    },

    checkPhoneNumber(phoneNumber, phoneNumberLabel) {
      const regex = /^[0-9]+$/;
      if (!regex.test(phoneNumber)) {
        phoneNumberLabel.innerHTML = "Invalid Phone Number";
        return;
      }
      phoneNumberLabel.innerHTML = "";
    },
    checkCardholderName(cname, cnameLabel) {
      if (cname.length === 0) {
        cnameLabel.innerHTML = "Invalid Cardholder Name";
        return;
      } 
        cnameLabel.innerHTML = "";
    },
    checkExpiryDate(edate, edateLabel) {
      const regex = /^0[0-9]|1[0-2]\/20[2-6][0-9]$/;
      if (!regex.test(edate) || edate.length === 0) {
        edateLabel.innerHTML = "Invalid Expiry Date";
        return;
      }
      edateLabel.innerHTML = "";
    },
    checkCVCCode(cvc, cvcLabel) {
      const regex = /^[0-9]{3}$/;
      if (!regex.test(cvc) || cvc.length < 3) {
        cvcLabel.innerHTML = "Invalid CVC";
        return;
      }
      cvcLabel.innerHTML = "";
    },
  },
  computed: {
    productDetails() {
      return this.getProductDetails();
    },
  },
};
</script>

<style>
.cart-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5%;
}
.cart-container_forms {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5%;
}
.cart-container_breakdown {
  padding: 25px;
  margin: 5% 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  line-height: 2;
}
.cart-container_breakdown_detail {
  padding: 25px 0;
}
.cart-container_form {
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #ff8c00;
}
.cart-container_form_card-form {
  margin: 10% 0;
}
.cart-container_form_input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
.cart-container_form_group {
  display: flex;
  flex-direction: column;
}
.select {
  padding: 12px;
  border: 1px solid #ccc;
  width: 300px;
  border-right-width: 10px;
  border-radius: 4px 0 0 4px;
  background-color: rgb(202, 202, 202);
  margin: 6px 0 16px 0;
  cursor: pointer;
}
.selected:hover {
  opacity: 0.8;
}
#phone-number {
  width: 100%;
}
.cart-container_form_input_selection {
  cursor: pointer;
}
.cart-container_form_label {
  color: red;
  font-weight: bold;
}
.payment-button {
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin: 5px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff8c00;
  cursor: pointer;
}
.payment-button:hover {
  opacity: 0.7;
}
@media only screen and (max-width: 600px) {
  .cart-container {
    flex-direction: column;
  }
  .cart-container_forms {
    width: auto;
  }
}
</style>
