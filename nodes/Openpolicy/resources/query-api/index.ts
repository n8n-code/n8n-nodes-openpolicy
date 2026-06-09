import type { INodeProperties } from 'n8n-workflow';

export const queryApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Query API"
					]
				}
			},
			"options": [
				{
					"name": "Post Simple Query",
					"value": "Post Simple Query",
					"action": "Execute a simple query",
					"description": "This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.\nFor example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:\n\n  ```yaml\n  package system\n  main = msg {\n    msg := sprintf(\"hello, %v\", input.user)\n  }\n  ```\n\nThe server will return a *not found* (404) response if */data/system/main* is undefined.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/"
						}
					}
				},
				{
					"name": "Get Query",
					"value": "Get Query",
					"action": "Execute an ad-hoc query (simple)",
					"description": "This API endpoint returns bindings for the variables in the query.\n\nFor more complex JSON queries, use `POST /v1/query` instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/query"
						}
					}
				},
				{
					"name": "Post Query",
					"value": "Post Query",
					"action": "Execute an ad-hoc query (complex)",
					"description": "This API endpoint returns bindings for the variables in the query.\n\nFor simpler JSON queries, you may use `GET /v1/query` instead.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/query"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Query API"
					],
					"operation": [
						"Post Simple Query"
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
						"Query API"
					],
					"operation": [
						"Post Simple Query"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Query API"
					],
					"operation": [
						"Get Query"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"required": true,
			"description": "The [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) ad-hoc query to execute.",
			"default": "{\"query\": \"data.servers[i].ports[_] = \\\"p2\\\"; data.servers[i].name = name\"}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Query API"
					],
					"operation": [
						"Get Query"
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
						"Query API"
					],
					"operation": [
						"Get Query"
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
						"Query API"
					],
					"operation": [
						"Get Query"
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
						"Query API"
					],
					"operation": [
						"Get Query"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/query",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Query API"
					],
					"operation": [
						"Post Query"
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
						"Query API"
					],
					"operation": [
						"Post Query"
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
						"Query API"
					],
					"operation": [
						"Post Query"
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
						"Query API"
					],
					"operation": [
						"Post Query"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/query<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Query API"
					],
					"operation": [
						"Post Query"
					]
				}
			}
		},
];
