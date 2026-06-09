import type { INodeProperties } from 'n8n-workflow';

export const healthApiDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health API"
					]
				}
			},
			"options": [
				{
					"name": "Get Health",
					"value": "Get Health",
					"action": "Health",
					"description": "This API endpoint verifies that the server is operational.\n\nThe response from the server is either 200 or 500:\n- **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.\n- **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.\n\n---\n**Note**\nThis check is only for initial bundle activation. Subsequent downloads will not affect the health check.\n\nUse the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.\n\n---",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health API"
					],
					"operation": [
						"Get Health"
					]
				}
			}
		},
		{
			"displayName": "Bundles",
			"name": "bundles",
			"description": "Reports on bundle activation status (useful for 'ready' checks at startup).\n\nThis includes any discovery bundles or bundles defined in the loaded discovery configuration.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "bundles",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health API"
					],
					"operation": [
						"Get Health"
					]
				}
			}
		},
		{
			"displayName": "Plugins",
			"name": "plugins",
			"description": "Reports on plugin status",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "plugins",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health API"
					],
					"operation": [
						"Get Health"
					]
				}
			}
		},
];
