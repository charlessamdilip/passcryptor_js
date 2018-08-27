import {getState} from "./localStorageHandler";

// Enum for char type
const charTypeEnum = Object.freeze({
  ALPHALOWER: 0,
  ALPHAUPPER: 1,
  NUMBER: 2,
  SPECIAL: 3
});

// Enum for alpha character type
const alphaTypeEnum = Object.freeze({
  "any": 0,
  "small": 1,
  "caps": 2,
  "require small": 3,
  "require caps": 4,
  "all": 5
});

const charSet = [
    "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
];

/**
 * Checks any action is valids or not in the application or not.
 * All the application event are validated on the slider name.
 * @param sliderName a String of the slider name in the application.
 * @param value value of the slider.
 * @returns a Boolean if the slider movement is valid.
 */
export function isValidSlideMovement(sliderName, value) {
  const selectedConf = getSelectedConf();
  let passLength = selectedConf.passLength;
  let alphaLength = selectedConf.alphaLength;
  let numberLength = selectedConf.numberLength;
  let specialCharLength = selectedConf.specialCharLength;

  switch(sliderName) {
    case "password" :
      return validateSliderMovement(
          value, alphaLength, numberLength, specialCharLength
      );
    case "alpha":
      return validateSliderMovement(
          passLength, value, numberLength, specialCharLength
      );
    case "number":
      return validateSliderMovement(
          passLength, alphaLength, value, specialCharLength
      );
    case "special":
      return validateSliderMovement(
          passLength, alphaLength, numberLength, value
      );
  }
}

/**
 * Generates the password depending on the conf and returns a String.
 * @returns a String of password.
 */
export function generatePassword() {
  const selectedConf = getSelectedConf();
  let passLength = selectedConf.passLength;
  let alphaLength = selectedConf.alphaLength;
  let numberLength = selectedConf.numberLength;
  let specialCharLength = selectedConf.specialCharLength;
  let alphaType = selectedConf.alphaType;

  let passwordCharTypes = [];

  for (let i = 0; i < alphaLength; ++i) {
    if (alphaType === charTypeEnum['small']) { // Only small case
      passwordCharTypes.push(charTypeEnum.ALPHALOWER);
    } else if (alphaType === charTypeEnum['caps']) { // Only Caps case
      passwordCharTypes.push(charTypeEnum.ALPHAUPPER);
    } else {
      if (i == 0 && alphaType > charTypeEnum['caps']) { // Requires case
        if (alphaType == charTypeEnum['require caps']) { // Requires upper
          passwordCharTypes.push(charTypeEnum.ALPHAUPPER);
        } else { // Requires lower
          passwordCharTypes.push(charTypeEnum.ALPHALOWER);
        }
      } else if (i == 1 && alphaType == charTypeEnum['all']) { // all case
        passwordCharTypes.push(charTypeEnum.ALPHAUPPER);
      } else { // Any case and requires
        const typeIdx = Math.floor(Math.random() * 2);
        passwordCharTypes.push(typeIdx);
      }
    }
  }
  for (let i = 0; i < numberLength; ++i) { // Numeric cases
    passwordCharTypes.push(charTypeEnum.NUMBER);
  }
  for (let i = 0; i < specialCharLength; ++i) { // Special cases
    passwordCharTypes.push(charTypeEnum.SPECIAL);
  }

  for (let i = 0; i < passLength; ++i) { // Random accepted Cases
    passwordCharTypes.push(
        passwordCharTypes[Math.floor(Math.random() * passwordCharTypes.length)]
    );
  }

  let password = [];
  for (let i = 0; i < passLength; ++i) {
    password.push(charSet[passwordCharTypes[i]][Math.floor(Math.random() *
        (charSet[passwordCharTypes[i]].length))])
  }
  return shuffle(passwordCharTypes);
}

/**
 * Returns a json of the required computational configuration.
 * @returns {{passLength: number, alphaLength: number, numberLength: number, specialCharLength: number, alphaType: string}}
 */
function getSelectedConf() {
  const state = getState();

  return {
    passLength: state.passLength,
    alphaLength: state.alphaLength,
    numberLength: !state.numberSelected ? 0 : state.numberLength,
    specialCharLength: !state.specialCharLength ? 0 : state.specialCharLength,
    alphaType: state.alphaType
  }
}

/**
 * Checks whether the slider movements are valid.
 * @param passLength length of the password characters.
 * @param alphaLength length of the alphabets characters.
 * @param numberLength length of the numberic characters.
 * @param specialCharLength length of special characters.
 * @returns {boolean which states the stability of the application sliders.}
 */
function validateSliderMovement(
    passLength, alphaLength, numberLength, specialCharLength
) {
  return passLength >= alphaLength + numberLength + specialCharLength;
}

/**
 * Random shuffle of the generated password
 * @param str
 * @returns {string - shuffled from param @str}
 */
function shuffle(str) {
  let a = this.split(""), n = a.length;

  for(let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }

  return a.join("");
}