/**
 * card-precheck
 * Lightweight credit and debit card number pre-validation
 */

/**
 * Remove spaces and common separators from a card number
 */
function normalizeCardNumber(cardNumber) {
  return String(cardNumber).replace(/[\s-]/g, "");
}

/**
 * Luhn algorithm check
 */
function passesLuhn(cardNumber) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = Number(cardNumber[i]);

    if (Number.isNaN(digit)) {
      return false;
    }

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

/**
 * Basic card brand detection
 */
function getCardType(cardNumber) {
  if (/^4\d{12}(\d{3})?$/.test(cardNumber)) {
    return "visa";
  }

  if (/^(5[1-5]\d{14})$/.test(cardNumber)) {
    return "mastercard";
  }

  if (/^(3[47]\d{13})$/.test(cardNumber)) {
    return "american-express";
  }

  if (/^(6011\d{12}|65\d{14})$/.test(cardNumber)) {
    return "discover";
  }

  return null;
}

/**
 * Public API
 */
function validateCardNumber(input) {
  const cardNumber = normalizeCardNumber(input);

  if (!cardNumber || cardNumber.length < 12) {
    return {
      isValid: false,
      cardType: null,
      reason: "Invalid length"
    };
  }

  const cardType = getCardType(cardNumber);

  if (!cardType) {
    return {
      isValid: false,
      cardType: null,
      reason: "Unsupported or unknown card type"
    };
  }

  if (!passesLuhn(cardNumber)) {
    return {
      isValid: false,
      cardType,
      reason: "Failed checksum validation"
    };
  }

  return {
    isValid: true,
    cardType,
    reason: null
  };
}

module.exports = {
  validateCardNumber
};
