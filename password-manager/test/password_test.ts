const assert = (isTrue: boolean, message: string) => {
  if (!isTrue) {
    throw new Error(message);
  }

  console.log(`Pass the test, ${message}`);
};

import {
  mixMatchRules, validateLength, validateNoOfCapitalLetters, validateNoOfSpecialCharacter, validateNoOfLowerCaseLetters,
  validateCustomizeRule, validateBlacklist
} from "../validator.ts";

// assert(validatePassword('1234568989', 8), 'Password should be longer than 8 characters');
// assert(validatePassword('12345', 8) === false, 'Password should not be valid for less than 8 characters');
// assert(validatePassword('1234567', 7) === true, 'Password should be longer than 7 characters');
//
// assert(validatePassword('1251651', 7), `Password should be at least length`);
//
// // at least one capital letter
// assert(validatePassword('1234erere5E', 8, true), 'Password should have at least one capital letter');
// assert(validatePassword('1234erer5', 8, true) === false, 'Password should not be valid if there is no capital letter');
//
//
// assert(validatePassword('1234erer5EF', 8, 2), 'Password should have at least two capital letters');
// assert(validatePassword('1234erer5E', 8, 2) === false, 'Password should not be valid without at least two capital letters');
//
//
// // customizable password rule
// function hasSpecialCharacter(input: string): any {
//   return (/[!@#$%^&*(),.?":{}|<>]/g).test(input);
// }
//
// assert(validatePassword('12345678ER%', 6, 2, hasSpecialCharacter), 'Password should satisfy customized rule.');
// assert(validatePassword('12345678ER342', 6, 2, hasSpecialCharacter) === false, 'Password should not be valid without satisfying customized rule.');
//
//
//
//
// assert(validatePassword('12345678E%', 6, 3), 'Password should have at least one capital letter and one special character');

// user 0 wants:
// length >= 10
// one uppercase letter

assert(mixMatchRules('123456789eE', validateLength(10), validateNoOfCapitalLetters(1)) === true, 'Password should be at least 10 character long with one uppercase letter');
assert(mixMatchRules('123456eE', validateLength(10), validateNoOfCapitalLetters(1)) === false, 'Password should not be less than 10 character long with one uppercase letter');
// console.log('rule1', validateLength('123456eerere3432',10));
// console.log('rule2', validateNoOfCapitalLetters('123456eerere3432', 1));
assert(mixMatchRules('123456eerere3432', validateLength(10), validateNoOfCapitalLetters(1)) === false, 'Password should have at least one uppercase letter');

// user 1 wants:
//  length > 10
//  special characters >= 1
//  a mix of uppercase and lowercase

// mixMatchRules('123456789eE', validateLength(11), validateNoOfSpecialCharacter(1), validateNoOfLowerCaseLetters(1), validateNoOfCapitalLetters(1));
// user 2 wants:
//  length >= 15
//  special characters > 1 and uppercase > 1 OR special characters > 2 and uppercase >= 0

// mixMatchRules('', validateLength(15), validateNoOfSpecialCharacter(1), validateNoOfCapitalLetters(1), validateNoOfSpecialCharacter(2), validateNoOfCapitalLetters(0));

// user 3 wants:
//  length = 10
//  and a custom rule

// mixMatchRules('', validateLength(10, '==='), validateCustomizeRule());

// user 4 wants:
//  length >= 5
// all uppercase letters
// one special character
// can't match against a blacklist (e.g. nebez, matty, alexis)
// mixMatchRules('', validateLength(5), validateNoOfCapitalLetters('all'), validateNoOfSpecialCharacter(1, '==='), validateBlacklist(['nebez1', 'nebez2']));
