# ui-component-custom-component-orchestrator
The core custom component orchestrator that allows multiple other components to hook into the done &amp; onBeforeSend events

## Setup

- Grab the file from the /dist folder and import into your tenant.

- Add the file to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/CustomComponentOrchestrator.js'
                ],


##### Note: This should be the first declaration in customResource.