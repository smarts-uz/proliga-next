const regex =
  /^(?=(?:.*[a-zA-Z].*|.*\p{Script=Cyrillic}.*)$)[\p{Script=Cyrillic}a-zA-Z0-9.\-@_&$]{1,20}$/u

// Test cases
const testCases = [
  'Hello123', // Valid (Latin)
  'Привет123', // Valid (Cyrillic)
  'Test@_&$.-', // Valid (Latin with symbols)
  'Тест@_&$.-', // Valid (Cyrillic with symbols)
  'HelloПривет', // Invalid (Mixed Latin and Cyrillic)
  'ThisStringIsTooLong12345', // Invalid (Too long)
  'Hello世界', // Invalid (Contains non-Latin, non-Cyrillic characters)
  '', // Invalid (Empty string)
]

testCases.forEach((testCase, index) => {
  console.log(
    `Test case ${index + 1}: "${testCase}" - ${regex.test(testCase) ? 'Valid' : 'Invalid'}`
  )
})

export function validateString(input) {
  if (input.length === 0) {
    return { isValid: false, error: 'Input cannot be empty.' }
  }
  if (input.length > 20) {
    return { isValid: false, error: 'Input must be 20 characters or less.' }
  }

  const latinRegex = /[a-zA-Z]/
  const cyrillicRegex = /\p{Script=Cyrillic}/u
  const validCharsRegex = /^[\p{Script=Cyrillic}a-zA-Z0-9.\-@_&$]+$/u

  if (latinRegex.test(input) && cyrillicRegex.test(input)) {
    return {
      isValid: false,
      error:
        'Input must contain either Latin or Cyrillic characters, not both.',
    }
  }

  if (!latinRegex.test(input) && !cyrillicRegex.test(input)) {
    return {
      isValid: false,
      error: 'Input must contain either Latin or Cyrillic characters.',
    }
  }

  if (!validCharsRegex.test(input)) {
    return {
      isValid: false,
      error:
        'Input contains invalid characters. Only Latin, Cyrillic, numbers, and .-@_&$ are allowed.',
    }
  }

  return { isValid: true }
}
