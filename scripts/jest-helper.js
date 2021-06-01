const {pathsToModuleNameMapper} = require('ts-jest/utils');
const ts = require('typescript');

/**
 * calculate the typescript paths as Jest name mapper for given folder
 * @param {string} dirname name of the folder to calculate for
 * @returns Jest name mapper to resolve modules according with Typescript's paths
 */
exports.moduleNameMapper = function moduleNameMapper(dirname) {
    const configFile = ts.findConfigFile(__dirname, ts.sys.fileExists, 'test/tsconfig.json');
    if (!configFile) {
        throw new Error('tsconfig.json not found');
    }
    const {config} = ts.readConfigFile(configFile, ts.sys.readFile);
    const {options: {paths}} = ts.parseJsonConfigFileContent(config, ts.sys, __dirname);
    return pathsToModuleNameMapper(paths, {prefix: '<rootDir>/'});
};
