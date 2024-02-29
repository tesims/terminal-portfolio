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
        case 'about':
            output.innerHTML += `[INSERT TEXT HERE]`;
            break;
        case 'resume':
            output.innerHTML += `\nOpening resume...`;
            window.open('https://www.tesims.github.io/files/resume.pdf', '_blank');
            break;
        case 'projects':
            output.innerHTML += output.innerHTML += `
            <div style="margin-bottom: 5px;"><strong>Check out some of my projects:</strong></div>
            
            <div style="margin-bottom: 10px;">
                <h2 style="margin: 5px 0;"><strong>Weather App</strong></h2>
                <p style="margin: 2px 0;">A web application that provides real-time weather information based on user location. Utilizes the OpenWeatherMap API for data.</p>
                <p style="margin: 2px 0;">Languages & Frameworks: JavaScript, React</p>
                <p style="margin: 2px 0;"><a href="link_to_live_demo" target="_blank">Live Demo</a> | <a href="https://github.com/tesims" target="_blank">Repository</a></p>
            </div>
            `;
            break;
        case 'follow-me':
            const socialAccounts = [
                { name: 'Twitter', icon: '<i class="fab fa-twitter" aria-hidden="true"></i>', username: 'annabuildshit', url: 'https://twitter.com/annabuildshit' },
                { name: 'Instagram', icon: '<i class="fab fa-instagram" aria-hidden="true"></i>', username: 'annabuildshit', url: 'https://instagram.com/annabuildshit' },
                { name: 'GitHub', icon: '<i class="fab fa-github" aria-hidden="true"></i>', username: 'tesims', url: 'https://github.com/tesims' }
            ];
        
            let socialOutput = "<p>Social Media Accounts:</p>";
        
            socialAccounts.forEach(account => {
                socialOutput += `${account.icon} ${account.name}: <a href="${account.url}" target="_blank">@${account.username}</a><br>`;
            });
        
            output.innerHTML += socialOutput;
            break;
        case 'contact-me':
            const contactAccounts = [
                { name: 'Email', icon: '<i class="fas fa-envelope" aria-hidden="true"></i>', username: 'annaloves2build@gmail.com', url: 'mailto:annaloves2build@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Anna%2C' },
                { name: 'LinkedIn', icon: '<i class="fab fa-linkedin" aria-hidden="true"></i>', username: 'anna-sims-b73233257', url: 'https://www.linkedin.com/in/anna-sims-b73233257/' }
            ];
        
            let contactOutput = "<p>Social Media Accounts:</p>";
        
            contactAccounts.forEach(account => {
                contactOutput += `${account.icon} ${account.name}: <a href="${account.url}" target="_blank">@${account.username}</a><br>`;
            });
        
            output.innerHTML += contactOutput;
            break;
        case 'blog':
            output.innerHTML += `\nGoing to blog...`;
            window.open('https://www.blog.annabuildshit.xyz', '_blank');
            break;
        case 'fun-fact':
            output.innerHTML += `\nCheck out my latest blog posts:\n- Girl With Too Many Hobbies\n-`;
            window.open('https://blog.annabuildshit.xyz/', '_blank');
            break;

        case 'help':
            output.innerHTML += 
            `\nAvailable commands:
            \n'about'       : Get to know me a little better.
            \n'resume'      : Grab my resume.
            \n'projects'    : Check out some of things I've built!
            \n'follow-me'   : Let's connect! Find my socials.
            \n'contact-me'  : Thoughts, questions, opportunities? Reach out.
            \n'blog'        : Enter my thought lab.
            \n'fun-fact'    : Tidbits about me outside of coding.
            \n`;
            break;
        default:
            output.innerHTML += `\nUnknown command: ${command}. Type 'help' to see available commands.`;
    }
    output.innerHTML += '\n'; // Add a new line for the next command
}
