document.addEventListener('DOMContentLoaded', function() {
    // Automatically display the help command on load
    const initialCommand = 'help';
    const newLine = document.createElement('div');
    newLine.textContent = `${document.getElementById('prompt').textContent} ${initialCommand}`;
    document.getElementById('output').appendChild(newLine);
    handleCommand(initialCommand);
});

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
            \nWelcome, my name is Anna! When it comes to my day job I love all things data and machine learning, but on the weekends I enjoy exploring the more creative side of technology. I have a solid foundation in machine learning and data engineering from the University of Michigan, I've navigated roles as diverse as Design Engineer, Trading Analyst, and XR Dev and Lab Manager. My research work spans from analyzing carbon emissions in underdeveloped countries to studying the impact of deep learning in computational finance and exoplanet characterization. 
            \nThroughout 2023, I travelled across the country every two weeks to participate in hackathons. These hackathons were not just competitions; they were my classroom, keeping me abreast of cutting-edge tools, technologies, and opportunities in tech.
            \nI've set my sights on upskilling and earning better credentials in 2024, aiming to enhance my credibility and create a solid foundation for turning ambitious plans into successful outcomes. Whether you're a fellow tech enthusiast, potential collaborator, or just passing through, I'm glad you're here. Let's connect and explore how we can make a difference, together.
            `;
            break;

        case 'resume':
            output.innerHTML += `\nOpening resume...`;
            window.open('./files/images/resume.pdf', '_blank');
            break;

        case 'projects':
            output.innerHTML += `
            <h2>Current Projects</h2>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>Learning 101 Hobbies</strong></h3>
                <p style="margin: 2px 0;">I'll be sharing my journey of learning 101 hobbies in only 12 months to test if variety beats specialization. I initially launched this challenge as part of Season 5 of Buildspace's Nights and Weekends program. I regularly upload short vlogs to Instagram and TikTok to share progress and updates as I work through the 101 hobbies.</p>
                <p style="margin: 2px 0;">Hobbies & Skills: Paragliding, Stonecarving, Competitive Programming, Trap & Skeet Shooting, and 97 others</p>
                <p style="margin: 2px 0;"><a href="https://instagram.com/sycorpia">Instagram Vlogs</a> | <a href="https://tiktok.com/sycorpia" target="_blank">TikTok Vlogs</a></p>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>Drolg</strong></h3>
                <p style="margin: 2px 0;">Drolg is an AI party DJ that curates the perfect playlist by analyzing the mood and atmosphere of parties via computer vision. It selects the best songs to create and maintain the ideal atmosphere desired by the host.</p>
                <p style="margin: 2px 0;">Technologies & Skills: Recommendation Systems, Computer Vision, API Integration, DevOps, Data Processing, Real-Time Systems</p>
                <p style="margin: 2px 0;"><a href="https://drolg.com">Live Demo</a> | <a href="https://github.com/tesims/drolg" target="_blank">Repository</a></p>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>Gralx</strong></h3>
                <p style="margin: 2px 0;">Gralx is a context-preserving multimodal data mask API, a privacy layer I'm developing for the ByteDance Innovator Program. It's designed to help researchers and companies working with Large Language Models (LLMs) maintain compliance with privacy standards.</p>
                <p style="margin: 2px 0;">Technologies & Skills: LLMs, API Integration, Multimedia Processing, Open Source</p>
                <p style="margin: 2px 0;"><a href="https://gralx.com">Live Demo</a> | <a href="https://github.com/tesims/gralx" target="_blank">Repository</a></p>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>Yoqued</strong></h3>
                <p style="margin: 2px 0;">Yoqued is a 6-month-long social experiment I designed to test whether for-profit dating apps are flawed by design or intention. This is my first creative technology project, loosely inspired by my favorite creative technologist, Lauren Lee McCarthy. The dating app is replaced with SMS text instead of swipes, auto-generated "date me" docs instead of image-based profiles, compatibility matching based on an extensive unorthodox psychology-based compatibility quiz instead of preferences, and a maximum of three matches a month with mandatory meetings.</p>
                <p style="margin: 2px 0;">Technologies & Skills: Full-stack Web Development, Recommendation Systems, API Integration, Data Warehousing & Databases</p>
                <p style="margin: 2px 0;"><a href="https://yoqued.com">Try It Now</a> | <a href="https://github.com/tesims/yoqued" target="_blank">Repository</a></p>
            </div>

            <h2>Previous Projects</h2>
            <div style="margin-bottom: 5px;"><strong>Check out some of my old projects</strong></div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>Data Mask</strong></h3>
                <p style="margin: 2px 0;">PII Data Masking is a privacy-preserving solution that utilizes locally (cloud) hosted language models to identify and replace sensitive personal information within datasets. By assessing the context and importance of the redacted data, the system generates non-identifiable alternatives that maintain the semantic integrity and analytical value of the original text. This innovative approach ensures data privacy while preserving the usefulness of the dataset for analysis and insights.</p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: Django, Gemini, Mistral 7b, Presidio, Langchain, VertexAI</p>
                <p style="margin: 2px 0;"><a href="https://devpost.com/software/datamask" target="_blank">Live Demo</a> | <a href="https://github.com/chriskok/DataMask" target="_blank">DevPost</a></p>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>Nevalone</strong></h3>
                <p style="margin: 2px 0;">Created lifelike clones of loved ones, enabling seniors and dementia patients to engage in conversations and relive cherished memories, providing a lifeline to emotional well-being and continuous connection.</p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: Next.js, OpenAI API, ElevenLabs, Twilio</p>
                <p style="margin: 2px 0;"><a href="https://devpost.com/software/navalone" target="_blank">Live Demo</a> | <a href="https://github.com/tesims/Hack-Harvard" target="_blank">DevPost</a></p>
            </div>
            <div style="margin-bottom: 10px;">
                <h3 style="margin: 5px 0;"><strong>PaperPing</strong></h3>
                <p style="margin: 2px 0;">PaperPing is a digital platform designed for both commercial and academic researchers to streamline their research endeavors. By continuously monitoring the web for the freshest research articles tailored to a user's specific interests, PaperPing ensures users are instantly notified upon the release of relevant content. </p>
                <p style="margin: 2px 0;">Languages, Tools, & Frameworks: HTML, CSS, JavaScript, AWS</p>
                <p style="margin: 2px 0;"><a href="https://devpost.com/software/paperping" target="_blank">Live Demo</a> | <a href="https://github.com/duong-vo/penn-apps" target="_blank">DevPost</a></p>
            </div>
            `;
            break;

        case 'connect':
            const socialAccounts = [
                { name: 'Twitter', icon: '<i class="fab fa-twitter" aria-hidden="true"></i>', username: 'sycorpia', url: 'https://twitter.com/sycorpia' },
                { name: 'Instagram', icon: '<i class="fab fa-instagram" aria-hidden="true"></i>', username: 'sycorpia', url: 'https://instagram.com/sycorpia' },
                { name: 'Instagram', icon: '<i class="fab fa-instagram" aria-hidden="true"></i>', username: 'annabuildshit', url: 'https://instagram.com/annabuildshit' },
                { name: 'LinkedIn', icon: '<i class="fab fa-linkedin" aria-hidden="true"></i>', username: 'anna-sims-b73233257', url: 'https://www.linkedin.com/in/anna-sims-b73233257/' },
                { name: 'GitHub', icon: '<i class="fab fa-github" aria-hidden="true"></i>', username: 'tesims', url: 'https://github.com/tesims' },
            ];

            let socialOutput = "<p>Follow Me:</p>";
            socialAccounts.forEach(account => {
                socialOutput += `${account.icon} ${account.name}: <a href="${account.url}" target="_blank">@${account.username}</a><br>`;
            });
        
            const contactAccounts = [
                { name: 'Email', icon: '<i class="fas fa-envelope" aria-hidden="true"></i>', username: 'sycorpia@gmail.com', url: 'mailto:sycorpia@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Anna%2C' },
            ];
        
            let contactOutput = "<p>Contact Me:</p>";
            contactAccounts.forEach(account => {
                contactOutput += `${account.icon} ${account.name}: <a href="${account.url}" target="_blank">@${account.username}</a><br>`;
            });
        
            output.innerHTML += socialOutput + contactOutput;
            break;

        case 'date me doc':
            output.innerHTML += `\nOpening date me doc...`;
            window.open('./datedoc/date-me.html', '_blank');
            break;

        case 'blog':
            output.innerHTML += `\nGoing to blog...`;
            window.open('https://sycorpia.substack.com/', '_blank'); 
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
            \n'about'               : Get to know me a little better
            \n'resume'              : Grab my resume
            \n'projects'            : Check out the things I'm working on now and in the past
            \n'connect'             : Get my socials and contact information
            \n'date me doc'         : Open my date me doc file
            \n'blog'                : See my latest reflections, thoughts, and updates
            \n'fun fact'            : Tidbits about me outside of coding
            \n'clear'               : Clear the current screen
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
