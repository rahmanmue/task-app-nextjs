
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
 * Model GroupTask
 * 
 */
export type GroupTask = $Result.DefaultSelection<Prisma.$GroupTaskPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model GroupChat
 * 
 */
export type GroupChat = $Result.DefaultSelection<Prisma.$GroupChatPayload>
/**
 * Model PrivateChat
 * 
 */
export type PrivateChat = $Result.DefaultSelection<Prisma.$PrivateChatPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  LEAD: 'LEAD',
  TEAM: 'TEAM'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  NOT_STARTED: 'NOT_STARTED',
  ON_PROGRESS: 'ON_PROGRESS',
  DONE: 'DONE',
  REJECT: 'REJECT'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const Action: {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type Action = (typeof Action)[keyof typeof Action]


export const TableName: {
  USER: 'USER',
  GROUP_TASK: 'GROUP_TASK',
  TASK: 'TASK'
};

export type TableName = (typeof TableName)[keyof typeof TableName]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type Action = $Enums.Action

export const Action: typeof $Enums.Action

export type TableName = $Enums.TableName

export const TableName: typeof $Enums.TableName

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
   * `prisma.groupTask`: Exposes CRUD operations for the **GroupTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupTasks
    * const groupTasks = await prisma.groupTask.findMany()
    * ```
    */
  get groupTask(): Prisma.GroupTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupChat`: Exposes CRUD operations for the **GroupChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupChats
    * const groupChats = await prisma.groupChat.findMany()
    * ```
    */
  get groupChat(): Prisma.GroupChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateChat`: Exposes CRUD operations for the **PrivateChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateChats
    * const privateChats = await prisma.privateChat.findMany()
    * ```
    */
  get privateChat(): Prisma.PrivateChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    GroupTask: 'GroupTask',
    Task: 'Task',
    GroupChat: 'GroupChat',
    PrivateChat: 'PrivateChat',
    Log: 'Log'
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
      modelProps: "user" | "groupTask" | "task" | "groupChat" | "privateChat" | "log"
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
      GroupTask: {
        payload: Prisma.$GroupTaskPayload<ExtArgs>
        fields: Prisma.GroupTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          findFirst: {
            args: Prisma.GroupTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          findMany: {
            args: Prisma.GroupTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>[]
          }
          create: {
            args: Prisma.GroupTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          createMany: {
            args: Prisma.GroupTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>[]
          }
          delete: {
            args: Prisma.GroupTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          update: {
            args: Prisma.GroupTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          deleteMany: {
            args: Prisma.GroupTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>[]
          }
          upsert: {
            args: Prisma.GroupTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTaskPayload>
          }
          aggregate: {
            args: Prisma.GroupTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupTask>
          }
          groupBy: {
            args: Prisma.GroupTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupTaskCountArgs<ExtArgs>
            result: $Utils.Optional<GroupTaskCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      GroupChat: {
        payload: Prisma.$GroupChatPayload<ExtArgs>
        fields: Prisma.GroupChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          findFirst: {
            args: Prisma.GroupChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          findMany: {
            args: Prisma.GroupChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>[]
          }
          create: {
            args: Prisma.GroupChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          createMany: {
            args: Prisma.GroupChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>[]
          }
          delete: {
            args: Prisma.GroupChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          update: {
            args: Prisma.GroupChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          deleteMany: {
            args: Prisma.GroupChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>[]
          }
          upsert: {
            args: Prisma.GroupChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupChatPayload>
          }
          aggregate: {
            args: Prisma.GroupChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupChat>
          }
          groupBy: {
            args: Prisma.GroupChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupChatCountArgs<ExtArgs>
            result: $Utils.Optional<GroupChatCountAggregateOutputType> | number
          }
        }
      }
      PrivateChat: {
        payload: Prisma.$PrivateChatPayload<ExtArgs>
        fields: Prisma.PrivateChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          findFirst: {
            args: Prisma.PrivateChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          findMany: {
            args: Prisma.PrivateChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>[]
          }
          create: {
            args: Prisma.PrivateChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          createMany: {
            args: Prisma.PrivateChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>[]
          }
          delete: {
            args: Prisma.PrivateChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          update: {
            args: Prisma.PrivateChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          deleteMany: {
            args: Prisma.PrivateChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>[]
          }
          upsert: {
            args: Prisma.PrivateChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          aggregate: {
            args: Prisma.PrivateChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateChat>
          }
          groupBy: {
            args: Prisma.PrivateChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateChatCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateChatCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
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
    groupTask?: GroupTaskOmit
    task?: TaskOmit
    groupChat?: GroupChatOmit
    privateChat?: PrivateChatOmit
    log?: LogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ledGroups: number
    assignedTeamTasks: number
    groupMessagesSent: number
    privateMessagesSent: number
    privateMessagesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledGroups?: boolean | UserCountOutputTypeCountLedGroupsArgs
    assignedTeamTasks?: boolean | UserCountOutputTypeCountAssignedTeamTasksArgs
    groupMessagesSent?: boolean | UserCountOutputTypeCountGroupMessagesSentArgs
    privateMessagesSent?: boolean | UserCountOutputTypeCountPrivateMessagesSentArgs
    privateMessagesReceived?: boolean | UserCountOutputTypeCountPrivateMessagesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTeamTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrivateMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrivateMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
  }


  /**
   * Count Type GroupTaskCountOutputType
   */

  export type GroupTaskCountOutputType = {
    tasks: number
    chats: number
  }

  export type GroupTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | GroupTaskCountOutputTypeCountTasksArgs
    chats?: boolean | GroupTaskCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * GroupTaskCountOutputType without action
   */
  export type GroupTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTaskCountOutputType
     */
    select?: GroupTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupTaskCountOutputType without action
   */
  export type GroupTaskCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * GroupTaskCountOutputType without action
   */
  export type GroupTaskCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupChatWhereInput
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
    username: string | null
    fullname: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    fullname: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    fullname: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    fullname: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    fullname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ledGroups?: boolean | User$ledGroupsArgs<ExtArgs>
    assignedTeamTasks?: boolean | User$assignedTeamTasksArgs<ExtArgs>
    groupMessagesSent?: boolean | User$groupMessagesSentArgs<ExtArgs>
    privateMessagesSent?: boolean | User$privateMessagesSentArgs<ExtArgs>
    privateMessagesReceived?: boolean | User$privateMessagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullname?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "fullname" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledGroups?: boolean | User$ledGroupsArgs<ExtArgs>
    assignedTeamTasks?: boolean | User$assignedTeamTasksArgs<ExtArgs>
    groupMessagesSent?: boolean | User$groupMessagesSentArgs<ExtArgs>
    privateMessagesSent?: boolean | User$privateMessagesSentArgs<ExtArgs>
    privateMessagesReceived?: boolean | User$privateMessagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ledGroups: Prisma.$GroupTaskPayload<ExtArgs>[]
      assignedTeamTasks: Prisma.$TaskPayload<ExtArgs>[]
      groupMessagesSent: Prisma.$GroupChatPayload<ExtArgs>[]
      privateMessagesSent: Prisma.$PrivateChatPayload<ExtArgs>[]
      privateMessagesReceived: Prisma.$PrivateChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      fullname: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    ledGroups<T extends User$ledGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ledGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTeamTasks<T extends User$assignedTeamTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTeamTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMessagesSent<T extends User$groupMessagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMessagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateMessagesSent<T extends User$privateMessagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$privateMessagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    privateMessagesReceived<T extends User$privateMessagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$privateMessagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.ledGroups
   */
  export type User$ledGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    where?: GroupTaskWhereInput
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    cursor?: GroupTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * User.assignedTeamTasks
   */
  export type User$assignedTeamTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.groupMessagesSent
   */
  export type User$groupMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    where?: GroupChatWhereInput
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    cursor?: GroupChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * User.privateMessagesSent
   */
  export type User$privateMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    cursor?: PrivateChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * User.privateMessagesReceived
   */
  export type User$privateMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    cursor?: PrivateChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
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
   * Model GroupTask
   */

  export type AggregateGroupTask = {
    _count: GroupTaskCountAggregateOutputType | null
    _min: GroupTaskMinAggregateOutputType | null
    _max: GroupTaskMaxAggregateOutputType | null
  }

  export type GroupTaskMinAggregateOutputType = {
    id: string | null
    name: string | null
    leadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupTaskMaxAggregateOutputType = {
    id: string | null
    name: string | null
    leadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupTaskCountAggregateOutputType = {
    id: number
    name: number
    leadId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupTaskMinAggregateInputType = {
    id?: true
    name?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupTaskMaxAggregateInputType = {
    id?: true
    name?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupTaskCountAggregateInputType = {
    id?: true
    name?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTask to aggregate.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupTasks
    **/
    _count?: true | GroupTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupTaskMaxAggregateInputType
  }

  export type GetGroupTaskAggregateType<T extends GroupTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupTask[P]>
      : GetScalarType<T[P], AggregateGroupTask[P]>
  }




  export type GroupTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTaskWhereInput
    orderBy?: GroupTaskOrderByWithAggregationInput | GroupTaskOrderByWithAggregationInput[]
    by: GroupTaskScalarFieldEnum[] | GroupTaskScalarFieldEnum
    having?: GroupTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupTaskCountAggregateInputType | true
    _min?: GroupTaskMinAggregateInputType
    _max?: GroupTaskMaxAggregateInputType
  }

  export type GroupTaskGroupByOutputType = {
    id: string
    name: string
    leadId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupTaskCountAggregateOutputType | null
    _min: GroupTaskMinAggregateOutputType | null
    _max: GroupTaskMaxAggregateOutputType | null
  }

  type GetGroupTaskGroupByPayload<T extends GroupTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupTaskGroupByOutputType[P]>
            : GetScalarType<T[P], GroupTaskGroupByOutputType[P]>
        }
      >
    >


  export type GroupTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | GroupTask$tasksArgs<ExtArgs>
    chats?: boolean | GroupTask$chatsArgs<ExtArgs>
    _count?: boolean | GroupTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTask"]>

  export type GroupTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTask"]>

  export type GroupTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTask"]>

  export type GroupTaskSelectScalar = {
    id?: boolean
    name?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "leadId" | "createdAt" | "updatedAt", ExtArgs["result"]["groupTask"]>
  export type GroupTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | GroupTask$tasksArgs<ExtArgs>
    chats?: boolean | GroupTask$chatsArgs<ExtArgs>
    _count?: boolean | GroupTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupTask"
    objects: {
      lead: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      chats: Prisma.$GroupChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      leadId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupTask"]>
    composites: {}
  }

  type GroupTaskGetPayload<S extends boolean | null | undefined | GroupTaskDefaultArgs> = $Result.GetResult<Prisma.$GroupTaskPayload, S>

  type GroupTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupTaskCountAggregateInputType | true
    }

  export interface GroupTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupTask'], meta: { name: 'GroupTask' } }
    /**
     * Find zero or one GroupTask that matches the filter.
     * @param {GroupTaskFindUniqueArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupTaskFindUniqueArgs>(args: SelectSubset<T, GroupTaskFindUniqueArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupTaskFindUniqueOrThrowArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskFindFirstArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupTaskFindFirstArgs>(args?: SelectSubset<T, GroupTaskFindFirstArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskFindFirstOrThrowArgs} args - Arguments to find a GroupTask
     * @example
     * // Get one GroupTask
     * const groupTask = await prisma.groupTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupTasks
     * const groupTasks = await prisma.groupTask.findMany()
     * 
     * // Get first 10 GroupTasks
     * const groupTasks = await prisma.groupTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupTaskWithIdOnly = await prisma.groupTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupTaskFindManyArgs>(args?: SelectSubset<T, GroupTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupTask.
     * @param {GroupTaskCreateArgs} args - Arguments to create a GroupTask.
     * @example
     * // Create one GroupTask
     * const GroupTask = await prisma.groupTask.create({
     *   data: {
     *     // ... data to create a GroupTask
     *   }
     * })
     * 
     */
    create<T extends GroupTaskCreateArgs>(args: SelectSubset<T, GroupTaskCreateArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupTasks.
     * @param {GroupTaskCreateManyArgs} args - Arguments to create many GroupTasks.
     * @example
     * // Create many GroupTasks
     * const groupTask = await prisma.groupTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupTaskCreateManyArgs>(args?: SelectSubset<T, GroupTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupTasks and returns the data saved in the database.
     * @param {GroupTaskCreateManyAndReturnArgs} args - Arguments to create many GroupTasks.
     * @example
     * // Create many GroupTasks
     * const groupTask = await prisma.groupTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupTasks and only return the `id`
     * const groupTaskWithIdOnly = await prisma.groupTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupTask.
     * @param {GroupTaskDeleteArgs} args - Arguments to delete one GroupTask.
     * @example
     * // Delete one GroupTask
     * const GroupTask = await prisma.groupTask.delete({
     *   where: {
     *     // ... filter to delete one GroupTask
     *   }
     * })
     * 
     */
    delete<T extends GroupTaskDeleteArgs>(args: SelectSubset<T, GroupTaskDeleteArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupTask.
     * @param {GroupTaskUpdateArgs} args - Arguments to update one GroupTask.
     * @example
     * // Update one GroupTask
     * const groupTask = await prisma.groupTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupTaskUpdateArgs>(args: SelectSubset<T, GroupTaskUpdateArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupTasks.
     * @param {GroupTaskDeleteManyArgs} args - Arguments to filter GroupTasks to delete.
     * @example
     * // Delete a few GroupTasks
     * const { count } = await prisma.groupTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupTaskDeleteManyArgs>(args?: SelectSubset<T, GroupTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupTasks
     * const groupTask = await prisma.groupTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupTaskUpdateManyArgs>(args: SelectSubset<T, GroupTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTasks and returns the data updated in the database.
     * @param {GroupTaskUpdateManyAndReturnArgs} args - Arguments to update many GroupTasks.
     * @example
     * // Update many GroupTasks
     * const groupTask = await prisma.groupTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupTasks and only return the `id`
     * const groupTaskWithIdOnly = await prisma.groupTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupTask.
     * @param {GroupTaskUpsertArgs} args - Arguments to update or create a GroupTask.
     * @example
     * // Update or create a GroupTask
     * const groupTask = await prisma.groupTask.upsert({
     *   create: {
     *     // ... data to create a GroupTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupTask we want to update
     *   }
     * })
     */
    upsert<T extends GroupTaskUpsertArgs>(args: SelectSubset<T, GroupTaskUpsertArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskCountArgs} args - Arguments to filter GroupTasks to count.
     * @example
     * // Count the number of GroupTasks
     * const count = await prisma.groupTask.count({
     *   where: {
     *     // ... the filter for the GroupTasks we want to count
     *   }
     * })
    **/
    count<T extends GroupTaskCountArgs>(
      args?: Subset<T, GroupTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupTaskAggregateArgs>(args: Subset<T, GroupTaskAggregateArgs>): Prisma.PrismaPromise<GetGroupTaskAggregateType<T>>

    /**
     * Group by GroupTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTaskGroupByArgs} args - Group by arguments.
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
      T extends GroupTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupTaskGroupByArgs['orderBy'] }
        : { orderBy?: GroupTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupTask model
   */
  readonly fields: GroupTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends GroupTask$tasksArgs<ExtArgs> = {}>(args?: Subset<T, GroupTask$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends GroupTask$chatsArgs<ExtArgs> = {}>(args?: Subset<T, GroupTask$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GroupTask model
   */
  interface GroupTaskFieldRefs {
    readonly id: FieldRef<"GroupTask", 'String'>
    readonly name: FieldRef<"GroupTask", 'String'>
    readonly leadId: FieldRef<"GroupTask", 'String'>
    readonly createdAt: FieldRef<"GroupTask", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupTask findUnique
   */
  export type GroupTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask findUniqueOrThrow
   */
  export type GroupTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask findFirst
   */
  export type GroupTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTasks.
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTasks.
     */
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * GroupTask findFirstOrThrow
   */
  export type GroupTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTask to fetch.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTasks.
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTasks.
     */
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * GroupTask findMany
   */
  export type GroupTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter, which GroupTasks to fetch.
     */
    where?: GroupTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTasks to fetch.
     */
    orderBy?: GroupTaskOrderByWithRelationInput | GroupTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupTasks.
     */
    cursor?: GroupTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTasks.
     */
    skip?: number
    distinct?: GroupTaskScalarFieldEnum | GroupTaskScalarFieldEnum[]
  }

  /**
   * GroupTask create
   */
  export type GroupTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupTask.
     */
    data: XOR<GroupTaskCreateInput, GroupTaskUncheckedCreateInput>
  }

  /**
   * GroupTask createMany
   */
  export type GroupTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupTasks.
     */
    data: GroupTaskCreateManyInput | GroupTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupTask createManyAndReturn
   */
  export type GroupTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * The data used to create many GroupTasks.
     */
    data: GroupTaskCreateManyInput | GroupTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTask update
   */
  export type GroupTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupTask.
     */
    data: XOR<GroupTaskUpdateInput, GroupTaskUncheckedUpdateInput>
    /**
     * Choose, which GroupTask to update.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask updateMany
   */
  export type GroupTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupTasks.
     */
    data: XOR<GroupTaskUpdateManyMutationInput, GroupTaskUncheckedUpdateManyInput>
    /**
     * Filter which GroupTasks to update
     */
    where?: GroupTaskWhereInput
    /**
     * Limit how many GroupTasks to update.
     */
    limit?: number
  }

  /**
   * GroupTask updateManyAndReturn
   */
  export type GroupTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * The data used to update GroupTasks.
     */
    data: XOR<GroupTaskUpdateManyMutationInput, GroupTaskUncheckedUpdateManyInput>
    /**
     * Filter which GroupTasks to update
     */
    where?: GroupTaskWhereInput
    /**
     * Limit how many GroupTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTask upsert
   */
  export type GroupTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupTask to update in case it exists.
     */
    where: GroupTaskWhereUniqueInput
    /**
     * In case the GroupTask found by the `where` argument doesn't exist, create a new GroupTask with this data.
     */
    create: XOR<GroupTaskCreateInput, GroupTaskUncheckedCreateInput>
    /**
     * In case the GroupTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupTaskUpdateInput, GroupTaskUncheckedUpdateInput>
  }

  /**
   * GroupTask delete
   */
  export type GroupTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
    /**
     * Filter which GroupTask to delete.
     */
    where: GroupTaskWhereUniqueInput
  }

  /**
   * GroupTask deleteMany
   */
  export type GroupTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTasks to delete
     */
    where?: GroupTaskWhereInput
    /**
     * Limit how many GroupTasks to delete.
     */
    limit?: number
  }

  /**
   * GroupTask.tasks
   */
  export type GroupTask$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * GroupTask.chats
   */
  export type GroupTask$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    where?: GroupChatWhereInput
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    cursor?: GroupChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupTask without action
   */
  export type GroupTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTask
     */
    select?: GroupTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTask
     */
    omit?: GroupTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTaskInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    groupId: string | null
    userTeamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    groupId: string | null
    userTeamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    groupId: number
    userTeamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    groupId?: true
    userTeamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    groupId?: true
    userTeamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    groupId?: true
    userTeamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.TaskStatus
    groupId: string
    userTeamId: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    groupId?: boolean
    userTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    groupId?: boolean
    userTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    groupId?: boolean
    userTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    groupId?: boolean
    userTeamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "groupId" | "userTeamId" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      group: Prisma.$GroupTaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.TaskStatus
      groupId: string
      userTeamId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupTaskDefaultArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly groupId: FieldRef<"Task", 'String'>
    readonly userTeamId: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model GroupChat
   */

  export type AggregateGroupChat = {
    _count: GroupChatCountAggregateOutputType | null
    _min: GroupChatMinAggregateOutputType | null
    _max: GroupChatMaxAggregateOutputType | null
  }

  export type GroupChatMinAggregateOutputType = {
    id: string | null
    username: string | null
    message: string | null
    groupId: string | null
    senderId: string | null
    delivered: boolean | null
    createdAt: Date | null
  }

  export type GroupChatMaxAggregateOutputType = {
    id: string | null
    username: string | null
    message: string | null
    groupId: string | null
    senderId: string | null
    delivered: boolean | null
    createdAt: Date | null
  }

  export type GroupChatCountAggregateOutputType = {
    id: number
    username: number
    message: number
    groupId: number
    senderId: number
    delivered: number
    createdAt: number
    _all: number
  }


  export type GroupChatMinAggregateInputType = {
    id?: true
    username?: true
    message?: true
    groupId?: true
    senderId?: true
    delivered?: true
    createdAt?: true
  }

  export type GroupChatMaxAggregateInputType = {
    id?: true
    username?: true
    message?: true
    groupId?: true
    senderId?: true
    delivered?: true
    createdAt?: true
  }

  export type GroupChatCountAggregateInputType = {
    id?: true
    username?: true
    message?: true
    groupId?: true
    senderId?: true
    delivered?: true
    createdAt?: true
    _all?: true
  }

  export type GroupChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupChat to aggregate.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupChats
    **/
    _count?: true | GroupChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupChatMaxAggregateInputType
  }

  export type GetGroupChatAggregateType<T extends GroupChatAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupChat[P]>
      : GetScalarType<T[P], AggregateGroupChat[P]>
  }




  export type GroupChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupChatWhereInput
    orderBy?: GroupChatOrderByWithAggregationInput | GroupChatOrderByWithAggregationInput[]
    by: GroupChatScalarFieldEnum[] | GroupChatScalarFieldEnum
    having?: GroupChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupChatCountAggregateInputType | true
    _min?: GroupChatMinAggregateInputType
    _max?: GroupChatMaxAggregateInputType
  }

  export type GroupChatGroupByOutputType = {
    id: string
    username: string
    message: string
    groupId: string
    senderId: string | null
    delivered: boolean
    createdAt: Date
    _count: GroupChatCountAggregateOutputType | null
    _min: GroupChatMinAggregateOutputType | null
    _max: GroupChatMaxAggregateOutputType | null
  }

  type GetGroupChatGroupByPayload<T extends GroupChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupChatGroupByOutputType[P]>
            : GetScalarType<T[P], GroupChatGroupByOutputType[P]>
        }
      >
    >


  export type GroupChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    message?: boolean
    groupId?: boolean
    senderId?: boolean
    delivered?: boolean
    createdAt?: boolean
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    sender?: boolean | GroupChat$senderArgs<ExtArgs>
  }, ExtArgs["result"]["groupChat"]>

  export type GroupChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    message?: boolean
    groupId?: boolean
    senderId?: boolean
    delivered?: boolean
    createdAt?: boolean
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    sender?: boolean | GroupChat$senderArgs<ExtArgs>
  }, ExtArgs["result"]["groupChat"]>

  export type GroupChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    message?: boolean
    groupId?: boolean
    senderId?: boolean
    delivered?: boolean
    createdAt?: boolean
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    sender?: boolean | GroupChat$senderArgs<ExtArgs>
  }, ExtArgs["result"]["groupChat"]>

  export type GroupChatSelectScalar = {
    id?: boolean
    username?: boolean
    message?: boolean
    groupId?: boolean
    senderId?: boolean
    delivered?: boolean
    createdAt?: boolean
  }

  export type GroupChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "message" | "groupId" | "senderId" | "delivered" | "createdAt", ExtArgs["result"]["groupChat"]>
  export type GroupChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    sender?: boolean | GroupChat$senderArgs<ExtArgs>
  }
  export type GroupChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    sender?: boolean | GroupChat$senderArgs<ExtArgs>
  }
  export type GroupChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupTaskDefaultArgs<ExtArgs>
    sender?: boolean | GroupChat$senderArgs<ExtArgs>
  }

  export type $GroupChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupChat"
    objects: {
      group: Prisma.$GroupTaskPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      message: string
      groupId: string
      senderId: string | null
      delivered: boolean
      createdAt: Date
    }, ExtArgs["result"]["groupChat"]>
    composites: {}
  }

  type GroupChatGetPayload<S extends boolean | null | undefined | GroupChatDefaultArgs> = $Result.GetResult<Prisma.$GroupChatPayload, S>

  type GroupChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupChatCountAggregateInputType | true
    }

  export interface GroupChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupChat'], meta: { name: 'GroupChat' } }
    /**
     * Find zero or one GroupChat that matches the filter.
     * @param {GroupChatFindUniqueArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupChatFindUniqueArgs>(args: SelectSubset<T, GroupChatFindUniqueArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupChatFindUniqueOrThrowArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupChatFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatFindFirstArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupChatFindFirstArgs>(args?: SelectSubset<T, GroupChatFindFirstArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatFindFirstOrThrowArgs} args - Arguments to find a GroupChat
     * @example
     * // Get one GroupChat
     * const groupChat = await prisma.groupChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupChatFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupChats
     * const groupChats = await prisma.groupChat.findMany()
     * 
     * // Get first 10 GroupChats
     * const groupChats = await prisma.groupChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupChatWithIdOnly = await prisma.groupChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupChatFindManyArgs>(args?: SelectSubset<T, GroupChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupChat.
     * @param {GroupChatCreateArgs} args - Arguments to create a GroupChat.
     * @example
     * // Create one GroupChat
     * const GroupChat = await prisma.groupChat.create({
     *   data: {
     *     // ... data to create a GroupChat
     *   }
     * })
     * 
     */
    create<T extends GroupChatCreateArgs>(args: SelectSubset<T, GroupChatCreateArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupChats.
     * @param {GroupChatCreateManyArgs} args - Arguments to create many GroupChats.
     * @example
     * // Create many GroupChats
     * const groupChat = await prisma.groupChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupChatCreateManyArgs>(args?: SelectSubset<T, GroupChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupChats and returns the data saved in the database.
     * @param {GroupChatCreateManyAndReturnArgs} args - Arguments to create many GroupChats.
     * @example
     * // Create many GroupChats
     * const groupChat = await prisma.groupChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupChats and only return the `id`
     * const groupChatWithIdOnly = await prisma.groupChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupChatCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupChat.
     * @param {GroupChatDeleteArgs} args - Arguments to delete one GroupChat.
     * @example
     * // Delete one GroupChat
     * const GroupChat = await prisma.groupChat.delete({
     *   where: {
     *     // ... filter to delete one GroupChat
     *   }
     * })
     * 
     */
    delete<T extends GroupChatDeleteArgs>(args: SelectSubset<T, GroupChatDeleteArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupChat.
     * @param {GroupChatUpdateArgs} args - Arguments to update one GroupChat.
     * @example
     * // Update one GroupChat
     * const groupChat = await prisma.groupChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupChatUpdateArgs>(args: SelectSubset<T, GroupChatUpdateArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupChats.
     * @param {GroupChatDeleteManyArgs} args - Arguments to filter GroupChats to delete.
     * @example
     * // Delete a few GroupChats
     * const { count } = await prisma.groupChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupChatDeleteManyArgs>(args?: SelectSubset<T, GroupChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupChats
     * const groupChat = await prisma.groupChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupChatUpdateManyArgs>(args: SelectSubset<T, GroupChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupChats and returns the data updated in the database.
     * @param {GroupChatUpdateManyAndReturnArgs} args - Arguments to update many GroupChats.
     * @example
     * // Update many GroupChats
     * const groupChat = await prisma.groupChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupChats and only return the `id`
     * const groupChatWithIdOnly = await prisma.groupChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupChatUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupChat.
     * @param {GroupChatUpsertArgs} args - Arguments to update or create a GroupChat.
     * @example
     * // Update or create a GroupChat
     * const groupChat = await prisma.groupChat.upsert({
     *   create: {
     *     // ... data to create a GroupChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupChat we want to update
     *   }
     * })
     */
    upsert<T extends GroupChatUpsertArgs>(args: SelectSubset<T, GroupChatUpsertArgs<ExtArgs>>): Prisma__GroupChatClient<$Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatCountArgs} args - Arguments to filter GroupChats to count.
     * @example
     * // Count the number of GroupChats
     * const count = await prisma.groupChat.count({
     *   where: {
     *     // ... the filter for the GroupChats we want to count
     *   }
     * })
    **/
    count<T extends GroupChatCountArgs>(
      args?: Subset<T, GroupChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupChatAggregateArgs>(args: Subset<T, GroupChatAggregateArgs>): Prisma.PrismaPromise<GetGroupChatAggregateType<T>>

    /**
     * Group by GroupChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatGroupByArgs} args - Group by arguments.
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
      T extends GroupChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupChatGroupByArgs['orderBy'] }
        : { orderBy?: GroupChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupChat model
   */
  readonly fields: GroupChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupTaskDefaultArgs<ExtArgs>>): Prisma__GroupTaskClient<$Result.GetResult<Prisma.$GroupTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends GroupChat$senderArgs<ExtArgs> = {}>(args?: Subset<T, GroupChat$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupChat model
   */
  interface GroupChatFieldRefs {
    readonly id: FieldRef<"GroupChat", 'String'>
    readonly username: FieldRef<"GroupChat", 'String'>
    readonly message: FieldRef<"GroupChat", 'String'>
    readonly groupId: FieldRef<"GroupChat", 'String'>
    readonly senderId: FieldRef<"GroupChat", 'String'>
    readonly delivered: FieldRef<"GroupChat", 'Boolean'>
    readonly createdAt: FieldRef<"GroupChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupChat findUnique
   */
  export type GroupChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat findUniqueOrThrow
   */
  export type GroupChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat findFirst
   */
  export type GroupChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupChats.
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupChats.
     */
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupChat findFirstOrThrow
   */
  export type GroupChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChat to fetch.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupChats.
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupChats.
     */
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupChat findMany
   */
  export type GroupChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where?: GroupChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatOrderByWithRelationInput | GroupChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupChats.
     */
    cursor?: GroupChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    distinct?: GroupChatScalarFieldEnum | GroupChatScalarFieldEnum[]
  }

  /**
   * GroupChat create
   */
  export type GroupChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupChat.
     */
    data: XOR<GroupChatCreateInput, GroupChatUncheckedCreateInput>
  }

  /**
   * GroupChat createMany
   */
  export type GroupChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupChats.
     */
    data: GroupChatCreateManyInput | GroupChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupChat createManyAndReturn
   */
  export type GroupChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * The data used to create many GroupChats.
     */
    data: GroupChatCreateManyInput | GroupChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupChat update
   */
  export type GroupChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupChat.
     */
    data: XOR<GroupChatUpdateInput, GroupChatUncheckedUpdateInput>
    /**
     * Choose, which GroupChat to update.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat updateMany
   */
  export type GroupChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupChats.
     */
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyInput>
    /**
     * Filter which GroupChats to update
     */
    where?: GroupChatWhereInput
    /**
     * Limit how many GroupChats to update.
     */
    limit?: number
  }

  /**
   * GroupChat updateManyAndReturn
   */
  export type GroupChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * The data used to update GroupChats.
     */
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyInput>
    /**
     * Filter which GroupChats to update
     */
    where?: GroupChatWhereInput
    /**
     * Limit how many GroupChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupChat upsert
   */
  export type GroupChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupChat to update in case it exists.
     */
    where: GroupChatWhereUniqueInput
    /**
     * In case the GroupChat found by the `where` argument doesn't exist, create a new GroupChat with this data.
     */
    create: XOR<GroupChatCreateInput, GroupChatUncheckedCreateInput>
    /**
     * In case the GroupChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupChatUpdateInput, GroupChatUncheckedUpdateInput>
  }

  /**
   * GroupChat delete
   */
  export type GroupChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
    /**
     * Filter which GroupChat to delete.
     */
    where: GroupChatWhereUniqueInput
  }

  /**
   * GroupChat deleteMany
   */
  export type GroupChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupChats to delete
     */
    where?: GroupChatWhereInput
    /**
     * Limit how many GroupChats to delete.
     */
    limit?: number
  }

  /**
   * GroupChat.sender
   */
  export type GroupChat$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * GroupChat without action
   */
  export type GroupChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: GroupChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: GroupChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupChatInclude<ExtArgs> | null
  }


  /**
   * Model PrivateChat
   */

  export type AggregatePrivateChat = {
    _count: PrivateChatCountAggregateOutputType | null
    _min: PrivateChatMinAggregateOutputType | null
    _max: PrivateChatMaxAggregateOutputType | null
  }

  export type PrivateChatMinAggregateOutputType = {
    id: string | null
    username: string | null
    message: string | null
    senderId: string | null
    receiverId: string | null
    delivered: boolean | null
    createdAt: Date | null
  }

  export type PrivateChatMaxAggregateOutputType = {
    id: string | null
    username: string | null
    message: string | null
    senderId: string | null
    receiverId: string | null
    delivered: boolean | null
    createdAt: Date | null
  }

  export type PrivateChatCountAggregateOutputType = {
    id: number
    username: number
    message: number
    senderId: number
    receiverId: number
    delivered: number
    createdAt: number
    _all: number
  }


  export type PrivateChatMinAggregateInputType = {
    id?: true
    username?: true
    message?: true
    senderId?: true
    receiverId?: true
    delivered?: true
    createdAt?: true
  }

  export type PrivateChatMaxAggregateInputType = {
    id?: true
    username?: true
    message?: true
    senderId?: true
    receiverId?: true
    delivered?: true
    createdAt?: true
  }

  export type PrivateChatCountAggregateInputType = {
    id?: true
    username?: true
    message?: true
    senderId?: true
    receiverId?: true
    delivered?: true
    createdAt?: true
    _all?: true
  }

  export type PrivateChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateChat to aggregate.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateChats
    **/
    _count?: true | PrivateChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateChatMaxAggregateInputType
  }

  export type GetPrivateChatAggregateType<T extends PrivateChatAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateChat[P]>
      : GetScalarType<T[P], AggregatePrivateChat[P]>
  }




  export type PrivateChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithAggregationInput | PrivateChatOrderByWithAggregationInput[]
    by: PrivateChatScalarFieldEnum[] | PrivateChatScalarFieldEnum
    having?: PrivateChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateChatCountAggregateInputType | true
    _min?: PrivateChatMinAggregateInputType
    _max?: PrivateChatMaxAggregateInputType
  }

  export type PrivateChatGroupByOutputType = {
    id: string
    username: string
    message: string
    senderId: string
    receiverId: string | null
    delivered: boolean
    createdAt: Date
    _count: PrivateChatCountAggregateOutputType | null
    _min: PrivateChatMinAggregateOutputType | null
    _max: PrivateChatMaxAggregateOutputType | null
  }

  type GetPrivateChatGroupByPayload<T extends PrivateChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateChatGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateChatGroupByOutputType[P]>
        }
      >
    >


  export type PrivateChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    message?: boolean
    senderId?: boolean
    receiverId?: boolean
    delivered?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | PrivateChat$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["privateChat"]>

  export type PrivateChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    message?: boolean
    senderId?: boolean
    receiverId?: boolean
    delivered?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | PrivateChat$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["privateChat"]>

  export type PrivateChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    message?: boolean
    senderId?: boolean
    receiverId?: boolean
    delivered?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | PrivateChat$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["privateChat"]>

  export type PrivateChatSelectScalar = {
    id?: boolean
    username?: boolean
    message?: boolean
    senderId?: boolean
    receiverId?: boolean
    delivered?: boolean
    createdAt?: boolean
  }

  export type PrivateChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "message" | "senderId" | "receiverId" | "delivered" | "createdAt", ExtArgs["result"]["privateChat"]>
  export type PrivateChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | PrivateChat$receiverArgs<ExtArgs>
  }
  export type PrivateChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | PrivateChat$receiverArgs<ExtArgs>
  }
  export type PrivateChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | PrivateChat$receiverArgs<ExtArgs>
  }

  export type $PrivateChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateChat"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      message: string
      senderId: string
      receiverId: string | null
      delivered: boolean
      createdAt: Date
    }, ExtArgs["result"]["privateChat"]>
    composites: {}
  }

  type PrivateChatGetPayload<S extends boolean | null | undefined | PrivateChatDefaultArgs> = $Result.GetResult<Prisma.$PrivateChatPayload, S>

  type PrivateChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateChatCountAggregateInputType | true
    }

  export interface PrivateChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateChat'], meta: { name: 'PrivateChat' } }
    /**
     * Find zero or one PrivateChat that matches the filter.
     * @param {PrivateChatFindUniqueArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateChatFindUniqueArgs>(args: SelectSubset<T, PrivateChatFindUniqueArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateChatFindUniqueOrThrowArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateChatFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatFindFirstArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateChatFindFirstArgs>(args?: SelectSubset<T, PrivateChatFindFirstArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatFindFirstOrThrowArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateChatFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateChats
     * const privateChats = await prisma.privateChat.findMany()
     * 
     * // Get first 10 PrivateChats
     * const privateChats = await prisma.privateChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateChatWithIdOnly = await prisma.privateChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateChatFindManyArgs>(args?: SelectSubset<T, PrivateChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateChat.
     * @param {PrivateChatCreateArgs} args - Arguments to create a PrivateChat.
     * @example
     * // Create one PrivateChat
     * const PrivateChat = await prisma.privateChat.create({
     *   data: {
     *     // ... data to create a PrivateChat
     *   }
     * })
     * 
     */
    create<T extends PrivateChatCreateArgs>(args: SelectSubset<T, PrivateChatCreateArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateChats.
     * @param {PrivateChatCreateManyArgs} args - Arguments to create many PrivateChats.
     * @example
     * // Create many PrivateChats
     * const privateChat = await prisma.privateChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateChatCreateManyArgs>(args?: SelectSubset<T, PrivateChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateChats and returns the data saved in the database.
     * @param {PrivateChatCreateManyAndReturnArgs} args - Arguments to create many PrivateChats.
     * @example
     * // Create many PrivateChats
     * const privateChat = await prisma.privateChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateChats and only return the `id`
     * const privateChatWithIdOnly = await prisma.privateChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateChatCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateChat.
     * @param {PrivateChatDeleteArgs} args - Arguments to delete one PrivateChat.
     * @example
     * // Delete one PrivateChat
     * const PrivateChat = await prisma.privateChat.delete({
     *   where: {
     *     // ... filter to delete one PrivateChat
     *   }
     * })
     * 
     */
    delete<T extends PrivateChatDeleteArgs>(args: SelectSubset<T, PrivateChatDeleteArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateChat.
     * @param {PrivateChatUpdateArgs} args - Arguments to update one PrivateChat.
     * @example
     * // Update one PrivateChat
     * const privateChat = await prisma.privateChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateChatUpdateArgs>(args: SelectSubset<T, PrivateChatUpdateArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateChats.
     * @param {PrivateChatDeleteManyArgs} args - Arguments to filter PrivateChats to delete.
     * @example
     * // Delete a few PrivateChats
     * const { count } = await prisma.privateChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateChatDeleteManyArgs>(args?: SelectSubset<T, PrivateChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateChats
     * const privateChat = await prisma.privateChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateChatUpdateManyArgs>(args: SelectSubset<T, PrivateChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateChats and returns the data updated in the database.
     * @param {PrivateChatUpdateManyAndReturnArgs} args - Arguments to update many PrivateChats.
     * @example
     * // Update many PrivateChats
     * const privateChat = await prisma.privateChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateChats and only return the `id`
     * const privateChatWithIdOnly = await prisma.privateChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrivateChatUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateChat.
     * @param {PrivateChatUpsertArgs} args - Arguments to update or create a PrivateChat.
     * @example
     * // Update or create a PrivateChat
     * const privateChat = await prisma.privateChat.upsert({
     *   create: {
     *     // ... data to create a PrivateChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateChat we want to update
     *   }
     * })
     */
    upsert<T extends PrivateChatUpsertArgs>(args: SelectSubset<T, PrivateChatUpsertArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatCountArgs} args - Arguments to filter PrivateChats to count.
     * @example
     * // Count the number of PrivateChats
     * const count = await prisma.privateChat.count({
     *   where: {
     *     // ... the filter for the PrivateChats we want to count
     *   }
     * })
    **/
    count<T extends PrivateChatCountArgs>(
      args?: Subset<T, PrivateChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateChatAggregateArgs>(args: Subset<T, PrivateChatAggregateArgs>): Prisma.PrismaPromise<GetPrivateChatAggregateType<T>>

    /**
     * Group by PrivateChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatGroupByArgs} args - Group by arguments.
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
      T extends PrivateChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateChatGroupByArgs['orderBy'] }
        : { orderBy?: PrivateChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateChat model
   */
  readonly fields: PrivateChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends PrivateChat$receiverArgs<ExtArgs> = {}>(args?: Subset<T, PrivateChat$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrivateChat model
   */
  interface PrivateChatFieldRefs {
    readonly id: FieldRef<"PrivateChat", 'String'>
    readonly username: FieldRef<"PrivateChat", 'String'>
    readonly message: FieldRef<"PrivateChat", 'String'>
    readonly senderId: FieldRef<"PrivateChat", 'String'>
    readonly receiverId: FieldRef<"PrivateChat", 'String'>
    readonly delivered: FieldRef<"PrivateChat", 'Boolean'>
    readonly createdAt: FieldRef<"PrivateChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivateChat findUnique
   */
  export type PrivateChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat findUniqueOrThrow
   */
  export type PrivateChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat findFirst
   */
  export type PrivateChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateChats.
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateChats.
     */
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * PrivateChat findFirstOrThrow
   */
  export type PrivateChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateChats.
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateChats.
     */
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * PrivateChat findMany
   */
  export type PrivateChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateChats.
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * PrivateChat create
   */
  export type PrivateChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateChat.
     */
    data: XOR<PrivateChatCreateInput, PrivateChatUncheckedCreateInput>
  }

  /**
   * PrivateChat createMany
   */
  export type PrivateChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateChats.
     */
    data: PrivateChatCreateManyInput | PrivateChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateChat createManyAndReturn
   */
  export type PrivateChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateChats.
     */
    data: PrivateChatCreateManyInput | PrivateChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateChat update
   */
  export type PrivateChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateChat.
     */
    data: XOR<PrivateChatUpdateInput, PrivateChatUncheckedUpdateInput>
    /**
     * Choose, which PrivateChat to update.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat updateMany
   */
  export type PrivateChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateChats.
     */
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyInput>
    /**
     * Filter which PrivateChats to update
     */
    where?: PrivateChatWhereInput
    /**
     * Limit how many PrivateChats to update.
     */
    limit?: number
  }

  /**
   * PrivateChat updateManyAndReturn
   */
  export type PrivateChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * The data used to update PrivateChats.
     */
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyInput>
    /**
     * Filter which PrivateChats to update
     */
    where?: PrivateChatWhereInput
    /**
     * Limit how many PrivateChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateChat upsert
   */
  export type PrivateChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateChat to update in case it exists.
     */
    where: PrivateChatWhereUniqueInput
    /**
     * In case the PrivateChat found by the `where` argument doesn't exist, create a new PrivateChat with this data.
     */
    create: XOR<PrivateChatCreateInput, PrivateChatUncheckedCreateInput>
    /**
     * In case the PrivateChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateChatUpdateInput, PrivateChatUncheckedUpdateInput>
  }

  /**
   * PrivateChat delete
   */
  export type PrivateChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter which PrivateChat to delete.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat deleteMany
   */
  export type PrivateChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateChats to delete
     */
    where?: PrivateChatWhereInput
    /**
     * Limit how many PrivateChats to delete.
     */
    limit?: number
  }

  /**
   * PrivateChat.receiver
   */
  export type PrivateChat$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * PrivateChat without action
   */
  export type PrivateChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    action: $Enums.Action | null
    tableName: $Enums.TableName | null
    userId: string | null
    taskId: string | null
    timestamp: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    action: $Enums.Action | null
    tableName: $Enums.TableName | null
    userId: string | null
    taskId: string | null
    timestamp: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    action: number
    tableName: number
    userId: number
    taskId: number
    changes: number
    timestamp: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    action?: true
    tableName?: true
    userId?: true
    taskId?: true
    timestamp?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    action?: true
    tableName?: true
    userId?: true
    taskId?: true
    timestamp?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    action?: true
    tableName?: true
    userId?: true
    taskId?: true
    changes?: true
    timestamp?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    action: $Enums.Action
    tableName: $Enums.TableName
    userId: string | null
    taskId: string | null
    changes: JsonValue | null
    timestamp: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    tableName?: boolean
    userId?: boolean
    taskId?: boolean
    changes?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    tableName?: boolean
    userId?: boolean
    taskId?: boolean
    changes?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    tableName?: boolean
    userId?: boolean
    taskId?: boolean
    changes?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    action?: boolean
    tableName?: boolean
    userId?: boolean
    taskId?: boolean
    changes?: boolean
    timestamp?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "tableName" | "userId" | "taskId" | "changes" | "timestamp", ExtArgs["result"]["log"]>

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: $Enums.Action
      tableName: $Enums.TableName
      userId: string | null
      taskId: string | null
      changes: Prisma.JsonValue | null
      timestamp: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'Action'>
    readonly tableName: FieldRef<"Log", 'TableName'>
    readonly userId: FieldRef<"Log", 'String'>
    readonly taskId: FieldRef<"Log", 'String'>
    readonly changes: FieldRef<"Log", 'Json'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
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
    username: 'username',
    fullname: 'fullname',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupTaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    leadId: 'leadId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupTaskScalarFieldEnum = (typeof GroupTaskScalarFieldEnum)[keyof typeof GroupTaskScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    groupId: 'groupId',
    userTeamId: 'userTeamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const GroupChatScalarFieldEnum: {
    id: 'id',
    username: 'username',
    message: 'message',
    groupId: 'groupId',
    senderId: 'senderId',
    delivered: 'delivered',
    createdAt: 'createdAt'
  };

  export type GroupChatScalarFieldEnum = (typeof GroupChatScalarFieldEnum)[keyof typeof GroupChatScalarFieldEnum]


  export const PrivateChatScalarFieldEnum: {
    id: 'id',
    username: 'username',
    message: 'message',
    senderId: 'senderId',
    receiverId: 'receiverId',
    delivered: 'delivered',
    createdAt: 'createdAt'
  };

  export type PrivateChatScalarFieldEnum = (typeof PrivateChatScalarFieldEnum)[keyof typeof PrivateChatScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    tableName: 'tableName',
    userId: 'userId',
    taskId: 'taskId',
    changes: 'changes',
    timestamp: 'timestamp'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Action'
   */
  export type EnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action'>
    


  /**
   * Reference to a field of type 'Action[]'
   */
  export type ListEnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action[]'>
    


  /**
   * Reference to a field of type 'TableName'
   */
  export type EnumTableNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableName'>
    


  /**
   * Reference to a field of type 'TableName[]'
   */
  export type ListEnumTableNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableName[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ledGroups?: GroupTaskListRelationFilter
    assignedTeamTasks?: TaskListRelationFilter
    groupMessagesSent?: GroupChatListRelationFilter
    privateMessagesSent?: PrivateChatListRelationFilter
    privateMessagesReceived?: PrivateChatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ledGroups?: GroupTaskOrderByRelationAggregateInput
    assignedTeamTasks?: TaskOrderByRelationAggregateInput
    groupMessagesSent?: GroupChatOrderByRelationAggregateInput
    privateMessagesSent?: PrivateChatOrderByRelationAggregateInput
    privateMessagesReceived?: PrivateChatOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ledGroups?: GroupTaskListRelationFilter
    assignedTeamTasks?: TaskListRelationFilter
    groupMessagesSent?: GroupChatListRelationFilter
    privateMessagesSent?: PrivateChatListRelationFilter
    privateMessagesReceived?: PrivateChatListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupTaskWhereInput = {
    AND?: GroupTaskWhereInput | GroupTaskWhereInput[]
    OR?: GroupTaskWhereInput[]
    NOT?: GroupTaskWhereInput | GroupTaskWhereInput[]
    id?: StringFilter<"GroupTask"> | string
    name?: StringFilter<"GroupTask"> | string
    leadId?: StringFilter<"GroupTask"> | string
    createdAt?: DateTimeFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeFilter<"GroupTask"> | Date | string
    lead?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    chats?: GroupChatListRelationFilter
  }

  export type GroupTaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lead?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    chats?: GroupChatOrderByRelationAggregateInput
  }

  export type GroupTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupTaskWhereInput | GroupTaskWhereInput[]
    OR?: GroupTaskWhereInput[]
    NOT?: GroupTaskWhereInput | GroupTaskWhereInput[]
    name?: StringFilter<"GroupTask"> | string
    leadId?: StringFilter<"GroupTask"> | string
    createdAt?: DateTimeFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeFilter<"GroupTask"> | Date | string
    lead?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    chats?: GroupChatListRelationFilter
  }, "id">

  export type GroupTaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupTaskCountOrderByAggregateInput
    _max?: GroupTaskMaxOrderByAggregateInput
    _min?: GroupTaskMinOrderByAggregateInput
  }

  export type GroupTaskScalarWhereWithAggregatesInput = {
    AND?: GroupTaskScalarWhereWithAggregatesInput | GroupTaskScalarWhereWithAggregatesInput[]
    OR?: GroupTaskScalarWhereWithAggregatesInput[]
    NOT?: GroupTaskScalarWhereWithAggregatesInput | GroupTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupTask"> | string
    name?: StringWithAggregatesFilter<"GroupTask"> | string
    leadId?: StringWithAggregatesFilter<"GroupTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupTask"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    groupId?: StringFilter<"Task"> | string
    userTeamId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    group?: XOR<GroupTaskScalarRelationFilter, GroupTaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    groupId?: SortOrder
    userTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupTaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    groupId?: StringFilter<"Task"> | string
    userTeamId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    group?: XOR<GroupTaskScalarRelationFilter, GroupTaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    groupId?: SortOrder
    userTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    groupId?: StringWithAggregatesFilter<"Task"> | string
    userTeamId?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type GroupChatWhereInput = {
    AND?: GroupChatWhereInput | GroupChatWhereInput[]
    OR?: GroupChatWhereInput[]
    NOT?: GroupChatWhereInput | GroupChatWhereInput[]
    id?: StringFilter<"GroupChat"> | string
    username?: StringFilter<"GroupChat"> | string
    message?: StringFilter<"GroupChat"> | string
    groupId?: StringFilter<"GroupChat"> | string
    senderId?: StringNullableFilter<"GroupChat"> | string | null
    delivered?: BoolFilter<"GroupChat"> | boolean
    createdAt?: DateTimeFilter<"GroupChat"> | Date | string
    group?: XOR<GroupTaskScalarRelationFilter, GroupTaskWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type GroupChatOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
    group?: GroupTaskOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type GroupChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupChatWhereInput | GroupChatWhereInput[]
    OR?: GroupChatWhereInput[]
    NOT?: GroupChatWhereInput | GroupChatWhereInput[]
    username?: StringFilter<"GroupChat"> | string
    message?: StringFilter<"GroupChat"> | string
    groupId?: StringFilter<"GroupChat"> | string
    senderId?: StringNullableFilter<"GroupChat"> | string | null
    delivered?: BoolFilter<"GroupChat"> | boolean
    createdAt?: DateTimeFilter<"GroupChat"> | Date | string
    group?: XOR<GroupTaskScalarRelationFilter, GroupTaskWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type GroupChatOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
    _count?: GroupChatCountOrderByAggregateInput
    _max?: GroupChatMaxOrderByAggregateInput
    _min?: GroupChatMinOrderByAggregateInput
  }

  export type GroupChatScalarWhereWithAggregatesInput = {
    AND?: GroupChatScalarWhereWithAggregatesInput | GroupChatScalarWhereWithAggregatesInput[]
    OR?: GroupChatScalarWhereWithAggregatesInput[]
    NOT?: GroupChatScalarWhereWithAggregatesInput | GroupChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupChat"> | string
    username?: StringWithAggregatesFilter<"GroupChat"> | string
    message?: StringWithAggregatesFilter<"GroupChat"> | string
    groupId?: StringWithAggregatesFilter<"GroupChat"> | string
    senderId?: StringNullableWithAggregatesFilter<"GroupChat"> | string | null
    delivered?: BoolWithAggregatesFilter<"GroupChat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GroupChat"> | Date | string
  }

  export type PrivateChatWhereInput = {
    AND?: PrivateChatWhereInput | PrivateChatWhereInput[]
    OR?: PrivateChatWhereInput[]
    NOT?: PrivateChatWhereInput | PrivateChatWhereInput[]
    id?: StringFilter<"PrivateChat"> | string
    username?: StringFilter<"PrivateChat"> | string
    message?: StringFilter<"PrivateChat"> | string
    senderId?: StringFilter<"PrivateChat"> | string
    receiverId?: StringNullableFilter<"PrivateChat"> | string | null
    delivered?: BoolFilter<"PrivateChat"> | boolean
    createdAt?: DateTimeFilter<"PrivateChat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PrivateChatOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type PrivateChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrivateChatWhereInput | PrivateChatWhereInput[]
    OR?: PrivateChatWhereInput[]
    NOT?: PrivateChatWhereInput | PrivateChatWhereInput[]
    username?: StringFilter<"PrivateChat"> | string
    message?: StringFilter<"PrivateChat"> | string
    senderId?: StringFilter<"PrivateChat"> | string
    receiverId?: StringNullableFilter<"PrivateChat"> | string | null
    delivered?: BoolFilter<"PrivateChat"> | boolean
    createdAt?: DateTimeFilter<"PrivateChat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PrivateChatOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
    _count?: PrivateChatCountOrderByAggregateInput
    _max?: PrivateChatMaxOrderByAggregateInput
    _min?: PrivateChatMinOrderByAggregateInput
  }

  export type PrivateChatScalarWhereWithAggregatesInput = {
    AND?: PrivateChatScalarWhereWithAggregatesInput | PrivateChatScalarWhereWithAggregatesInput[]
    OR?: PrivateChatScalarWhereWithAggregatesInput[]
    NOT?: PrivateChatScalarWhereWithAggregatesInput | PrivateChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrivateChat"> | string
    username?: StringWithAggregatesFilter<"PrivateChat"> | string
    message?: StringWithAggregatesFilter<"PrivateChat"> | string
    senderId?: StringWithAggregatesFilter<"PrivateChat"> | string
    receiverId?: StringNullableWithAggregatesFilter<"PrivateChat"> | string | null
    delivered?: BoolWithAggregatesFilter<"PrivateChat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PrivateChat"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    action?: EnumActionFilter<"Log"> | $Enums.Action
    tableName?: EnumTableNameFilter<"Log"> | $Enums.TableName
    userId?: StringNullableFilter<"Log"> | string | null
    taskId?: StringNullableFilter<"Log"> | string | null
    changes?: JsonNullableFilter<"Log">
    timestamp?: DateTimeFilter<"Log"> | Date | string
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    userId?: SortOrderInput | SortOrder
    taskId?: SortOrderInput | SortOrder
    changes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    action?: EnumActionFilter<"Log"> | $Enums.Action
    tableName?: EnumTableNameFilter<"Log"> | $Enums.TableName
    userId?: StringNullableFilter<"Log"> | string | null
    taskId?: StringNullableFilter<"Log"> | string | null
    changes?: JsonNullableFilter<"Log">
    timestamp?: DateTimeFilter<"Log"> | Date | string
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    userId?: SortOrderInput | SortOrder
    taskId?: SortOrderInput | SortOrder
    changes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    action?: EnumActionWithAggregatesFilter<"Log"> | $Enums.Action
    tableName?: EnumTableNameWithAggregatesFilter<"Log"> | $Enums.TableName
    userId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    taskId?: StringNullableWithAggregatesFilter<"Log"> | string | null
    changes?: JsonNullableWithAggregatesFilter<"Log">
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskUncheckedCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUncheckedUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTaskCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: UserCreateNestedOneWithoutLedGroupsInput
    tasks?: TaskCreateNestedManyWithoutGroupInput
    chats?: GroupChatCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskUncheckedCreateInput = {
    id?: string
    name: string
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGroupInput
    chats?: GroupChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    tasks?: TaskUpdateManyWithoutGroupNestedInput
    chats?: GroupChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGroupNestedInput
    chats?: GroupChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupTaskCreateManyInput = {
    id?: string
    name: string
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupTaskCreateNestedOneWithoutTasksInput
    user: UserCreateNestedOneWithoutAssignedTeamTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    groupId: string
    userTeamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupTaskUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneRequiredWithoutAssignedTeamTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    groupId?: StringFieldUpdateOperationsInput | string
    userTeamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    groupId: string
    userTeamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    groupId?: StringFieldUpdateOperationsInput | string
    userTeamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatCreateInput = {
    id?: string
    username: string
    message: string
    delivered: boolean
    createdAt?: Date | string
    group: GroupTaskCreateNestedOneWithoutChatsInput
    sender?: UserCreateNestedOneWithoutGroupMessagesSentInput
  }

  export type GroupChatUncheckedCreateInput = {
    id?: string
    username: string
    message: string
    groupId: string
    senderId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type GroupChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupTaskUpdateOneRequiredWithoutChatsNestedInput
    sender?: UserUpdateOneWithoutGroupMessagesSentNestedInput
  }

  export type GroupChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatCreateManyInput = {
    id?: string
    username: string
    message: string
    groupId: string
    senderId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type GroupChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatCreateInput = {
    id?: string
    username: string
    message: string
    delivered: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutPrivateMessagesSentInput
    receiver?: UserCreateNestedOneWithoutPrivateMessagesReceivedInput
  }

  export type PrivateChatUncheckedCreateInput = {
    id?: string
    username: string
    message: string
    senderId: string
    receiverId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type PrivateChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutPrivateMessagesSentNestedInput
    receiver?: UserUpdateOneWithoutPrivateMessagesReceivedNestedInput
  }

  export type PrivateChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatCreateManyInput = {
    id?: string
    username: string
    message: string
    senderId: string
    receiverId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type PrivateChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    action: $Enums.Action
    tableName: $Enums.TableName
    userId?: string | null
    taskId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type LogUncheckedCreateInput = {
    id?: string
    action: $Enums.Action
    tableName: $Enums.TableName
    userId?: string | null
    taskId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    tableName?: EnumTableNameFieldUpdateOperationsInput | $Enums.TableName
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    tableName?: EnumTableNameFieldUpdateOperationsInput | $Enums.TableName
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    action: $Enums.Action
    tableName: $Enums.TableName
    userId?: string | null
    taskId?: string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    tableName?: EnumTableNameFieldUpdateOperationsInput | $Enums.TableName
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    tableName?: EnumTableNameFieldUpdateOperationsInput | $Enums.TableName
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    changes?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GroupTaskListRelationFilter = {
    every?: GroupTaskWhereInput
    some?: GroupTaskWhereInput
    none?: GroupTaskWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type GroupChatListRelationFilter = {
    every?: GroupChatWhereInput
    some?: GroupChatWhereInput
    none?: GroupChatWhereInput
  }

  export type PrivateChatListRelationFilter = {
    every?: PrivateChatWhereInput
    some?: PrivateChatWhereInput
    none?: PrivateChatWhereInput
  }

  export type GroupTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupTaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type GroupTaskScalarRelationFilter = {
    is?: GroupTaskWhereInput
    isNot?: GroupTaskWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    groupId?: SortOrder
    userTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    groupId?: SortOrder
    userTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    groupId?: SortOrder
    userTeamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupChatCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupChatMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupChatMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PrivateChatCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
  }

  export type PrivateChatMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
  }

  export type PrivateChatMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    delivered?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type EnumTableNameFilter<$PrismaModel = never> = {
    equals?: $Enums.TableName | EnumTableNameFieldRefInput<$PrismaModel>
    in?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    not?: NestedEnumTableNameFilter<$PrismaModel> | $Enums.TableName
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    changes?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    timestamp?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type EnumTableNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableName | EnumTableNameFieldRefInput<$PrismaModel>
    in?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    not?: NestedEnumTableNameWithAggregatesFilter<$PrismaModel> | $Enums.TableName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableNameFilter<$PrismaModel>
    _max?: NestedEnumTableNameFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GroupTaskCreateNestedManyWithoutLeadInput = {
    create?: XOR<GroupTaskCreateWithoutLeadInput, GroupTaskUncheckedCreateWithoutLeadInput> | GroupTaskCreateWithoutLeadInput[] | GroupTaskUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutLeadInput | GroupTaskCreateOrConnectWithoutLeadInput[]
    createMany?: GroupTaskCreateManyLeadInputEnvelope
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GroupChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<GroupChatCreateWithoutSenderInput, GroupChatUncheckedCreateWithoutSenderInput> | GroupChatCreateWithoutSenderInput[] | GroupChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutSenderInput | GroupChatCreateOrConnectWithoutSenderInput[]
    createMany?: GroupChatCreateManySenderInputEnvelope
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
  }

  export type PrivateChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateChatCreateWithoutSenderInput, PrivateChatUncheckedCreateWithoutSenderInput> | PrivateChatCreateWithoutSenderInput[] | PrivateChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutSenderInput | PrivateChatCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateChatCreateManySenderInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type PrivateChatCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PrivateChatCreateWithoutReceiverInput, PrivateChatUncheckedCreateWithoutReceiverInput> | PrivateChatCreateWithoutReceiverInput[] | PrivateChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutReceiverInput | PrivateChatCreateOrConnectWithoutReceiverInput[]
    createMany?: PrivateChatCreateManyReceiverInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type GroupTaskUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<GroupTaskCreateWithoutLeadInput, GroupTaskUncheckedCreateWithoutLeadInput> | GroupTaskCreateWithoutLeadInput[] | GroupTaskUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutLeadInput | GroupTaskCreateOrConnectWithoutLeadInput[]
    createMany?: GroupTaskCreateManyLeadInputEnvelope
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GroupChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<GroupChatCreateWithoutSenderInput, GroupChatUncheckedCreateWithoutSenderInput> | GroupChatCreateWithoutSenderInput[] | GroupChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutSenderInput | GroupChatCreateOrConnectWithoutSenderInput[]
    createMany?: GroupChatCreateManySenderInputEnvelope
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
  }

  export type PrivateChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateChatCreateWithoutSenderInput, PrivateChatUncheckedCreateWithoutSenderInput> | PrivateChatCreateWithoutSenderInput[] | PrivateChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutSenderInput | PrivateChatCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateChatCreateManySenderInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type PrivateChatUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PrivateChatCreateWithoutReceiverInput, PrivateChatUncheckedCreateWithoutReceiverInput> | PrivateChatCreateWithoutReceiverInput[] | PrivateChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutReceiverInput | PrivateChatCreateOrConnectWithoutReceiverInput[]
    createMany?: PrivateChatCreateManyReceiverInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupTaskUpdateManyWithoutLeadNestedInput = {
    create?: XOR<GroupTaskCreateWithoutLeadInput, GroupTaskUncheckedCreateWithoutLeadInput> | GroupTaskCreateWithoutLeadInput[] | GroupTaskUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutLeadInput | GroupTaskCreateOrConnectWithoutLeadInput[]
    upsert?: GroupTaskUpsertWithWhereUniqueWithoutLeadInput | GroupTaskUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: GroupTaskCreateManyLeadInputEnvelope
    set?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    disconnect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    delete?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    update?: GroupTaskUpdateWithWhereUniqueWithoutLeadInput | GroupTaskUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: GroupTaskUpdateManyWithWhereWithoutLeadInput | GroupTaskUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GroupChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GroupChatCreateWithoutSenderInput, GroupChatUncheckedCreateWithoutSenderInput> | GroupChatCreateWithoutSenderInput[] | GroupChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutSenderInput | GroupChatCreateOrConnectWithoutSenderInput[]
    upsert?: GroupChatUpsertWithWhereUniqueWithoutSenderInput | GroupChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GroupChatCreateManySenderInputEnvelope
    set?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    disconnect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    delete?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    update?: GroupChatUpdateWithWhereUniqueWithoutSenderInput | GroupChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GroupChatUpdateManyWithWhereWithoutSenderInput | GroupChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
  }

  export type PrivateChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateChatCreateWithoutSenderInput, PrivateChatUncheckedCreateWithoutSenderInput> | PrivateChatCreateWithoutSenderInput[] | PrivateChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutSenderInput | PrivateChatCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutSenderInput | PrivateChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateChatCreateManySenderInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutSenderInput | PrivateChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutSenderInput | PrivateChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type PrivateChatUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PrivateChatCreateWithoutReceiverInput, PrivateChatUncheckedCreateWithoutReceiverInput> | PrivateChatCreateWithoutReceiverInput[] | PrivateChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutReceiverInput | PrivateChatCreateOrConnectWithoutReceiverInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutReceiverInput | PrivateChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PrivateChatCreateManyReceiverInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutReceiverInput | PrivateChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutReceiverInput | PrivateChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type GroupTaskUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<GroupTaskCreateWithoutLeadInput, GroupTaskUncheckedCreateWithoutLeadInput> | GroupTaskCreateWithoutLeadInput[] | GroupTaskUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: GroupTaskCreateOrConnectWithoutLeadInput | GroupTaskCreateOrConnectWithoutLeadInput[]
    upsert?: GroupTaskUpsertWithWhereUniqueWithoutLeadInput | GroupTaskUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: GroupTaskCreateManyLeadInputEnvelope
    set?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    disconnect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    delete?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    connect?: GroupTaskWhereUniqueInput | GroupTaskWhereUniqueInput[]
    update?: GroupTaskUpdateWithWhereUniqueWithoutLeadInput | GroupTaskUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: GroupTaskUpdateManyWithWhereWithoutLeadInput | GroupTaskUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GroupChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GroupChatCreateWithoutSenderInput, GroupChatUncheckedCreateWithoutSenderInput> | GroupChatCreateWithoutSenderInput[] | GroupChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutSenderInput | GroupChatCreateOrConnectWithoutSenderInput[]
    upsert?: GroupChatUpsertWithWhereUniqueWithoutSenderInput | GroupChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GroupChatCreateManySenderInputEnvelope
    set?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    disconnect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    delete?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    update?: GroupChatUpdateWithWhereUniqueWithoutSenderInput | GroupChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GroupChatUpdateManyWithWhereWithoutSenderInput | GroupChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
  }

  export type PrivateChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateChatCreateWithoutSenderInput, PrivateChatUncheckedCreateWithoutSenderInput> | PrivateChatCreateWithoutSenderInput[] | PrivateChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutSenderInput | PrivateChatCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutSenderInput | PrivateChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateChatCreateManySenderInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutSenderInput | PrivateChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutSenderInput | PrivateChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type PrivateChatUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PrivateChatCreateWithoutReceiverInput, PrivateChatUncheckedCreateWithoutReceiverInput> | PrivateChatCreateWithoutReceiverInput[] | PrivateChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutReceiverInput | PrivateChatCreateOrConnectWithoutReceiverInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutReceiverInput | PrivateChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PrivateChatCreateManyReceiverInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutReceiverInput | PrivateChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutReceiverInput | PrivateChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLedGroupsInput = {
    create?: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutGroupInput = {
    create?: XOR<TaskCreateWithoutGroupInput, TaskUncheckedCreateWithoutGroupInput> | TaskCreateWithoutGroupInput[] | TaskUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGroupInput | TaskCreateOrConnectWithoutGroupInput[]
    createMany?: TaskCreateManyGroupInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GroupChatCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupChatCreateWithoutGroupInput, GroupChatUncheckedCreateWithoutGroupInput> | GroupChatCreateWithoutGroupInput[] | GroupChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutGroupInput | GroupChatCreateOrConnectWithoutGroupInput[]
    createMany?: GroupChatCreateManyGroupInputEnvelope
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<TaskCreateWithoutGroupInput, TaskUncheckedCreateWithoutGroupInput> | TaskCreateWithoutGroupInput[] | TaskUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGroupInput | TaskCreateOrConnectWithoutGroupInput[]
    createMany?: TaskCreateManyGroupInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type GroupChatUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupChatCreateWithoutGroupInput, GroupChatUncheckedCreateWithoutGroupInput> | GroupChatCreateWithoutGroupInput[] | GroupChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutGroupInput | GroupChatCreateOrConnectWithoutGroupInput[]
    createMany?: GroupChatCreateManyGroupInputEnvelope
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedGroupsInput
    upsert?: UserUpsertWithoutLedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLedGroupsInput, UserUpdateWithoutLedGroupsInput>, UserUncheckedUpdateWithoutLedGroupsInput>
  }

  export type TaskUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TaskCreateWithoutGroupInput, TaskUncheckedCreateWithoutGroupInput> | TaskCreateWithoutGroupInput[] | TaskUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGroupInput | TaskCreateOrConnectWithoutGroupInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGroupInput | TaskUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TaskCreateManyGroupInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGroupInput | TaskUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGroupInput | TaskUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GroupChatUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupChatCreateWithoutGroupInput, GroupChatUncheckedCreateWithoutGroupInput> | GroupChatCreateWithoutGroupInput[] | GroupChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutGroupInput | GroupChatCreateOrConnectWithoutGroupInput[]
    upsert?: GroupChatUpsertWithWhereUniqueWithoutGroupInput | GroupChatUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupChatCreateManyGroupInputEnvelope
    set?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    disconnect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    delete?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    update?: GroupChatUpdateWithWhereUniqueWithoutGroupInput | GroupChatUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupChatUpdateManyWithWhereWithoutGroupInput | GroupChatUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<TaskCreateWithoutGroupInput, TaskUncheckedCreateWithoutGroupInput> | TaskCreateWithoutGroupInput[] | TaskUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGroupInput | TaskCreateOrConnectWithoutGroupInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGroupInput | TaskUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: TaskCreateManyGroupInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGroupInput | TaskUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGroupInput | TaskUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type GroupChatUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupChatCreateWithoutGroupInput, GroupChatUncheckedCreateWithoutGroupInput> | GroupChatCreateWithoutGroupInput[] | GroupChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupChatCreateOrConnectWithoutGroupInput | GroupChatCreateOrConnectWithoutGroupInput[]
    upsert?: GroupChatUpsertWithWhereUniqueWithoutGroupInput | GroupChatUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupChatCreateManyGroupInputEnvelope
    set?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    disconnect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    delete?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    connect?: GroupChatWhereUniqueInput | GroupChatWhereUniqueInput[]
    update?: GroupChatUpdateWithWhereUniqueWithoutGroupInput | GroupChatUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupChatUpdateManyWithWhereWithoutGroupInput | GroupChatUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
  }

  export type GroupTaskCreateNestedOneWithoutTasksInput = {
    create?: XOR<GroupTaskCreateWithoutTasksInput, GroupTaskUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GroupTaskCreateOrConnectWithoutTasksInput
    connect?: GroupTaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTeamTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTeamTasksInput, UserUncheckedCreateWithoutAssignedTeamTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTeamTasksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type GroupTaskUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<GroupTaskCreateWithoutTasksInput, GroupTaskUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GroupTaskCreateOrConnectWithoutTasksInput
    upsert?: GroupTaskUpsertWithoutTasksInput
    connect?: GroupTaskWhereUniqueInput
    update?: XOR<XOR<GroupTaskUpdateToOneWithWhereWithoutTasksInput, GroupTaskUpdateWithoutTasksInput>, GroupTaskUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTeamTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTeamTasksInput, UserUncheckedCreateWithoutAssignedTeamTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTeamTasksInput
    upsert?: UserUpsertWithoutAssignedTeamTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTeamTasksInput, UserUpdateWithoutAssignedTeamTasksInput>, UserUncheckedUpdateWithoutAssignedTeamTasksInput>
  }

  export type GroupTaskCreateNestedOneWithoutChatsInput = {
    create?: XOR<GroupTaskCreateWithoutChatsInput, GroupTaskUncheckedCreateWithoutChatsInput>
    connectOrCreate?: GroupTaskCreateOrConnectWithoutChatsInput
    connect?: GroupTaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMessagesSentInput = {
    create?: XOR<UserCreateWithoutGroupMessagesSentInput, UserUncheckedCreateWithoutGroupMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GroupTaskUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<GroupTaskCreateWithoutChatsInput, GroupTaskUncheckedCreateWithoutChatsInput>
    connectOrCreate?: GroupTaskCreateOrConnectWithoutChatsInput
    upsert?: GroupTaskUpsertWithoutChatsInput
    connect?: GroupTaskWhereUniqueInput
    update?: XOR<XOR<GroupTaskUpdateToOneWithWhereWithoutChatsInput, GroupTaskUpdateWithoutChatsInput>, GroupTaskUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneWithoutGroupMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutGroupMessagesSentInput, UserUncheckedCreateWithoutGroupMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMessagesSentInput
    upsert?: UserUpsertWithoutGroupMessagesSentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMessagesSentInput, UserUpdateWithoutGroupMessagesSentInput>, UserUncheckedUpdateWithoutGroupMessagesSentInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutPrivateMessagesSentInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrivateMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPrivateMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesSentInput
    upsert?: UserUpsertWithoutPrivateMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivateMessagesSentInput, UserUpdateWithoutPrivateMessagesSentInput>, UserUncheckedUpdateWithoutPrivateMessagesSentInput>
  }

  export type UserUpdateOneWithoutPrivateMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrivateMessagesReceivedInput
    upsert?: UserUpsertWithoutPrivateMessagesReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrivateMessagesReceivedInput, UserUpdateWithoutPrivateMessagesReceivedInput>, UserUncheckedUpdateWithoutPrivateMessagesReceivedInput>
  }

  export type EnumActionFieldUpdateOperationsInput = {
    set?: $Enums.Action
  }

  export type EnumTableNameFieldUpdateOperationsInput = {
    set?: $Enums.TableName
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

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type NestedEnumTableNameFilter<$PrismaModel = never> = {
    equals?: $Enums.TableName | EnumTableNameFieldRefInput<$PrismaModel>
    in?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    not?: NestedEnumTableNameFilter<$PrismaModel> | $Enums.TableName
  }

  export type NestedEnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type NestedEnumTableNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableName | EnumTableNameFieldRefInput<$PrismaModel>
    in?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.TableName[] | ListEnumTableNameFieldRefInput<$PrismaModel>
    not?: NestedEnumTableNameWithAggregatesFilter<$PrismaModel> | $Enums.TableName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableNameFilter<$PrismaModel>
    _max?: NestedEnumTableNameFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GroupTaskCreateWithoutLeadInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutGroupInput
    chats?: GroupChatCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskUncheckedCreateWithoutLeadInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGroupInput
    chats?: GroupChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskCreateOrConnectWithoutLeadInput = {
    where: GroupTaskWhereUniqueInput
    create: XOR<GroupTaskCreateWithoutLeadInput, GroupTaskUncheckedCreateWithoutLeadInput>
  }

  export type GroupTaskCreateManyLeadInputEnvelope = {
    data: GroupTaskCreateManyLeadInput | GroupTaskCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupTaskCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupChatCreateWithoutSenderInput = {
    id?: string
    username: string
    message: string
    delivered: boolean
    createdAt?: Date | string
    group: GroupTaskCreateNestedOneWithoutChatsInput
  }

  export type GroupChatUncheckedCreateWithoutSenderInput = {
    id?: string
    username: string
    message: string
    groupId: string
    delivered: boolean
    createdAt?: Date | string
  }

  export type GroupChatCreateOrConnectWithoutSenderInput = {
    where: GroupChatWhereUniqueInput
    create: XOR<GroupChatCreateWithoutSenderInput, GroupChatUncheckedCreateWithoutSenderInput>
  }

  export type GroupChatCreateManySenderInputEnvelope = {
    data: GroupChatCreateManySenderInput | GroupChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PrivateChatCreateWithoutSenderInput = {
    id?: string
    username: string
    message: string
    delivered: boolean
    createdAt?: Date | string
    receiver?: UserCreateNestedOneWithoutPrivateMessagesReceivedInput
  }

  export type PrivateChatUncheckedCreateWithoutSenderInput = {
    id?: string
    username: string
    message: string
    receiverId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type PrivateChatCreateOrConnectWithoutSenderInput = {
    where: PrivateChatWhereUniqueInput
    create: XOR<PrivateChatCreateWithoutSenderInput, PrivateChatUncheckedCreateWithoutSenderInput>
  }

  export type PrivateChatCreateManySenderInputEnvelope = {
    data: PrivateChatCreateManySenderInput | PrivateChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PrivateChatCreateWithoutReceiverInput = {
    id?: string
    username: string
    message: string
    delivered: boolean
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutPrivateMessagesSentInput
  }

  export type PrivateChatUncheckedCreateWithoutReceiverInput = {
    id?: string
    username: string
    message: string
    senderId: string
    delivered: boolean
    createdAt?: Date | string
  }

  export type PrivateChatCreateOrConnectWithoutReceiverInput = {
    where: PrivateChatWhereUniqueInput
    create: XOR<PrivateChatCreateWithoutReceiverInput, PrivateChatUncheckedCreateWithoutReceiverInput>
  }

  export type PrivateChatCreateManyReceiverInputEnvelope = {
    data: PrivateChatCreateManyReceiverInput | PrivateChatCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type GroupTaskUpsertWithWhereUniqueWithoutLeadInput = {
    where: GroupTaskWhereUniqueInput
    update: XOR<GroupTaskUpdateWithoutLeadInput, GroupTaskUncheckedUpdateWithoutLeadInput>
    create: XOR<GroupTaskCreateWithoutLeadInput, GroupTaskUncheckedCreateWithoutLeadInput>
  }

  export type GroupTaskUpdateWithWhereUniqueWithoutLeadInput = {
    where: GroupTaskWhereUniqueInput
    data: XOR<GroupTaskUpdateWithoutLeadInput, GroupTaskUncheckedUpdateWithoutLeadInput>
  }

  export type GroupTaskUpdateManyWithWhereWithoutLeadInput = {
    where: GroupTaskScalarWhereInput
    data: XOR<GroupTaskUpdateManyMutationInput, GroupTaskUncheckedUpdateManyWithoutLeadInput>
  }

  export type GroupTaskScalarWhereInput = {
    AND?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
    OR?: GroupTaskScalarWhereInput[]
    NOT?: GroupTaskScalarWhereInput | GroupTaskScalarWhereInput[]
    id?: StringFilter<"GroupTask"> | string
    name?: StringFilter<"GroupTask"> | string
    leadId?: StringFilter<"GroupTask"> | string
    createdAt?: DateTimeFilter<"GroupTask"> | Date | string
    updatedAt?: DateTimeFilter<"GroupTask"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    groupId?: StringFilter<"Task"> | string
    userTeamId?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type GroupChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: GroupChatWhereUniqueInput
    update: XOR<GroupChatUpdateWithoutSenderInput, GroupChatUncheckedUpdateWithoutSenderInput>
    create: XOR<GroupChatCreateWithoutSenderInput, GroupChatUncheckedCreateWithoutSenderInput>
  }

  export type GroupChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: GroupChatWhereUniqueInput
    data: XOR<GroupChatUpdateWithoutSenderInput, GroupChatUncheckedUpdateWithoutSenderInput>
  }

  export type GroupChatUpdateManyWithWhereWithoutSenderInput = {
    where: GroupChatScalarWhereInput
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type GroupChatScalarWhereInput = {
    AND?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
    OR?: GroupChatScalarWhereInput[]
    NOT?: GroupChatScalarWhereInput | GroupChatScalarWhereInput[]
    id?: StringFilter<"GroupChat"> | string
    username?: StringFilter<"GroupChat"> | string
    message?: StringFilter<"GroupChat"> | string
    groupId?: StringFilter<"GroupChat"> | string
    senderId?: StringNullableFilter<"GroupChat"> | string | null
    delivered?: BoolFilter<"GroupChat"> | boolean
    createdAt?: DateTimeFilter<"GroupChat"> | Date | string
  }

  export type PrivateChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: PrivateChatWhereUniqueInput
    update: XOR<PrivateChatUpdateWithoutSenderInput, PrivateChatUncheckedUpdateWithoutSenderInput>
    create: XOR<PrivateChatCreateWithoutSenderInput, PrivateChatUncheckedCreateWithoutSenderInput>
  }

  export type PrivateChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: PrivateChatWhereUniqueInput
    data: XOR<PrivateChatUpdateWithoutSenderInput, PrivateChatUncheckedUpdateWithoutSenderInput>
  }

  export type PrivateChatUpdateManyWithWhereWithoutSenderInput = {
    where: PrivateChatScalarWhereInput
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type PrivateChatScalarWhereInput = {
    AND?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
    OR?: PrivateChatScalarWhereInput[]
    NOT?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
    id?: StringFilter<"PrivateChat"> | string
    username?: StringFilter<"PrivateChat"> | string
    message?: StringFilter<"PrivateChat"> | string
    senderId?: StringFilter<"PrivateChat"> | string
    receiverId?: StringNullableFilter<"PrivateChat"> | string | null
    delivered?: BoolFilter<"PrivateChat"> | boolean
    createdAt?: DateTimeFilter<"PrivateChat"> | Date | string
  }

  export type PrivateChatUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PrivateChatWhereUniqueInput
    update: XOR<PrivateChatUpdateWithoutReceiverInput, PrivateChatUncheckedUpdateWithoutReceiverInput>
    create: XOR<PrivateChatCreateWithoutReceiverInput, PrivateChatUncheckedCreateWithoutReceiverInput>
  }

  export type PrivateChatUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PrivateChatWhereUniqueInput
    data: XOR<PrivateChatUpdateWithoutReceiverInput, PrivateChatUncheckedUpdateWithoutReceiverInput>
  }

  export type PrivateChatUpdateManyWithWhereWithoutReceiverInput = {
    where: PrivateChatScalarWhereInput
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutLedGroupsInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTeamTasks?: TaskCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutLedGroupsInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTeamTasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutLedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
  }

  export type TaskCreateWithoutGroupInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAssignedTeamTasksInput
  }

  export type TaskUncheckedCreateWithoutGroupInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    userTeamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutGroupInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGroupInput, TaskUncheckedCreateWithoutGroupInput>
  }

  export type TaskCreateManyGroupInputEnvelope = {
    data: TaskCreateManyGroupInput | TaskCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupChatCreateWithoutGroupInput = {
    id?: string
    username: string
    message: string
    delivered: boolean
    createdAt?: Date | string
    sender?: UserCreateNestedOneWithoutGroupMessagesSentInput
  }

  export type GroupChatUncheckedCreateWithoutGroupInput = {
    id?: string
    username: string
    message: string
    senderId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type GroupChatCreateOrConnectWithoutGroupInput = {
    where: GroupChatWhereUniqueInput
    create: XOR<GroupChatCreateWithoutGroupInput, GroupChatUncheckedCreateWithoutGroupInput>
  }

  export type GroupChatCreateManyGroupInputEnvelope = {
    data: GroupChatCreateManyGroupInput | GroupChatCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLedGroupsInput = {
    update: XOR<UserUpdateWithoutLedGroupsInput, UserUncheckedUpdateWithoutLedGroupsInput>
    create: XOR<UserCreateWithoutLedGroupsInput, UserUncheckedCreateWithoutLedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLedGroupsInput, UserUncheckedUpdateWithoutLedGroupsInput>
  }

  export type UserUpdateWithoutLedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTeamTasks?: TaskUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutLedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTeamTasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutGroupInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGroupInput, TaskUncheckedUpdateWithoutGroupInput>
    create: XOR<TaskCreateWithoutGroupInput, TaskUncheckedCreateWithoutGroupInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGroupInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGroupInput, TaskUncheckedUpdateWithoutGroupInput>
  }

  export type TaskUpdateManyWithWhereWithoutGroupInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupChatUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupChatWhereUniqueInput
    update: XOR<GroupChatUpdateWithoutGroupInput, GroupChatUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupChatCreateWithoutGroupInput, GroupChatUncheckedCreateWithoutGroupInput>
  }

  export type GroupChatUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupChatWhereUniqueInput
    data: XOR<GroupChatUpdateWithoutGroupInput, GroupChatUncheckedUpdateWithoutGroupInput>
  }

  export type GroupChatUpdateManyWithWhereWithoutGroupInput = {
    where: GroupChatScalarWhereInput
    data: XOR<GroupChatUpdateManyMutationInput, GroupChatUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupTaskCreateWithoutTasksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: UserCreateNestedOneWithoutLedGroupsInput
    chats?: GroupChatCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: GroupChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskCreateOrConnectWithoutTasksInput = {
    where: GroupTaskWhereUniqueInput
    create: XOR<GroupTaskCreateWithoutTasksInput, GroupTaskUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutAssignedTeamTasksInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskCreateNestedManyWithoutLeadInput
    groupMessagesSent?: GroupChatCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAssignedTeamTasksInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskUncheckedCreateNestedManyWithoutLeadInput
    groupMessagesSent?: GroupChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAssignedTeamTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTeamTasksInput, UserUncheckedCreateWithoutAssignedTeamTasksInput>
  }

  export type GroupTaskUpsertWithoutTasksInput = {
    update: XOR<GroupTaskUpdateWithoutTasksInput, GroupTaskUncheckedUpdateWithoutTasksInput>
    create: XOR<GroupTaskCreateWithoutTasksInput, GroupTaskUncheckedCreateWithoutTasksInput>
    where?: GroupTaskWhereInput
  }

  export type GroupTaskUpdateToOneWithWhereWithoutTasksInput = {
    where?: GroupTaskWhereInput
    data: XOR<GroupTaskUpdateWithoutTasksInput, GroupTaskUncheckedUpdateWithoutTasksInput>
  }

  export type GroupTaskUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    chats?: GroupChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupTaskUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: GroupChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutAssignedTeamTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTeamTasksInput, UserUncheckedUpdateWithoutAssignedTeamTasksInput>
    create: XOR<UserCreateWithoutAssignedTeamTasksInput, UserUncheckedCreateWithoutAssignedTeamTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTeamTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTeamTasksInput, UserUncheckedUpdateWithoutAssignedTeamTasksInput>
  }

  export type UserUpdateWithoutAssignedTeamTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUpdateManyWithoutLeadNestedInput
    groupMessagesSent?: GroupChatUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTeamTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUncheckedUpdateManyWithoutLeadNestedInput
    groupMessagesSent?: GroupChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type GroupTaskCreateWithoutChatsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: UserCreateNestedOneWithoutLedGroupsInput
    tasks?: TaskCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskUncheckedCreateWithoutChatsInput = {
    id?: string
    name: string
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupTaskCreateOrConnectWithoutChatsInput = {
    where: GroupTaskWhereUniqueInput
    create: XOR<GroupTaskCreateWithoutChatsInput, GroupTaskUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutGroupMessagesSentInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskCreateNestedManyWithoutUserInput
    privateMessagesSent?: PrivateChatCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutGroupMessagesSentInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskUncheckedCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    privateMessagesSent?: PrivateChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutGroupMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMessagesSentInput, UserUncheckedCreateWithoutGroupMessagesSentInput>
  }

  export type GroupTaskUpsertWithoutChatsInput = {
    update: XOR<GroupTaskUpdateWithoutChatsInput, GroupTaskUncheckedUpdateWithoutChatsInput>
    create: XOR<GroupTaskCreateWithoutChatsInput, GroupTaskUncheckedCreateWithoutChatsInput>
    where?: GroupTaskWhereInput
  }

  export type GroupTaskUpdateToOneWithWhereWithoutChatsInput = {
    where?: GroupTaskWhereInput
    data: XOR<GroupTaskUpdateWithoutChatsInput, GroupTaskUncheckedUpdateWithoutChatsInput>
  }

  export type GroupTaskUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: UserUpdateOneRequiredWithoutLedGroupsNestedInput
    tasks?: TaskUpdateManyWithoutGroupNestedInput
  }

  export type GroupTaskUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMessagesSentInput = {
    update: XOR<UserUpdateWithoutGroupMessagesSentInput, UserUncheckedUpdateWithoutGroupMessagesSentInput>
    create: XOR<UserCreateWithoutGroupMessagesSentInput, UserUncheckedCreateWithoutGroupMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMessagesSentInput, UserUncheckedUpdateWithoutGroupMessagesSentInput>
  }

  export type UserUpdateWithoutGroupMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUpdateManyWithoutUserNestedInput
    privateMessagesSent?: PrivateChatUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUncheckedUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    privateMessagesSent?: PrivateChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutPrivateMessagesSentInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutPrivateMessagesSentInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskUncheckedCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesReceived?: PrivateChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutPrivateMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
  }

  export type UserCreateWithoutPrivateMessagesReceivedInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPrivateMessagesReceivedInput = {
    id?: string
    username: string
    fullname: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    ledGroups?: GroupTaskUncheckedCreateNestedManyWithoutLeadInput
    assignedTeamTasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    groupMessagesSent?: GroupChatUncheckedCreateNestedManyWithoutSenderInput
    privateMessagesSent?: PrivateChatUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPrivateMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
  }

  export type UserUpsertWithoutPrivateMessagesSentInput = {
    update: XOR<UserUpdateWithoutPrivateMessagesSentInput, UserUncheckedUpdateWithoutPrivateMessagesSentInput>
    create: XOR<UserCreateWithoutPrivateMessagesSentInput, UserUncheckedCreateWithoutPrivateMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivateMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivateMessagesSentInput, UserUncheckedUpdateWithoutPrivateMessagesSentInput>
  }

  export type UserUpdateWithoutPrivateMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivateMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUncheckedUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesReceived?: PrivateChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutPrivateMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutPrivateMessagesReceivedInput, UserUncheckedUpdateWithoutPrivateMessagesReceivedInput>
    create: XOR<UserCreateWithoutPrivateMessagesReceivedInput, UserUncheckedCreateWithoutPrivateMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrivateMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrivateMessagesReceivedInput, UserUncheckedUpdateWithoutPrivateMessagesReceivedInput>
  }

  export type UserUpdateWithoutPrivateMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPrivateMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: GroupTaskUncheckedUpdateManyWithoutLeadNestedInput
    assignedTeamTasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    groupMessagesSent?: GroupChatUncheckedUpdateManyWithoutSenderNestedInput
    privateMessagesSent?: PrivateChatUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GroupTaskCreateManyLeadInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    groupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupChatCreateManySenderInput = {
    id?: string
    username: string
    message: string
    groupId: string
    delivered: boolean
    createdAt?: Date | string
  }

  export type PrivateChatCreateManySenderInput = {
    id?: string
    username: string
    message: string
    receiverId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type PrivateChatCreateManyReceiverInput = {
    id?: string
    username: string
    message: string
    senderId: string
    delivered: boolean
    createdAt?: Date | string
  }

  export type GroupTaskUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutGroupNestedInput
    chats?: GroupChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupTaskUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGroupNestedInput
    chats?: GroupChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupTaskUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupTaskUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupTaskUpdateOneRequiredWithoutChatsNestedInput
  }

  export type GroupChatUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneWithoutPrivateMessagesReceivedNestedInput
  }

  export type PrivateChatUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutPrivateMessagesSentNestedInput
  }

  export type PrivateChatUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyGroupInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TaskStatus
    userTeamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupChatCreateManyGroupInput = {
    id?: string
    username: string
    message: string
    senderId?: string | null
    delivered: boolean
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignedTeamTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userTeamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    userTeamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutGroupMessagesSentNestedInput
  }

  export type GroupChatUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    delivered?: BoolFieldUpdateOperationsInput | boolean
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