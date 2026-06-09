import type { INodeProperties } from 'n8n-workflow';

export const dataApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					]
				}
			},
			"options": [
				{
					"name": "Get Document With Web Hook",
					"value": "Get Document With Web Hook",
					"action": "Get a document (with webhook)",
					"description": "The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:\n\n  ```yaml\n  package opa.examples\n  import input.example.flag\n  allow_request { flag == true }\n  ```\n\nThe server will return a *not found* (404) response if the requested document is missing or undefined.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0/data/{{$parameter[\"path\"]}}"
						}
					}
				},
				{
					"name": "Delete Document",
					"value": "Delete Document",
					"action": "Delete a document",
					"description": "This API endpoint deletes an existing document from the server",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/data/{{$parameter[\"path\"]}}"
						}
					}
				},
				{
					"name": "Get Document",
					"value": "Get Document",
					"action": "Get a document",
					"description": "This API endpoint returns the document specified by `path`.\n\nThe server will return a *bad request* (400) response if either:\n- The query requires an input document and you do not provide it\n- You provide the input document but the query has already defined it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/data/{{$parameter[\"path\"]}}"
						}
					}
				},
				{
					"name": "Patch Document",
					"value": "Patch Document",
					"action": "Update a document",
					"description": "This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/v1/data/{{$parameter[\"path\"]}}"
						}
					}
				},
				{
					"name": "Get Document With Path",
					"value": "Get Document With Path",
					"action": "Get a document (with input)",
					"description": "The server will return a *bad request* (400) response if either:\n- The query requires an input document and you do not provide it\n- You provided an input document but the query has already defined it.\n\nIf `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/data/{{$parameter[\"path\"]}}"
						}
					}
				},
				{
					"name": "Put Document",
					"value": "Put Document",
					"action": "Create or overwrite a document",
					"description": "If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.\n\nThis behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/data/{{$parameter[\"path\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v0/data/{path}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document With Web Hook"
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
						"Data API"
					],
					"operation": [
						"Get Document With Web Hook"
					]
				}
			}
		},
		{
			"displayName": "POST /v0/data/{path}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document With Web Hook"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/data/{path}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Delete Document"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/data/{path}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "Input",
			"name": "input",
			"description": "Provide the text for an [input document](https://www.openpolicyagent.org/docs/latest/kubernetes-primer/#input-document) in JSON format",
			"default": "{\n  \"input\": {\n    \"example\": {\n      \"flag\": true\n    }\n  }\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "input",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document"
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
						"Data API"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "Provenance",
			"name": "provenance",
			"description": "If true, response will include build and version information in addition to the result.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "provenance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document"
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
						"Data API"
					],
					"operation": [
						"Get Document"
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
						"Data API"
					],
					"operation": [
						"Get Document"
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
						"Data API"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "PATCH /v1/data/{path}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Patch Document"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"op\": \"add\",\n  \"path\": \"-\",\n  \"value\": \"{\\n  \\\"id\\\": \\\"s5\\\",\\n  \\\"name\\\": \\\"job\\\",\\n  \\\"protocols\\\": [\\\"amqp\\\"],\\n  \\\"ports\\\": [\\\"p3\\\"]\\n}\"\n}",
			"description": "A JSON patch operation",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Patch Document"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/data/{path}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document With Path"
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
						"Data API"
					],
					"operation": [
						"Get Document With Path"
					]
				}
			}
		},
		{
			"displayName": "Provenance",
			"name": "provenance",
			"description": "If true, response will include build and version information in addition to the result.",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "provenance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document With Path"
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
						"Data API"
					],
					"operation": [
						"Get Document With Path"
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
						"Data API"
					],
					"operation": [
						"Get Document With Path"
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
						"Data API"
					],
					"operation": [
						"Get Document With Path"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/data/{path}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Get Document With Path"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/data/{path}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Put Document"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "The server will respect the If-None-Match header if it is set to * (in other words, it will not overwrite an existing document located at the specified `path`).",
			"default": "*",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Put Document"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/data/{path}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data API"
					],
					"operation": [
						"Put Document"
					]
				}
			}
		},
];
