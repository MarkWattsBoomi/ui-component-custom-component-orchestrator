# ui-component-custom-component-orchestrator
The core custom component orchestrator that allows multiple other components to hook into the done &amp; onBeforeSend events

## Setup

- Grab the files from the /dist folder and import into your tenant.

- Add the files to your player code like this: -
        requires: ['core', 'bootstrap3'],
        customResources: [
                    'https://s3.amazonaws.com/files-manywho-com/<tenant-id>/IconProgressBar.css',
                    'https://s3.amazonaws.com/files-manywho-com/<tenant-id>/IconProgressBar.js'
                    ],

