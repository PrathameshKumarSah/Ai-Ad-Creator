# Brief Description:
AI Ad Creator Application Overview
This is an interactive web application designed to empower users to transform simple product photographs into professional, eye-catching advertisements. By leveraging the Gemini AI model, the tool allows anyone to become an ad designer, generating unique and high-quality visuals in seconds.
* **Core Technology**: The application is built with a modern frontend stack using React and TypeScript for a robust and type-safe user interface. It is styled with Tailwind CSS for rapid, responsive design. The core AI functionality is powered by the @google/genai library, which interfaces directly with Google's Gemini models from the browser.
* **AI-Powered Generation Process**: The ad creation is a streamlined, single-stage AI generation process driven by user input:


1. **Product Upload**: The user begins by uploading an image of the product they wish to advertise.

2. **Ad Configuration**: The user then provides creative direction through a simple interface, selecting the ad's dimensions (e.g., 1:1 Square, 9:16 Story), its artistic style (e.g., Photorealistic, 3D Render, Cartoon), a descriptive prompt for the scene (e.g., "product on a marble pedestal with cinematic lighting"), and optional ad text (e.g., "New Arrival", "50% Off").

3. **Image Generation**: All of these inputs—the product image, dimension, style, scene description, and ad text—are compiled into a detailed multimodal prompt. This prompt is sent to the gemini-2.5-flash-image-preview model, which generates a completely new, cohesive advertisement that seamlessly integrates the product into the desired context.

* **Interactive User Experience**: The UI is designed for an intuitive workflow, featuring a two-column layout where configuration controls are on the left and the resulting ad is displayed on the right. The application provides real-time feedback with loading indicators during the generation process. If an error occurs, a clear, user-friendly message is displayed.

* **Export Options**: Once the user is satisfied with the generated advertisement, they can instantly download the final image as a high-quality PNG file directly from the application's interface.


# Run and deploy:

This contains everything you need to run your app locally.

Live Link: https://ai-ad-creator-using-gemini-nano-ban.vercel.app/

View your app in AI Studio: https://ai.studio/apps/drive/1teDo5AW1m0pjISxQYLqRh-2b3BHoaRuv

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
