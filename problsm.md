Add show more/less btn ::: https://chayanit-chaisri.medium.com/react-create-a-show-more-less-button-aa0e9cd0f927

,
"eslint.workingDirectories": [
"client"
]

ESLint couldn't find the plugin "eslint-plugin-react". This can happen for a couple different reasons:

If ESLint is installed globally, then make sure eslint-plugin-react is also installed globally. A globally-installed ESLint cannot find a locally-installed plugin.

If ESLint is installed locally, then it's likely that the plugin isn't installed correctly. Try reinstalling by running the following:

npm i eslint-plugin-react@latest --save-dev
