import {When, Then, Given} from 'cucumber';
import { ZorgCheckToolMethods } from '../../pageobjects/zorg/zorgCheckToolMethods';
import { GenericMethods } from '../../pageobjects/generic/genericMethods';
import { ZorgCheckToolElements } from '../../pageobjects/zorg/zorgCheckToolElements';
import { browser } from 'protractor';

let zorgCheckToolMethods: ZorgCheckToolMethods = new ZorgCheckToolMethods();
let genericMethods: GenericMethods = new GenericMethods();
let zorgCheckToolElements: ZorgCheckToolElements = new ZorgCheckToolElements();

When(/^I answer 8 questions with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInEightQuestions(
        dataTable.question1, 
        dataTable.question2, 
        dataTable.question3, 
        dataTable.question4, 
        dataTable.question5, 
        dataTable.question6, 
        dataTable.question7, 
        dataTable.question8
        );    
});

Given(/^I answer 1 question with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInOneQuestionAndClickNext(
        dataTable.question1
    );
});

Given(/^I answer 2 questions with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInTwoQuestionsAndClickNext(
        dataTable.question1,
        dataTable.question2
    );
});

Given(/^I answer 7 questions with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInSevenQuestionsAndClickNext(
        dataTable.question1,
        dataTable.question2,
        dataTable.question3,
        dataTable.question4,
        dataTable.question5,
        dataTable.question6,
        dataTable.question7
    );
});

Given(/^I answer 4 questions with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInFourQuestionsAndClickNext(
        dataTable.question1,
        dataTable.question2,
        dataTable.question3,
        dataTable.question4
    );
});

Given(/^I answer 5 questions with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInFiveQuestionsAndClickNext(
        dataTable.question1,
        dataTable.question2,
        dataTable.question3,
        dataTable.question4,
        dataTable.question5
    );
});


Then(/^Verify that the advices are correctly shown with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.checkAdvice(
        dataTable.advice1BV,
        dataTable.advice1AVTV,
        dataTable.advice1TV,
        dataTable.advice2BV,
        dataTable.advice2AVTV,
        dataTable.advice2TV
    );
});

Then(/^Verify that the correct i-texts for question two are shown$/, async () => {
    await zorgCheckToolMethods.checkITextsForQuestionTwo();
});

Then(/^Verify that the correct i-texts for question three are shown$/, async () => {
    await zorgCheckToolMethods.checkITextsForQuestionThree();
});

Then(/^Verify that the correct i-texts for question eight are shown$/, async () => {
    await zorgCheckToolMethods.checkITextsForQuestionEight();
});

When(/^I click on the i-button$/, async() => {
    await genericMethods.clickOnElement(zorgCheckToolElements.questionInformationClickElement);
});

When(/^I select answer for question 5 with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInOneQuestion(
        dataTable.question5
    );
});

When(/^I select answer for question 6 with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInOneQuestion(
        dataTable.question6
    );
});    

Then(/^Verify that the correct i-text is shown below selected answer for question five$/, async () => {
    await zorgCheckToolMethods.checkITextBelowAnswerQuestionFive();
});

Then(/^Verify that the correct i-text is shown below selected answer for question six$/, async () => {
    await zorgCheckToolMethods.checkITextBelowAnswerQuestionSix();
});

Given(/^I click on the email dit advies button$/, async() => {
    await browser.sleep(500);
    await genericMethods.clickOnElement(zorgCheckToolElements.emailDitAdviesButtonAdvicePageClickElement);
});

When(/^I enter an emailaddress with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInEmailAddress(
        dataTable.emailaddress
    );
});

Then(/^the correct errormessage is shown$/, async () => {
    await genericMethods.clickOnElement(zorgCheckToolElements.emailDitAdviesOverlayHeaderElement);
    await genericMethods.verifyTextInElement(zorgCheckToolElements.emailDitAdviesOverlayIncorrectEmailMessageElement, zorgCheckToolElements.emailDitAdviesOverlayIncorrectEmailMessageText);
});

Then(/^send email button is not available$/, async () => {
    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.emailDitAdviesOverlayVerstuurMijnAdviesInvalidEmailClickElement, 1000);
});

Then(/^the send email button is available$/, async () => {
    await genericMethods.clickOnElement(zorgCheckToolElements.emailDitAdviesOverlayVerstuurMijnAdviesClickElement);
});

Then(/^the success message is shown$/, async () => {
    await genericMethods.verifyTextContainsInElement(zorgCheckToolElements.emailDitAdviesOverlaySuccessElement, zorgCheckToolElements.emailDitAdviesOverlaySuccessText, 500);
});

When(/^I click on the Kies deze verzekering button$/, async () => {
    await browser.sleep(1000);
    await genericMethods.clickOnElement(zorgCheckToolElements.firstAdviceKiesDezeVerzekeringClickElement);
});

Then(/^I get redirected to zorgwizard on a new tab$/, async () => {
    await browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    await browser.sleep(2000);
});

Then(/^The adviceresult is prefilled in the wizard with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.checkPrefill(
        dataTable.advice1BV,
        dataTable.advice1AVTV,
        dataTable.advice1TV
    );
});
