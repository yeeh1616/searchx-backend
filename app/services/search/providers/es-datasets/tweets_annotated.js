'use strict';

exports.index = 'tweets_annotated';
exports.queryField = 'topic';
exports.formatHit = function (hit) {
    const source = hit._source;
    //const snippet = source['content'].replace(/\s+/g, " ").substr(0, 200);
    const title = source.title ? source.title.replace(/\s+/g, " ") : "";

    // Todo: adapt result specification to work for datasets without url.
    return {
        id: hit._id,
        name: source['topic'],
        source: source['tweet'],
        text: source['crowd_logics'],
        //snippet: snippet
    };
};
