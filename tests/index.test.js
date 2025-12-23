const { validateCardNumber } = require("../src/index");

describe("validateCardNumber", () => {
  test("valid Visa card number", () => {
    const result = validateCardNumber("4242 4242 4242 4242");

    expect(result.isValid).toBe(true);
    expect(result.cardType).toBe("visa");
    expect(result.reason).toBeNull();
  });

  test("valid Mastercard number", () => {
    const result = validateCardNumber("5555 5555 5555 4444");

    expect(result.isValid).toBe(true);
    expect(result.cardType).toBe("mastercard");
  });

  test("invalid card number (fails Luhn)", () => {
    const result = validateCardNumber("4242 4242 4242 4241");

    expect(result.isValid).toBe(false);
    expect(result.reason).toBe("Failed checksum validation");
  });

  test("unsupported card type", () => {
    const result = validateCardNumber("1234 5678 9012 3456");

    expect(result.isValid).toBe(false);
    expect(result.cardType).toBeNull();
  });

  test("invalid input length", () => {
    const result = validateCardNumber("123");

    expect(result.isValid).toBe(false);
    expect(result.reason).toBe("Invalid length");
  });

  test("handles card number with dashes", () => {
  const result = validateCardNumber("4242-4242-4242-4242");

  expect(result.isValid).toBe(true);
  expect(result.cardType).toBe("visa");
});

test("handles numeric input by converting to string", () => {
  const result = validateCardNumber(4242424242424242);

  expect(result.isValid).toBe(true);
  expect(result.cardType).toBe("visa");
});

test("returns invalid for non-numeric characters", () => {
  const result = validateCardNumber("4242abcd4242abcd");

  expect(result.isValid).toBe(false);
  expect(result.reason).toBe("Unsupported or unknown card type");
});

test("returns invalid for empty input", () => {
  const result = validateCardNumber("");

  expect(result.isValid).toBe(false);
  expect(result.reason).toBe("Invalid length");
});

test("never throws for unexpected input", () => {
  expect(() => validateCardNumber(null)).not.toThrow();
  expect(() => validateCardNumber(undefined)).not.toThrow();
});

});
