
<h2>What is this?</h2>

This tool generates JavaScript classes that represent Dataverse custom actions — something you probably didn’t know you needed, especially if you’ve never worked with actions before.

<h2>How does it work?</h2>

1. Download or clone the repository.

2. Open the folder and run:

    ```bash
    npm install
    ```

3. After it finished, run:

    ```bash
    npm run generate <action>
    ```

5. The generated class will appear in the /outputs folder.

<h2>Notes</h2>

1. This tool isn’t perfect — some action properties aren’t always documented.
For example, ``DestinationQueueId`` on ``AddToQueue`` isn’t mentioned anywhere in the official docs (oops).

2. If you encounter undocumented properties, your best bet is to inspect Microsoft’s decompiled C# libraries to understand what’s actually available.

3. If something doesn't work, don't expect it to get fixed.