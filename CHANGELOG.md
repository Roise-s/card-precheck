# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.1.0] - 2025-12-23
### Added
- Initial implementation of `validateCardNumber` function
- Supports Visa, Mastercard, American Express, and Discover
- Returns consistent object with `isValid`, `cardType`, and `reason`
- Edge case handling for:
  - Spaces and dashes in card numbers
  - Numeric input as number
  - Empty or invalid input
  - Non-numeric characters
- README usage examples
- Documentation including overview, usage, limitations, and API guarantees
- Unit tests covering core functionality and edge cases
- `.gitignore` for node_modules and logs
