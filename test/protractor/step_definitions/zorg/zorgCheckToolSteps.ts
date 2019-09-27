import {When, Then} from 'cucumber';
import { ZorgCheckToolMethods } from '../../pageobjects/zorg/zorgCheckToolMethods';

let zorgCheckToolMethods: ZorgCheckToolMethods = new ZorgCheckToolMethods();

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

When(/^I answer 1 question with:$/, async (data) => {
    const dataTable = data.rowsHash();
    await zorgCheckToolMethods.fillInOneQuestionAndClickI(
        dataTable.question1
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

Then(/^Verify that the correct i-texts are shown$/, async () => {
    await zorgCheckToolMethods.checkITexts();
});