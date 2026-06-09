import type { INodeProperties } from 'n8n-workflow';

export const configApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Config API"
					]
				}
			},
			"options": [
				{
					"name": "Get Config",
					"value": "Get Config",
					"action": "Get configurations",
					"description": "This API endpoint responds with active configuration (result response)\n\n---\n**Note**\nThe `credentials` field in the `services` configuration and\n\nThe `private_key` and `key` fields in the `keys` configuration will be omitted from the API response\n\n---",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/config"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config API"
					],
					"operation": [
						"Get Config"
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
						"Config API"
					],
					"operation": [
						"Get Config"
					]
				}
			}
		},
];
