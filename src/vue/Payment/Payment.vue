<template>
  <div class="payment-container">
    <div class="payment-container_breakdown">
      <div class="payment-container_breakdown_detail">
        <h3>Product</h3>
        <span> {{ productDetails[0] }}</span>
      </div>
      <div class="payment-container_breakdown_detail">
        <h3>Price</h3>
        <span> {{ productDetails[1] }} € </span>
      </div>
      <div class="payment-container_breakdown_detail">
        <h3>Number of pieces</h3>
        <span> {{ productDetails[2] }} </span>
      </div>
      <div class="payment-container_breakdown_detail">
        <h3>Shipping</h3>
        <span class="payment-box_taxes">
          + €26.34 Shipping and Import Fees outside of France</span
        >
      </div>
      <div class="payment-container_breakdown_detail">
        <h3>Total</h3>
        <span> {{ totalToPay() }} € </span>
      </div>
    </div>
    <div class="payment-container_forms">
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
  name: "Payment",
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
      var quantity = this.productDetails[2];
      if (this.productDetails[0].includes(",")) {
        quantity = 1;
      }
      return (this.productDetails[1] * quantity + 26.34).toFixed(2);
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
      var cnumberLabel = document.querySelector(".cardnumber");
      const edate = document.getElementById("edate").value;
      var edateLabel = document.querySelector(".expirydate");
      const cvc = document.getElementById("cvc").value;
      var cvcLabel = document.querySelector(".cvccode");
      const nameCheck = this.checkFirstName(fname, fnameLabel);
      const surnameCheck = this.checkLastName(lname, lnameLabel);
      const emailCheck = this.checkEmailAddress(email, emailLabel);
      const matchEmail = this.matchEmailAddress(
        email,
        emailLabel,
        confirmEmail,
        confirmEmailLabel
      );
      const checkPhone = this.checkPhoneNumber(phoneNumber, phoneNumberLabel);
      const checkCardholder = this.checkCardholderName(cname, cnameLabel);
      const checkCardNumber = this.checkCardNumber(cnumber, cnumberLabel);
      const checkDate = this.checkExpiryDate(edate, edateLabel);
      const checkCVC = this.checkCVCCode(cvc, cvcLabel);
      if (
        nameCheck &&
        surnameCheck &&
        emailCheck &&
        matchEmail &&
        checkPhone &&
        checkCardholder &&
        checkDate &&
        checkCVC
      ) {
        window.open("./transaction.html?email=" + encodeURI(email));
      }
    },
    checkFirstName(fname, fnameLabel) {
      if (fname.length === 0) {
        fnameLabel.innerHTML = "Invalid First Name";
        return false;
      }
      fnameLabel.innerHTML = "";
      return true;
    },
    checkLastName(lname, lnameLabel) {
      if (lname.length === 0) {
        lnameLabel.innerHTML = "Invalid Last Name";
        return false;
      }
      lnameLabel.innerHTML = "";
      return true;
    },
    checkEmailAddress(email, emailLabel) {
      const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
      if (!regex.test(email) || email.length === 0) {
        emailLabel.innerHTML = "Invalid Email Address";
        return false;
      }
      emailLabel.innerHTML = "";
      return true;
    },
    matchEmailAddress(email, emailLabel, confirmEmail, confirmEmailLabel) {
      if (email !== confirmEmail) {
        confirmEmailLabel.innerHTML = "Not Matching Email";
        return false;
      }
      confirmEmailLabel.innerHTML = "";
      return true;
    },
    checkPhoneNumber(phoneNumber, phoneNumberLabel) {
      const regex = /^[0-9]+$/;
      if (!regex.test(phoneNumber)) {
        phoneNumberLabel.innerHTML = "Invalid Phone Number";
        return false;
      }
      phoneNumberLabel.innerHTML = "";
      return true;
    },
    checkCardholderName(cname, cnameLabel) {
      if (cname.length === 0) {
        cnameLabel.innerHTML = "Invalid Cardholder Name";
        return false;
      }
      cnameLabel.innerHTML = "";
      return true;
    },
    checkCardNumber(cnumber, cnumberLabel) {
      if (cnumber.length < 10) {
        cnumberLabel.innerHTML = "Invalid Card Number";
        return false;
      }
      cnumberLabel.innerHTML = "";
      return true;
    },
    checkExpiryDate(edate, edateLabel) {
      const year = edate.substring(edate.indexOf("/") + 1);
      const today = new Date().toISOString().substr(0, 4);
      const regex = /^0[0-9]|1[0-2]\/20[2-6][0-9]$/;
      if (
        !regex.test(edate) ||
        edate.length === 0 ||
        Number(year) < Number(today)
      ) {
        edateLabel.innerHTML = "Invalid Expiry Date";
        return false;
      }
      edateLabel.innerHTML = "";
      return true;
    },
    checkCVCCode(cvc, cvcLabel) {
      const regex = /^[0-9]{3}$/;
      if (!regex.test(cvc) || cvc.length < 3) {
        cvcLabel.innerHTML = "Invalid CVC";
        return false;
      }
      cvcLabel.innerHTML = "";
      return true;
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
.payment-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 600px;
  margin: 25px;
}
.payment-container_forms {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin: 25x;
}
.payment-container_breakdown {
  min-width: 400px;
  padding: 25px;
  margin: 25px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  line-height: 2;
}
.payment-container_breakdown_detail {
  padding: 25px 0;
}
.payment-container_form {
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 25px;
  background-color: #ff8c00;
}

.payment-container_form_input {
  padding: 12px;
  border: none;
  border-radius: 15px;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
.payment-container_form_group {
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
.payment-container_form_input_selection {
  cursor: pointer;
  border-right: 15px solid white;
}
.payment-container_form_input_prefix {
  background-color: #ccc;
  margin-right: 5px;
  border-color: #ccc;
}
.payment-container_form_label {
  color: red;
  font-weight: bold;
}
.payment-button {
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  margin: 25px;
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
  .payment-container {
    flex-direction: column;
  }
  .payment-container_forms {
    min-width: auto;
  }
  .payment-container_breakdown {
    min-width: auto;
    margin: 25px 0;
  }
}
</style>
