import { test, expect } from '@playwright/test'

test('Verify that the Balance reduced on Transfer in TTA Bank', async ({ page }) => {
    // Navigate to URL
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");


    // Click on Sign Up button

    await page.getByRole("button", { name: 'Sign Up' }).click();

    // Fill in the Sign Up Form Details and Click on Create Account Button

    await page.getByPlaceholder('John Doe').fill('Ankur Sharma');
    await page.getByPlaceholder('you@example.com').fill('airtelteting@gmail.com');
    await page.getByRole("textbox", { name: '••••••••' }).fill('Admin@1234');
    await page.getByRole("button", { name: 'Create Account' }).click();

    // Validate the Opening Balance is $50,000.00

    await expect(page.getByRole('heading', { name: '$50,000.00' })).toBeVisible();

    // // Navigate to Transfer Funds Tab
    await page.getByRole("button", { name: 'Transfer Funds' }).click();

    // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234567890
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByRole("textbox", { name: 'e.g. Rent for October' }).fill('EMI');
    await page.getByRole("button", { name: 'Continue' }).click();


    //// Review the Transfer Details and Click on Confirm Transfer Button

    await page.getByRole("button", { name: 'Confirm Transfer' }).click();

    // Navigate to Dashboard and Validate the Balance is reduced to $45,000.00
    await page.getByRole("button", { name: 'Dashboard' }).click();
    await expect(page.getByRole("heading", { name: '$45,000.00' })).toBeVisible();
    await page.pause();

    //LOgout from the Appilcation
    await page.getByRole("button", { name: 'Sign Out' }).click();

});