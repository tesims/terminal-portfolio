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
            const funFactsWithImages = [
                {
                    fact: `I've always been a bit of a bookworm. Some of my favorite books include:
                                📚 The Glass Castle
                                📚 The Subtle Art of Not Giving a F*ck
                                📚 The Defining Decade
                                📚 Outliers
                                📚 The Brain That Changes Itself`,
                    imageUrl: []
                },
                {
                    fact: "This is my son, Jabir, who tricked me into adopting him. It worked, and now I'm obsessed with him.",
                    imageUrl: []
                },
                {
                    fact: "I really love to hike and kayak; some of my favorite spots include Redwood National Park and Rocky Mountain National Park.",
                    imageUrl: [] 
                },
                {
                    fact: "I visited St. Petersburg and Moscow while studying Russian in high school and college.",
                    imageUrl: [] 
                },
                {
                    fact: "When I was young, I used to love riding my dirt bike and going to motocross races.",
                    imageUrl: []
                },
                {
                    fact: "My interest in foreign direct investments was sparked after traveling throughout India to study emerging markets as part of my study abroad program.",
                    imageUrl: []
                },
                {
                    fact: "In third grade, I created a secret toy auction business that was so successful, I almost got expelled.",
                    imageUrl: []
                },
                {
                    fact: "In my sophomore year of college, I co-founded a non-profit organization aimed at closing the educational gap for underrepresented high school students seeking college admission. We successfully supported over 150 students.",
                    imageUrl: []
                },
            ];
        
            const randomIndex = Math.floor(Math.random() * funFactsWithImages.length);
            const selectedFact = funFactsWithImages[randomIndex];

            let content = `\n${selectedFact.fact}\n`;
            if (selectedFact.imageUrls.length > 0) {
                selectedFact.imageUrls.forEach((imageUrl) => {
                    content += `<img src="${imageUrl}" alt="Fun Fact Image" style="max-width:100%;height:auto;">`;
                });
            }

            output.innerHTML += content;
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
