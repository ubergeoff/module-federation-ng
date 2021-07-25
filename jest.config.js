const { getJestProjects } = require('@nrwl/jest');

module.exports = {
    projects: [
        ...getJestProjects(),
        '<rootDir>/apps/shell',
        '<rootDir>/apps/mfe1',
        '<rootDir>/libs/shared/auth-lib',
        '<rootDir>/libs/mfe1/mfe1-feature-search',
        '<rootDir>/libs/mfe1/mfe1-feature-book',
    ],
};
