import type { INodeProperties } from 'n8n-workflow';

export const policyApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policy API"
					]
				}
			},
			"options": [
				{
					"name": "Get Policies",
					"value": "Get Policies",
					"action": "List policies",
					"description": "This API endpoint responds with a list of all policy modules on the server (result response)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/policies"
						}
					}
				},
				{
					"name": "Delete Policy Module",
					"value": "Delete Policy Module",
					"action": "Delete a policy module",
					"description": "This API endpoint removes an existing policy module from the server",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/policies/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Policy Module",
					"value": "Get Policy Module",
					"action": "Get a policy module",
					"description": "This API endpoint returns the details of the specified policy module (`{id}`)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/policies/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Put Policy Module",
					"value": "Put Policy Module",
					"action": "Create or update a policy module",
					"description": "- If the policy module does not exist, it is created.\n- If the policy module already exists, it is replaced.\n\nIf the policy module isn't correctly defined, a *bad request* (400) response is returned.\n\n### Example policy module\n```yaml\npackage opa.examples\n\nimport data.servers\nimport data.networks\nimport data.ports\n\npublic_servers[server] {\n  some k, m\n  \tserver := servers[_]\n  \tserver.ports[_] == ports[k].id\n  \tports[k].networks[_] == networks[m].id\n  \tnetworks[m].public == true\n}\n```",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/v1/policies/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policy API"
					],
					"operation": [
						"Get Policies"
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
						"Policy API"
					],
					"operation": [
						"Get Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/policies/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policy API"
					],
					"operation": [
						"Delete Policy Module"
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
						"Policy API"
					],
					"operation": [
						"Delete Policy Module"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/policies/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policy API"
					],
					"operation": [
						"Get Policy Module"
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
						"Policy API"
					],
					"operation": [
						"Get Policy Module"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/policies/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policy API"
					],
					"operation": [
						"Put Policy Module"
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
						"Policy API"
					],
					"operation": [
						"Put Policy Module"
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
						"Policy API"
					],
					"operation": [
						"Put Policy Module"
					]
				}
			}
		},
		{
			"displayName": "PUT /v1/policies/{id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policy API"
					],
					"operation": [
						"Put Policy Module"
					]
				}
			}
		},
];
