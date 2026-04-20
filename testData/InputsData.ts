export class InputsData {
  textMinCharacters: string = "12";
  textMinCharactersPlusOne: string = "123";
  textMaxCharacters: string = "This is a long stringgggg";
  textMaxCharactersMinusOne: string = "This is a long stringggg";
  textCharacterCombination: string = "This_is-string1";
  textNonEnglishCharacter: string = "ØØ";
  textMinCharactersMinusOne: string = "1";
  textMaxCharactersPlusOne: string = "This is a long stringggggg";
  emailValid: string = "a@a.com";
  emailNoDomains: string = "a";
  emailNoTld: string = "a@a";
  emailInvalidTld: string = "a@a.c";
  emailLocalHost: string = "a@localhost";
  passwordValid: string = "ASd!@#12";
  passwordMinCharactersMinusOne: string = "ASd!@#1";
  passwordNoUpper: string = "asd!@#12";
  passwordNoLower: string = "ASD!@#12";
  passwordNoDigit: string = "ASd!@#as";
  passwordNoSpecialCharacter: string = "ASdASD12";
}
