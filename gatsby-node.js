import fetch from 'isomorphic-fetch';

// async function FetchPicturesfromInsta({
//     actions,
//     createNodeId,
//     createContentDigest,
//   }) {
//     const res = await fetch('https://graph.instagram.com/me/media?fields=media_url,caption&access_token=IGQVJYcXZApc3BTSU11a0plM0FfeTVZAaDBwLUxpd2kzRnYtdFM5UkVQNFVWNE5jMl9hdTJURUpSWEt0UERvR3BLVDBMbjh4R3RfM1lwZA1psRFhNeTVnSEEyVzVjSVBPWk9VQS1JLURn');
//     const blob = await res.json();
//     const pics = blob.data;
//     for (const pic of pics) {
//       const nodeMeta = {
//         id: createNodeId(pic.id),
//         parent: null,
//         children: [],
//         internal: {
//           type: 'pic',
//           mediaType: 'application/json',
//           contentDigest: createContentDigest(pic),
//         },
//       };
//       actions.createNode({
//         ...pic,
//         ...nodeMeta,
//       });
//     }
//   }

  // Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/membersArea/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/membersArea/*"
    // Update the page.
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


export async function sourceNodes(params) {
    await Promise.all([FetchPicturesfromInsta(params)]);
  }

 
  
