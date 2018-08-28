declare var manywho: any;

import * as React from 'react';


manywho.CustomComponentOrchestrator = {};
manywho.CustomComponentOrchestrator.onBeforeSendHandlers = [];
manywho.CustomComponentOrchestrator.doneSendHandlers = [];
manywho.CustomComponentOrchestrator.onBeforeInitHandlers = [];
manywho.CustomComponentOrchestrator.doneInitHandlers = [];
 
//this attaches the Ajax handlers to the initialize function.  
//This will be amalgamated with the default manywho.settings.initialize call in the player
manywho.settings.initialize(
    {
    }
    ,
    {
        invoke: 
        {
            done: CCOdoneSendHandler,
            beforeSend: CCObeforeSendHandler
        }
    }
);
    
function CCObeforeSendHandler(xhr: any, request: any )
{
    if(manywho.CustomComponentOrchestrator && manywho.CustomComponentOrchestrator.onBeforeSendHandlers && manywho.CustomComponentOrchestrator.onBeforeSendHandlers.length > 0)
    {
        // call each before send handler in turn
        for(var pos = 0 ; pos < manywho.CustomComponentOrchestrator.onBeforeSendHandlers.length ; pos ++)
        {
            manywho.CustomComponentOrchestrator.onBeforeSendHandlers[pos](xhr, request);
        }
    }
}

function CCOdoneSendHandler(xhr: any , request: any)
{
    if(manywho.CustomComponentOrchestrator && manywho.CustomComponentOrchestrator.doneSendHandlers && manywho.CustomComponentOrchestrator.doneSendHandlers.length > 0)
    {
        // call each done handler in turn
        for(var pos = 0 ; pos < manywho.CustomComponentOrchestrator.doneSendHandlers.length ; pos ++)
        {
            manywho.CustomComponentOrchestrator.doneSendHandlers[pos](xhr, request);
        }
    }
}

/*
this will be used if they ever add the promise return on the platform
manywho.engine.initialize(
{
},
{
    invoke: 
        {
            done: CCOdoneInitHandler,
            beforeSend: CCObeforeInitHandler
        }
});
*/
   
function CCObeforeInitHandler(xhr: any, request: any )
{
    if(manywho.CustomComponentOrchestrator && manywho.CustomComponentOrchestrator.onBeforeInitHandlers && manywho.CustomComponentOrchestrator.onBeforeInitHandlers.length > 0)
    {
        // call each before init handler in turn
        for(var pos = 0 ; pos < manywho.CustomComponentOrchestrator.onBeforeInitHandlers.length ; pos ++)
        {
            manywho.CustomComponentOrchestrator.onBeforeInitandlers[pos](xhr, request);
        }
    }
}

function CCOdoneInitHandler(xhr: any , request: any)
{
    if(manywho.CustomComponentOrchestrator && manywho.CustomComponentOrchestrator.doneInitHandlers && manywho.CustomComponentOrchestrator.doneInitHandlers.length > 0)
    {
        // call each done handler in turn
        for(var pos = 0 ; pos < manywho.CustomComponentOrchestrator.doneInitHandlers.length ; pos ++)
        {
            manywho.CustomComponentOrchestrator.doneInitHandlers[pos](xhr, request);
        }
    }
}


class CustomComponentOrchestrator extends React.Component<any, any> 
{
}

manywho.component.register('CustomComponentOrchestrator', CustomComponentOrchestrator);

export default CustomComponentOrchestrator;

