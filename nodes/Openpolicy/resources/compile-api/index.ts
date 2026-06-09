import type { INodeProperties } from 'n8n-workflow';

export const compileApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Compile API"
					]
				}
			},
			"options": [
				{
					"name": "Post Compile",
					"value": "Post Compile",
					"action": "Compile",
					"description": "This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):\n\n```yaml\npackage example\nallow {\n  input.subject.clearance_level >= data.reports[_].clearance_level\n}\n```\nCompile API **request body** so that it contain the following fields:\n\n| Field | Type | Required | Description |\n| --- | --- | --- | --- |\n| `query` | `string` | Yes | The query to partially evaluate and compile. |\n| `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |\n| `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `[\"input\"]`]). |\n\nFor example:\n\n```json\n{\n  \"query\": \"data.example.allow == true\",\n  \"input\": {\n    \"subject\": {\n      \"clearance_level\": 4\n    }\n  },\n  \"unknowns\": [\n    \"data.reports\"\n    ]\n}\n```\n### Partial evaluation\nIn some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/compile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/compile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compile API"
					],
					"operation": [
						"Post Compile"
					]
				}
			}
		},
		{
			"displayName": "Pretty",
			"name": "pretty",
			"description": "If true, response will be in a human-readable format.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "pretty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compile API"
					],
					"operation": [
						"Post Compile"
					]
				}
			}
		},
		{
			"displayName": "Explain",
			"name": "explain",
			"description": "If set to *full*, response will include query explanations in addition to the result.",
			"default": "full",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "explain",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compile API"
					],
					"operation": [
						"Post Compile"
					]
				}
			}
		},
		{
			"displayName": "Metrics",
			"name": "metrics",
			"description": "If true, compiler performance metrics will be returned in the response.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "metrics",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compile API"
					],
					"operation": [
						"Post Compile"
					]
				}
			}
		},
		{
			"displayName": "Instrument",
			"name": "instrument",
			"description": "If true, response will return additional performance metrics in addition to the result and the standard metrics.\n\n**Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "instrument",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compile API"
					],
					"operation": [
						"Post Compile"
					]
				}
			}
		},
];
