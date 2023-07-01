import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/login';

test('test', async ({ page }) => {
  const Login = new LoginPage(page);
   await Login.GotoLoginPage()
   await Login.entersername('test')
   await Login.enterpassword('test')
  await Login.submitusercredentials()

});