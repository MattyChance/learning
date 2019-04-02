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

export function validateNoOfLowerCaseLetters (number: number): (input: string) => boolean {
  return (input) => {
    const findLowercase = input.match(/[a-z]/g);

    return !!findLowercase && findLowercase.length >= number;
  }
}

export function validateNoOfSpecialCharacter (number: number): (input: string) => boolean {
  return (input) => {
    const findSpecialCharacter = input.match(/[!@#$%^&*(),.?":{}|<>]/g);

    return !!findSpecialCharacter && findSpecialCharacter.length >= number;
  }
}

export function validateCustomizeRule (customizeRule: (val: string) => boolean): (input: string) => boolean {
  return (input) => customizeRule(input);
}

export function validateBlacklist (list: any[]): (input: string) => boolean {
  return (input) => {
   return list.indexOf(input) === -1;
  }
}

// error messages: give users reason why a test fails
export function mixMatchRules (input: string, ...rules: ((val: string) => boolean)[]): boolean {
  return rules.map(rule => rule(input)).reduce((val, val2) => val && val2, true);
}
