// tslint:disable
// @ts-nocheck
/**
 * チョコットランド計算機(非公式)
 * チョコットランド計算機 - 中間サーバ間通信のAPI仕様   
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
// eslint-disable-next-line
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    'code': number;
    /**
     * ログサービスの該当エラーに対するリンク
     * @type {string}
     * @memberof ModelError
     */
    'link': string;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
    /**
     * バリデーション情報の配列
     * @type {Array<ValidationInfo>}
     * @memberof ModelError
     */
    'validationInfo'?: Array<ValidationInfo>;
    /**
     * エラー時に案内するページのリンク
     * @type {string}
     * @memberof ModelError
     */
    'browserLink'?: string;
    /**
     * 何画面前に戻る必要があるか
     * @type {number}
     * @memberof ModelError
     */
    'numberOfBackScreen'?: number;
}
/**
 * 
 * @export
 * @interface ValidationInfo
 */
export interface ValidationInfo {
    /**
     * 対象のフィールド名
     * @type {string}
     * @memberof ValidationInfo
     */
    'field': string;
    /**
     * 不正な入力値
     * @type {string}
     * @memberof ValidationInfo
     */
    'rejectedValue': string;
    /**
     * バリデーションメッセージ
     * @type {string}
     * @memberof ValidationInfo
     */
    'message': string;
}

/**
 * ItemApi - axios parameter creator
 * @export
 */
export const ItemApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 魔獣缶・シールを使用 
         * @summary 魔獣缶・シールを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCanPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/can`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * アタークリキッドを使用 
         * @summary アタークリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidAtkPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/liquid/atk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * マモールリキッドを使用 
         * @summary マモールリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidDefPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/liquid/def`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * マホアタリキッドを使用 
         * @summary マホアタリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidMatPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/liquid/mat`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * マホマモリキッドを使用 
         * @summary マホマモリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidMdfPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/liquid/mdf`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ALLビタを使用 
         * @summary ALLビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVitaAllPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/vita/all`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * INTビタを使用 
         * @summary INTビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVitaIntPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/vita/int`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * POWビタを使用 
         * @summary POWビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVitaPowPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/vita/pow`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ItemApi - functional programming interface
 * @export
 */
export const ItemApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ItemApiAxiosParamCreator(configuration)
    return {
        /**
         * 魔獣缶・シールを使用 
         * @summary 魔獣缶・シールを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCanPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCanPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * アタークリキッドを使用 
         * @summary アタークリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiLiquidAtkPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiLiquidAtkPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * マモールリキッドを使用 
         * @summary マモールリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiLiquidDefPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiLiquidDefPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * マホアタリキッドを使用 
         * @summary マホアタリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiLiquidMatPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiLiquidMatPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * マホマモリキッドを使用 
         * @summary マホマモリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiLiquidMdfPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiLiquidMdfPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ALLビタを使用 
         * @summary ALLビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVitaAllPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVitaAllPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * INTビタを使用 
         * @summary INTビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVitaIntPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVitaIntPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * POWビタを使用 
         * @summary POWビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVitaPowPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVitaPowPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ItemApi - factory interface
 * @export
 */
export const ItemApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ItemApiFp(configuration)
    return {
        /**
         * 魔獣缶・シールを使用 
         * @summary 魔獣缶・シールを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCanPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiCanPost(options).then((request) => request(axios, basePath));
        },
        /**
         * アタークリキッドを使用 
         * @summary アタークリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidAtkPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiLiquidAtkPost(options).then((request) => request(axios, basePath));
        },
        /**
         * マモールリキッドを使用 
         * @summary マモールリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidDefPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiLiquidDefPost(options).then((request) => request(axios, basePath));
        },
        /**
         * マホアタリキッドを使用 
         * @summary マホアタリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidMatPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiLiquidMatPost(options).then((request) => request(axios, basePath));
        },
        /**
         * マホマモリキッドを使用 
         * @summary マホマモリキッドを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiLiquidMdfPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiLiquidMdfPost(options).then((request) => request(axios, basePath));
        },
        /**
         * ALLビタを使用 
         * @summary ALLビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVitaAllPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiVitaAllPost(options).then((request) => request(axios, basePath));
        },
        /**
         * INTビタを使用 
         * @summary INTビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVitaIntPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiVitaIntPost(options).then((request) => request(axios, basePath));
        },
        /**
         * POWビタを使用 
         * @summary POWビタを使用
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVitaPowPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiVitaPowPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ItemApi - object-oriented interface
 * @export
 * @class ItemApi
 * @extends {BaseAPI}
 */
export class ItemApi extends BaseAPI {
    /**
     * 魔獣缶・シールを使用 
     * @summary 魔獣缶・シールを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiCanPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiCanPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * アタークリキッドを使用 
     * @summary アタークリキッドを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiLiquidAtkPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiLiquidAtkPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * マモールリキッドを使用 
     * @summary マモールリキッドを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiLiquidDefPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiLiquidDefPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * マホアタリキッドを使用 
     * @summary マホアタリキッドを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiLiquidMatPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiLiquidMatPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * マホマモリキッドを使用 
     * @summary マホマモリキッドを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiLiquidMdfPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiLiquidMdfPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ALLビタを使用 
     * @summary ALLビタを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiVitaAllPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiVitaAllPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * INTビタを使用 
     * @summary INTビタを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiVitaIntPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiVitaIntPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * POWビタを使用 
     * @summary POWビタを使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ItemApi
     */
    public apiVitaPowPost(options?: AxiosRequestConfig) {
        return ItemApiFp(this.configuration).apiVitaPowPost(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * JobApi - axios parameter creator
 * @export
 */
export const JobApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 職業情報読み込み
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/job`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 職業情報登録
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/job`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobApi - functional programming interface
 * @export
 */
export const JobApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary 職業情報読み込み
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 職業情報登録
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiJobPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiJobPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobApi - factory interface
 * @export
 */
export const JobApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobApiFp(configuration)
    return {
        /**
         * 
         * @summary 職業情報読み込み
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobGet(options?: any): AxiosPromise<string> {
            return localVarFp.apiJobGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 職業情報登録
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiJobPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiJobPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * JobApi - object-oriented interface
 * @export
 * @class JobApi
 * @extends {BaseAPI}
 */
export class JobApi extends BaseAPI {
    /**
     * 
     * @summary 職業情報読み込み
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobApi
     */
    public apiJobGet(options?: AxiosRequestConfig) {
        return JobApiFp(this.configuration).apiJobGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 職業情報登録
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobApi
     */
    public apiJobPost(options?: AxiosRequestConfig) {
        return JobApiFp(this.configuration).apiJobPost(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary user情報読み込み
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary user情報登録
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary user情報読み込み
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary user情報登録
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiUserPost(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @summary user情報読み込み
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserGet(options?: any): AxiosPromise<string> {
            return localVarFp.apiUserGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary user情報登録
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost(options?: any): AxiosPromise<string> {
            return localVarFp.apiUserPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @summary user情報読み込み
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserGet(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).apiUserGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary user情報登録
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public apiUserPost(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).apiUserPost(options).then((request) => request(this.axios, this.basePath));
    }
}


