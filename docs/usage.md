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

---

## API guarantees

card-precheck follows a small set of guarantees to ensure predictable behavior and long-term stability.

### Stable return shape
The `validateCardNumber` function will always return an object with the following properties:

- `isValid` (boolean)
- `cardType` (string or null)
- `reason` (string or null)

This shape will not change in minor or patch releases.

---

### No thrown errors
The function does not throw errors for invalid input.

All validation failures are expressed through the returned object. This allows the function to be safely used in form validation and user-facing flows without defensive try/catch logic.

---

### No side effects
card-precheck:
- Does not store card numbers
- Does not log input
- Does not perform network requests
- Does not mutate external state

---

### Additive changes only
Future updates may add new fields to the return object, but existing fields will not be removed or renamed without a major version change.

---

### Validation scope
A `true` value for `isValid` means the card number passes the checks performed by this library.

It does not guarantee authorization success, card existence, or account validity.

