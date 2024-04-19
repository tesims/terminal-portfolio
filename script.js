document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputValue = this.value;
        this.value = '';
        const newLine = document.createElement('div');
        newLine.textContent = `${document.getElementById('prompt').textContent} ${inputValue}`;
        document.getElementById('output').appendChild(newLine);
        handleCommand(inputValue);
    }
});

let currentFunFactIndex = null;

function handleCommand(command) {
    const output = document.getElementById('output');

    switch(command.toLowerCase()) {
        case 'about':
            output.innerHTML += `
            \nWelcome to my digital space. My name is Anna, and I passionately explore emerging technologies. With a solid foundation in Data Science Engineering from the University of Michigan, I've navigated roles as diverse as Design Engineer, Trading Analyst, and XR Dev and Lab Manager. My research work spans from analyzing carbon emissions in underdeveloped countries to studying the impact of deep learning in computational finance and exoplanet characterization.
            \nI'm fascinated by machine learning, neuroscience, and manufacturing and design, and I'm actively exploring innovative ways to integrate these interests into a cohesive career path. Throughout 2023, I travelled across the country every two weeks to participate in hackathons. These hackathons were not just competitions; they were my classroom, keeping me abreast of cutting-edge tools, technologies, and opportunities in tech.
            \nMy journey as a startup founder began at Founder University, where I launched a fintech company dedicated to reshaping retirement savings for millennials and Gen Z by facilitating direct investment opportunities in emerging markets. It soared with support from LocalHost, who believed in us enough to provide the initial investment for our SEC licensing.
            \nI've set my sights on upskilling and earning better credentials in 2024, aiming to enhance my credibility and create a solid foundation for turning ambitious plans into successful outcomes. Whether you're a fellow tech enthusiast, potential collaborator, or just passing through, I'm glad you're here. Let's connect and explore how we can make a difference, together.

            `;
            break;

        case 'resume':
            output.innerHTML += `\nOpening resume...`;
            window.open('./files/resume.pdf', '_blank');
            break;

        case 'projects':
            output.innerHTML += output.innerHTML += `
            <div style="margin-bottom: 5px;"><strong>Check out some of my projects:</strong></div>

            <div style="margin-bottom: 10px;">
                <h2 style="margin: 5px 0;"><strong>Data Mask</strong></h2>
                <p style="margin: 2px 0;">PII Data Masking is a privacy-preserving solution that utilizes locally (cloud) hosted language models to identify and replace sensitive personal information within datasets. By assessing the context and importance of the redacted data, the system generates non-identifiable alternatives that maintain the semantic integrity and analytical value of the original text. This innovative approach ensures data privacy while preserving the usefulness of the dataset for analysis and insights.</p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: Django, Gemini, Mistral 7b, Presidio, Langchain, VertexAI</p>
                <p style="margin: 2px 0;"><a href="https://devpost.com/software/datamask" target="_blank">Live Demo</a> | <a href="https://github.com/chriskok/DataMask" target="_blank">Repository</a></p>
            </div>

            <div style="margin-bottom: 10px;">
                <h2 style="margin: 5px 0;"><strong>Nevalone</strong></h2>
                <p style="margin: 2px 0;">created lifelike clones of loved ones, enabling seniors and dementia patients to engage in conversations and relive cherished memories, providing a lifeline to emotional well-being and continuous connection.</p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: Next.js, OpenAI API, ElevenLabs, Twilio</p>
                <p style="margin: 2px 0;"><a href="https://devpost.com/software/navalone" target="_blank">Live Demo</a> | <a href="https://github.com/tesims/Hack-Harvard" target="_blank">Repository</a></p>
            </div>

            <div style="margin-bottom: 10px;">
                <h2 style="margin: 5px 0;"><strong>PaperPing/strong></h2>
                <p style="margin: 2px 0;">PaperPing is a digital platform designed for both commercial and academic researchers to streamline their research endeavors. By continuously monitoring the web for the freshest research articles tailored to a user's specific interests, PaperPing ensures users are instantly notified upon the release of relevant content. </p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: HTML, CSS, JavaScript, AWS</p>
                <p style="margin: 2px 0;"><a href="https://devpost.com/software/paperping" target="_blank">Live Demo</a> | <a href="https://github.com/duong-vo/penn-apps" target="_blank">Repository</a></p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <h2 style="margin: 5px 0;"><strong>Terminal Themed Portfolio Website</strong></h2>
                <p style="margin: 2px 0;">This portfolio website, designed with a unique terminal theme, showcases my projects and skills through an interactive command-line interface, offering users a distinctive and engaging browsing experience.</p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: HTML, CSS, JavaScript, AWS</p>
                <p style="margin: 2px 0;"><a href="https://annabuildshit.xyz/" target="_blank">Live Demo</a> | <a href="https://github.com/tesims/tesims.github.io" target="_blank">Repository</a></p>
            </div>
            `;
            break;

        case 'follow-me':
            const socialAccounts = [
                { name: 'Twitter', icon: '<i class="fab fa-twitter" aria-hidden="true"></i>', username: 'annabuildshit', url: 'https://twitter.com/sycorpia' },
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
                { name: 'Email', icon: '<i class="fas fa-envelope" aria-hidden="true"></i>', username: 'sycorpia@gmail.com', url: 'mailto:sycorpia@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Anna%2C' },
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
            window.open('https://blog.sycorpia.xyz/', '_blank');
            break;

        case 'fun-fact':
            const funFactsWithImages = [
                {
                    fact: `I've always been a bit of a bookworm. Some of my favorite books include:\n📚 The Glass Castle \n📚 The Subtle Art of Not Giving a F*ck\n📚 The Defining Decade\n📚 Outliers\n📚 The Brain That Changes Itself`,
                    imageUrl: []
                },
                {
                    fact: "This is my son, Jabir, who tricked me into adopting him. It worked, and now I'm obsessed with him.",
                    imageUrl: ["./files/images/IMG_9146.jpg", "./files/images/IMG_9147.jpg"]

                },
                {
                    fact: "I really love to hike and kayak; some of my favorite spots include Redwood National Park and Rocky Mountain National Park.",
                    imageUrl: ["./files/images/IMG_9140.jpg"] 
                },
                {
                    fact: "I visited St. Petersburg and Moscow while studying Russian in high school and college.",
                    imageUrl: ["./files/images/IMG_9145.jpg"] 
                },
                {
                    fact: "When I was young, I used to love riding my dirt bike and going to motocross races.",
                    imageUrl: []
                },
                {
                    fact: "My interest in foreign direct investments was sparked after traveling throughout India to study emerging markets as part of my study abroad program.",
                    imageUrl: ["./files/images/IMG_9141.jpg"]
                },
                {
                    fact: "In third grade, I created a secret toy auction business that was so successful, I almost got expelled.",
                    imageUrl: []
                },
                {
                    fact: "In my sophomore year of college, I co-founded a non-profit organization aimed at closing the educational gap for underrepresented high school students seeking college admission. We successfully supported over 150 students.",
                    imageUrl: ["./files/images/IMG_9143.jpg","./files/images/IMG_9142.jpg"]
                },
            ];
             
            // If it's the first time, select a random fun fact
            if (currentFunFactIndex === null) {
                currentFunFactIndex = Math.floor(Math.random() * funFactsWithImages.length);
            } else {
                // Sequentially move through the list for subsequent calls
                currentFunFactIndex = (currentFunFactIndex + 1) % funFactsWithImages.length;
            }

            const selectedFact = funFactsWithImages[currentFunFactIndex];
            let content = `<p>${selectedFact.fact}</p>`;
            if (selectedFact.imageUrl.length > 0) {
                selectedFact.imageUrl.forEach((imageUrl) => {
                    content += `<img src="${imageUrl}" alt="Fun Fact Image" style="width:150px; height:auto; margin: 5px;">`;
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
            \n'clear'       : Clear the current screen.
            \n`;
            break;

        case 'clear':
            // Refreshes the current page
            window.location.reload();
            break;
    
        default:
            output.innerHTML += `\nUnknown command: ${command}. Type 'help' to see available commands.`;
    }
    output.innerHTML += '\n';
}




