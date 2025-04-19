"The Digital Detective Agency" - DOM Manipulation Assignments
Welcome to The Digital Detective Agency! As our newest recruit, you'll solve a series of increasingly complex digital mysteries. Each case requires you to use your DOM manipulation skills to uncover clues, decode messages, and catch cyber criminals. Your tools? Just your knowledge of JavaScript and the Document Object Model!

The Digital Detective Agency - DOM Manipulation Assignments
Easy Assignments
Case #1: The Hidden Message
Scenario: A crucial message was hidden in a webpage by Agent X before they disappeared. The message is stored in an invisible element.

Task:
- Select an element with ID 'hidden-message' using getElementById
- Make it visible by changing its style properties
- Read and decode the message (reverse the text) using string manipulation
- Display the decoded message in another element with ID 'decoded-message'
<p id="hidden-message" style="display: none;">!egassem terces a si sihT</p>
<p>Decoded Message: <span id="decoded-message"></span></p>
<button onclick="revealMessage()">Reveal Message</button>


Case #2: Classified Files
Scenario: You've gained access to a digital filing cabinet with classified documents, but they're organized by different security levels.

Task:
- Select all elements with class 'classified-document' using getElementsByClassName
- Filter them based on their 'security-level' attribute
- Change the background color of 'high' security documents to red, 'medium' to yellow, and 'low' to green
- Add a click event to each document that reveals its contents when clicked
<div class="classified" data-security="high">Top Secret Document</div>
<div class="classified" data-security="medium">Confidential Report</div>
<div class="classified" data-security="low">Public Notice</div>


Case #3: Suspect Identification
Scenario: We need to identify a cyber criminal from a digital lineup. The suspect has left traces in the HTML.

Task:
- Select all elements with tag name 'suspect' using getElementsByTagName
- Check each suspect's data attributes for clues
- When a clue matches your evidence (provided in a variable), mark that suspect by adding a 'prime-suspect' class
- Create a new element showing 'IDENTIFIED' and append it after the prime suspect
<div class="suspect" data-clue="red-hat">Suspect 1</div>
<div class="suspect" data-clue="blue-scarf">Suspect 2</div>
<div class="suspect" data-clue="green-coat">Suspect 3</div>


Case #4: Digital Evidence Collection
Scenario: You need to collect digital evidence scattered throughout a webpage.

Task:
- Use querySelectorAll to select all elements with the attribute data-evidence='true'
- For each piece of evidence, create a new list item in an 'evidence-log' unordered list
- Add an event that lets you mark evidence as 'collected' when clicked
- Update a counter showing how many pieces of evidence remain
<ul id="evidence-log"></ul>
<p>Evidence Remaining: <span id="evidence-count">0</span></p>

<div data-evidence="true">USB Drive</div>
<div data-evidence="true">Hacked File</div>
<div data-evidence="true">Suspicious Email</div>


Medium Assignments
Case #5: The Disappearing Records
Scenario: A hacker is deleting important information from a database interface. You need to create a system to monitor and recover the data.

Task:
- Create a form that allows adding new data entries to a table
- Implement 'delete' buttons for each entry that remove them from the DOM
- Create an 'audit log' that records each addition and deletion action
- Add a 'recover' feature that can restore accidentally deleted entries
- Use event delegation for efficiently handling all delete/recover actions
<table>
  <thead>
    <tr>
      <th>Data Entry</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="records">
    <tr>
      <td>Classified Info</td>
      <td><button onclick="deleteEntry(this)">Delete</button></td>
    </tr>
  </tbody>
</table>

<button onclick="recoverLast()">Recover Last Deleted</button>
<ul id="audit-log"></ul>


Case #6: The Code Breaker
Scenario: You've found an encrypted message system that requires DOM manipulation to decode.

Task:
- Create an interactive decryption interface with draggable elements
- Select and rearrange elements with specific classes to form the correct pattern
- Use event listeners to detect when elements are in the correct positions
- When the pattern is complete, reveal a hidden message by dynamically updating DOM content
- Add visual feedback using style manipulation as users get closer to the solution
<div id="code-container">
  <div class="draggable" draggable="true">🔑</div>
  <div class="draggable" draggable="true">🔒</div>
  <div class="draggable" draggable="true">📜</div>
</div>

<p id="decoded-text"></p>


Case #7: Security Lock Bypass
Scenario: You're locked out of a critical system and need to bypass a security interface.

Task:
- Create a sequence of interactive elements that must be activated in a specific order
- Use event listeners to track user interactions
- Dynamically create feedback elements showing progress
- If the wrong sequence is entered, elements reset with animation
- When the correct sequence is entered, replace the entire interface with a 'Success' message
<div id="lock-panel">
  <button class="lock-button">🔲</button>
  <button class="lock-button">🔲</button>
  <button class="lock-button">🔲</button>
</div>

<p id="lock-status">Enter Code</p>


Case #8: The Shadow Network
Scenario: You've discovered a hidden communication network embedded within a seemingly innocent webpage.

Task:
- Traverse the DOM to find elements with specific nested relationships
- Identify elements where the 3rd child of a parent with class 'network-node' contains a data attribute
- Extract and combine these hidden data pieces from throughout the DOM tree
- Create a new interface revealing the combined information
- Implement an 'alert system' that monitors for DOM changes that might indicate tampering
<div class="network-node">
  <p>Normal Text</p>
  <p>Another Element</p>
  <p data-message="Alpha">Secret Data</p>
</div>
<div class="network-node">
  <p>Random Info</p>
  <p>More Text</p>
  <p data-message="Bravo">Hidden Message</p>
</div>

<p>Decoded Transmission: <span id="decoded-transmission"></span></p>



Hard Assignments

Case #9: The Hidden Data Vault
Scenario: A sophisticated system is hiding data inside seemingly ordinary web elements.
Task:
Traverse the entire DOM to find elements containing hidden data attributes.
Extract and organize the data into a readable format.
Display the extracted data in a dynamic dashboard.
Allow users to search for specific data patterns and highlight matches.
<div class="data-container">
    <p data-hidden="agent-X">🔍 Hidden Data #1</p>
    <p>Regular Content</p>
    <p data-hidden="mission-42">🔍 Hidden Data #2</p>
</div>
<button onclick="extractHiddenData()">Extract Data</button>
<ul id="data-list"></ul>

Case #10: The Final Puzzle
Scenario: The mastermind behind all previous cases has left one last digital puzzle.
Task:
Create an interactive system where user actions modify the DOM dynamically.
Implement a multi-stage challenge, each requiring different DOM manipulation techniques.
Use timed challenges that require users to complete actions within a limit.
Provide real-time feedback and prevent invalid actions.
Once solved, generate a final report detailing all user interactions.
<div id="puzzle">
    <p>Step 1: Click to Begin</p>
    <button onclick="nextStep(this)">Start</button>
</div>


