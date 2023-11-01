const about = {
    ai: {
        name: "Artificial Intelligence",
        img: "./img/ai.svg"
    },
    cloud: {
        name: "Cloud Computing",
        img: "./img/cloud-upload.svg"
    },
    web: {
        name: "Web Development",
        img: "./img/browser.svg"
    }
};
const exp = {
    ce: {
        name: "Cloud Engineer",
        company: "FPT Japan",
        des: [
            "Implemented a restocking optimization algorithm that improved the performance of an AI system for Retail industry.",
            "Implemented and deployed the system on Azure using Terraform and AWS using CloudFormation",
            "Set up CI/CD pipeline on Azure DevOps and AWS Codepipeline.",
            "Simulated load testing to analyze the performance of systems"
        ],
        location: "Tokyo, Japan",
        time: "May. 2022 - Present",
        tech: ["git", "azure", "aws", "python","CloudFormation", "terraform","docker","kubernetes"]
    },
    aei: {
        name: "AI Engineer Intern",
        company: "Tokyo techies",
        des: [
            "Developed an AI vision model which digitalizes the information of receipts",
            "Enriched the dataset by generating synthetic data and processing new raw data",
            "Conducted a comprehensive evaluation of the model’s performance.."
        ],
        location: "Tokyo, Japan",
        time: "April. 2021 - May. 2022",
        tech: ["git", "python","tensorflow","pytorch","linux"]
    },
    sei: {
        name: "Software Engineer Intern",
        company: "Infore Technology",
        des: [
            "Scraped and processed raw data from various sources",
            "Implemented API and setup database using Elasticsearch",
            "Hands-on experience in setting up a chatbot on Messenger",
        ],
        location: "Hanoi, Vietnam",
        time: "April. 2020 - Dec. 2020",
        tech: ["git", "python","elasticsearch","flask"]
    }
};

function generateAboutBlocks(aboutData) {
    const aboutBlocksContainer = $('.about__blocks');

    for (const key in aboutData) {
        if (aboutData.hasOwnProperty(key)) {
            const item = aboutData[key];

            const aboutBlock = $('<div>').addClass('about__block');
            const imgDiv = $('<div>').addClass('about__block__img');
            imgDiv.html(`<img src="${item.img}" alt="${item.name}">`);
            const nameDiv = $('<div>').addClass('about__block__name');
            nameDiv.html(`<h3>${item.name}</h3>`);
            
            aboutBlock.append(imgDiv, nameDiv);
            aboutBlocksContainer.append(aboutBlock);
        }
    }
}
function generateExpBlocks(expData) {
    const expContainer = $('#exp');
    let isFirstItem = true;

    for (const key in expData) {
        if (expData.hasOwnProperty(key)) {
            const item = expData[key];

            const expBlocks = $('<div>').addClass('exp__blocks');
            const expBlock = $('<div>').addClass('exp__block');
            const heading = $('<div>').addClass('heading').html(`<h4>${item.name}</h4><span>${item.company}</span>`);
            const descriptionList = $('<ul>').addClass('description');

            item.des.forEach((des) => {
                const descriptionItem = $('<li>').text(des);
                descriptionList.append(descriptionItem);
            });

            const foot = $('<div>').addClass('foot').html(`<p>${item.location}</p><p>${item.time}</p>`);

            const expImg = $('<div>').addClass('exp__img');
            const circle = $('<div>').addClass('circle');
            const techList = $('<ul>');

            item.tech.forEach((tech) => {
                const techItem = $('<li>');
                techItem.html(`<img src="./img/${tech}.svg" alt="${tech}"><span class="label">${tech}</span>`);
                techList.append(techItem);
            });
            if (isFirstItem) {
                expImg.append('<div class="arrow-up"></div>');
                isFirstItem = false; // Set it to false to indicate it's no longer the first item
            }
            expImg.append(techList, circle);
            
            expBlock.append(heading, descriptionList, foot);
            expBlocks.append(expBlock, expImg);
            expContainer.append(expBlocks);
        }
    }
}

$(document).ready(function() {
    generateAboutBlocks(about);
    generateExpBlocks(exp);
});