import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries:1,
  reporter:[['html'],['list'],["allure-playwright"]],
  use:{
    headless:true,
    baseURL:process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }

})