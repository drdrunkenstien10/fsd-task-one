export const createNodeTemplate = (type, args, children) =>
  `<${type} ${args
    .map(({ name, value }) => `${name}="${value}"`)
    .join('')}> ${children} </${type}>`;
