# Usage

card-precheck is designed to be simple and predictable. It exposes a small public API focused on validating card numbers and returning structured results.

This documentation assumes the package is used as part of a signup, onboarding, or payment form flow.

---

## Basic idea

The library takes a card number as input and evaluates whether it:

- Matches known card brand patterns
- Has a valid length
- Passes the Luhn checksum

The result indicates whether the card number is **structurally valid**, not whether it will be accepted by a bank.

---

## Typical usage scenarios

- Validate card input before enabling form submission
- Provide instant feedback while the user types
- Reduce invalid requests sent to payment providers
- Improve error messages during onboarding

---

## Input expectations

- Card numbers should be provided as strings
- Spaces and common separators may be handled by the consumer before validation
- CVV, expiry date, and cardholder name are intentionally out of scope

---

## Output expectations

The validation result should be treated as a **pre-check only**.

A successful validation means:
- The card number follows industry rules

It does **not** mean:
- The card exists
- The card has funds
- The card will authorize successfully

---

## Important note

Even if a card number passes validation, your application must still rely on a PCI-compliant payment provider for real transactions.
