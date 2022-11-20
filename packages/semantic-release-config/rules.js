const conventionalCommits = require('aron-conventional-commits')

module.exports = [
    { breaking: true, release: 'major' },
    { revert: true, release: 'patch' },
    ...JSON.parse(JSON.stringify(conventionalCommits))
        .map((eachReleaseRule) => {
            delete eachReleaseRule.group
            return eachReleaseRule
        })
]