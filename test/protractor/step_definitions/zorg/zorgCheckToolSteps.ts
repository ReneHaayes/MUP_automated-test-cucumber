import {When, Then, Given} from 'cucumber';
import { browser } from 'protractor';
import { collectievenEnum } from '../../pageobjects/enum/zorgEnum';
import {genericMethods, zorgCheckToolElements, zorgCheckToolMethods, zorgWizardElements} from "@support";

When(/^I answer 9 questions with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInNineQuestions(
        dataTable.question1, 
        dataTable.question2, 
        dataTable.question3, 
        dataTable.question4, 
        dataTable.question5, 
        dataTable.question6, 
        dataTable.question7, 
        dataTable.question8,
        dataTable.question9
        );
});

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
    await browser.sleep(250);
    await zorgCheckToolMethods.checkITextsForQuestionTwo();
});

Then(/^Verify that the correct i-texts for question three are shown$/, async () => {
    await browser.sleep(250);
    await zorgCheckToolMethods.checkITextsForQuestionThree();
});

Then(/^Verify that the correct i-texts for question eight are shown$/, async () => {
    await zorgCheckToolMethods.checkITextsForQuestionEight();
});

When(/^I click on the i-button$/, async() => {
    await browser.sleep(250);
    await genericMethods.clickOnElement(zorgCheckToolElements.questionInformationClickElement);
});

When(/^I answer question 5 with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInOneQuestion(
        dataTable.question5
    );
});

When(/^I answer question 6 with:$/, async (data) => {
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

Then(/^the send email button is available$/, async () => {
    await genericMethods.clickOnElement(zorgCheckToolElements.emailDitAdviesOverlayVerstuurMijnAdviesClickElement);
});

Then(/^the success message is shown$/, async () => {
    await browser.sleep(500);
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

When(/^I click on add collective button$/, async () => {
    await browser.sleep(1000);
    await genericMethods.verifyTextInElement(zorgCheckToolElements.voegCollectiefToeOpenOverlaySpanElement, zorgCheckToolElements.voegCollectiefToeOpenOverlayText);
    await genericMethods.clickOnElement(zorgCheckToolElements.voegCollectiefToeOpenOverlayClickElement);
});

When(/^I search for collective with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.addCollective(
        dataTable.collective
    );
});

Then (/^I expect the correct messages to be shown with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.collectiveCheck(
        dataTable.collective
    );
});

When(/^I apply the collective$/, async () => {
    await genericMethods.clickOnElement(zorgCheckToolElements.voegCollectiefToeButtonClickElement);
});

Then (/^verify that the collective is correctly applied on startpage of the tool$/, async() => {
    await genericMethods.verifyTextInElement(zorgCheckToolElements.voegCollectiefToeOpenOverlaySpanElement, collectievenEnum.OMRINGMEDEWERKERS);
});

When (/^I delete the collective$/, async() => {
    await genericMethods.clickOnElement(zorgCheckToolElements.deleteCollectiveClickElement);
});

Then (/^verify I am able to search for collective again$/, async() => {
    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.voegUwCollectiefToeInputElement, 500);
    await genericMethods.verifyTextInElement(zorgCheckToolElements.additionalInfoTextCollectiveOverlayElement, zorgCheckToolElements.additionalInfoTextCollectiveOverlayText);
    await genericMethods.waitForElementNotVisible(zorgCheckToolElements.additionalInfoThuiszorgCollectiefElement, 500);
    await genericMethods.clickOnElement(zorgCheckToolElements.closeOverlay);
});

Then (/^I am able to enter a correct collective in the second input field$/, async() => {
    await genericMethods.waitForElementIsVisible(zorgCheckToolElements.voegUwCollectiefToeInputElement, 500);
    await genericMethods.verifyTextInElement(zorgCheckToolElements.additionalInfoTextCollectiveOverlayElement, zorgCheckToolElements.additionalInfoTextCollectiveOverlayNoZorgCollectiveText);
    await genericMethods.typeText(zorgCheckToolElements.voegUwCollectiefToeInputElement, collectievenEnum.OMRINGMEDEWERKERS);
    await genericMethods.clickOnElement(zorgCheckToolElements.selectFirstCollectiefElement);
});

Then (/^Verify that the i-tjes are correctly shown for the advices with:$/, async(data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.checkItjes(
        dataTable.advice1BV,
        dataTable.advice1AVTV,
        dataTable.advice1TV,
        dataTable.advice2BV,
        dataTable.advice2AVTV,
        dataTable.advice2TV
    );
});

Then(/^Verify the button points to wijzigen in MijnUnive$/, async () => {
    await genericMethods.verifyTextInElement(zorgCheckToolElements.firstAdviceKiesDezeVerzekeringClickElement, zorgCheckToolElements.adviceWijzigVerzekeringBestaandeKlantButtonText);
    await genericMethods.verifyTextInElement(zorgCheckToolElements.secondAdviceKiesDezeVerzekeringClickElement, zorgCheckToolElements.adviceWijzigVerzekeringBestaandeKlantButtonText);
});

Then (/^verify that the collective is not present on startpage of the tool$/, async() => {
    await genericMethods.verifyTextInElement(zorgCheckToolElements.voegCollectiefToeOpenOverlaySpanElement, zorgCheckToolElements.voegUwCollectiefToeH1OverlayText);
});

When (/^I click on the regel het direct link$/, async() => {
    await genericMethods.clickOnElement(zorgCheckToolElements.directRegelenZorgverzekeringButtonClickElement);
});

Then (/^validate I get redirected to the zorgwizard with the correct code in the URL$/, async() => {
    await browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[1]);
    });
    await browser.sleep(500);
    await genericMethods.verifyUrlContains(zorgCheckToolElements.directRegelenZorgverzekeringURL);
    await genericMethods.verifyTextInElement(zorgWizardElements.zorgverzekeringTitelH1TextElement, zorgWizardElements.zorgverzekeringTitelH1Text);
});
