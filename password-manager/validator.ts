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
  console.log('>>>>>>>>>>>>>>>>>')
  return (input: string) => {
    return input.length > number;
  };
}

export function validateNoOfCapitalLetters (number: number): (input: string) => boolean {
    return () => true;
    // return (input) => !!input.match(/[A-Z]/g) && input.match(/[A-Z]/g).length >= number;

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
  return rules.reduce( (rule1, rule2) => {
    console.log('????????????????? ', rule1);
    return typeof rule1 !== 'function' ? rule1 && rule2(input) : rule1(input) && rule2(input);
    }, true);
}
