document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Capture the input value and clear it immediately after Enter is pressed
        const inputValue = this.value;
        this.value = '';

        // Append the prompt and the user input to the terminal output
        const newLine = document.createElement('div');
        newLine.textContent = `${document.getElementById('prompt').textContent} ${inputValue}`;
        document.getElementById('output').appendChild(newLine);

        // Handle command (process the input value)
        handleCommand(inputValue);
    }
});

function handleCommand(command) {
    const output = document.getElementById('output');
    switch(command.toLowerCase()) {
        case 'view resume':
            output.innerHTML += `\nDownloading resume...`;
            window.open('link-to-your-resume.pdf', '_blank');
            break;
        case 'get social-media':
            output.innerHTML += `\nSocial Media Accounts:\n- LinkedIn: [your-linkedin]\n- GitHub: [your-github]\n- Twitter: [your-twitter]\n`;
            break;
        case 'show skills':
            output.innerHTML += `\nMy Skills Include:\n- Programming Languages: JavaScript, Python\n- Frameworks: React, Django\n- Tools: Git, Docker`;
            break;
        case 'list projects':
            output.innerHTML += `\nMy Projects:\n- Project Alpha: A web app for task management.\n- Project Beta: An indie game developed in Unity.`;
            break;
        case 'get contact-info':
            output.innerHTML += `\nYou can contact me at:\n- Email: teanna@example.com\n- LinkedIn: [your-linkedin]`;
            break;
        case 'tell me a fun fact':
            output.innerHTML += `\nDid you know? I once coded an entire website in 24 hours as part of a hackathon challenge!`;
            break;
        case 'read blog':
            output.innerHTML += `\nCheck out my latest blog posts:\n- Girl With Too Many Hobbies\n-`;
            window.open('https://blog.annabuildshit.xyz/', '_blank');
    break;

        case 'help':
            output.innerHTML += `\nAvailable commands:\n- view resume: Download my resume\n- social: Display social media links\n- show skills: List my skills\n- list projects: View my projects\n- get contact-info: How to contact me\n- tell me a fun fact: Learn something new\n- read blog: My latest blog posts\n- help: Show this help message`;
            break;
        default:
            output.innerHTML += `\nUnknown command: ${command}. Type 'help' to see available commands.`;
    }
    output.innerHTML += '\n'; // Add a new line for the next command
}
