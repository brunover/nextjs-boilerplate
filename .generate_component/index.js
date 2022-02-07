/**
 * This is a component generator, to use just run:
 *
 * yarn gc COMPONENT_NAME
 * or
 * npm run gc COMPONENT_NAME
 */
const fs = require('fs')
const { component, test, stylesheet } = require('./component_templates.js')

// grab component name from terminal argument
const [name] = process.argv.slice(2)
if (!name) throw new Error('You must include a component name.')

const dir = `./src/components/${name}/`

console.log(`Creating component ${name} in: '${dir}'`)

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error('A component with that name already exists.')

// create the folder
fs.mkdirSync(dir)

function writeFileErrorHandler(err) {
  if (err) throw err
}

// component.tsx
fs.writeFile(`${dir}/index.tsx`, component(name), writeFileErrorHandler)
// style.ts
fs.writeFile(`${dir}/styles.ts`, stylesheet(), writeFileErrorHandler)
// test.tsx
fs.writeFile(`${dir}/test.tsx`, test(name), writeFileErrorHandler)

/** Other files: */
// component.scss
// fs.writeFile(`${dir}/${name}.scss`, '', writeFileErrorHandler);
// storybook.jsx
// fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
