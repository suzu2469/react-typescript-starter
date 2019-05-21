const path = require('path')

/**
 * From: https://gist.github.com/1natsu172/a65a4b45faed2bd3fa74b24163e4256e
 */

module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": path.resolve(__dirname, "tsconfig.json"),
    "tsconfigRootDir": "."
  },
  "env": {
    "browser": true,
    "jest/globals": true
  },
  "plugins": ["@typescript-eslint", "react-hooks", "jest", "prettier"],
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"

  ],
  "rules": {
    /**
     * @description rules of eslint official
     */
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    "import/named": "off",
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    "import/export": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true
    }], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    "@typescript-eslint/prefer-interface": "off", // also want to use "type"
    "@typescript-eslint/explicit-function-return-type": "off", // annoying to force return type

    /**
     * @description rules of eslint-plugin-react
     */
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx"]
    }], // also want to use with ".tsx"
    "react/prop-types": "off", // Is this incompatible with TS props type?

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    "react-hooks/rules-of-hooks": "error",

    /**
     * @description rules of eslint-plugin-prettier
     */
    "prettier/prettier": [
      "error", {
        "singleQuote": true,
        "semi": false
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  }
}
