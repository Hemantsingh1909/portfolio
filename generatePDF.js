const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load the local resume.html file
    const filePath = `file://${path.resolve(__dirname, "public/resume.html")}`;
    await page.goto(filePath, { waitUntil: "networkidle2" });

    // Generate PDF and save it in the public folder
    await page.pdf({
      path: "public/resume.pdf", // Saves the file inside public/
      format: "A4",
      printBackground: true, // Ensures styles are applied
    });

    console.log("✅ PDF successfully created: public/resume.pdf");

    // Close Puppeteer
    await browser.close();
  } catch (error) {
    console.error("❌ Error generating PDF:", error);
  }
})();
