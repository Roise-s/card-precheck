# Limitations

card-precheck intentionally limits its scope to avoid misuse and false expectations.

Understanding these limitations is critical when integrating this library into a production system.

---

## What this library cannot determine

card-precheck cannot:

- Confirm that a card exists
- Check account balance or credit limits
- Validate CVV or expiration dates
- Detect stolen or blocked cards
- Prevent fraud
- Perform authorization or charges

Any system that requires these checks must use a payment gateway or bank-backed service.

---

## Why these limitations exist

Credit card validation rules such as the Luhn algorithm and card prefix patterns are public knowledge. They are designed to catch errors, not to guarantee authenticity.

Only card networks and issuing banks can confirm whether a card is real and usable. That confirmation happens during authorization.

---

## Common misconception

A card number that passes validation is not necessarily a real or usable card.

It simply means the number:
- Is well-formed
- Matches known industry patterns
- Passes checksum validation

---

## Recommended best practice

Use card-precheck as a first line of validation only.

Always:
- Use a PCI-compliant payment provider
- Avoid storing raw card numbers
- Avoid logging sensitive card data
- Treat validation results as advisory, not authoritative
