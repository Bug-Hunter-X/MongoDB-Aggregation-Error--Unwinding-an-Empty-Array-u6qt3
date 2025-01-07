# MongoDB Aggregation Error: Handling Empty Arrays in $unwind

This repository demonstrates a common error in MongoDB aggregation pipelines when using the `$unwind` operator with potentially empty arrays. The error occurs when `$unwind` attempts to process an empty array, resulting in an aggregation failure.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a solution that addresses the issue.

## Solution

The solution involves adding a `$match` stage to filter out documents where `purchasedProducts` is empty, or using `$ifNull` to handle null values or an alternative conditional approach to gracefully handle such cases without breaking the aggregation pipeline.