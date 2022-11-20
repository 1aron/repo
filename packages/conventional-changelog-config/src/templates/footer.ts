import dedent from 'dedent'

export default /* html */ dedent`
{{#if noteGroups}}
{{#each noteGroups}}
### {{title}}
{{#each notes}}
* {{#if commit.scope}}**{{commit.scope}}:** {{/if}}{{text}}
{{/each}}
{{/each}}
{{/if}}
`