const DXF_TEMPLATE = {

header: '' +
`0
SECTION
2
TABLES
0
TABLE
2
LAYER
70
0
0
LAYER
2
LAYER_NAME
70
0
62
1
6
CONTINUOUS
0
ENDTAB
0
ENDSEC
 0
SECTION
 2
ENTITIES
`,

line: '' +
` 0
LINE
 8
TOOL_0
 5
{{count}}
 10
{{x}}
 20
{{y}}
 30
0
 11
{{x2}}
 21
{{y2}}
 31
0
 0`,

footer: ''+
` 0
ENDSEC
 0
EOF`

};

module.exports = DXF_TEMPLATE;