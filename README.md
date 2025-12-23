# card-precheck

**card-precheck** is a lightweight JavaScript utility for validating credit and debit card numbers **before** sending them to a payment gateway.

It helps developers catch obviously invalid card input early by applying public industry rules such as checksum validation and card brand patterns. This improves user experience and reduces unnecessary payment API requests.

This package is designed for **pre-validation only** and is not a replacement for payment processor authorization.

---

## What it does

- Validates card numbers using the Luhn algorithm  
- Identifies card brands based on known prefixes and lengths  
- Rejects malformed or impossible card numbers  
- Works offline with no network calls  
- Can be used client-side or server-side  

---

## What it does *not* do

`card-precheck` does **not**:

- Verify that a card exists  
- Check available funds  
- Perform authorization or charges  
- Validate CVV or expiry dates  
- Detect stolen, blocked, or fraudulent cards  

A card that passes validation may still fail when processed by a payment provider. Final verification must always be handled by a PCI-compliant gateway such as Stripe, Paystack, Adyen, or similar services.

---

## Why this exists

When building SaaS products with free trials or delayed billing, developers often want to:

- Prevent obviously fake card numbers during signup  
- Improve form validation and error feedback  
- Reduce spam or bot-generated inputs  
- Avoid unnecessary calls to payment APIs  

`card-precheck` provides a fast, local way to validate card input **before** involving a payment processor.

---

## Common use cases

- Disable form submission until a card number is valid  
- Validate card input during onboarding or trial signup  
- Improve UX with immediate feedback  
- Reduce invalid payment attempts  

---

## Security and compliance notes

- This library does not store, transmit, or log card numbers  
- Avoid logging raw card data in your application  
- Do not rely on this package for fraud prevention  
- Always use a PCI-compliant payment provider for real transactions  

---

## Installation

```bash
npm install card-precheck
```
---

## Basic usage

```js
const { validateCardNumber } = require("card-precheck");

const result = validateCardNumber("4242 4242 4242 4242");

console.log(result);
/*
{
  isValid: true,
  cardType: "visa",
  reason: null
}
*/
``` 

---

## Supported card types

- Visa
- Mastercard
- American Express
- Discover

---

## Philosophy

Credit card validation rules are public knowledge.
card-precheck applies these rules clearly and responsibly, without implying bank-level verification or authorization.

---

## Disclaimer

This package performs format and checksum validation only.
It provides no guarantees regarding card authenticity, authorization success, or fraud prevention.

---

## License

- MIT
