/**
 * ESLint: download extensão ESLint, Projeto: "yarn add eslint -D"
 *    Responder perguntas de utilização de código
 *    Depois de edição | yarn eslint --init
 * ESLint, É um padronizador de código, utilizamos o padrão de código aibnb
 *
 * Para alteração de todos arquivos automaticamente: "yarn eslint --fix PASTA --ext .js"
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    /**
     * Regras de utilização do Prettier(plugin)
     * Regras: métodos apenas com this, camelcase, no-unused-vars( desabilitando a obrigação de definir variáveis )
     */
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern" : "next" }]
  },
};

/**
 * Habilite autoSave do eslint no settings.json
 *
 *
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
 */

 /**
 * Prettier : Instalação para uso em conjunto com ESLint: "yarn add prettier eslint-config-prettier eslint-plugin-prettier -D"
 * Prettier, é um plugin para deixar código mais legível e bonito. serve para manter padrão de código tbm.
 * Variáveis abaixo para configuração de padrões que já são utilizadas no ESLint. "singleQuote" = "aspasSimples"
 */
