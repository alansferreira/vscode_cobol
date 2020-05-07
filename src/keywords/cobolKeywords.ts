import * as Collections from 'typescript-collections';

export const cobolKeywords: string[] = [
	"accept",
	"access",
	"add",
	"address",
	"advancing",
	"after",
	"all",
	"alphabet",
	"alphabetic",
	"alphabetic-lower",
	"alphabetic-upper",
	"alphanumeric",
	"alphanumeric-edited",
	"also",
	"alter",
	"alternate",
	"and",
	"any",
	"apply",
	"are",
	"area",
	"areas",
	"ascending",
	"assign",
	"at",
	"author",
	"basis",
	"before",
	"beginning",
	"binary",
	"blank",
	"block",
	"bottom",
	"by",
	"call",
	"chain",
	"cancel",
	"cbl",
	"cd",
	"cells",
	"cf",
	"ch",
	"character",
	"characters",
	"class",
	"class-id",
	"clock-units",
	"close",
	"code",
	"code-set",
	"collating",
	"column",
	"com-reg",
	"comma",
	"common",
	"communication",
	"comp",
	"comp-1",
	"comp-2",
	"comp-3",
	"comp-4",
	"comp-5",
	"computational",
	"computational-1",
	"computational-2",
	"computational-3",
	"computational-4",
	"computational-5",
	"compute",
	"configuration",
	"contains",
	"content",
	"continue",
	"control",
	"controls",
	"converting",
	"constraints",
	"copy",
	"corr",
	"corresponding",
	"count",
	"currency",
	"data",
	"date-compiled",
	"date-written",
	"day",
	"day-of-week",
	"dbcs",
	"de",
	"debug-contents",
	"debug-item",
	"debug-line",
	"debug-name",
	"debug-sub-1",
	"debug-sub-2",
	"debug-sub-3",
	"debugging",
	"decimal-point",
	"declaratives",
	"declare",
	"delete",
	"delimited",
	"delimiter",
	"depending",
	"descending",
	"destination",
	"detail",
	"display",
	"display-1",
	"divide",
	"division",
	"down",
	"duplicates",
	"dynamic",
	"egcs",
	"egi",
	"eject",
	"else",
	"emi",
	"enable",
	"end",
	"exec",
	"end-add",
	"end-call",
	"end-chain",
	"end-compute",
	"end-delete",
	"end-divide",
	"end-display",
	"end-evaluate",
	"end-exec",
	"end-if",
	"end-invoke",
	"end-multiply",
	"end-of-page",
	"end-perform",
	"end-read",
	"end-receive",
	"end-return",
	"end-rewrite",
	"end-search",
	"end-start",
	"end-string",
	"end-subtract",
	"end-unstring",
	"end-write",
	"ending",
	"enter",
	"entry",
	"environment",
	"eop",
	"equal",
	"error",
	"esi",
	"evaluate",
	"every",
	"exception",
	"exit",
	"extend",
	"external",
	"false",
	"factory",
	"fd",
	"file",
	"file-control",
	"filler",
	"final",
	"first",
	"footing",
	"for",
	"from",
	"function",
	"generate",
	"giving",
	"global",
	"go",
	"goback",
	"greater",
	"group",
	"heading",
	"high-value",
	"high-values",
	"i-o",
	"i-o-control",
	"id",
	"identification",
	"if",
	"in",
	"index",
	"indexed",
	"indicate",
	"inherits",
	"initial",
	"initialize",
	"initiate",
	"input",
	"input-output",
	"insert",
	"inspect",
	"installation",
	"into",
	"invalid",
	"invoke",
	"is",
	"just",
	"justified",
	"kanjikey",
	"kept",
	"label",
	"last",
	"leading",
	"left",
	"length",
	"less",
	"limit",
	"limits",
	"linage",
	"linage-counter",
	"line",
	"line-counter",
	"lines",
	"linkage",
	"local-storage",
	"lock",
	"low-value",
	"low-values",
	"memory",
	"merge",
	"message",
	"metaclass",
	"method",
	"method-id",
	"mode",
	"modules",
	"more-labels",
	"move",
	"multiple",
	"multiply",
	"native",
	"native_binary",
	"negative",
	"next",
	"no",
	"not",
	"null",
	"nulls",
	"number",
	"numeric",
	"numeric-edited",
	"object",
	"object-computer",
	"occurs",
	"of",
	"off",
	"omitted",
	"on",
	"open",
	"optional",
	"or",
	"order",
	"organization",
	"other",
	"output",
	"overflow",
	"override",
	"packed-decimal",
	"padding",
	"page",
	"page-counter",
	"password",
	"perform",
	"pf",
	"ph",
	"pic",
	"picture",
	"plus",
	"pointer",
	"position",
	"positive",
	"printing",
	"procedure",
	"procedure-pointer",
	"procedures",
	"proceed",
	"processing",
	"program",
	"program-id",
	"purge",
	"queue",
	"quote",
	"quotes",
	"random",
	"rd",
	"read",
	"ready",
	"receive",
	"record",
	"recording",
	"records",
	"recursive",
	"redefines",
	"reel",
	"redefines",
	"reference",
	"references",
	"relative",
	"release",
	"reload",
	"remainder",
	"remarks",
	"removal",
	"renames",
	"replace",
	"replacing",
	"report",
	"reporting",
	"reports",
	"repository",
	"rerun",
	"reserve",
	"reset",
	"return",
	"return-code",
	"returning",
	"reversed",
	"rewind",
	"rewrite",
	"rf",
	"rh",
	"right",
	"rounded",
	"run",
	"same",
	"sd",
	"search",
	"section",
	"security",
	"segment",
	"segment-limit",
	"select",
	"self",
	"send",
	"sentence",
	"separate",
	"sequence",
	"sequential",
	"service",
	"set",
	"shift-in",
	"shift-out",
	"sign",
	"size",
	"skip1",
	"skip2",
	"skip3",
	"sort",
	"sort-control",
	"sort-core-size",
	"sort-file-size",
	"sort-merge",
	"sort-message",
	"sort-mode-size",
	"sort-return",
	"source",
	"source-computer",
	"space",
	"spaces",
	"special-names",
	"standard",
	"standard-1",
	"standard-2",
	"start",
	"static",
	"status",
	"stop",
	"string",
	"sub-queue-1",
	"sub-queue-2",
	"sub-queue-3",
	"subtract",
	"sum",
	"super",
	"suppress",
	"symbolic",
	"sync",
	"synchronized",
	"table",
	"tally",
	"tallying",
	"tape",
	"terminal",
	"terminate",
	"test",
	"text",
	"than",
	"then",
	"through",
	"thru",
	"time",
	"times",
	"title",
	"to",
	"top",
	"trace",
	"trailing",
	"thread-local",
	"true",
	"type",
	"unit",
	"unstring",
	"until",
	"up",
	"upon",
	"usage",
	"use",
	"using",
	"value",
	"values",
	"varying",
	"when",
	"when-compiled",
	"with",
	"words",
	"working-storage",
	"write",
	"write-only",
	"zero",
	"zeroes",
	"zeros"
];

export const cobolStorageKeywords: string[] = [
	"external",
	"comp",
	"comp-1",
	"comp-2",
	"comp-3",
	"comp-4",
	"comp-5",
	"computational",
	"computational-1",
	"computational-2",
	"computational-3",
	"computational-4",
	"computational-5",
	"low-value",
	"low-values",
	"pic",
	"picture",
	"redefines",
	"sign",
	"value",
	"values",
	"when",
	"zero",
	"zeroes",
	"zeros",
	"occurs",
	"property"
];

 export const cobolProcedureKeywords: string[] = [
	"accept",
	"add",
	"address",
	"advancing",
	"after",
	"all",
	"also",
	"alter",
	"alternate",
	"and",
	"apply",
	"at",
	"call",
	"chain",
	"cancel",
	"close",
	"compute",
	"controls",
	"count",
	"declare",
	"delete",
	"delimited",
	"delimiter",
	"depending",
	"detail",
	"display",
	"divide",
	"eject",
	"else",
	"end",
	"exec",
	"end-add",
	"end-call",
	"end-chain",
	"end-compute",
	"end-delete",
	"end-display",
	"end-divide",
	"end-evaluate",
	"end-exec",
	"end-if",
	"end-invoke",
	"end-multiply",
	"end-of-page",
	"end-perform",
	"end-read",
	"end-receive",
	"end-return",
	"end-rewrite",
	"end-search",
	"end-start",
	"end-string",
	"end-subtract",
	"end-unstring",
	"end-write",
	"entry",
	"equal",
	"error",
	"evaluate",
	"every",
	"exit",
	"external",
	"false",
	"function",
	"giving",
	"go",
	"goback",
	"greater",
	"high-value",
	"high-values",
	"if",
	"initialize",
	"initiate",
	"insert",
	"inspect",
	"into",
	"invoke",
	"method",
	"method-id",
	"move",
	"multiple",
	"multiply",
	"object",
	"object-computer",
	"perform",
	"release",
	"replace",
	"replacing",
	"return-code",
	"returning",
	"rewind",
	"rewrite",
	"search",
	"self",
	"sentence",
	"set",
	"space",
	"spaces",
	"section",
	"stop",
	"string",
	"subtract",
	"sum",
	"super",
	"tally",
	"tallying",
	"than",
	"then",
	"through",
	"thru",
	"time",
	"times",
	"unit",
	"unstring",
	"until",
	"varying",
	"write"
];

/* inline decl */
let tmpDict = new Collections.Dictionary<string, string>();
cobolKeywords.forEach(function (value) {
		tmpDict.setValue(value,value);
	});


let tmpDict2 = new Collections.Dictionary<string, string>();
cobolProcedureKeywords.forEach(function (value) {
		tmpDict2.setValue(value,value);
	});

let tmpDict3 = new Collections.Dictionary<string, string>();
cobolStorageKeywords.forEach(function (value) {
		tmpDict3.setValue(value,value);
	});



export const cobolKeywordDictionary: Collections.Dictionary<string, string> = tmpDict;
export const cobolProcedureKeywordDictionary: Collections.Dictionary<string, string> = tmpDict2;
export const cobolStorageKeywordDictionary: Collections.Dictionary<string, string> = tmpDict3;
