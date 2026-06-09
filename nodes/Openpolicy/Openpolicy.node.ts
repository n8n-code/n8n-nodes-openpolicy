import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { policyApiDescription } from './resources/policy-api';
import { dataApiDescription } from './resources/data-api';
import { queryApiDescription } from './resources/query-api';
import { compileApiDescription } from './resources/compile-api';
import { healthApiDescription } from './resources/health-api';
import { configApiDescription } from './resources/config-api';

export class Openpolicy implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Openpolicy',
		name: 'N8nDevOpenpolicy',
		icon: { light: 'file:./openpolicy.png', dark: 'file:./openpolicy.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'OPA provides policy-based control for cloud native environments. The following endpoints (such as PUT /v1/policies) provide reference documentation for the OPA REST API',
		defaults: { name: 'Openpolicy' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOpenpolicyApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Policy API",
					"value": "Policy API",
					"description": "Allows you to add, remove and modify policy modules. *Policy module identifiers are only used for management purposes. They are not used outside the Policy API.*"
				},
				{
					"name": "Data API",
					"value": "Data API",
					"description": "Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)"
				},
				{
					"name": "Query API",
					"value": "Query API",
					"description": "Posting queries to OPA"
				},
				{
					"name": "Compile API",
					"value": "Compile API",
					"description": "Posting partial queries to OPA"
				},
				{
					"name": "Health API",
					"value": "Health API",
					"description": "Executes a simple built-in policy query to verify that the server is operational"
				},
				{
					"name": "Config API",
					"value": "Config API",
					"description": ""
				}
			],
			"default": ""
		},
		...policyApiDescription,
		...dataApiDescription,
		...queryApiDescription,
		...compileApiDescription,
		...healthApiDescription,
		...configApiDescription
		],
	};
}
