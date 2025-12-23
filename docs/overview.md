# Overview

card-precheck is a lightweight JavaScript utility for validating credit and debit card numbers using public industry rules.

The goal of this project is to help developers catch obviously invalid card input early, before sending data to a payment gateway. This improves user experience and helps reduce unnecessary API calls during signup or onboarding flows.

This library performs **pre-validation only**. It does not communicate with banks, card networks, or payment processors.

---

## What problem does this solve?

In many SaaS applications, users are asked to enter card details during signup, even when no immediate charge is made. Common issues include:

- Random or malformed card numbers
- Typos during input
- Bot-generated fake data
- Poor user feedback during form validation

card-precheck applies well-known validation rules locally to identify invalid card numbers before any network request is made.

---

## What card-precheck is

- A format and checksum validator
- A UX improvement tool
- A lightweight, offline utility
- Safe to run client-side or server-side

---

## What card-precheck is not

- A credit card verification service
- A fraud detection system
- A replacement for payment gateways
- A guarantee that a card will authorize successfully

Final card validation must always be handled by a PCI-compliant payment processor.
