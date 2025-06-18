
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>
/**
 * Model TestResult
 * 
 */
export type TestResult = $Result.DefaultSelection<Prisma.$TestResultPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Vacancy
 * 
 */
export type Vacancy = $Result.DefaultSelection<Prisma.$VacancyPayload>
/**
 * Model ContactRequest
 * 
 */
export type ContactRequest = $Result.DefaultSelection<Prisma.$ContactRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  candidate: 'candidate',
  employer: 'employer',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vacancy`: Exposes CRUD operations for the **Vacancy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vacancies
    * const vacancies = await prisma.vacancy.findMany()
    * ```
    */
  get vacancy(): Prisma.VacancyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactRequest`: Exposes CRUD operations for the **ContactRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactRequests
    * const contactRequests = await prisma.contactRequest.findMany()
    * ```
    */
  get contactRequest(): Prisma.ContactRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Candidate: 'Candidate',
    TestResult: 'TestResult',
    Company: 'Company',
    Vacancy: 'Vacancy',
    ContactRequest: 'ContactRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "candidate" | "testResult" | "company" | "vacancy" | "contactRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
      TestResult: {
        payload: Prisma.$TestResultPayload<ExtArgs>
        fields: Prisma.TestResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findFirst: {
            args: Prisma.TestResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findMany: {
            args: Prisma.TestResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          create: {
            args: Prisma.TestResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          createMany: {
            args: Prisma.TestResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          delete: {
            args: Prisma.TestResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          update: {
            args: Prisma.TestResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          deleteMany: {
            args: Prisma.TestResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          upsert: {
            args: Prisma.TestResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          aggregate: {
            args: Prisma.TestResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestResult>
          }
          groupBy: {
            args: Prisma.TestResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestResultCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Vacancy: {
        payload: Prisma.$VacancyPayload<ExtArgs>
        fields: Prisma.VacancyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacancyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacancyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>
          }
          findFirst: {
            args: Prisma.VacancyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacancyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>
          }
          findMany: {
            args: Prisma.VacancyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>[]
          }
          create: {
            args: Prisma.VacancyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>
          }
          createMany: {
            args: Prisma.VacancyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacancyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>[]
          }
          delete: {
            args: Prisma.VacancyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>
          }
          update: {
            args: Prisma.VacancyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>
          }
          deleteMany: {
            args: Prisma.VacancyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacancyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VacancyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>[]
          }
          upsert: {
            args: Prisma.VacancyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacancyPayload>
          }
          aggregate: {
            args: Prisma.VacancyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacancy>
          }
          groupBy: {
            args: Prisma.VacancyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacancyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacancyCountArgs<ExtArgs>
            result: $Utils.Optional<VacancyCountAggregateOutputType> | number
          }
        }
      }
      ContactRequest: {
        payload: Prisma.$ContactRequestPayload<ExtArgs>
        fields: Prisma.ContactRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          findFirst: {
            args: Prisma.ContactRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          findMany: {
            args: Prisma.ContactRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>[]
          }
          create: {
            args: Prisma.ContactRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          createMany: {
            args: Prisma.ContactRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>[]
          }
          delete: {
            args: Prisma.ContactRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          update: {
            args: Prisma.ContactRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          deleteMany: {
            args: Prisma.ContactRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>[]
          }
          upsert: {
            args: Prisma.ContactRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          aggregate: {
            args: Prisma.ContactRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactRequest>
          }
          groupBy: {
            args: Prisma.ContactRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ContactRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    candidate?: CandidateOmit
    testResult?: TestResultOmit
    company?: CompanyOmit
    vacancy?: VacancyOmit
    contactRequest?: ContactRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CandidateCountOutputType
   */

  export type CandidateCountOutputType = {
    contactRequests: number
  }

  export type CandidateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactRequests?: boolean | CandidateCountOutputTypeCountContactRequestsArgs
  }

  // Custom InputTypes
  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateCountOutputType
     */
    select?: CandidateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidateCountOutputType without action
   */
  export type CandidateCountOutputTypeCountContactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactRequestWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    vacancies: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacancies?: boolean | CompanyCountOutputTypeCountVacanciesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountVacanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacancyWhereInput
  }


  /**
   * Count Type VacancyCountOutputType
   */

  export type VacancyCountOutputType = {
    contactRequests: number
  }

  export type VacancyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactRequests?: boolean | VacancyCountOutputTypeCountContactRequestsArgs
  }

  // Custom InputTypes
  /**
   * VacancyCountOutputType without action
   */
  export type VacancyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacancyCountOutputType
     */
    select?: VacancyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VacancyCountOutputType without action
   */
  export type VacancyCountOutputTypeCountContactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    name: number
    email: number
    phone: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    name: string
    email: string
    phone: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    candidate?: boolean | User$candidateArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "name" | "email" | "phone" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | User$candidateArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      name: string
      email: string
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends User$candidateArgs<ExtArgs> = {}>(args?: Subset<T, User$candidateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.candidate
   */
  export type User$candidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    where?: CandidateWhereInput
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    education: string | null
    availableFrom: Date | null
    location: string | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    education: string | null
    availableFrom: Date | null
    location: string | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    userId: number
    education: number
    availableFrom: number
    location: number
    _all: number
  }


  export type CandidateMinAggregateInputType = {
    id?: true
    userId?: true
    education?: true
    availableFrom?: true
    location?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    userId?: true
    education?: true
    availableFrom?: true
    location?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    userId?: true
    education?: true
    availableFrom?: true
    location?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    userId: string
    education: string | null
    availableFrom: Date | null
    location: string | null
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    education?: boolean
    availableFrom?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    testResult?: boolean | Candidate$testResultArgs<ExtArgs>
    contactRequests?: boolean | Candidate$contactRequestsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    education?: boolean
    availableFrom?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    education?: boolean
    availableFrom?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    userId?: boolean
    education?: boolean
    availableFrom?: boolean
    location?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "education" | "availableFrom" | "location", ExtArgs["result"]["candidate"]>
  export type CandidateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    testResult?: boolean | Candidate$testResultArgs<ExtArgs>
    contactRequests?: boolean | Candidate$contactRequestsArgs<ExtArgs>
    _count?: boolean | CandidateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      testResult: Prisma.$TestResultPayload<ExtArgs> | null
      contactRequests: Prisma.$ContactRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      education: string | null
      availableFrom: Date | null
      location: string | null
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testResult<T extends Candidate$testResultArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$testResultArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contactRequests<T extends Candidate$contactRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Candidate$contactRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly userId: FieldRef<"Candidate", 'String'>
    readonly education: FieldRef<"Candidate", 'String'>
    readonly availableFrom: FieldRef<"Candidate", 'DateTime'>
    readonly location: FieldRef<"Candidate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate.testResult
   */
  export type Candidate$testResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    where?: TestResultWhereInput
  }

  /**
   * Candidate.contactRequests
   */
  export type Candidate$contactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    where?: ContactRequestWhereInput
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    cursor?: ContactRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateInclude<ExtArgs> | null
  }


  /**
   * Model TestResult
   */

  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    waakhond: number | null
    dienaar: number | null
    streber: number | null
    innovator: number | null
    doorpakker: number | null
    allemansvriend: number | null
  }

  export type TestResultSumAggregateOutputType = {
    waakhond: number | null
    dienaar: number | null
    streber: number | null
    innovator: number | null
    doorpakker: number | null
    allemansvriend: number | null
  }

  export type TestResultMinAggregateOutputType = {
    id: string | null
    candidateId: string | null
    waakhond: number | null
    dienaar: number | null
    streber: number | null
    innovator: number | null
    doorpakker: number | null
    allemansvriend: number | null
    completedAt: Date | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: string | null
    candidateId: string | null
    waakhond: number | null
    dienaar: number | null
    streber: number | null
    innovator: number | null
    doorpakker: number | null
    allemansvriend: number | null
    completedAt: Date | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    candidateId: number
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    waakhond?: true
    dienaar?: true
    streber?: true
    innovator?: true
    doorpakker?: true
    allemansvriend?: true
  }

  export type TestResultSumAggregateInputType = {
    waakhond?: true
    dienaar?: true
    streber?: true
    innovator?: true
    doorpakker?: true
    allemansvriend?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    candidateId?: true
    waakhond?: true
    dienaar?: true
    streber?: true
    innovator?: true
    doorpakker?: true
    allemansvriend?: true
    completedAt?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    candidateId?: true
    waakhond?: true
    dienaar?: true
    streber?: true
    innovator?: true
    doorpakker?: true
    allemansvriend?: true
    completedAt?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    candidateId?: true
    waakhond?: true
    dienaar?: true
    streber?: true
    innovator?: true
    doorpakker?: true
    allemansvriend?: true
    completedAt?: true
    _all?: true
  }

  export type TestResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithAggregationInput | TestResultOrderByWithAggregationInput[]
    by: TestResultScalarFieldEnum[] | TestResultScalarFieldEnum
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _avg?: TestResultAvgAggregateInputType
    _sum?: TestResultSumAggregateInputType
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }

  export type TestResultGroupByOutputType = {
    id: string
    candidateId: string
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt: Date
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    waakhond?: boolean
    dienaar?: boolean
    streber?: boolean
    innovator?: boolean
    doorpakker?: boolean
    allemansvriend?: boolean
    completedAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    waakhond?: boolean
    dienaar?: boolean
    streber?: boolean
    innovator?: boolean
    doorpakker?: boolean
    allemansvriend?: boolean
    completedAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    waakhond?: boolean
    dienaar?: boolean
    streber?: boolean
    innovator?: boolean
    doorpakker?: boolean
    allemansvriend?: boolean
    completedAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectScalar = {
    id?: boolean
    candidateId?: boolean
    waakhond?: boolean
    dienaar?: boolean
    streber?: boolean
    innovator?: boolean
    doorpakker?: boolean
    allemansvriend?: boolean
    completedAt?: boolean
  }

  export type TestResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "waakhond" | "dienaar" | "streber" | "innovator" | "doorpakker" | "allemansvriend" | "completedAt", ExtArgs["result"]["testResult"]>
  export type TestResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
  }

  export type $TestResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestResult"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      candidateId: string
      waakhond: number
      dienaar: number
      streber: number
      innovator: number
      doorpakker: number
      allemansvriend: number
      completedAt: Date
    }, ExtArgs["result"]["testResult"]>
    composites: {}
  }

  type TestResultGetPayload<S extends boolean | null | undefined | TestResultDefaultArgs> = $Result.GetResult<Prisma.$TestResultPayload, S>

  type TestResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestResult'], meta: { name: 'TestResult' } }
    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestResultFindUniqueArgs>(args: SelectSubset<T, TestResultFindUniqueArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestResultFindFirstArgs>(args?: SelectSubset<T, TestResultFindFirstArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestResultFindManyArgs>(args?: SelectSubset<T, TestResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
     */
    create<T extends TestResultCreateArgs>(args: SelectSubset<T, TestResultCreateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestResults.
     * @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestResultCreateManyArgs>(args?: SelectSubset<T, TestResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestResults and returns the data saved in the database.
     * @param {TestResultCreateManyAndReturnArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
     */
    delete<T extends TestResultDeleteArgs>(args: SelectSubset<T, TestResultDeleteArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestResultUpdateArgs>(args: SelectSubset<T, TestResultUpdateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestResultDeleteManyArgs>(args?: SelectSubset<T, TestResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestResultUpdateManyArgs>(args: SelectSubset<T, TestResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults and returns the data updated in the database.
     * @param {TestResultUpdateManyAndReturnArgs} args - Arguments to update many TestResults.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
     */
    upsert<T extends TestResultUpsertArgs>(args: SelectSubset<T, TestResultUpsertArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestResult model
   */
  readonly fields: TestResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestResult model
   */
  interface TestResultFieldRefs {
    readonly id: FieldRef<"TestResult", 'String'>
    readonly candidateId: FieldRef<"TestResult", 'String'>
    readonly waakhond: FieldRef<"TestResult", 'Int'>
    readonly dienaar: FieldRef<"TestResult", 'Int'>
    readonly streber: FieldRef<"TestResult", 'Int'>
    readonly innovator: FieldRef<"TestResult", 'Int'>
    readonly doorpakker: FieldRef<"TestResult", 'Int'>
    readonly allemansvriend: FieldRef<"TestResult", 'Int'>
    readonly completedAt: FieldRef<"TestResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestResult findUnique
   */
  export type TestResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findFirst
   */
  export type TestResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult create
   */
  export type TestResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }

  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestResult createManyAndReturn
   */
  export type TestResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult update
   */
  export type TestResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
  }

  /**
   * TestResult updateManyAndReturn
   */
  export type TestResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }

  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to delete.
     */
    limit?: number
  }

  /**
   * TestResult without action
   */
  export type TestResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    websiteUrl: string | null
    logoUrl: string | null
    location: string | null
    branch: string | null
    type: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    websiteUrl: string | null
    logoUrl: string | null
    location: string | null
    branch: string | null
    type: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    websiteUrl: number
    logoUrl: number
    location: number
    branch: number
    type: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    websiteUrl?: true
    logoUrl?: true
    location?: true
    branch?: true
    type?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    websiteUrl?: true
    logoUrl?: true
    location?: true
    branch?: true
    type?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    websiteUrl?: true
    logoUrl?: true
    location?: true
    branch?: true
    type?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    websiteUrl: string | null
    logoUrl: string | null
    location: string
    branch: string
    type: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    logoUrl?: boolean
    location?: boolean
    branch?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vacancies?: boolean | Company$vacanciesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    logoUrl?: boolean
    location?: boolean
    branch?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    logoUrl?: boolean
    location?: boolean
    branch?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    websiteUrl?: boolean
    logoUrl?: boolean
    location?: boolean
    branch?: boolean
    type?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "websiteUrl" | "logoUrl" | "location" | "branch" | "type", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vacancies?: boolean | Company$vacanciesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vacancies: Prisma.$VacancyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      websiteUrl: string | null
      logoUrl: string | null
      location: string
      branch: string
      type: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vacancies<T extends Company$vacanciesArgs<ExtArgs> = {}>(args?: Subset<T, Company$vacanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly userId: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly websiteUrl: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly location: FieldRef<"Company", 'String'>
    readonly branch: FieldRef<"Company", 'String'>
    readonly type: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.vacancies
   */
  export type Company$vacanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    where?: VacancyWhereInput
    orderBy?: VacancyOrderByWithRelationInput | VacancyOrderByWithRelationInput[]
    cursor?: VacancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacancyScalarFieldEnum | VacancyScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Vacancy
   */

  export type AggregateVacancy = {
    _count: VacancyCountAggregateOutputType | null
    _avg: VacancyAvgAggregateOutputType | null
    _sum: VacancySumAggregateOutputType | null
    _min: VacancyMinAggregateOutputType | null
    _max: VacancyMaxAggregateOutputType | null
  }

  export type VacancyAvgAggregateOutputType = {
    hoursPerWeek: number | null
  }

  export type VacancySumAggregateOutputType = {
    hoursPerWeek: number | null
  }

  export type VacancyMinAggregateOutputType = {
    id: string | null
    companyId: string | null
    title: string | null
    description: string | null
    employmentType: string | null
    hoursPerWeek: number | null
    projectType: string | null
    location: string | null
    drive1: string | null
    drive2: string | null
    createdAt: Date | null
  }

  export type VacancyMaxAggregateOutputType = {
    id: string | null
    companyId: string | null
    title: string | null
    description: string | null
    employmentType: string | null
    hoursPerWeek: number | null
    projectType: string | null
    location: string | null
    drive1: string | null
    drive2: string | null
    createdAt: Date | null
  }

  export type VacancyCountAggregateOutputType = {
    id: number
    companyId: number
    title: number
    description: number
    employmentType: number
    hoursPerWeek: number
    projectType: number
    location: number
    drive1: number
    drive2: number
    createdAt: number
    _all: number
  }


  export type VacancyAvgAggregateInputType = {
    hoursPerWeek?: true
  }

  export type VacancySumAggregateInputType = {
    hoursPerWeek?: true
  }

  export type VacancyMinAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    description?: true
    employmentType?: true
    hoursPerWeek?: true
    projectType?: true
    location?: true
    drive1?: true
    drive2?: true
    createdAt?: true
  }

  export type VacancyMaxAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    description?: true
    employmentType?: true
    hoursPerWeek?: true
    projectType?: true
    location?: true
    drive1?: true
    drive2?: true
    createdAt?: true
  }

  export type VacancyCountAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    description?: true
    employmentType?: true
    hoursPerWeek?: true
    projectType?: true
    location?: true
    drive1?: true
    drive2?: true
    createdAt?: true
    _all?: true
  }

  export type VacancyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacancy to aggregate.
     */
    where?: VacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacancyOrderByWithRelationInput | VacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vacancies
    **/
    _count?: true | VacancyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacancyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacancySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacancyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacancyMaxAggregateInputType
  }

  export type GetVacancyAggregateType<T extends VacancyAggregateArgs> = {
        [P in keyof T & keyof AggregateVacancy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacancy[P]>
      : GetScalarType<T[P], AggregateVacancy[P]>
  }




  export type VacancyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacancyWhereInput
    orderBy?: VacancyOrderByWithAggregationInput | VacancyOrderByWithAggregationInput[]
    by: VacancyScalarFieldEnum[] | VacancyScalarFieldEnum
    having?: VacancyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacancyCountAggregateInputType | true
    _avg?: VacancyAvgAggregateInputType
    _sum?: VacancySumAggregateInputType
    _min?: VacancyMinAggregateInputType
    _max?: VacancyMaxAggregateInputType
  }

  export type VacancyGroupByOutputType = {
    id: string
    companyId: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt: Date
    _count: VacancyCountAggregateOutputType | null
    _avg: VacancyAvgAggregateOutputType | null
    _sum: VacancySumAggregateOutputType | null
    _min: VacancyMinAggregateOutputType | null
    _max: VacancyMaxAggregateOutputType | null
  }

  type GetVacancyGroupByPayload<T extends VacancyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacancyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacancyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacancyGroupByOutputType[P]>
            : GetScalarType<T[P], VacancyGroupByOutputType[P]>
        }
      >
    >


  export type VacancySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    employmentType?: boolean
    hoursPerWeek?: boolean
    projectType?: boolean
    location?: boolean
    drive1?: boolean
    drive2?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contactRequests?: boolean | Vacancy$contactRequestsArgs<ExtArgs>
    _count?: boolean | VacancyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacancy"]>

  export type VacancySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    employmentType?: boolean
    hoursPerWeek?: boolean
    projectType?: boolean
    location?: boolean
    drive1?: boolean
    drive2?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacancy"]>

  export type VacancySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    employmentType?: boolean
    hoursPerWeek?: boolean
    projectType?: boolean
    location?: boolean
    drive1?: boolean
    drive2?: boolean
    createdAt?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacancy"]>

  export type VacancySelectScalar = {
    id?: boolean
    companyId?: boolean
    title?: boolean
    description?: boolean
    employmentType?: boolean
    hoursPerWeek?: boolean
    projectType?: boolean
    location?: boolean
    drive1?: boolean
    drive2?: boolean
    createdAt?: boolean
  }

  export type VacancyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "title" | "description" | "employmentType" | "hoursPerWeek" | "projectType" | "location" | "drive1" | "drive2" | "createdAt", ExtArgs["result"]["vacancy"]>
  export type VacancyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    contactRequests?: boolean | Vacancy$contactRequestsArgs<ExtArgs>
    _count?: boolean | VacancyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VacancyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type VacancyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $VacancyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vacancy"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      contactRequests: Prisma.$ContactRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyId: string
      title: string
      description: string
      employmentType: string
      hoursPerWeek: number
      projectType: string
      location: string
      drive1: string
      drive2: string
      createdAt: Date
    }, ExtArgs["result"]["vacancy"]>
    composites: {}
  }

  type VacancyGetPayload<S extends boolean | null | undefined | VacancyDefaultArgs> = $Result.GetResult<Prisma.$VacancyPayload, S>

  type VacancyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VacancyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VacancyCountAggregateInputType | true
    }

  export interface VacancyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vacancy'], meta: { name: 'Vacancy' } }
    /**
     * Find zero or one Vacancy that matches the filter.
     * @param {VacancyFindUniqueArgs} args - Arguments to find a Vacancy
     * @example
     * // Get one Vacancy
     * const vacancy = await prisma.vacancy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacancyFindUniqueArgs>(args: SelectSubset<T, VacancyFindUniqueArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vacancy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VacancyFindUniqueOrThrowArgs} args - Arguments to find a Vacancy
     * @example
     * // Get one Vacancy
     * const vacancy = await prisma.vacancy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacancyFindUniqueOrThrowArgs>(args: SelectSubset<T, VacancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacancy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyFindFirstArgs} args - Arguments to find a Vacancy
     * @example
     * // Get one Vacancy
     * const vacancy = await prisma.vacancy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacancyFindFirstArgs>(args?: SelectSubset<T, VacancyFindFirstArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacancy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyFindFirstOrThrowArgs} args - Arguments to find a Vacancy
     * @example
     * // Get one Vacancy
     * const vacancy = await prisma.vacancy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacancyFindFirstOrThrowArgs>(args?: SelectSubset<T, VacancyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vacancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacancies
     * const vacancies = await prisma.vacancy.findMany()
     * 
     * // Get first 10 Vacancies
     * const vacancies = await prisma.vacancy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacancyWithIdOnly = await prisma.vacancy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacancyFindManyArgs>(args?: SelectSubset<T, VacancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vacancy.
     * @param {VacancyCreateArgs} args - Arguments to create a Vacancy.
     * @example
     * // Create one Vacancy
     * const Vacancy = await prisma.vacancy.create({
     *   data: {
     *     // ... data to create a Vacancy
     *   }
     * })
     * 
     */
    create<T extends VacancyCreateArgs>(args: SelectSubset<T, VacancyCreateArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vacancies.
     * @param {VacancyCreateManyArgs} args - Arguments to create many Vacancies.
     * @example
     * // Create many Vacancies
     * const vacancy = await prisma.vacancy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacancyCreateManyArgs>(args?: SelectSubset<T, VacancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vacancies and returns the data saved in the database.
     * @param {VacancyCreateManyAndReturnArgs} args - Arguments to create many Vacancies.
     * @example
     * // Create many Vacancies
     * const vacancy = await prisma.vacancy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vacancies and only return the `id`
     * const vacancyWithIdOnly = await prisma.vacancy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacancyCreateManyAndReturnArgs>(args?: SelectSubset<T, VacancyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vacancy.
     * @param {VacancyDeleteArgs} args - Arguments to delete one Vacancy.
     * @example
     * // Delete one Vacancy
     * const Vacancy = await prisma.vacancy.delete({
     *   where: {
     *     // ... filter to delete one Vacancy
     *   }
     * })
     * 
     */
    delete<T extends VacancyDeleteArgs>(args: SelectSubset<T, VacancyDeleteArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vacancy.
     * @param {VacancyUpdateArgs} args - Arguments to update one Vacancy.
     * @example
     * // Update one Vacancy
     * const vacancy = await prisma.vacancy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacancyUpdateArgs>(args: SelectSubset<T, VacancyUpdateArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vacancies.
     * @param {VacancyDeleteManyArgs} args - Arguments to filter Vacancies to delete.
     * @example
     * // Delete a few Vacancies
     * const { count } = await prisma.vacancy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacancyDeleteManyArgs>(args?: SelectSubset<T, VacancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacancies
     * const vacancy = await prisma.vacancy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacancyUpdateManyArgs>(args: SelectSubset<T, VacancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacancies and returns the data updated in the database.
     * @param {VacancyUpdateManyAndReturnArgs} args - Arguments to update many Vacancies.
     * @example
     * // Update many Vacancies
     * const vacancy = await prisma.vacancy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vacancies and only return the `id`
     * const vacancyWithIdOnly = await prisma.vacancy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VacancyUpdateManyAndReturnArgs>(args: SelectSubset<T, VacancyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vacancy.
     * @param {VacancyUpsertArgs} args - Arguments to update or create a Vacancy.
     * @example
     * // Update or create a Vacancy
     * const vacancy = await prisma.vacancy.upsert({
     *   create: {
     *     // ... data to create a Vacancy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacancy we want to update
     *   }
     * })
     */
    upsert<T extends VacancyUpsertArgs>(args: SelectSubset<T, VacancyUpsertArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyCountArgs} args - Arguments to filter Vacancies to count.
     * @example
     * // Count the number of Vacancies
     * const count = await prisma.vacancy.count({
     *   where: {
     *     // ... the filter for the Vacancies we want to count
     *   }
     * })
    **/
    count<T extends VacancyCountArgs>(
      args?: Subset<T, VacancyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacancyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vacancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VacancyAggregateArgs>(args: Subset<T, VacancyAggregateArgs>): Prisma.PrismaPromise<GetVacancyAggregateType<T>>

    /**
     * Group by Vacancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacancyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VacancyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacancyGroupByArgs['orderBy'] }
        : { orderBy?: VacancyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VacancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vacancy model
   */
  readonly fields: VacancyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vacancy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacancyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contactRequests<T extends Vacancy$contactRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Vacancy$contactRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vacancy model
   */
  interface VacancyFieldRefs {
    readonly id: FieldRef<"Vacancy", 'String'>
    readonly companyId: FieldRef<"Vacancy", 'String'>
    readonly title: FieldRef<"Vacancy", 'String'>
    readonly description: FieldRef<"Vacancy", 'String'>
    readonly employmentType: FieldRef<"Vacancy", 'String'>
    readonly hoursPerWeek: FieldRef<"Vacancy", 'Int'>
    readonly projectType: FieldRef<"Vacancy", 'String'>
    readonly location: FieldRef<"Vacancy", 'String'>
    readonly drive1: FieldRef<"Vacancy", 'String'>
    readonly drive2: FieldRef<"Vacancy", 'String'>
    readonly createdAt: FieldRef<"Vacancy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vacancy findUnique
   */
  export type VacancyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * Filter, which Vacancy to fetch.
     */
    where: VacancyWhereUniqueInput
  }

  /**
   * Vacancy findUniqueOrThrow
   */
  export type VacancyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * Filter, which Vacancy to fetch.
     */
    where: VacancyWhereUniqueInput
  }

  /**
   * Vacancy findFirst
   */
  export type VacancyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * Filter, which Vacancy to fetch.
     */
    where?: VacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacancyOrderByWithRelationInput | VacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacancies.
     */
    cursor?: VacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacancies.
     */
    distinct?: VacancyScalarFieldEnum | VacancyScalarFieldEnum[]
  }

  /**
   * Vacancy findFirstOrThrow
   */
  export type VacancyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * Filter, which Vacancy to fetch.
     */
    where?: VacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacancyOrderByWithRelationInput | VacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacancies.
     */
    cursor?: VacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacancies.
     */
    distinct?: VacancyScalarFieldEnum | VacancyScalarFieldEnum[]
  }

  /**
   * Vacancy findMany
   */
  export type VacancyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * Filter, which Vacancies to fetch.
     */
    where?: VacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacancies to fetch.
     */
    orderBy?: VacancyOrderByWithRelationInput | VacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vacancies.
     */
    cursor?: VacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacancies.
     */
    skip?: number
    distinct?: VacancyScalarFieldEnum | VacancyScalarFieldEnum[]
  }

  /**
   * Vacancy create
   */
  export type VacancyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * The data needed to create a Vacancy.
     */
    data: XOR<VacancyCreateInput, VacancyUncheckedCreateInput>
  }

  /**
   * Vacancy createMany
   */
  export type VacancyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vacancies.
     */
    data: VacancyCreateManyInput | VacancyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vacancy createManyAndReturn
   */
  export type VacancyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * The data used to create many Vacancies.
     */
    data: VacancyCreateManyInput | VacancyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacancy update
   */
  export type VacancyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * The data needed to update a Vacancy.
     */
    data: XOR<VacancyUpdateInput, VacancyUncheckedUpdateInput>
    /**
     * Choose, which Vacancy to update.
     */
    where: VacancyWhereUniqueInput
  }

  /**
   * Vacancy updateMany
   */
  export type VacancyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vacancies.
     */
    data: XOR<VacancyUpdateManyMutationInput, VacancyUncheckedUpdateManyInput>
    /**
     * Filter which Vacancies to update
     */
    where?: VacancyWhereInput
    /**
     * Limit how many Vacancies to update.
     */
    limit?: number
  }

  /**
   * Vacancy updateManyAndReturn
   */
  export type VacancyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * The data used to update Vacancies.
     */
    data: XOR<VacancyUpdateManyMutationInput, VacancyUncheckedUpdateManyInput>
    /**
     * Filter which Vacancies to update
     */
    where?: VacancyWhereInput
    /**
     * Limit how many Vacancies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacancy upsert
   */
  export type VacancyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * The filter to search for the Vacancy to update in case it exists.
     */
    where: VacancyWhereUniqueInput
    /**
     * In case the Vacancy found by the `where` argument doesn't exist, create a new Vacancy with this data.
     */
    create: XOR<VacancyCreateInput, VacancyUncheckedCreateInput>
    /**
     * In case the Vacancy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacancyUpdateInput, VacancyUncheckedUpdateInput>
  }

  /**
   * Vacancy delete
   */
  export type VacancyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
    /**
     * Filter which Vacancy to delete.
     */
    where: VacancyWhereUniqueInput
  }

  /**
   * Vacancy deleteMany
   */
  export type VacancyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacancies to delete
     */
    where?: VacancyWhereInput
    /**
     * Limit how many Vacancies to delete.
     */
    limit?: number
  }

  /**
   * Vacancy.contactRequests
   */
  export type Vacancy$contactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    where?: ContactRequestWhereInput
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    cursor?: ContactRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * Vacancy without action
   */
  export type VacancyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacancy
     */
    select?: VacancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacancy
     */
    omit?: VacancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacancyInclude<ExtArgs> | null
  }


  /**
   * Model ContactRequest
   */

  export type AggregateContactRequest = {
    _count: ContactRequestCountAggregateOutputType | null
    _avg: ContactRequestAvgAggregateOutputType | null
    _sum: ContactRequestSumAggregateOutputType | null
    _min: ContactRequestMinAggregateOutputType | null
    _max: ContactRequestMaxAggregateOutputType | null
  }

  export type ContactRequestAvgAggregateOutputType = {
    matchScore: number | null
  }

  export type ContactRequestSumAggregateOutputType = {
    matchScore: number | null
  }

  export type ContactRequestMinAggregateOutputType = {
    id: string | null
    candidateId: string | null
    vacancyId: string | null
    matchScore: number | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactRequestMaxAggregateOutputType = {
    id: string | null
    candidateId: string | null
    vacancyId: string | null
    matchScore: number | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactRequestCountAggregateOutputType = {
    id: number
    candidateId: number
    vacancyId: number
    matchScore: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactRequestAvgAggregateInputType = {
    matchScore?: true
  }

  export type ContactRequestSumAggregateInputType = {
    matchScore?: true
  }

  export type ContactRequestMinAggregateInputType = {
    id?: true
    candidateId?: true
    vacancyId?: true
    matchScore?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactRequestMaxAggregateInputType = {
    id?: true
    candidateId?: true
    vacancyId?: true
    matchScore?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactRequestCountAggregateInputType = {
    id?: true
    candidateId?: true
    vacancyId?: true
    matchScore?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactRequest to aggregate.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactRequests
    **/
    _count?: true | ContactRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactRequestMaxAggregateInputType
  }

  export type GetContactRequestAggregateType<T extends ContactRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateContactRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactRequest[P]>
      : GetScalarType<T[P], AggregateContactRequest[P]>
  }




  export type ContactRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactRequestWhereInput
    orderBy?: ContactRequestOrderByWithAggregationInput | ContactRequestOrderByWithAggregationInput[]
    by: ContactRequestScalarFieldEnum[] | ContactRequestScalarFieldEnum
    having?: ContactRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactRequestCountAggregateInputType | true
    _avg?: ContactRequestAvgAggregateInputType
    _sum?: ContactRequestSumAggregateInputType
    _min?: ContactRequestMinAggregateInputType
    _max?: ContactRequestMaxAggregateInputType
  }

  export type ContactRequestGroupByOutputType = {
    id: string
    candidateId: string
    vacancyId: string
    matchScore: number
    message: string | null
    status: string
    createdAt: Date
    _count: ContactRequestCountAggregateOutputType | null
    _avg: ContactRequestAvgAggregateOutputType | null
    _sum: ContactRequestSumAggregateOutputType | null
    _min: ContactRequestMinAggregateOutputType | null
    _max: ContactRequestMaxAggregateOutputType | null
  }

  type GetContactRequestGroupByPayload<T extends ContactRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ContactRequestGroupByOutputType[P]>
        }
      >
    >


  export type ContactRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    vacancyId?: boolean
    matchScore?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    vacancy?: boolean | VacancyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactRequest"]>

  export type ContactRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    vacancyId?: boolean
    matchScore?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    vacancy?: boolean | VacancyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactRequest"]>

  export type ContactRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    candidateId?: boolean
    vacancyId?: boolean
    matchScore?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    vacancy?: boolean | VacancyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactRequest"]>

  export type ContactRequestSelectScalar = {
    id?: boolean
    candidateId?: boolean
    vacancyId?: boolean
    matchScore?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "candidateId" | "vacancyId" | "matchScore" | "message" | "status" | "createdAt", ExtArgs["result"]["contactRequest"]>
  export type ContactRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    vacancy?: boolean | VacancyDefaultArgs<ExtArgs>
  }
  export type ContactRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    vacancy?: boolean | VacancyDefaultArgs<ExtArgs>
  }
  export type ContactRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | CandidateDefaultArgs<ExtArgs>
    vacancy?: boolean | VacancyDefaultArgs<ExtArgs>
  }

  export type $ContactRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactRequest"
    objects: {
      candidate: Prisma.$CandidatePayload<ExtArgs>
      vacancy: Prisma.$VacancyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      candidateId: string
      vacancyId: string
      matchScore: number
      message: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contactRequest"]>
    composites: {}
  }

  type ContactRequestGetPayload<S extends boolean | null | undefined | ContactRequestDefaultArgs> = $Result.GetResult<Prisma.$ContactRequestPayload, S>

  type ContactRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactRequestCountAggregateInputType | true
    }

  export interface ContactRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactRequest'], meta: { name: 'ContactRequest' } }
    /**
     * Find zero or one ContactRequest that matches the filter.
     * @param {ContactRequestFindUniqueArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactRequestFindUniqueArgs>(args: SelectSubset<T, ContactRequestFindUniqueArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactRequestFindUniqueOrThrowArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestFindFirstArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactRequestFindFirstArgs>(args?: SelectSubset<T, ContactRequestFindFirstArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestFindFirstOrThrowArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactRequests
     * const contactRequests = await prisma.contactRequest.findMany()
     * 
     * // Get first 10 ContactRequests
     * const contactRequests = await prisma.contactRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactRequestWithIdOnly = await prisma.contactRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactRequestFindManyArgs>(args?: SelectSubset<T, ContactRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactRequest.
     * @param {ContactRequestCreateArgs} args - Arguments to create a ContactRequest.
     * @example
     * // Create one ContactRequest
     * const ContactRequest = await prisma.contactRequest.create({
     *   data: {
     *     // ... data to create a ContactRequest
     *   }
     * })
     * 
     */
    create<T extends ContactRequestCreateArgs>(args: SelectSubset<T, ContactRequestCreateArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactRequests.
     * @param {ContactRequestCreateManyArgs} args - Arguments to create many ContactRequests.
     * @example
     * // Create many ContactRequests
     * const contactRequest = await prisma.contactRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactRequestCreateManyArgs>(args?: SelectSubset<T, ContactRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactRequests and returns the data saved in the database.
     * @param {ContactRequestCreateManyAndReturnArgs} args - Arguments to create many ContactRequests.
     * @example
     * // Create many ContactRequests
     * const contactRequest = await prisma.contactRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactRequests and only return the `id`
     * const contactRequestWithIdOnly = await prisma.contactRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactRequest.
     * @param {ContactRequestDeleteArgs} args - Arguments to delete one ContactRequest.
     * @example
     * // Delete one ContactRequest
     * const ContactRequest = await prisma.contactRequest.delete({
     *   where: {
     *     // ... filter to delete one ContactRequest
     *   }
     * })
     * 
     */
    delete<T extends ContactRequestDeleteArgs>(args: SelectSubset<T, ContactRequestDeleteArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactRequest.
     * @param {ContactRequestUpdateArgs} args - Arguments to update one ContactRequest.
     * @example
     * // Update one ContactRequest
     * const contactRequest = await prisma.contactRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactRequestUpdateArgs>(args: SelectSubset<T, ContactRequestUpdateArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactRequests.
     * @param {ContactRequestDeleteManyArgs} args - Arguments to filter ContactRequests to delete.
     * @example
     * // Delete a few ContactRequests
     * const { count } = await prisma.contactRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactRequestDeleteManyArgs>(args?: SelectSubset<T, ContactRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactRequests
     * const contactRequest = await prisma.contactRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactRequestUpdateManyArgs>(args: SelectSubset<T, ContactRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactRequests and returns the data updated in the database.
     * @param {ContactRequestUpdateManyAndReturnArgs} args - Arguments to update many ContactRequests.
     * @example
     * // Update many ContactRequests
     * const contactRequest = await prisma.contactRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactRequests and only return the `id`
     * const contactRequestWithIdOnly = await prisma.contactRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactRequest.
     * @param {ContactRequestUpsertArgs} args - Arguments to update or create a ContactRequest.
     * @example
     * // Update or create a ContactRequest
     * const contactRequest = await prisma.contactRequest.upsert({
     *   create: {
     *     // ... data to create a ContactRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactRequest we want to update
     *   }
     * })
     */
    upsert<T extends ContactRequestUpsertArgs>(args: SelectSubset<T, ContactRequestUpsertArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestCountArgs} args - Arguments to filter ContactRequests to count.
     * @example
     * // Count the number of ContactRequests
     * const count = await prisma.contactRequest.count({
     *   where: {
     *     // ... the filter for the ContactRequests we want to count
     *   }
     * })
    **/
    count<T extends ContactRequestCountArgs>(
      args?: Subset<T, ContactRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactRequestAggregateArgs>(args: Subset<T, ContactRequestAggregateArgs>): Prisma.PrismaPromise<GetContactRequestAggregateType<T>>

    /**
     * Group by ContactRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactRequestGroupByArgs['orderBy'] }
        : { orderBy?: ContactRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactRequest model
   */
  readonly fields: ContactRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends CandidateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidateDefaultArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vacancy<T extends VacancyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VacancyDefaultArgs<ExtArgs>>): Prisma__VacancyClient<$Result.GetResult<Prisma.$VacancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactRequest model
   */
  interface ContactRequestFieldRefs {
    readonly id: FieldRef<"ContactRequest", 'String'>
    readonly candidateId: FieldRef<"ContactRequest", 'String'>
    readonly vacancyId: FieldRef<"ContactRequest", 'String'>
    readonly matchScore: FieldRef<"ContactRequest", 'Int'>
    readonly message: FieldRef<"ContactRequest", 'String'>
    readonly status: FieldRef<"ContactRequest", 'String'>
    readonly createdAt: FieldRef<"ContactRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactRequest findUnique
   */
  export type ContactRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest findUniqueOrThrow
   */
  export type ContactRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest findFirst
   */
  export type ContactRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactRequests.
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactRequests.
     */
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * ContactRequest findFirstOrThrow
   */
  export type ContactRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactRequests.
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactRequests.
     */
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * ContactRequest findMany
   */
  export type ContactRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequests to fetch.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactRequests.
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * ContactRequest create
   */
  export type ContactRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactRequest.
     */
    data: XOR<ContactRequestCreateInput, ContactRequestUncheckedCreateInput>
  }

  /**
   * ContactRequest createMany
   */
  export type ContactRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactRequests.
     */
    data: ContactRequestCreateManyInput | ContactRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactRequest createManyAndReturn
   */
  export type ContactRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ContactRequests.
     */
    data: ContactRequestCreateManyInput | ContactRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactRequest update
   */
  export type ContactRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactRequest.
     */
    data: XOR<ContactRequestUpdateInput, ContactRequestUncheckedUpdateInput>
    /**
     * Choose, which ContactRequest to update.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest updateMany
   */
  export type ContactRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactRequests.
     */
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContactRequests to update
     */
    where?: ContactRequestWhereInput
    /**
     * Limit how many ContactRequests to update.
     */
    limit?: number
  }

  /**
   * ContactRequest updateManyAndReturn
   */
  export type ContactRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * The data used to update ContactRequests.
     */
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContactRequests to update
     */
    where?: ContactRequestWhereInput
    /**
     * Limit how many ContactRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactRequest upsert
   */
  export type ContactRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactRequest to update in case it exists.
     */
    where: ContactRequestWhereUniqueInput
    /**
     * In case the ContactRequest found by the `where` argument doesn't exist, create a new ContactRequest with this data.
     */
    create: XOR<ContactRequestCreateInput, ContactRequestUncheckedCreateInput>
    /**
     * In case the ContactRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactRequestUpdateInput, ContactRequestUncheckedUpdateInput>
  }

  /**
   * ContactRequest delete
   */
  export type ContactRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter which ContactRequest to delete.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest deleteMany
   */
  export type ContactRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactRequests to delete
     */
    where?: ContactRequestWhereInput
    /**
     * Limit how many ContactRequests to delete.
     */
    limit?: number
  }

  /**
   * ContactRequest without action
   */
  export type ContactRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    education: 'education',
    availableFrom: 'availableFrom',
    location: 'location'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    waakhond: 'waakhond',
    dienaar: 'dienaar',
    streber: 'streber',
    innovator: 'innovator',
    doorpakker: 'doorpakker',
    allemansvriend: 'allemansvriend',
    completedAt: 'completedAt'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    websiteUrl: 'websiteUrl',
    logoUrl: 'logoUrl',
    location: 'location',
    branch: 'branch',
    type: 'type'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const VacancyScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    title: 'title',
    description: 'description',
    employmentType: 'employmentType',
    hoursPerWeek: 'hoursPerWeek',
    projectType: 'projectType',
    location: 'location',
    drive1: 'drive1',
    drive2: 'drive2',
    createdAt: 'createdAt'
  };

  export type VacancyScalarFieldEnum = (typeof VacancyScalarFieldEnum)[keyof typeof VacancyScalarFieldEnum]


  export const ContactRequestScalarFieldEnum: {
    id: 'id',
    candidateId: 'candidateId',
    vacancyId: 'vacancyId',
    matchScore: 'matchScore',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactRequestScalarFieldEnum = (typeof ContactRequestScalarFieldEnum)[keyof typeof ContactRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    candidate?: XOR<CandidateNullableScalarRelationFilter, CandidateWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    candidate?: XOR<CandidateNullableScalarRelationFilter, CandidateWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    userId?: StringFilter<"Candidate"> | string
    education?: StringNullableFilter<"Candidate"> | string | null
    availableFrom?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    location?: StringNullableFilter<"Candidate"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    testResult?: XOR<TestResultNullableScalarRelationFilter, TestResultWhereInput> | null
    contactRequests?: ContactRequestListRelationFilter
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    education?: SortOrderInput | SortOrder
    availableFrom?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    testResult?: TestResultOrderByWithRelationInput
    contactRequests?: ContactRequestOrderByRelationAggregateInput
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    education?: StringNullableFilter<"Candidate"> | string | null
    availableFrom?: DateTimeNullableFilter<"Candidate"> | Date | string | null
    location?: StringNullableFilter<"Candidate"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    testResult?: XOR<TestResultNullableScalarRelationFilter, TestResultWhereInput> | null
    contactRequests?: ContactRequestListRelationFilter
  }, "id" | "userId">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    education?: SortOrderInput | SortOrder
    availableFrom?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    userId?: StringWithAggregatesFilter<"Candidate"> | string
    education?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    availableFrom?: DateTimeNullableWithAggregatesFilter<"Candidate"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
  }

  export type TestResultWhereInput = {
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    id?: StringFilter<"TestResult"> | string
    candidateId?: StringFilter<"TestResult"> | string
    waakhond?: IntFilter<"TestResult"> | number
    dienaar?: IntFilter<"TestResult"> | number
    streber?: IntFilter<"TestResult"> | number
    innovator?: IntFilter<"TestResult"> | number
    doorpakker?: IntFilter<"TestResult"> | number
    allemansvriend?: IntFilter<"TestResult"> | number
    completedAt?: DateTimeFilter<"TestResult"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
    completedAt?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    candidateId?: string
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    waakhond?: IntFilter<"TestResult"> | number
    dienaar?: IntFilter<"TestResult"> | number
    streber?: IntFilter<"TestResult"> | number
    innovator?: IntFilter<"TestResult"> | number
    doorpakker?: IntFilter<"TestResult"> | number
    allemansvriend?: IntFilter<"TestResult"> | number
    completedAt?: DateTimeFilter<"TestResult"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
  }, "id" | "candidateId">

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
    completedAt?: SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _avg?: TestResultAvgOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
    _sum?: TestResultSumOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    OR?: TestResultScalarWhereWithAggregatesInput[]
    NOT?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestResult"> | string
    candidateId?: StringWithAggregatesFilter<"TestResult"> | string
    waakhond?: IntWithAggregatesFilter<"TestResult"> | number
    dienaar?: IntWithAggregatesFilter<"TestResult"> | number
    streber?: IntWithAggregatesFilter<"TestResult"> | number
    innovator?: IntWithAggregatesFilter<"TestResult"> | number
    doorpakker?: IntWithAggregatesFilter<"TestResult"> | number
    allemansvriend?: IntWithAggregatesFilter<"TestResult"> | number
    completedAt?: DateTimeWithAggregatesFilter<"TestResult"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    userId?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    location?: StringFilter<"Company"> | string
    branch?: StringFilter<"Company"> | string
    type?: StringFilter<"Company"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vacancies?: VacancyListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    branch?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    vacancies?: VacancyOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    websiteUrl?: StringNullableFilter<"Company"> | string | null
    logoUrl?: StringNullableFilter<"Company"> | string | null
    location?: StringFilter<"Company"> | string
    branch?: StringFilter<"Company"> | string
    type?: StringFilter<"Company"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vacancies?: VacancyListRelationFilter
  }, "id" | "userId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    location?: SortOrder
    branch?: SortOrder
    type?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    userId?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Company"> | string | null
    location?: StringWithAggregatesFilter<"Company"> | string
    branch?: StringWithAggregatesFilter<"Company"> | string
    type?: StringWithAggregatesFilter<"Company"> | string
  }

  export type VacancyWhereInput = {
    AND?: VacancyWhereInput | VacancyWhereInput[]
    OR?: VacancyWhereInput[]
    NOT?: VacancyWhereInput | VacancyWhereInput[]
    id?: StringFilter<"Vacancy"> | string
    companyId?: StringFilter<"Vacancy"> | string
    title?: StringFilter<"Vacancy"> | string
    description?: StringFilter<"Vacancy"> | string
    employmentType?: StringFilter<"Vacancy"> | string
    hoursPerWeek?: IntFilter<"Vacancy"> | number
    projectType?: StringFilter<"Vacancy"> | string
    location?: StringFilter<"Vacancy"> | string
    drive1?: StringFilter<"Vacancy"> | string
    drive2?: StringFilter<"Vacancy"> | string
    createdAt?: DateTimeFilter<"Vacancy"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contactRequests?: ContactRequestListRelationFilter
  }

  export type VacancyOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    hoursPerWeek?: SortOrder
    projectType?: SortOrder
    location?: SortOrder
    drive1?: SortOrder
    drive2?: SortOrder
    createdAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    contactRequests?: ContactRequestOrderByRelationAggregateInput
  }

  export type VacancyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VacancyWhereInput | VacancyWhereInput[]
    OR?: VacancyWhereInput[]
    NOT?: VacancyWhereInput | VacancyWhereInput[]
    companyId?: StringFilter<"Vacancy"> | string
    title?: StringFilter<"Vacancy"> | string
    description?: StringFilter<"Vacancy"> | string
    employmentType?: StringFilter<"Vacancy"> | string
    hoursPerWeek?: IntFilter<"Vacancy"> | number
    projectType?: StringFilter<"Vacancy"> | string
    location?: StringFilter<"Vacancy"> | string
    drive1?: StringFilter<"Vacancy"> | string
    drive2?: StringFilter<"Vacancy"> | string
    createdAt?: DateTimeFilter<"Vacancy"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    contactRequests?: ContactRequestListRelationFilter
  }, "id">

  export type VacancyOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    hoursPerWeek?: SortOrder
    projectType?: SortOrder
    location?: SortOrder
    drive1?: SortOrder
    drive2?: SortOrder
    createdAt?: SortOrder
    _count?: VacancyCountOrderByAggregateInput
    _avg?: VacancyAvgOrderByAggregateInput
    _max?: VacancyMaxOrderByAggregateInput
    _min?: VacancyMinOrderByAggregateInput
    _sum?: VacancySumOrderByAggregateInput
  }

  export type VacancyScalarWhereWithAggregatesInput = {
    AND?: VacancyScalarWhereWithAggregatesInput | VacancyScalarWhereWithAggregatesInput[]
    OR?: VacancyScalarWhereWithAggregatesInput[]
    NOT?: VacancyScalarWhereWithAggregatesInput | VacancyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vacancy"> | string
    companyId?: StringWithAggregatesFilter<"Vacancy"> | string
    title?: StringWithAggregatesFilter<"Vacancy"> | string
    description?: StringWithAggregatesFilter<"Vacancy"> | string
    employmentType?: StringWithAggregatesFilter<"Vacancy"> | string
    hoursPerWeek?: IntWithAggregatesFilter<"Vacancy"> | number
    projectType?: StringWithAggregatesFilter<"Vacancy"> | string
    location?: StringWithAggregatesFilter<"Vacancy"> | string
    drive1?: StringWithAggregatesFilter<"Vacancy"> | string
    drive2?: StringWithAggregatesFilter<"Vacancy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vacancy"> | Date | string
  }

  export type ContactRequestWhereInput = {
    AND?: ContactRequestWhereInput | ContactRequestWhereInput[]
    OR?: ContactRequestWhereInput[]
    NOT?: ContactRequestWhereInput | ContactRequestWhereInput[]
    id?: StringFilter<"ContactRequest"> | string
    candidateId?: StringFilter<"ContactRequest"> | string
    vacancyId?: StringFilter<"ContactRequest"> | string
    matchScore?: IntFilter<"ContactRequest"> | number
    message?: StringNullableFilter<"ContactRequest"> | string | null
    status?: StringFilter<"ContactRequest"> | string
    createdAt?: DateTimeFilter<"ContactRequest"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    vacancy?: XOR<VacancyScalarRelationFilter, VacancyWhereInput>
  }

  export type ContactRequestOrderByWithRelationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    vacancyId?: SortOrder
    matchScore?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    candidate?: CandidateOrderByWithRelationInput
    vacancy?: VacancyOrderByWithRelationInput
  }

  export type ContactRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactRequestWhereInput | ContactRequestWhereInput[]
    OR?: ContactRequestWhereInput[]
    NOT?: ContactRequestWhereInput | ContactRequestWhereInput[]
    candidateId?: StringFilter<"ContactRequest"> | string
    vacancyId?: StringFilter<"ContactRequest"> | string
    matchScore?: IntFilter<"ContactRequest"> | number
    message?: StringNullableFilter<"ContactRequest"> | string | null
    status?: StringFilter<"ContactRequest"> | string
    createdAt?: DateTimeFilter<"ContactRequest"> | Date | string
    candidate?: XOR<CandidateScalarRelationFilter, CandidateWhereInput>
    vacancy?: XOR<VacancyScalarRelationFilter, VacancyWhereInput>
  }, "id">

  export type ContactRequestOrderByWithAggregationInput = {
    id?: SortOrder
    candidateId?: SortOrder
    vacancyId?: SortOrder
    matchScore?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactRequestCountOrderByAggregateInput
    _avg?: ContactRequestAvgOrderByAggregateInput
    _max?: ContactRequestMaxOrderByAggregateInput
    _min?: ContactRequestMinOrderByAggregateInput
    _sum?: ContactRequestSumOrderByAggregateInput
  }

  export type ContactRequestScalarWhereWithAggregatesInput = {
    AND?: ContactRequestScalarWhereWithAggregatesInput | ContactRequestScalarWhereWithAggregatesInput[]
    OR?: ContactRequestScalarWhereWithAggregatesInput[]
    NOT?: ContactRequestScalarWhereWithAggregatesInput | ContactRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactRequest"> | string
    candidateId?: StringWithAggregatesFilter<"ContactRequest"> | string
    vacancyId?: StringWithAggregatesFilter<"ContactRequest"> | string
    matchScore?: IntWithAggregatesFilter<"ContactRequest"> | number
    message?: StringNullableWithAggregatesFilter<"ContactRequest"> | string | null
    status?: StringWithAggregatesFilter<"ContactRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    candidate?: CandidateCreateNestedOneWithoutUserInput
    company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    candidate?: CandidateUncheckedCreateNestedOneWithoutUserInput
    company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneWithoutUserNestedInput
    company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUncheckedUpdateOneWithoutUserNestedInput
    company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateInput = {
    id?: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    user: UserCreateNestedOneWithoutCandidateInput
    testResult?: TestResultCreateNestedOneWithoutCandidateInput
    contactRequests?: ContactRequestCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    userId: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    testResult?: TestResultUncheckedCreateNestedOneWithoutCandidateInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCandidateNestedInput
    testResult?: TestResultUpdateOneWithoutCandidateNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    testResult?: TestResultUncheckedUpdateOneWithoutCandidateNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateCreateManyInput = {
    id?: string
    userId: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
  }

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestResultCreateInput = {
    id?: string
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutTestResultInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: string
    candidateId: string
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt?: Date | string
  }

  export type TestResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waakhond?: IntFieldUpdateOperationsInput | number
    dienaar?: IntFieldUpdateOperationsInput | number
    streber?: IntFieldUpdateOperationsInput | number
    innovator?: IntFieldUpdateOperationsInput | number
    doorpakker?: IntFieldUpdateOperationsInput | number
    allemansvriend?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutTestResultNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    waakhond?: IntFieldUpdateOperationsInput | number
    dienaar?: IntFieldUpdateOperationsInput | number
    streber?: IntFieldUpdateOperationsInput | number
    innovator?: IntFieldUpdateOperationsInput | number
    doorpakker?: IntFieldUpdateOperationsInput | number
    allemansvriend?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyInput = {
    id?: string
    candidateId: string
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt?: Date | string
  }

  export type TestResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    waakhond?: IntFieldUpdateOperationsInput | number
    dienaar?: IntFieldUpdateOperationsInput | number
    streber?: IntFieldUpdateOperationsInput | number
    innovator?: IntFieldUpdateOperationsInput | number
    doorpakker?: IntFieldUpdateOperationsInput | number
    allemansvriend?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    waakhond?: IntFieldUpdateOperationsInput | number
    dienaar?: IntFieldUpdateOperationsInput | number
    streber?: IntFieldUpdateOperationsInput | number
    innovator?: IntFieldUpdateOperationsInput | number
    doorpakker?: IntFieldUpdateOperationsInput | number
    allemansvriend?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
    user: UserCreateNestedOneWithoutCompanyInput
    vacancies?: VacancyCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
    vacancies?: VacancyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    vacancies?: VacancyUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    vacancies?: VacancyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VacancyCreateInput = {
    id?: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutVacanciesInput
    contactRequests?: ContactRequestCreateNestedManyWithoutVacancyInput
  }

  export type VacancyUncheckedCreateInput = {
    id?: string
    companyId: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutVacancyInput
  }

  export type VacancyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutVacanciesNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutVacancyNestedInput
  }

  export type VacancyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutVacancyNestedInput
  }

  export type VacancyCreateManyInput = {
    id?: string
    companyId: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
  }

  export type VacancyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacancyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestCreateInput = {
    id?: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutContactRequestsInput
    vacancy: VacancyCreateNestedOneWithoutContactRequestsInput
  }

  export type ContactRequestUncheckedCreateInput = {
    id?: string
    candidateId: string
    vacancyId: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
  }

  export type ContactRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutContactRequestsNestedInput
    vacancy?: VacancyUpdateOneRequiredWithoutContactRequestsNestedInput
  }

  export type ContactRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    vacancyId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestCreateManyInput = {
    id?: string
    candidateId: string
    vacancyId: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
  }

  export type ContactRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    vacancyId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CandidateNullableScalarRelationFilter = {
    is?: CandidateWhereInput | null
    isNot?: CandidateWhereInput | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TestResultNullableScalarRelationFilter = {
    is?: TestResultWhereInput | null
    isNot?: TestResultWhereInput | null
  }

  export type ContactRequestListRelationFilter = {
    every?: ContactRequestWhereInput
    some?: ContactRequestWhereInput
    none?: ContactRequestWhereInput
  }

  export type ContactRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    education?: SortOrder
    availableFrom?: SortOrder
    location?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    education?: SortOrder
    availableFrom?: SortOrder
    location?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    education?: SortOrder
    availableFrom?: SortOrder
    location?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CandidateScalarRelationFilter = {
    is?: CandidateWhereInput
    isNot?: CandidateWhereInput
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
    completedAt?: SortOrder
  }

  export type TestResultAvgOrderByAggregateInput = {
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
    completedAt?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
    completedAt?: SortOrder
  }

  export type TestResultSumOrderByAggregateInput = {
    waakhond?: SortOrder
    dienaar?: SortOrder
    streber?: SortOrder
    innovator?: SortOrder
    doorpakker?: SortOrder
    allemansvriend?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type VacancyListRelationFilter = {
    every?: VacancyWhereInput
    some?: VacancyWhereInput
    none?: VacancyWhereInput
  }

  export type VacancyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    branch?: SortOrder
    type?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    branch?: SortOrder
    type?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    websiteUrl?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    branch?: SortOrder
    type?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type VacancyCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    hoursPerWeek?: SortOrder
    projectType?: SortOrder
    location?: SortOrder
    drive1?: SortOrder
    drive2?: SortOrder
    createdAt?: SortOrder
  }

  export type VacancyAvgOrderByAggregateInput = {
    hoursPerWeek?: SortOrder
  }

  export type VacancyMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    hoursPerWeek?: SortOrder
    projectType?: SortOrder
    location?: SortOrder
    drive1?: SortOrder
    drive2?: SortOrder
    createdAt?: SortOrder
  }

  export type VacancyMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    employmentType?: SortOrder
    hoursPerWeek?: SortOrder
    projectType?: SortOrder
    location?: SortOrder
    drive1?: SortOrder
    drive2?: SortOrder
    createdAt?: SortOrder
  }

  export type VacancySumOrderByAggregateInput = {
    hoursPerWeek?: SortOrder
  }

  export type VacancyScalarRelationFilter = {
    is?: VacancyWhereInput
    isNot?: VacancyWhereInput
  }

  export type ContactRequestCountOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    vacancyId?: SortOrder
    matchScore?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactRequestAvgOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type ContactRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    vacancyId?: SortOrder
    matchScore?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactRequestMinOrderByAggregateInput = {
    id?: SortOrder
    candidateId?: SortOrder
    vacancyId?: SortOrder
    matchScore?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactRequestSumOrderByAggregateInput = {
    matchScore?: SortOrder
  }

  export type CandidateCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateCreateWithoutUserInput, CandidateUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutUserInput
    connect?: CandidateWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type CandidateUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateCreateWithoutUserInput, CandidateUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutUserInput
    connect?: CandidateWhereUniqueInput
  }

  export type CompanyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CandidateUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateCreateWithoutUserInput, CandidateUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutUserInput
    upsert?: CandidateUpsertWithoutUserInput
    disconnect?: CandidateWhereInput | boolean
    delete?: CandidateWhereInput | boolean
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutUserInput, CandidateUpdateWithoutUserInput>, CandidateUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CandidateUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateCreateWithoutUserInput, CandidateUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutUserInput
    upsert?: CandidateUpsertWithoutUserInput
    disconnect?: CandidateWhereInput | boolean
    delete?: CandidateWhereInput | boolean
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutUserInput, CandidateUpdateWithoutUserInput>, CandidateUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutCandidateInput = {
    create?: XOR<UserCreateWithoutCandidateInput, UserUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateInput
    connect?: UserWhereUniqueInput
  }

  export type TestResultCreateNestedOneWithoutCandidateInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput
    connect?: TestResultWhereUniqueInput
  }

  export type ContactRequestCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ContactRequestCreateWithoutCandidateInput, ContactRequestUncheckedCreateWithoutCandidateInput> | ContactRequestCreateWithoutCandidateInput[] | ContactRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutCandidateInput | ContactRequestCreateOrConnectWithoutCandidateInput[]
    createMany?: ContactRequestCreateManyCandidateInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type TestResultUncheckedCreateNestedOneWithoutCandidateInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput
    connect?: TestResultWhereUniqueInput
  }

  export type ContactRequestUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ContactRequestCreateWithoutCandidateInput, ContactRequestUncheckedCreateWithoutCandidateInput> | ContactRequestCreateWithoutCandidateInput[] | ContactRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutCandidateInput | ContactRequestCreateOrConnectWithoutCandidateInput[]
    createMany?: ContactRequestCreateManyCandidateInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCandidateNestedInput = {
    create?: XOR<UserCreateWithoutCandidateInput, UserUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidateInput
    upsert?: UserUpsertWithoutCandidateInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidateInput, UserUpdateWithoutCandidateInput>, UserUncheckedUpdateWithoutCandidateInput>
  }

  export type TestResultUpdateOneWithoutCandidateNestedInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput
    upsert?: TestResultUpsertWithoutCandidateInput
    disconnect?: TestResultWhereInput | boolean
    delete?: TestResultWhereInput | boolean
    connect?: TestResultWhereUniqueInput
    update?: XOR<XOR<TestResultUpdateToOneWithWhereWithoutCandidateInput, TestResultUpdateWithoutCandidateInput>, TestResultUncheckedUpdateWithoutCandidateInput>
  }

  export type ContactRequestUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ContactRequestCreateWithoutCandidateInput, ContactRequestUncheckedCreateWithoutCandidateInput> | ContactRequestCreateWithoutCandidateInput[] | ContactRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutCandidateInput | ContactRequestCreateOrConnectWithoutCandidateInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutCandidateInput | ContactRequestUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ContactRequestCreateManyCandidateInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutCandidateInput | ContactRequestUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutCandidateInput | ContactRequestUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type TestResultUncheckedUpdateOneWithoutCandidateNestedInput = {
    create?: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutCandidateInput
    upsert?: TestResultUpsertWithoutCandidateInput
    disconnect?: TestResultWhereInput | boolean
    delete?: TestResultWhereInput | boolean
    connect?: TestResultWhereUniqueInput
    update?: XOR<XOR<TestResultUpdateToOneWithWhereWithoutCandidateInput, TestResultUpdateWithoutCandidateInput>, TestResultUncheckedUpdateWithoutCandidateInput>
  }

  export type ContactRequestUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ContactRequestCreateWithoutCandidateInput, ContactRequestUncheckedCreateWithoutCandidateInput> | ContactRequestCreateWithoutCandidateInput[] | ContactRequestUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutCandidateInput | ContactRequestCreateOrConnectWithoutCandidateInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutCandidateInput | ContactRequestUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ContactRequestCreateManyCandidateInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutCandidateInput | ContactRequestUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutCandidateInput | ContactRequestUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutTestResultInput = {
    create?: XOR<CandidateCreateWithoutTestResultInput, CandidateUncheckedCreateWithoutTestResultInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutTestResultInput
    connect?: CandidateWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidateUpdateOneRequiredWithoutTestResultNestedInput = {
    create?: XOR<CandidateCreateWithoutTestResultInput, CandidateUncheckedCreateWithoutTestResultInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutTestResultInput
    upsert?: CandidateUpsertWithoutTestResultInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutTestResultInput, CandidateUpdateWithoutTestResultInput>, CandidateUncheckedUpdateWithoutTestResultInput>
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type VacancyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VacancyCreateWithoutCompanyInput, VacancyUncheckedCreateWithoutCompanyInput> | VacancyCreateWithoutCompanyInput[] | VacancyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacancyCreateOrConnectWithoutCompanyInput | VacancyCreateOrConnectWithoutCompanyInput[]
    createMany?: VacancyCreateManyCompanyInputEnvelope
    connect?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
  }

  export type VacancyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<VacancyCreateWithoutCompanyInput, VacancyUncheckedCreateWithoutCompanyInput> | VacancyCreateWithoutCompanyInput[] | VacancyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacancyCreateOrConnectWithoutCompanyInput | VacancyCreateOrConnectWithoutCompanyInput[]
    createMany?: VacancyCreateManyCompanyInputEnvelope
    connect?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type VacancyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VacancyCreateWithoutCompanyInput, VacancyUncheckedCreateWithoutCompanyInput> | VacancyCreateWithoutCompanyInput[] | VacancyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacancyCreateOrConnectWithoutCompanyInput | VacancyCreateOrConnectWithoutCompanyInput[]
    upsert?: VacancyUpsertWithWhereUniqueWithoutCompanyInput | VacancyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VacancyCreateManyCompanyInputEnvelope
    set?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    disconnect?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    delete?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    connect?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    update?: VacancyUpdateWithWhereUniqueWithoutCompanyInput | VacancyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VacancyUpdateManyWithWhereWithoutCompanyInput | VacancyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VacancyScalarWhereInput | VacancyScalarWhereInput[]
  }

  export type VacancyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<VacancyCreateWithoutCompanyInput, VacancyUncheckedCreateWithoutCompanyInput> | VacancyCreateWithoutCompanyInput[] | VacancyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: VacancyCreateOrConnectWithoutCompanyInput | VacancyCreateOrConnectWithoutCompanyInput[]
    upsert?: VacancyUpsertWithWhereUniqueWithoutCompanyInput | VacancyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: VacancyCreateManyCompanyInputEnvelope
    set?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    disconnect?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    delete?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    connect?: VacancyWhereUniqueInput | VacancyWhereUniqueInput[]
    update?: VacancyUpdateWithWhereUniqueWithoutCompanyInput | VacancyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: VacancyUpdateManyWithWhereWithoutCompanyInput | VacancyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: VacancyScalarWhereInput | VacancyScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutVacanciesInput = {
    create?: XOR<CompanyCreateWithoutVacanciesInput, CompanyUncheckedCreateWithoutVacanciesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVacanciesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ContactRequestCreateNestedManyWithoutVacancyInput = {
    create?: XOR<ContactRequestCreateWithoutVacancyInput, ContactRequestUncheckedCreateWithoutVacancyInput> | ContactRequestCreateWithoutVacancyInput[] | ContactRequestUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutVacancyInput | ContactRequestCreateOrConnectWithoutVacancyInput[]
    createMany?: ContactRequestCreateManyVacancyInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type ContactRequestUncheckedCreateNestedManyWithoutVacancyInput = {
    create?: XOR<ContactRequestCreateWithoutVacancyInput, ContactRequestUncheckedCreateWithoutVacancyInput> | ContactRequestCreateWithoutVacancyInput[] | ContactRequestUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutVacancyInput | ContactRequestCreateOrConnectWithoutVacancyInput[]
    createMany?: ContactRequestCreateManyVacancyInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutVacanciesNestedInput = {
    create?: XOR<CompanyCreateWithoutVacanciesInput, CompanyUncheckedCreateWithoutVacanciesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutVacanciesInput
    upsert?: CompanyUpsertWithoutVacanciesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutVacanciesInput, CompanyUpdateWithoutVacanciesInput>, CompanyUncheckedUpdateWithoutVacanciesInput>
  }

  export type ContactRequestUpdateManyWithoutVacancyNestedInput = {
    create?: XOR<ContactRequestCreateWithoutVacancyInput, ContactRequestUncheckedCreateWithoutVacancyInput> | ContactRequestCreateWithoutVacancyInput[] | ContactRequestUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutVacancyInput | ContactRequestCreateOrConnectWithoutVacancyInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutVacancyInput | ContactRequestUpsertWithWhereUniqueWithoutVacancyInput[]
    createMany?: ContactRequestCreateManyVacancyInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutVacancyInput | ContactRequestUpdateWithWhereUniqueWithoutVacancyInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutVacancyInput | ContactRequestUpdateManyWithWhereWithoutVacancyInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type ContactRequestUncheckedUpdateManyWithoutVacancyNestedInput = {
    create?: XOR<ContactRequestCreateWithoutVacancyInput, ContactRequestUncheckedCreateWithoutVacancyInput> | ContactRequestCreateWithoutVacancyInput[] | ContactRequestUncheckedCreateWithoutVacancyInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutVacancyInput | ContactRequestCreateOrConnectWithoutVacancyInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutVacancyInput | ContactRequestUpsertWithWhereUniqueWithoutVacancyInput[]
    createMany?: ContactRequestCreateManyVacancyInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutVacancyInput | ContactRequestUpdateWithWhereUniqueWithoutVacancyInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutVacancyInput | ContactRequestUpdateManyWithWhereWithoutVacancyInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type CandidateCreateNestedOneWithoutContactRequestsInput = {
    create?: XOR<CandidateCreateWithoutContactRequestsInput, CandidateUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutContactRequestsInput
    connect?: CandidateWhereUniqueInput
  }

  export type VacancyCreateNestedOneWithoutContactRequestsInput = {
    create?: XOR<VacancyCreateWithoutContactRequestsInput, VacancyUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: VacancyCreateOrConnectWithoutContactRequestsInput
    connect?: VacancyWhereUniqueInput
  }

  export type CandidateUpdateOneRequiredWithoutContactRequestsNestedInput = {
    create?: XOR<CandidateCreateWithoutContactRequestsInput, CandidateUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: CandidateCreateOrConnectWithoutContactRequestsInput
    upsert?: CandidateUpsertWithoutContactRequestsInput
    connect?: CandidateWhereUniqueInput
    update?: XOR<XOR<CandidateUpdateToOneWithWhereWithoutContactRequestsInput, CandidateUpdateWithoutContactRequestsInput>, CandidateUncheckedUpdateWithoutContactRequestsInput>
  }

  export type VacancyUpdateOneRequiredWithoutContactRequestsNestedInput = {
    create?: XOR<VacancyCreateWithoutContactRequestsInput, VacancyUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: VacancyCreateOrConnectWithoutContactRequestsInput
    upsert?: VacancyUpsertWithoutContactRequestsInput
    connect?: VacancyWhereUniqueInput
    update?: XOR<XOR<VacancyUpdateToOneWithWhereWithoutContactRequestsInput, VacancyUpdateWithoutContactRequestsInput>, VacancyUncheckedUpdateWithoutContactRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CandidateCreateWithoutUserInput = {
    id?: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    testResult?: TestResultCreateNestedOneWithoutCandidateInput
    contactRequests?: ContactRequestCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutUserInput = {
    id?: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    testResult?: TestResultUncheckedCreateNestedOneWithoutCandidateInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutUserInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutUserInput, CandidateUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
    vacancies?: VacancyCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
    vacancies?: VacancyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CandidateUpsertWithoutUserInput = {
    update: XOR<CandidateUpdateWithoutUserInput, CandidateUncheckedUpdateWithoutUserInput>
    create: XOR<CandidateCreateWithoutUserInput, CandidateUncheckedCreateWithoutUserInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutUserInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutUserInput, CandidateUncheckedUpdateWithoutUserInput>
  }

  export type CandidateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    testResult?: TestResultUpdateOneWithoutCandidateNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    testResult?: TestResultUncheckedUpdateOneWithoutCandidateNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    vacancies?: VacancyUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    vacancies?: VacancyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserCreateWithoutCandidateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCandidateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCandidateInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidateInput, UserUncheckedCreateWithoutCandidateInput>
  }

  export type TestResultCreateWithoutCandidateInput = {
    id?: string
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt?: Date | string
  }

  export type TestResultUncheckedCreateWithoutCandidateInput = {
    id?: string
    waakhond: number
    dienaar: number
    streber: number
    innovator: number
    doorpakker: number
    allemansvriend: number
    completedAt?: Date | string
  }

  export type TestResultCreateOrConnectWithoutCandidateInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
  }

  export type ContactRequestCreateWithoutCandidateInput = {
    id?: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
    vacancy: VacancyCreateNestedOneWithoutContactRequestsInput
  }

  export type ContactRequestUncheckedCreateWithoutCandidateInput = {
    id?: string
    vacancyId: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
  }

  export type ContactRequestCreateOrConnectWithoutCandidateInput = {
    where: ContactRequestWhereUniqueInput
    create: XOR<ContactRequestCreateWithoutCandidateInput, ContactRequestUncheckedCreateWithoutCandidateInput>
  }

  export type ContactRequestCreateManyCandidateInputEnvelope = {
    data: ContactRequestCreateManyCandidateInput | ContactRequestCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCandidateInput = {
    update: XOR<UserUpdateWithoutCandidateInput, UserUncheckedUpdateWithoutCandidateInput>
    create: XOR<UserCreateWithoutCandidateInput, UserUncheckedCreateWithoutCandidateInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidateInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidateInput, UserUncheckedUpdateWithoutCandidateInput>
  }

  export type UserUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TestResultUpsertWithoutCandidateInput = {
    update: XOR<TestResultUpdateWithoutCandidateInput, TestResultUncheckedUpdateWithoutCandidateInput>
    create: XOR<TestResultCreateWithoutCandidateInput, TestResultUncheckedCreateWithoutCandidateInput>
    where?: TestResultWhereInput
  }

  export type TestResultUpdateToOneWithWhereWithoutCandidateInput = {
    where?: TestResultWhereInput
    data: XOR<TestResultUpdateWithoutCandidateInput, TestResultUncheckedUpdateWithoutCandidateInput>
  }

  export type TestResultUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waakhond?: IntFieldUpdateOperationsInput | number
    dienaar?: IntFieldUpdateOperationsInput | number
    streber?: IntFieldUpdateOperationsInput | number
    innovator?: IntFieldUpdateOperationsInput | number
    doorpakker?: IntFieldUpdateOperationsInput | number
    allemansvriend?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waakhond?: IntFieldUpdateOperationsInput | number
    dienaar?: IntFieldUpdateOperationsInput | number
    streber?: IntFieldUpdateOperationsInput | number
    innovator?: IntFieldUpdateOperationsInput | number
    doorpakker?: IntFieldUpdateOperationsInput | number
    allemansvriend?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ContactRequestWhereUniqueInput
    update: XOR<ContactRequestUpdateWithoutCandidateInput, ContactRequestUncheckedUpdateWithoutCandidateInput>
    create: XOR<ContactRequestCreateWithoutCandidateInput, ContactRequestUncheckedCreateWithoutCandidateInput>
  }

  export type ContactRequestUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ContactRequestWhereUniqueInput
    data: XOR<ContactRequestUpdateWithoutCandidateInput, ContactRequestUncheckedUpdateWithoutCandidateInput>
  }

  export type ContactRequestUpdateManyWithWhereWithoutCandidateInput = {
    where: ContactRequestScalarWhereInput
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ContactRequestScalarWhereInput = {
    AND?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
    OR?: ContactRequestScalarWhereInput[]
    NOT?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
    id?: StringFilter<"ContactRequest"> | string
    candidateId?: StringFilter<"ContactRequest"> | string
    vacancyId?: StringFilter<"ContactRequest"> | string
    matchScore?: IntFilter<"ContactRequest"> | number
    message?: StringNullableFilter<"ContactRequest"> | string | null
    status?: StringFilter<"ContactRequest"> | string
    createdAt?: DateTimeFilter<"ContactRequest"> | Date | string
  }

  export type CandidateCreateWithoutTestResultInput = {
    id?: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    user: UserCreateNestedOneWithoutCandidateInput
    contactRequests?: ContactRequestCreateNestedManyWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutTestResultInput = {
    id?: string
    userId: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutTestResultInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutTestResultInput, CandidateUncheckedCreateWithoutTestResultInput>
  }

  export type CandidateUpsertWithoutTestResultInput = {
    update: XOR<CandidateUpdateWithoutTestResultInput, CandidateUncheckedUpdateWithoutTestResultInput>
    create: XOR<CandidateCreateWithoutTestResultInput, CandidateUncheckedCreateWithoutTestResultInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutTestResultInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutTestResultInput, CandidateUncheckedUpdateWithoutTestResultInput>
  }

  export type CandidateUpdateWithoutTestResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCandidateNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutTestResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    candidate?: CandidateCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    candidate?: CandidateUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type VacancyCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
    contactRequests?: ContactRequestCreateNestedManyWithoutVacancyInput
  }

  export type VacancyUncheckedCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutVacancyInput
  }

  export type VacancyCreateOrConnectWithoutCompanyInput = {
    where: VacancyWhereUniqueInput
    create: XOR<VacancyCreateWithoutCompanyInput, VacancyUncheckedCreateWithoutCompanyInput>
  }

  export type VacancyCreateManyCompanyInputEnvelope = {
    data: VacancyCreateManyCompanyInput | VacancyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VacancyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: VacancyWhereUniqueInput
    update: XOR<VacancyUpdateWithoutCompanyInput, VacancyUncheckedUpdateWithoutCompanyInput>
    create: XOR<VacancyCreateWithoutCompanyInput, VacancyUncheckedCreateWithoutCompanyInput>
  }

  export type VacancyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: VacancyWhereUniqueInput
    data: XOR<VacancyUpdateWithoutCompanyInput, VacancyUncheckedUpdateWithoutCompanyInput>
  }

  export type VacancyUpdateManyWithWhereWithoutCompanyInput = {
    where: VacancyScalarWhereInput
    data: XOR<VacancyUpdateManyMutationInput, VacancyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type VacancyScalarWhereInput = {
    AND?: VacancyScalarWhereInput | VacancyScalarWhereInput[]
    OR?: VacancyScalarWhereInput[]
    NOT?: VacancyScalarWhereInput | VacancyScalarWhereInput[]
    id?: StringFilter<"Vacancy"> | string
    companyId?: StringFilter<"Vacancy"> | string
    title?: StringFilter<"Vacancy"> | string
    description?: StringFilter<"Vacancy"> | string
    employmentType?: StringFilter<"Vacancy"> | string
    hoursPerWeek?: IntFilter<"Vacancy"> | number
    projectType?: StringFilter<"Vacancy"> | string
    location?: StringFilter<"Vacancy"> | string
    drive1?: StringFilter<"Vacancy"> | string
    drive2?: StringFilter<"Vacancy"> | string
    createdAt?: DateTimeFilter<"Vacancy"> | Date | string
  }

  export type CompanyCreateWithoutVacanciesInput = {
    id?: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
    user: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutVacanciesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    websiteUrl?: string | null
    logoUrl?: string | null
    location: string
    branch: string
    type: string
  }

  export type CompanyCreateOrConnectWithoutVacanciesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutVacanciesInput, CompanyUncheckedCreateWithoutVacanciesInput>
  }

  export type ContactRequestCreateWithoutVacancyInput = {
    id?: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
    candidate: CandidateCreateNestedOneWithoutContactRequestsInput
  }

  export type ContactRequestUncheckedCreateWithoutVacancyInput = {
    id?: string
    candidateId: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
  }

  export type ContactRequestCreateOrConnectWithoutVacancyInput = {
    where: ContactRequestWhereUniqueInput
    create: XOR<ContactRequestCreateWithoutVacancyInput, ContactRequestUncheckedCreateWithoutVacancyInput>
  }

  export type ContactRequestCreateManyVacancyInputEnvelope = {
    data: ContactRequestCreateManyVacancyInput | ContactRequestCreateManyVacancyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutVacanciesInput = {
    update: XOR<CompanyUpdateWithoutVacanciesInput, CompanyUncheckedUpdateWithoutVacanciesInput>
    create: XOR<CompanyCreateWithoutVacanciesInput, CompanyUncheckedCreateWithoutVacanciesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutVacanciesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutVacanciesInput, CompanyUncheckedUpdateWithoutVacanciesInput>
  }

  export type CompanyUpdateWithoutVacanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutVacanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ContactRequestUpsertWithWhereUniqueWithoutVacancyInput = {
    where: ContactRequestWhereUniqueInput
    update: XOR<ContactRequestUpdateWithoutVacancyInput, ContactRequestUncheckedUpdateWithoutVacancyInput>
    create: XOR<ContactRequestCreateWithoutVacancyInput, ContactRequestUncheckedCreateWithoutVacancyInput>
  }

  export type ContactRequestUpdateWithWhereUniqueWithoutVacancyInput = {
    where: ContactRequestWhereUniqueInput
    data: XOR<ContactRequestUpdateWithoutVacancyInput, ContactRequestUncheckedUpdateWithoutVacancyInput>
  }

  export type ContactRequestUpdateManyWithWhereWithoutVacancyInput = {
    where: ContactRequestScalarWhereInput
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyWithoutVacancyInput>
  }

  export type CandidateCreateWithoutContactRequestsInput = {
    id?: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    user: UserCreateNestedOneWithoutCandidateInput
    testResult?: TestResultCreateNestedOneWithoutCandidateInput
  }

  export type CandidateUncheckedCreateWithoutContactRequestsInput = {
    id?: string
    userId: string
    education?: string | null
    availableFrom?: Date | string | null
    location?: string | null
    testResult?: TestResultUncheckedCreateNestedOneWithoutCandidateInput
  }

  export type CandidateCreateOrConnectWithoutContactRequestsInput = {
    where: CandidateWhereUniqueInput
    create: XOR<CandidateCreateWithoutContactRequestsInput, CandidateUncheckedCreateWithoutContactRequestsInput>
  }

  export type VacancyCreateWithoutContactRequestsInput = {
    id?: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
    company: CompanyCreateNestedOneWithoutVacanciesInput
  }

  export type VacancyUncheckedCreateWithoutContactRequestsInput = {
    id?: string
    companyId: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
  }

  export type VacancyCreateOrConnectWithoutContactRequestsInput = {
    where: VacancyWhereUniqueInput
    create: XOR<VacancyCreateWithoutContactRequestsInput, VacancyUncheckedCreateWithoutContactRequestsInput>
  }

  export type CandidateUpsertWithoutContactRequestsInput = {
    update: XOR<CandidateUpdateWithoutContactRequestsInput, CandidateUncheckedUpdateWithoutContactRequestsInput>
    create: XOR<CandidateCreateWithoutContactRequestsInput, CandidateUncheckedCreateWithoutContactRequestsInput>
    where?: CandidateWhereInput
  }

  export type CandidateUpdateToOneWithWhereWithoutContactRequestsInput = {
    where?: CandidateWhereInput
    data: XOR<CandidateUpdateWithoutContactRequestsInput, CandidateUncheckedUpdateWithoutContactRequestsInput>
  }

  export type CandidateUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCandidateNestedInput
    testResult?: TestResultUpdateOneWithoutCandidateNestedInput
  }

  export type CandidateUncheckedUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    education?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    testResult?: TestResultUncheckedUpdateOneWithoutCandidateNestedInput
  }

  export type VacancyUpsertWithoutContactRequestsInput = {
    update: XOR<VacancyUpdateWithoutContactRequestsInput, VacancyUncheckedUpdateWithoutContactRequestsInput>
    create: XOR<VacancyCreateWithoutContactRequestsInput, VacancyUncheckedCreateWithoutContactRequestsInput>
    where?: VacancyWhereInput
  }

  export type VacancyUpdateToOneWithWhereWithoutContactRequestsInput = {
    where?: VacancyWhereInput
    data: XOR<VacancyUpdateWithoutContactRequestsInput, VacancyUncheckedUpdateWithoutContactRequestsInput>
  }

  export type VacancyUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutVacanciesNestedInput
  }

  export type VacancyUncheckedUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestCreateManyCandidateInput = {
    id?: string
    vacancyId: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
  }

  export type ContactRequestUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacancy?: VacancyUpdateOneRequiredWithoutContactRequestsNestedInput
  }

  export type ContactRequestUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vacancyId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vacancyId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacancyCreateManyCompanyInput = {
    id?: string
    title: string
    description: string
    employmentType: string
    hoursPerWeek: number
    projectType: string
    location: string
    drive1: string
    drive2: string
    createdAt?: Date | string
  }

  export type VacancyUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactRequests?: ContactRequestUpdateManyWithoutVacancyNestedInput
  }

  export type VacancyUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutVacancyNestedInput
  }

  export type VacancyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    employmentType?: StringFieldUpdateOperationsInput | string
    hoursPerWeek?: IntFieldUpdateOperationsInput | number
    projectType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    drive1?: StringFieldUpdateOperationsInput | string
    drive2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestCreateManyVacancyInput = {
    id?: string
    candidateId: string
    matchScore: number
    message?: string | null
    status: string
    createdAt?: Date | string
  }

  export type ContactRequestUpdateWithoutVacancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: CandidateUpdateOneRequiredWithoutContactRequestsNestedInput
  }

  export type ContactRequestUncheckedUpdateWithoutVacancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUncheckedUpdateManyWithoutVacancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidateId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}