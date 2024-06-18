currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project1/src/a.ts]
export const a = 10;const aLocal = 10;

//// [/src/project1/src/b.ts]
export const b = 10;const bLocal = 10;

//// [/src/project1/src/c.ts]
import { a } from "./a";export const c = a;

//// [/src/project1/src/d.ts]
import { b } from "./b";export const d = b;

//// [/src/project1/src/tsconfig.json]
{
  "compilerOptions": {
    "incremental": true,
    "declaration": true,
    "emitDeclarationOnly": true
  }
}

//// [/src/project2/src/e.ts]
export const e = 10;

//// [/src/project2/src/f.ts]
import { a } from "../../project1/src/a"; export const f = a;

//// [/src/project2/src/g.ts]
import { b } from "../../project1/src/b"; export const g = b;

//// [/src/project2/src/tsconfig.json]
{
  "compilerOptions": {
    "incremental": true,
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "references": [
    {
      "path": "../../project1/src"
    }
  ]
}



Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output file 'src/project1/src/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because output file 'src/project2/src/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project1/src/a.ts (computed .d.ts during emit)
/src/project1/src/b.ts (computed .d.ts during emit)
/src/project1/src/c.ts (computed .d.ts during emit)
/src/project1/src/d.ts (computed .d.ts during emit)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project2/src/e.ts (computed .d.ts during emit)
/src/project1/src/a.d.ts (used version)
/src/project2/src/f.ts (computed .d.ts during emit)
/src/project1/src/b.d.ts (used version)
/src/project2/src/g.ts (computed .d.ts during emit)


//// [/src/project1/src/a.d.ts]
export declare const a = 10;


//// [/src/project1/src/b.d.ts]
export declare const b = 10;


//// [/src/project1/src/c.d.ts]
export declare const c = 10;


//// [/src/project1/src/d.d.ts]
export declare const d = 10;


//// [/src/project1/src/tsconfig.tsbuildinfo]
{"fileNames":["../../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileIdsList":[[2],[3]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-18487752940-export const a = 10;const aLocal = 10;","signature":"-3497920574-export declare const a = 10;\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-3829150557-export declare const b = 10;\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4160380540-export declare const c = 10;\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-4491610523-export declare const d = 10;\n"}],"root":[[2,5]],"options":{"declaration":true,"emitDeclarationOnly":true},"referencedMap":[[4,1],[5,2]],"version":"FakeTSVersion"}

//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts",
    "./c.ts",
    "./d.ts"
  ],
  "fileIdsList": [
    [
      "./a.ts"
    ],
    [
      "./b.ts"
    ]
  ],
  "fileInfos": {
    "../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "signature": "-3497920574-export declare const a = 10;\n"
      },
      "version": "-18487752940-export const a = 10;const aLocal = 10;",
      "signature": "-3497920574-export declare const a = 10;\n"
    },
    "./b.ts": {
      "original": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-6189287562-export const b = 10;const bLocal = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    },
    "./c.ts": {
      "original": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4160380540-export declare const c = 10;\n"
      },
      "version": "3248317647-import { a } from \"./a\";export const c = a;",
      "signature": "-4160380540-export declare const c = 10;\n"
    },
    "./d.ts": {
      "original": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-4491610523-export declare const d = 10;\n"
      },
      "version": "-19615769517-import { b } from \"./b\";export const d = b;",
      "signature": "-4491610523-export declare const d = 10;\n"
    }
  },
  "root": [
    [
      [
        2,
        5
      ],
      [
        "./a.ts",
        "./b.ts",
        "./c.ts",
        "./d.ts"
      ]
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "referencedMap": {
    "./c.ts": [
      "./a.ts"
    ],
    "./d.ts": [
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1224
}

//// [/src/project2/src/e.d.ts]
export declare const e = 10;


//// [/src/project2/src/f.d.ts]
export declare const f = 10;


//// [/src/project2/src/g.d.ts]
export declare const g = 10;


//// [/src/project2/src/tsconfig.tsbuildinfo]
{"fileNames":["../../../lib/lib.d.ts","./e.ts","../../project1/src/a.d.ts","./f.ts","../../project1/src/b.d.ts","./g.ts"],"fileIdsList":[[3],[5]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-13789510868-export const e = 10;","signature":"-4822840506-export declare const e = 10;\n"},"-3497920574-export declare const a = 10;\n",{"version":"-2015135303-import { a } from \"../../project1/src/a\"; export const f = a;","signature":"-5154070489-export declare const f = 10;\n"},"-3829150557-export declare const b = 10;\n",{"version":"-2047954019-import { b } from \"../../project1/src/b\"; export const g = b;","signature":"-5485300472-export declare const g = 10;\n"}],"root":[2,4,6],"options":{"declaration":true,"emitDeclarationOnly":true},"referencedMap":[[4,1],[6,2]],"semanticDiagnosticsPerFile":[1,2,3,4,5,6],"version":"FakeTSVersion"}

//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../lib/lib.d.ts",
    "./e.ts",
    "../../project1/src/a.d.ts",
    "./f.ts",
    "../../project1/src/b.d.ts",
    "./g.ts"
  ],
  "fileIdsList": [
    [
      "../../project1/src/a.d.ts"
    ],
    [
      "../../project1/src/b.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./e.ts": {
      "original": {
        "version": "-13789510868-export const e = 10;",
        "signature": "-4822840506-export declare const e = 10;\n"
      },
      "version": "-13789510868-export const e = 10;",
      "signature": "-4822840506-export declare const e = 10;\n"
    },
    "../../project1/src/a.d.ts": {
      "version": "-3497920574-export declare const a = 10;\n",
      "signature": "-3497920574-export declare const a = 10;\n"
    },
    "./f.ts": {
      "original": {
        "version": "-2015135303-import { a } from \"../../project1/src/a\"; export const f = a;",
        "signature": "-5154070489-export declare const f = 10;\n"
      },
      "version": "-2015135303-import { a } from \"../../project1/src/a\"; export const f = a;",
      "signature": "-5154070489-export declare const f = 10;\n"
    },
    "../../project1/src/b.d.ts": {
      "version": "-3829150557-export declare const b = 10;\n",
      "signature": "-3829150557-export declare const b = 10;\n"
    },
    "./g.ts": {
      "original": {
        "version": "-2047954019-import { b } from \"../../project1/src/b\"; export const g = b;",
        "signature": "-5485300472-export declare const g = 10;\n"
      },
      "version": "-2047954019-import { b } from \"../../project1/src/b\"; export const g = b;",
      "signature": "-5485300472-export declare const g = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./e.ts"
    ],
    [
      4,
      "./f.ts"
    ],
    [
      6,
      "./g.ts"
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "referencedMap": {
    "./f.ts": [
      "../../project1/src/a.d.ts"
    ],
    "./g.ts": [
      "../../project1/src/b.d.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../../../lib/lib.d.ts",
      "not cached"
    ],
    [
      "./e.ts",
      "not cached"
    ],
    [
      "../../project1/src/a.d.ts",
      "not cached"
    ],
    [
      "./f.ts",
      "not cached"
    ],
    [
      "../../project1/src/b.d.ts",
      "not cached"
    ],
    [
      "./g.ts",
      "not cached"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1300
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/d.ts' is older than output 'src/project1/src/tsconfig.tsbuildinfo'

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because buildinfo file 'src/project2/src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: change
Input::
//// [/src/project1/src/a.ts]
export const a = 10;const aLocal = 10;const aa = 10;



Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output 'src/project1/src/tsconfig.tsbuildinfo' is older than input 'src/project1/src/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because buildinfo file 'src/project2/src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/src/project1/src/a.ts

Shape signatures in builder refreshed for::
/src/project1/src/a.ts (computed .d.ts)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.d.ts] file written with same contents
//// [/src/project1/src/tsconfig.tsbuildinfo]
{"fileNames":["../../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileIdsList":[[2],[3]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-16597586570-export const a = 10;const aLocal = 10;const aa = 10;","signature":"-3497920574-export declare const a = 10;\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-3829150557-export declare const b = 10;\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4160380540-export declare const c = 10;\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-4491610523-export declare const d = 10;\n"}],"root":[[2,5]],"options":{"declaration":true,"emitDeclarationOnly":true},"referencedMap":[[4,1],[5,2]],"version":"FakeTSVersion"}

//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts",
    "./c.ts",
    "./d.ts"
  ],
  "fileIdsList": [
    [
      "./a.ts"
    ],
    [
      "./b.ts"
    ]
  ],
  "fileInfos": {
    "../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-16597586570-export const a = 10;const aLocal = 10;const aa = 10;",
        "signature": "-3497920574-export declare const a = 10;\n"
      },
      "version": "-16597586570-export const a = 10;const aLocal = 10;const aa = 10;",
      "signature": "-3497920574-export declare const a = 10;\n"
    },
    "./b.ts": {
      "original": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-6189287562-export const b = 10;const bLocal = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    },
    "./c.ts": {
      "original": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4160380540-export declare const c = 10;\n"
      },
      "version": "3248317647-import { a } from \"./a\";export const c = a;",
      "signature": "-4160380540-export declare const c = 10;\n"
    },
    "./d.ts": {
      "original": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-4491610523-export declare const d = 10;\n"
      },
      "version": "-19615769517-import { b } from \"./b\";export const d = b;",
      "signature": "-4491610523-export declare const d = 10;\n"
    }
  },
  "root": [
    [
      [
        2,
        5
      ],
      [
        "./a.ts",
        "./b.ts",
        "./c.ts",
        "./d.ts"
      ]
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "referencedMap": {
    "./c.ts": [
      "./a.ts"
    ],
    "./d.ts": [
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1238
}



Change:: emit js files
Input::


Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because buildinfo file 'src/project1/src/tsconfig.tsbuildinfo' indicates there is change in compilerOptions

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because buildinfo file 'src/project2/src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 10;
var aa = 10;


//// [/src/project1/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;


//// [/src/project1/src/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;


//// [/src/project1/src/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;


//// [/src/project1/src/tsconfig.tsbuildinfo]
{"fileNames":["../../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileIdsList":[[2],[3]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-16597586570-export const a = 10;const aLocal = 10;const aa = 10;","signature":"-3497920574-export declare const a = 10;\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-3829150557-export declare const b = 10;\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4160380540-export declare const c = 10;\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-4491610523-export declare const d = 10;\n"}],"root":[[2,5]],"options":{"declaration":true,"emitDeclarationOnly":false},"referencedMap":[[4,1],[5,2]],"version":"FakeTSVersion"}

//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts",
    "./c.ts",
    "./d.ts"
  ],
  "fileIdsList": [
    [
      "./a.ts"
    ],
    [
      "./b.ts"
    ]
  ],
  "fileInfos": {
    "../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-16597586570-export const a = 10;const aLocal = 10;const aa = 10;",
        "signature": "-3497920574-export declare const a = 10;\n"
      },
      "version": "-16597586570-export const a = 10;const aLocal = 10;const aa = 10;",
      "signature": "-3497920574-export declare const a = 10;\n"
    },
    "./b.ts": {
      "original": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-6189287562-export const b = 10;const bLocal = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    },
    "./c.ts": {
      "original": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4160380540-export declare const c = 10;\n"
      },
      "version": "3248317647-import { a } from \"./a\";export const c = a;",
      "signature": "-4160380540-export declare const c = 10;\n"
    },
    "./d.ts": {
      "original": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-4491610523-export declare const d = 10;\n"
      },
      "version": "-19615769517-import { b } from \"./b\";export const d = b;",
      "signature": "-4491610523-export declare const d = 10;\n"
    }
  },
  "root": [
    [
      [
        2,
        5
      ],
      [
        "./a.ts",
        "./b.ts",
        "./c.ts",
        "./d.ts"
      ]
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": false
  },
  "referencedMap": {
    "./c.ts": [
      "./a.ts"
    ],
    "./d.ts": [
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1239
}

//// [/src/project2/src/e.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e = void 0;
exports.e = 10;


//// [/src/project2/src/f.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = void 0;
var a_1 = require("../../project1/src/a");
exports.f = a_1.a;


//// [/src/project2/src/g.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.g = void 0;
var b_1 = require("../../project1/src/b");
exports.g = b_1.b;


//// [/src/project2/src/tsconfig.tsbuildinfo]
{"fileNames":["../../../lib/lib.d.ts","./e.ts","../../project1/src/a.d.ts","./f.ts","../../project1/src/b.d.ts","./g.ts"],"fileIdsList":[[3],[5]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-13789510868-export const e = 10;","signature":"-4822840506-export declare const e = 10;\n"},"-3497920574-export declare const a = 10;\n",{"version":"-2015135303-import { a } from \"../../project1/src/a\"; export const f = a;","signature":"-5154070489-export declare const f = 10;\n"},"-3829150557-export declare const b = 10;\n",{"version":"-2047954019-import { b } from \"../../project1/src/b\"; export const g = b;","signature":"-5485300472-export declare const g = 10;\n"}],"root":[2,4,6],"options":{"declaration":true,"emitDeclarationOnly":false},"referencedMap":[[4,1],[6,2]],"semanticDiagnosticsPerFile":[1,2,3,4,5,6],"version":"FakeTSVersion"}

//// [/src/project2/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../lib/lib.d.ts",
    "./e.ts",
    "../../project1/src/a.d.ts",
    "./f.ts",
    "../../project1/src/b.d.ts",
    "./g.ts"
  ],
  "fileIdsList": [
    [
      "../../project1/src/a.d.ts"
    ],
    [
      "../../project1/src/b.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./e.ts": {
      "original": {
        "version": "-13789510868-export const e = 10;",
        "signature": "-4822840506-export declare const e = 10;\n"
      },
      "version": "-13789510868-export const e = 10;",
      "signature": "-4822840506-export declare const e = 10;\n"
    },
    "../../project1/src/a.d.ts": {
      "version": "-3497920574-export declare const a = 10;\n",
      "signature": "-3497920574-export declare const a = 10;\n"
    },
    "./f.ts": {
      "original": {
        "version": "-2015135303-import { a } from \"../../project1/src/a\"; export const f = a;",
        "signature": "-5154070489-export declare const f = 10;\n"
      },
      "version": "-2015135303-import { a } from \"../../project1/src/a\"; export const f = a;",
      "signature": "-5154070489-export declare const f = 10;\n"
    },
    "../../project1/src/b.d.ts": {
      "version": "-3829150557-export declare const b = 10;\n",
      "signature": "-3829150557-export declare const b = 10;\n"
    },
    "./g.ts": {
      "original": {
        "version": "-2047954019-import { b } from \"../../project1/src/b\"; export const g = b;",
        "signature": "-5485300472-export declare const g = 10;\n"
      },
      "version": "-2047954019-import { b } from \"../../project1/src/b\"; export const g = b;",
      "signature": "-5485300472-export declare const g = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./e.ts"
    ],
    [
      4,
      "./f.ts"
    ],
    [
      6,
      "./g.ts"
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": false
  },
  "referencedMap": {
    "./f.ts": [
      "../../project1/src/a.d.ts"
    ],
    "./g.ts": [
      "../../project1/src/b.d.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "../../../lib/lib.d.ts",
      "not cached"
    ],
    [
      "./e.ts",
      "not cached"
    ],
    [
      "../../project1/src/a.d.ts",
      "not cached"
    ],
    [
      "./f.ts",
      "not cached"
    ],
    [
      "../../project1/src/b.d.ts",
      "not cached"
    ],
    [
      "./g.ts",
      "not cached"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1301
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/project2/src --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/a.ts' is older than output 'src/project1/src/tsconfig.tsbuildinfo'

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because buildinfo file 'src/project2/src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": true,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: no change run with js emit
Input::


Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is up to date because newest input 'src/project1/src/a.ts' is older than output 'src/project1/src/tsconfig.tsbuildinfo'

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because buildinfo file 'src/project2/src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: js emit with change
Input::
//// [/src/project1/src/b.ts]
export const b = 10;const bLocal = 10;const blocal = 10;



Output::
/lib/tsc --b /src/project2/src --verbose --emitDeclarationOnly false
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project1/src/tsconfig.json
    * src/project2/src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project1/src/tsconfig.json' is out of date because output 'src/project1/src/tsconfig.tsbuildinfo' is older than input 'src/project1/src/b.ts'

[[90mHH:MM:SS AM[0m] Building project '/src/project1/src/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/project2/src/tsconfig.json' is out of date because buildinfo file 'src/project2/src/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project2/src/tsconfig.json'...

[96msrc/project2/src/tsconfig.json[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m TS6306: [0mReferenced project '/src/project1/src' must have setting "composite": true.

[7m 8[0m     {
[7m  [0m [91m    ~[0m
[7m 9[0m       "path": "../../project1/src"
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m10[0m     }
[7m  [0m [91m~~~~~[0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
Program root files: [
  "/src/project1/src/a.ts",
  "/src/project1/src/b.ts",
  "/src/project1/src/c.ts",
  "/src/project1/src/d.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project1/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project1/src/a.ts
/src/project1/src/b.ts
/src/project1/src/c.ts
/src/project1/src/d.ts

Semantic diagnostics in builder refreshed for::
/src/project1/src/b.ts

Shape signatures in builder refreshed for::
/src/project1/src/b.ts (computed .d.ts)

Program root files: [
  "/src/project2/src/e.ts",
  "/src/project2/src/f.ts",
  "/src/project2/src/g.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "emitDeclarationOnly": false,
  "tscBuild": true,
  "configFilePath": "/src/project2/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project2/src/e.ts
/src/project1/src/a.d.ts
/src/project2/src/f.ts
/src/project1/src/b.d.ts
/src/project2/src/g.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/src/project1/src/b.d.ts] file written with same contents
//// [/src/project1/src/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;
var blocal = 10;


//// [/src/project1/src/tsconfig.tsbuildinfo]
{"fileNames":["../../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileIdsList":[[2],[3]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-16597586570-export const a = 10;const aLocal = 10;const aa = 10;","signature":"-3497920574-export declare const a = 10;\n"},{"version":"2355059555-export const b = 10;const bLocal = 10;const blocal = 10;","signature":"-3829150557-export declare const b = 10;\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4160380540-export declare const c = 10;\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-4491610523-export declare const d = 10;\n"}],"root":[[2,5]],"options":{"declaration":true,"emitDeclarationOnly":false},"referencedMap":[[4,1],[5,2]],"version":"FakeTSVersion"}

//// [/src/project1/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../lib/lib.d.ts",
    "./a.ts",
    "./b.ts",
    "./c.ts",
    "./d.ts"
  ],
  "fileIdsList": [
    [
      "./a.ts"
    ],
    [
      "./b.ts"
    ]
  ],
  "fileInfos": {
    "../../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-16597586570-export const a = 10;const aLocal = 10;const aa = 10;",
        "signature": "-3497920574-export declare const a = 10;\n"
      },
      "version": "-16597586570-export const a = 10;const aLocal = 10;const aa = 10;",
      "signature": "-3497920574-export declare const a = 10;\n"
    },
    "./b.ts": {
      "original": {
        "version": "2355059555-export const b = 10;const bLocal = 10;const blocal = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "2355059555-export const b = 10;const bLocal = 10;const blocal = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    },
    "./c.ts": {
      "original": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4160380540-export declare const c = 10;\n"
      },
      "version": "3248317647-import { a } from \"./a\";export const c = a;",
      "signature": "-4160380540-export declare const c = 10;\n"
    },
    "./d.ts": {
      "original": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-4491610523-export declare const d = 10;\n"
      },
      "version": "-19615769517-import { b } from \"./b\";export const d = b;",
      "signature": "-4491610523-export declare const d = 10;\n"
    }
  },
  "root": [
    [
      [
        2,
        5
      ],
      [
        "./a.ts",
        "./b.ts",
        "./c.ts",
        "./d.ts"
      ]
    ]
  ],
  "options": {
    "declaration": true,
    "emitDeclarationOnly": false
  },
  "referencedMap": {
    "./c.ts": [
      "./a.ts"
    ],
    "./d.ts": [
      "./b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1256
}

