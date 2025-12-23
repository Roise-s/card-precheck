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
});
