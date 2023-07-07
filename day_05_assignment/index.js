/**
 * Subjective
 * Nodejs Assignment - 4
 * 
 * Build a program that retrieves data from an external API using the 'https' module, 
 * processes the response using streams, and saves it to a file.
 */

const https = require('https');
const fs = require('fs');

const URL = 'https://jsonplaceholder.typicode.com/posts';
