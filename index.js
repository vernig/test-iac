'use strict';
const pulumi = require('@pulumi/pulumi');
const { Resource } = require('twilio-pulumi-provider');

const workspace = new Resource('example-workspace', {
  resource: ['taskrouter', 'workspaces'],
  attributes: {
    friendlyName: 'Workspace created through GitHub Actions',
  },
});
