"use strict";
const puppeteer = require("puppeteer");
const fs = require("fs");

(async function() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    });
    const page = await browser.newPage();

    //goto one of the eight topics
    await page.goto("http://etesty2.mdcr.cz/Home/Tests/zpz");

    const topics = await page.$eval("#VerticalMenuPanel", div => {
        const topicsCount = div.children[1].children.length;
        const topics = [];
        for (let topicNum = 0; topicNum < topicsCount; topicNum++) {
            const topicHref = div.children[1].children.item(topicNum)
                .children[0];
            const topicLink = `http://etesty2.mdcr.cz${topicHref.getAttribute(
                "href"
            )}`;
            const topicTitle = topicHref.innerHTML;
            topics.push({ link: topicLink, title: topicTitle });
        }
        return topics;
    });

    for (let topicNum = 0; topicNum < topics.length; topicNum++) {
        //iterate all the topics
        const topic = topics[topicNum];

        //navigate to topic url
        await page.goto(topic.link);

        //click button to sort all questions by code
        await page.$eval("#sortRandomButtonID", input => {
            input.click();
        });

        //read the count of questions
        topic.questionCount = await page.$eval("#questionCounterID", span => {
            //inner html of this span is always like "1 z 30"
            return parseInt(span.innerHTML.split(" ")[2]);
        });

        let questions = [],
            questionNum = null;
        while (questionNum != topic.questionCount) {
            //read the number of current question
            questionNum = await page.$eval("#questionCounterID", span => {
                //inner html of this span is always like "1 z 30"
                return parseInt(span.innerHTML.split(" ")[0]);
            });

            const question = await page.$eval(
                "#questionContentID",
                (div, questionNum) => {
                    //check whether question is text/image/video
                    let questionType = null;
                    if (
                        div
                            .querySelector(".image-frame")
                            .querySelector("video") != null
                    ) {
                        questionType = "video";
                    } else if (
                        div.querySelector(".image-frame").querySelector("p")
                    ) {
                        questionType = "text";
                    } else {
                        questionType = "image";
                    }

                    let questionText = null,
                        videoLink = null,
                        imageLinks = null;
                    if (questionType == "video") {
                        questionText = div
                            .querySelectorAll(".question-text")
                            .item(0)
                            .innerHTML.trim();
                        videoLink = `http://etesty2.mdcr.cz${div
                            .querySelector("video")
                            .children[0].getAttribute("src")}`;
                    } else if (questionType == "text") {
                        questionText = div
                            .querySelectorAll(".question-text")
                            .item(1)
                            .innerHTML.trim();
                    } else if (questionType == "image") {
                        questionText = div
                            .querySelectorAll(".question-text")
                            .item(0)
                            .innerHTML.trim();
                        imageCount = div.querySelector(".image-frame").children
                            .length;
                        imageLinks = [...Array(imageCount).keys()].map(
                            imageNum => {
                                return `http://etesty2.mdcr.cz${div
                                    .querySelector(".image-frame")
                                    .children.item(imageNum)
                                    .children[0].getAttribute("src")}`;
                            }
                        );
                    }

                    const answerCount = div.children[2].children.length;

                    return {
                        number: questionNum,
                        text: questionText,
                        type: questionType,
                        videoLink: videoLink,
                        imageLinks: imageLinks,
                        answers: [...Array(answerCount).keys()].map(
                            answerNum => {
                                const text = div.children[2].children
                                    .item(answerNum)
                                    .children[1].innerHTML.trim();
                                const isCorrect = answerNum == 0;
                                return { text, isCorrect };
                            }
                        )
                    };
                },
                questionNum
            );
            questions.push(question);

            //press "next" button to get correct answer - the answer elements will get class "correct" or "incorrect"
            await page.$eval("#nextButtonID", input => {
                input.click();
                input.click();
            });
        }

        //add all crawled questions to the topic
        topic.questions = questions;
    }

    const json = JSON.stringify(topics, null, 4);
    fs.writeFileSync(`./output.json`, json);

    await browser.close();
})();
