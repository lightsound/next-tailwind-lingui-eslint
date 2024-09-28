import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    react: true,
    ignores: [],
  },
  ...tailwindcss.configs['flat/recommended'],
  {
    files: ['**/locales/**/*'],
    rules: {
      'style/eol-last': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
)
