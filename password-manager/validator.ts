//SOLID - O: OPEN FOR ADDITION, CLOSE FOR MODIFICATION

// export function validatePassword(
//     input: string,
//     lengthCondition: number,
//     numberOfCapitalLetters?: boolean | number,
//     customizeRule?: (customInput: string) => boolean
// ) {
//   const isLongEnough =  input.length >= lengthCondition;
//   const haveCapitalLetter = (/[A-Z]/g).test(input);
//   const haveEnoughCapitalLetters = input.match(/[A-Z]/g) && input.match(/[A-Z]/g).length >= numberOfCapitalLetters;
//
//   if (customizeRule && typeof customizeRule === 'function') {
//     const passCustomizedRule = customizeRule(input);
//     return isLongEnough && haveCapitalLetter && passCustomizedRule;
//   }
//
//   if (numberOfCapitalLetters) {
//     if (typeof numberOfCapitalLetters === "boolean") {
//       return isLongEnough && haveCapitalLetter;
//     }
//
//     return isLongEnough && haveEnoughCapitalLetters;
//   }
//
//   return isLongEnough;
// }

export function validateLength (number: number): (input: string) => boolean {
  return (input: string) => {
    return input.length > number;
  };
}

export function validateNoOfCapitalLetters (number: number): (input: string) => boolean {
  return (input) => {
    const findCapital = input.match(/[A-Z]/g);

    return !!findCapital && findCapital.length >= number;
  }
}

export function validateNoOfLowerCaseLetters () {

}

export function validateNoOfSpecialCharacter () {

}

export function validateCustomizeRule () {

}

export function validateBlacklist () {

}

// error messages: give users reason why a test fails
export function mixMatchRules (input: string, ...rules: ((val: string) => boolean)[]): boolean {
  return rules.map(rule => rule(input)).reduce((val, val2) => val && val2, true);
}
