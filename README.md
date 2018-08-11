# Magento Exclude Html

Have you ever needed to exclude certain html files from being minified because they cause conflicts or problems?
Look no further, Exclude Html allows you to list the html files you wish to exclude from minification by running the `replaceHtml` gulp task. 

## Usage

First make sure you populate the `.ignorehtml` file with a list of paths to the file (relative to the Magento root). The `.ignorehtml` file provided by this repository demonstrates a single example.

After deploying with `php bin/magento setup:static-content:deploy` you can run `gulp replaceHtml` and it will look in your ignore list and for each file in that list it will replace the cached minified version with the full html version.

## Todos
<ul>
    <li>Error handling: this is required but not yet done.</li>
</ul>