# Deploy to GitHub Pages

1. Edit `vite.config.js` and set the `base` option to your repository name (e.g. `/my-repo/`).
2. Build the site:
   ```sh
   npm run build
   ```
3. Commit and push the contents of your repository to GitHub.
4. Deploy the `dist` folder to GitHub Pages:
   - If using the `main` branch, you can use the `gh-pages` branch or GitHub Actions to publish `dist`.
   - The simplest way is to use the `gh-pages` npm package:
     ```sh
     npm install --save-dev gh-pages
     npx gh-pages -d dist
     ```
5. In your repository settings on GitHub, set Pages to deploy from the `gh-pages` branch.
6. Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.

## Notes
- Always rebuild after changing the `base` in `vite.config.js`.
- For custom domains, update the `CNAME` file in `dist` before deploying.
