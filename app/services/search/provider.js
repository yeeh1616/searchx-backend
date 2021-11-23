'use strict';

const bing = require('./providers/bing');
const elasticsearch = require('./providers/elasticsearch');
const indri = require('./providers/indri');
const covidex = require('./providers/covidex');

// mapping of providerName to search provider module
const providers = {
    'bing': bing,
    'elasticsearch': elasticsearch,
    'indri': indri,
    'covidex' : covidex
};

/*
 * Fetches data from search provider and returns the formatted result
 *
 * @params {providerName} the name of the search provider to use (indri by default)
 * @params {query} the search query
 * @params {vertical} type of search results (web, images, etc)
 * @params {pageNumber} result pagination number
 * @params {resultsPerPage} the number of results to use per page
 * @params {relevanceFeedbackDocuments} the set of documents to use for relevance feedback (if supported by provider)
 */
exports.fetch = function (providerName, query, vertical, pageNumber, resultsPerPage, relevanceFeedbackDocuments) {
    if (invalidProvider(providerName)){
        return invalidProvider(providerName);
    }

    console.log("------ [provider.js] searchEngine 1: " + providerName);
    let searchEngine = providers[providerName];
    // searchEngine = elasticsearch;

    console.log("------ [provider.js] searchEngine 2: " + searchEngine);

    return searchEngine.fetch(query, vertical, pageNumber, resultsPerPage, relevanceFeedbackDocuments);
};

/*
 * Get document by id from search provider
 *
 * @params {id} the id of the document to return
 * @params {providerName} the name of the search provider to use (indri by default)
 */
exports.getById = function (id, providerName) {
    if (invalidProvider(providerName)) return invalidProvider(providerName);
    return providers[providerName].getById(id);
};

function invalidProvider(providerName) {
    if (providerName in providers) {
        return false;
    } else {
        return Promise.reject({
            name: 'Bad Request',
            message: 'Provider does not exist'
        });
    }
}
