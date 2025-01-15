import process from 'node:process';
import { findUp, findUpSync } from '@smushytaco/find-up-simple';

/**
 * Options for finding the closest `package.json` file.
 */
export type Options = {
    /**
     * The directory to start from.
     *
     * @default process.cwd()
     */
    readonly cwd?: string;
};

// noinspection JSUnusedGlobalSymbols
/**
 * Find the closest `package.json` file.
 *
 * @param options - Configuration options.
 * @returns The file path, or `undefined` if it could not be found.
 *
 * @example
 * ```
 * // /
 * // └── Users
 * //     └── sindresorhus
 * //         └── foo
 * //             ├── package.json
 * //             └── bar
 * //                 ├── baz
 * //                 └── example.js
 *
 * // example.js
 * import { packageUp } from './index';
 *
 * console.log(await packageUp());
 * //=> '/Users/sindresorhus/foo/package.json'
 * ```
 */
export async function packageUp(
    options: Options = {}
): Promise<string | undefined> {
    const { cwd = process.cwd() } = options;
    return findUp('package.json', { cwd });
}

// noinspection JSUnusedGlobalSymbols
/**
 * Synchronously find the closest `package.json` file.
 *
 * @param options - Configuration options.
 * @returns The file path, or `undefined` if it could not be found.
 *
 * @example
 * ```
 * // /
 * // └── Users
 * //     └── sindresorhus
 * //         └── foo
 * //             ├── package.json
 * //             └── bar
 * //                 ├── baz
 * //                 └── example.js
 *
 * // example.js
 * import { packageUpSync } from './index';
 *
 * console.log(packageUpSync());
 * //=> '/Users/sindresorhus/foo/package.json'
 * ```
 */
export function packageUpSync(options: Options = {}): string | undefined {
    const { cwd = process.cwd() } = options;
    return findUpSync('package.json', { cwd });
}
